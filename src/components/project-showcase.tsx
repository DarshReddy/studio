
"use client";

import Image from "next/image";
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
import { ExternalLink } from "lucide-react";

function ProjectImage({ project }: { project: Project }) {
  const dataAiHint = project.name.toLowerCase();
  
  return (
    <Image
      src={project.imageUrl || `https://placehold.co/600x400.png`}
      alt={`Image for ${project.name}`}
      data-ai-hint={dataAiHint}
      width={600}
      height={400}
      className="rounded-t-lg object-cover aspect-[3/2]"
    />
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
                  <ProjectImage project={project} />
                  <CardTitle className="font-headline pt-4">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  {project.link && (
                    <Button asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> View Project
                      </a>
                    </Button>
                  )}
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
