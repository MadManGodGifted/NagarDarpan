
"use client";

import Link from "next/link";
import { MapPin, User, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground h-16 px-4 md:px-6 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-accent p-1.5 rounded-lg rotate-12 group-hover:rotate-0 transition-transform">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <span className="font-headline text-xl font-bold tracking-tight">NagarDarpan</span>
        </Link>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hidden sm:flex">
          <Search className="h-5 w-5" />
        </Button>
        <Link href="/notifications">
          <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 bg-accent rounded-full border border-primary"></span>
          </Button>
        </Link>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0 h-10 w-10 rounded-full hover:ring-2 hover:ring-accent transition-all">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-secondary text-primary">JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile" className="cursor-pointer">Profile Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Saved Projects</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">My Feedback</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive cursor-pointer">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
