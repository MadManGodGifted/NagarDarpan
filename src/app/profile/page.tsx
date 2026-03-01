
"use client";

import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Settings, 
  Map, 
  Bell, 
  Globe, 
  LogOut, 
  ArrowRight,
  Shield,
  History,
  Heart
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-2xl mx-auto pt-24 px-6 pb-12">
        <div className="flex flex-col items-center mb-10 text-center">
          <div className="relative mb-4">
            <Avatar className="h-24 w-24 border-4 border-white shadow-xl">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="text-2xl font-headline">JD</AvatarFallback>
            </Avatar>
            <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-accent hover:bg-accent/90 border-2 border-white">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
          <h1 className="text-2xl font-headline font-bold text-primary">John Doe</h1>
          <p className="text-muted-foreground">Civic Explorer • Delhi, IN</p>
        </div>

        <div className="grid gap-6">
          <section className="space-y-3">
            <Label className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-1">Engagement</Label>
            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-md border-none bg-white">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-xl text-primary">
                    <History className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">12 Sites</p>
                    <p className="text-[10px] text-muted-foreground">Visited</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-md border-none bg-white">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-xl text-accent">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">5 Saved</p>
                    <p className="text-[10px] text-muted-foreground">Projects</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-4">
            <Card className="shadow-xl border-none bg-white overflow-hidden rounded-3xl">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-headline font-bold text-primary">App Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Map className="h-5 w-5 text-primary" />
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold">Location Sharing</p>
                      <p className="text-xs text-muted-foreground">Hyper-local project alerts</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-primary" />
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold">Push Notifications</p>
                      <p className="text-xs text-muted-foreground">Updates on nearby sites</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold">Language Preference</p>
                    </div>
                  </div>
                  <Select defaultValue="en">
                    <SelectTrigger className="w-[120px] bg-secondary border-none">
                      <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-none bg-white overflow-hidden rounded-3xl">
              <CardContent className="p-0">
                <Button variant="ghost" className="w-full justify-between h-14 px-6 text-primary hover:bg-accent/5">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5" />
                    <span className="font-bold">Privacy & Transparency Policy</span>
                  </div>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="w-full justify-between h-14 px-6 text-destructive hover:bg-destructive/5 border-t">
                  <div className="flex items-center gap-3">
                    <LogOut className="h-5 w-5" />
                    <span className="font-bold">Log Out</span>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
