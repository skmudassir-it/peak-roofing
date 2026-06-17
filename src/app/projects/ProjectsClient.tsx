"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBuilding, faStar } from "@fortawesome/free-solid-svg-icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, title: "Suburban Estate", category: "residential", location: "Lake Oswego, OR", description: "Full asphalt shingle replacement on a 4,200 sq ft home. Premium architectural shingles with enhanced ice barrier.", image: "/images/projects/project-1.svg" },
  { id: 2, title: "Downtown Tower", category: "commercial", location: "Portland, OR", description: "TPO roofing system for a 12-story commercial building. Energy-efficient white membrane to reduce cooling costs.", image: "/images/projects/project-2.svg" },
  { id: 3, title: "Heritage Chapel", category: "specialty", location: "Salem, OR", description: "Slate roof restoration on a historic 1890s chapel. Sourced matching slate and preserved original architecture.", image: "/images/projects/project-3.svg" },
  { id: 4, title: "Lakeside Villa", category: "residential", location: "Bend, OR", description: "Standing seam metal roof installation with snow guards. Designed for mountain climate durability.", image: "/images/projects/project-4.svg" },
  { id: 5, title: "Hilltop Mansion", category: "residential", location: "West Linn, OR", description: "Clay tile roof replacement on a Mediterranean-style estate. Custom color matching with imported tiles.", image: "/images/projects/project-5.svg" },
  { id: 6, title: "Modern Complex", category: "commercial", location: "Beaverton, OR", description: "Built-up roofing system for a 6-unit commercial complex. Complete tear-off and new installation in 10 days.", image: "/images/projects/project-6.svg" },
];

const categories = [
  { value: "all", label: "All Projects", icon: faStar },
  { value: "residential", label: "Residential", icon: faHouse },
  { value: "commercial", label: "Commercial", icon: faBuilding },
  { value: "specialty", label: "Specialty", icon: faStar },
];

export default function ProjectsClient() {
  const [tab, setTab] = useState("all");

  const filtered = tab === "all" ? projects : projects.filter((p) => p.category === tab);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="secondary" className="mb-3">Our Work</Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3">
            Completed Projects
          </h1>
          <p className="text-muted-foreground">
            Take a look at some of our recent roofing projects. Every job reflects our commitment to quality and attention to detail.
          </p>
        </div>

        <Tabs value={tab} onValueChange={(v) => setTab(v ?? "all")}>
          <TabsList className="mx-auto mb-10 w-fit">
            {categories.map((c) => (
              <TabsTrigger key={c.value} value={c.value} className="gap-2">
                <FontAwesomeIcon icon={c.icon} className="size-3.5" />
                {c.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={tab} className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <Card key={p.id} className="glass-card overflow-hidden transition-shadow hover:shadow-lg">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="pt-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{p.title}</h3>
                      <Badge variant="secondary" className="text-xs capitalize">{p.category}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{p.location}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-12">No projects found in this category.</p>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
