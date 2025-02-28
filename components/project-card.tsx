"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    link: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          height={400}
          width={600}
          className="object-cover transform hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">{project.title}</h3>

          {project.link !== "#" && (
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} project`}
              >
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          )}
        </div>
        <p className="text-muted-foreground mb-4 flex-grow">
          {project.description}
        </p>
        <div
          className="flex flex-wrap gap-2"
          role="list"
          aria-label="Technologies used"
        >
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline" role="listitem">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
