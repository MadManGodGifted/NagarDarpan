
"use client";

import Navbar from "@/components/layout/Navbar";
import { MOCK_NOTIFICATIONS } from "@/data/mock-projects";
import { Button } from "@/components/ui/button";
import { Bell, ArrowLeft, MoreVertical, CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-2xl mx-auto pt-24 px-6 pb-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="rounded-full bg-white shadow-sm">
              <Link href="/">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <h1 className="text-3xl font-headline font-bold text-primary">Alerts</h1>
          </div>
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center mb-2 px-2">
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Recent Activity</span>
            <Button variant="link" size="sm" className="text-accent p-0 font-bold">Mark all as read</Button>
          </div>

          {MOCK_NOTIFICATIONS.map((notif) => (
            <Card key={notif.id} className={`border-none shadow-md overflow-hidden ${!notif.isRead ? 'ring-2 ring-accent/30 bg-white' : 'bg-white/60 opacity-80'}`}>
              <CardContent className="p-0">
                <Link href={`/projects/${notif.projectId}`} className="flex p-5 gap-4 hover:bg-accent/5 transition-colors">
                  <div className={`p-3 rounded-2xl h-fit ${!notif.isRead ? 'bg-accent text-white' : 'bg-primary/10 text-primary'}`}>
                    <Bell className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between items-start">
                      <p className="font-headline font-bold text-primary">{notif.projectName}</p>
                      <span className="text-[10px] text-muted-foreground font-bold uppercase">{notif.timestamp}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {notif.message}
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <Badge variant="outline" className="text-[10px] font-bold py-0 h-5 border-primary/20 text-primary uppercase">
                        <MapPin className="h-2.5 w-2.5 mr-1" /> Hyperlocal
                      </Badge>
                      {!notif.isRead && (
                        <span className="h-2 w-2 bg-accent rounded-full"></span>
                      )}
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}

          <div className="text-center pt-10">
            <div className="bg-primary/5 inline-block p-10 rounded-full mb-4">
              <CheckCircle2 className="h-12 w-12 text-primary/20" />
            </div>
            <p className="text-muted-foreground font-medium">You're all caught up!</p>
            <p className="text-sm text-muted-foreground/60">No new infrastructure alerts for your location.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
