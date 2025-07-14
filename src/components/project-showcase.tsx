"use client";

import Image from "next/image";
import { useState } from 'react';
import { Project } from "@/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";

function ProjectDialog({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Details</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="font-headline">{project.name}</DialogTitle>
          <DialogDescription>
            {project.description}
          </DialogDescription>
        </DialogHeader>
        {project.link && (
          <div className="pt-4">
            <Button asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> View Project
              </a>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <Image
                    src={`https://placehold.co/600x400.png`}
                    data-ai-hint="web application"
                    alt={`Placeholder for ${project.name}`}
                    width={600}
                    height={400}
                    className="rounded-t-lg object-cover aspect-[3/2]"
                  />
                  <CardTitle className="font-headline pt-4">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <ProjectDialog project={project} />
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex" />
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
}
