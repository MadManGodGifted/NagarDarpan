
"use client";

import { use } from "react";
import { MOCK_PROJECTS } from "@/data/mock-projects";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  ExternalLink, 
  MapPin, 
  IndianRupee,
  MessageCircle,
  ThumbsUp,
  Info,
  Users,
  Bed,
  Zap,
  BookOpen,
  FileText,
  Navigation,
  Car,
  ArrowRightLeft,
  ShieldCheck,
  Accessibility,
  Train,
  Activity,
  Ruler,
  Calendar,
  Clock
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Map string icon names to Lucide components
const IconMap: Record<string, any> = {
  Users, Clock, Bed, Zap, BookOpen, FileText, Navigation, Car, ArrowRightLeft, ShieldCheck, Accessibility, Train, Activity, Ruler, Calendar, IndianRupee
};

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = MOCK_PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Button asChild className="mt-4"><Link href="/">Back to Map</Link></Button>
      </div>
    );
  }

  const projectImage = PlaceHolderImages.find(img => img.id === project.imageKey);

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      {/* Sticky Header for Mobile */}
      <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b px-4 py-3 flex items-center justify-between md:hidden">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <span className="font-bold text-primary truncate max-w-[200px]">{project.name}</span>
        <Button variant="ghost" size="icon">
          <Share2 className="h-5 w-5" />
        </Button>
      </div>

      <div className="max-w-5xl mx-auto md:pt-10 px-0 md:px-6">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between mb-8 pt-10">
          <Button variant="ghost" asChild className="text-primary hover:text-primary/80">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Delhi Map
            </Link>
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <MessageCircle className="mr-2 h-4 w-4" /> Feedback
            </Button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="grid md:grid-cols-12 gap-6 md:gap-10">
          <div className="md:col-span-8 space-y-6">
            <div className="relative aspect-video md:rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={projectImage?.imageUrl || "https://picsum.photos/seed/default/1200/800"}
                alt={project.name}
                fill
                className="object-cover"
                priority
                data-ai-hint={projectImage?.imageHint || "infrastructure project"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:p-10">
                <div className="space-y-2">
                  <Badge className="bg-accent text-white border-none px-3 py-1">{project.status}</Badge>
                  <h1 className="text-3xl md:text-5xl font-headline font-bold text-white leading-tight">
                    {project.name}
                  </h1>
                </div>
              </div>
            </div>

            <div className="px-6 md:px-0 space-y-8">
              <section>
                <h2 className="text-2xl font-headline font-bold mb-4 text-primary">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-headline font-bold mb-6 text-primary">Work Completed</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.workHighlights.map((work, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-primary/10 shadow-sm">
                      <div className="bg-primary/10 p-2 rounded-lg mt-1">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-sm md:text-base font-medium text-foreground/80">{work}</span>
                    </div>
                  ))}
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-headline font-bold mb-6 text-primary">Timeline</h2>
                <div className="relative space-y-6 pl-8">
                  <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-primary/10" />
                  {project.timeline.map((item, i) => (
                    <div key={i} className="relative">
                      <div className={`absolute -left-6.5 top-1.5 h-4 w-4 rounded-full border-2 border-white shadow-sm z-10 
                        ${item.status === 'completed' ? 'bg-primary' : item.status === 'current' ? 'bg-accent animate-pulse' : 'bg-muted'}`} 
                      />
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{item.date}</p>
                        <p className={`font-semibold ${item.status === 'current' ? 'text-accent' : 'text-primary'}`}>{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="md:col-span-4 px-6 md:px-0">
            <div className="sticky top-28 space-y-6">
              {/* Nagar Impact Stats */}
              <Card className="border-2 border-primary/10 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-primary text-primary-foreground">
                  <CardTitle className="text-xl font-headline flex items-center gap-2">
                    <Activity className="h-5 w-5" /> Nagar Impact
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {project.impactStats.map((stat, i) => {
                    const IconComp = IconMap[stat.icon] || Info;
                    return (
                      <div key={i} className="flex items-center justify-between group">
                        <div className="flex items-center gap-3">
                          <div className="bg-secondary p-2 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors">
                            <IconComp className="h-5 w-5" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                        </div>
                        <span className="text-lg font-bold text-primary">{stat.value}</span>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Budget Transparency */}
              <Card className="border-2 border-primary/10 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-accent text-white">
                  <CardTitle className="text-xl font-headline flex items-center gap-2">
                    <IndianRupee className="h-5 w-5" /> Budget Transparency
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs font-bold text-muted-foreground uppercase">Total Investment</p>
                        <p className="text-3xl font-headline font-bold text-primary">{project.budget}</p>
                      </div>
                      <Badge variant="outline" className="border-primary text-primary">Audited</Badge>
                    </div>
                    <Button variant="ghost" size="sm" className="w-full text-xs text-muted-foreground hover:text-primary p-0 h-auto flex items-center justify-center gap-1">
                      View Audit Reports <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* CTAs */}
              <div className="space-y-3">
                <Button className="w-full py-6 rounded-2xl bg-primary hover:bg-primary/90 text-lg font-bold shadow-lg shadow-primary/20">
                  <ThumbsUp className="mr-2 h-5 w-5" /> I Benefited from this
                </Button>
                <Button variant="outline" className="w-full py-6 rounded-2xl border-2 font-bold">
                  <MapPin className="mr-2 h-5 w-5" /> Navigation to Site
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
