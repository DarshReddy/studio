
"use client";

import Image from "next/image";
import { useState, useEffect } from 'react';
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
import { ExternalLink, LoaderCircle } from "lucide-react";
import { generateProjectImage } from "@/ai/flows/generate-project-image";
import { Skeleton } from "@/components/ui/skeleton";

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

function ProjectImage({ project }: { project: Project }) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateImage = async () => {
      setIsLoading(true);
      try {
        const result = await generateProjectImage(project.description);
        setImageUrl(result.imageUrl);
      } catch (error) {
        console.error("Failed to generate image:", error);
        // Fallback to placeholder if AI generation fails
        setImageUrl(`https://placehold.co/600x400.png`);
      } finally {
        setIsLoading(false);
      }
    };
    generateImage();
  }, [project.description]);

  if (isLoading || !imageUrl) {
    return (
      <div className="aspect-[3/2] w-full bg-muted rounded-t-lg flex items-center justify-center">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <LoaderCircle className="animate-spin h-8 w-8" />
          <p className="text-sm">Generating image...</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={`AI-generated image for ${project.name}`}
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
