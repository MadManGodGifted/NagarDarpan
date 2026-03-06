
"use client";

import Navbar from "@/components/layout/Navbar";
import CivicMap from "@/components/map/CivicMap";
import { Button } from "@/components/ui/button";
import { Info, Navigation, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Home() {
  const { toast } = useToast();
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateGeoFence = () => {
    setIsSimulating(true);
    setTimeout(() => {
      toast({
        title: "Proximity Alert!",
        description: "You are near AIIMS New Wing. Tap to see impact stats.",
        action: (
          <Button size="sm" variant="outline" className="bg-accent text-white border-none">
            Learn More
          </Button>
        ),
      });
      setIsSimulating(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mt-16 relative">
        <CivicMap />
        
        {/* Mobile-centric bottom sheet simulation trigger */}
        <div className="fixed bottom-24 right-6 md:right-10 flex flex-col gap-3 z-30">
          <Button 
            onClick={simulateGeoFence}
            disabled={isSimulating}
            className="rounded-full h-14 w-14 md:h-auto md:w-auto md:px-6 shadow-xl bg-accent hover:bg-accent/90 text-white font-bold"
          >
            {isSimulating ? (
              <Navigation className="animate-spin h-6 w-6" />
            ) : (
              <span className="flex items-center gap-2">
                <Bell className="h-6 w-6" />
                <span className="hidden md:inline">Simulate Nearby</span>
              </span>
            )}
          </Button>
        </div>

        {/* Legend / Quick Stats */}
        <div className="hidden lg:block absolute bottom-8 left-8 z-30 w-72">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 space-y-4">
            <h3 className="font-headline font-bold text-primary flex items-center gap-2">
              <Info className="h-5 w-5 text-accent" /> Nagar Impact Dashboard
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Active Projects</span>
                <span className="font-bold text-primary">12</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Budget Transparency</span>
                <span className="font-bold text-green-600">Verified</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Last Audit</span>
                <span className="font-bold text-primary">Feb 2025</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
