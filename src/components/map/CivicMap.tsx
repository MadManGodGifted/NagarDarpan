
"use client";

import { useState } from "react";
import { MOCK_PROJECTS } from "@/data/mock-projects";
import { CivicProject } from "@/types";
import { MapPin, Info, ArrowRight, ExternalLink, Bell } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function CivicMap() {
  const [selectedProject, setSelectedProject] = useState<CivicProject | null>(null);

  // Simple relative positions for Delhi simulation
  const markers = [
    { id: "aiims-wing", top: "70%", left: "45%" },
    { id: "du-library", top: "25%", left: "55%" },
    { id: "signature-bridge", top: "15%", left: "70%" },
    { id: "metro-upgrade", top: "50%", left: "52%" },
    { id: "flyover-repair", top: "65%", left: "30%" },
  ];

  const getMarkerProject = (id: string) => MOCK_PROJECTS.find(p => p.id === id);

  return (
    <div className="relative w-full h-[calc(100vh-64px)] bg-[#DFEDEF] overflow-hidden">
      {/* Mock Map Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.83L6.153 51.135l-.83-.83L54.627 0zm-5.632 0l.83.83L.15 49.324l-.83-.83L48.995 0zm0 5.632l.83.83L1.505 54.956l-.83-.83L48.995 5.632zM0 0l.83.83L59.17 59.17l-.83-.83L0 0zm0 5.632l.83.83L53.538 59.17l-.83-.83L0 5.632zm5.632 0l.83.83L59.17 53.538l-.83-.83L5.632 5.632z' fill='%23006D77' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '120px'
        }}
      />
      
      {/* Visual Centers of Delhi */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-primary/10 select-none">
        <svg viewBox="0 0 100 100" width="400" height="400" className="opacity-10">
          <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="currentColor" />
        </svg>
        <p className="text-4xl font-headline font-bold text-center uppercase tracking-tighter opacity-20">Nagar Darpan</p>
      </div>

      {/* Project Markers */}
      {markers.map((marker) => {
        const project = getMarkerProject(marker.id);
        if (!project) return null;
        const isActive = selectedProject?.id === project.id;

        return (
          <button
            key={marker.id}
            className={`absolute transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 z-10
              ${isActive ? 'scale-125' : 'hover:scale-110'}`}
            style={{ top: marker.top, left: marker.left }}
            onClick={() => setSelectedProject(project)}
          >
            <div className={`p-2 rounded-full shadow-lg ${isActive ? 'bg-accent text-white' : 'bg-primary text-white'}`}>
              <MapPin className="h-6 w-6" />
            </div>
            <div className={`mt-1 whitespace-nowrap bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded border border-primary/20 text-xs font-semibold text-primary shadow-sm
              ${isActive ? 'bg-accent text-white border-accent' : ''}`}>
              {project.name}
            </div>
          </button>
        );
      })}

      {/* Selected Project Card Overlay */}
      {selectedProject && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-20 animate-in slide-in-from-bottom-4 duration-300">
          <Card className="shadow-2xl border-2 border-primary/10 overflow-hidden">
            <CardHeader className="p-0 relative h-32">
              <Image 
                src={PlaceHolderImages.find(img => img.id === selectedProject.imageKey)?.imageUrl || "https://picsum.photos/seed/default/600/400"}
                alt={selectedProject.name}
                fill
                className="object-cover"
                data-ai-hint={PlaceHolderImages.find(img => img.id === selectedProject.imageKey)?.imageHint || "public building"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute top-4 right-4">
                <Badge variant={selectedProject.status === 'Completed' ? 'default' : 'secondary'} className="bg-accent text-white border-none">
                  {selectedProject.status}
                </Badge>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 left-4 text-white hover:bg-white/20"
                onClick={() => setSelectedProject(null)}
              >
                <Info className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="pt-4 px-5 pb-2">
              <CardTitle className="text-xl font-headline mb-1">{selectedProject.name}</CardTitle>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {selectedProject.description}
              </p>
              
              <div className="grid grid-cols-3 gap-2">
                {selectedProject.impactStats.slice(0, 3).map((stat, i) => (
                  <div key={i} className="bg-secondary/50 rounded-lg p-2 text-center">
                    <p className="text-xs font-bold text-primary">{stat.value}</p>
                    <p className="text-[10px] text-muted-foreground leading-none">{stat.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="px-5 pb-5 pt-2 flex gap-2">
              <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                <Link href={`/projects/${selectedProject.id}`}>
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={selectedProject.location.address} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      {/* Map Controls */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
        <Button variant="secondary" size="icon" className="bg-white/80 backdrop-blur-sm shadow-md">
          <Badge className="absolute -top-2 -right-2 px-1 py-0 h-4 bg-accent">2</Badge>
          <Bell className="h-4 w-4 text-primary" />
        </Button>
      </div>

      {/* Floating Action Area */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-md border border-white flex items-center gap-3">
          <div className="bg-green-100 text-green-700 p-2 rounded-full">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Active Zone</p>
            <p className="text-sm font-semibold text-primary">North Delhi Campus</p>
          </div>
        </div>
      </div>
    </div>
  );
}
