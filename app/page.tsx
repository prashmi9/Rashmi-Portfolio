import { Suspense } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description:
        "A comprehensive dashboard for managing online stores with real-time analytics and inventory management.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Social Media Platform",
      description:
        "A modern social networking application with real-time messaging and content sharing capabilities.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2374&auto=format&fit=crop",
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management tool with drag-and-drop interface and team collaboration features.",
      tech: ["React", "Redux", "Firebase", "Material-UI"],
      image:
        "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2376&auto=format&fit=crop",
      link: "#",
    },
  ];

  const skills = [
    "Angular 17+",
    "NgRx",
    "RxJs",
    "Redux",
    "REST API",
    "JavaScript",
    "TypeScript",
    "Bootstrap",
    "Accessibility",
    "React",
    "Next.js",
    "Web Development",
    "Github",
    "Microservices",
    "HTML5/CSS3/SASS",
    "Web Components",
    "Web Performance",
    "Node.JS",
    "ExpressJS",
    "Tailwind CSS",
    "Git",
    "REST APIs",
    "GraphQL",
    "Responsive Design",
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] md:h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-background"
        aria-label="Introduction"
      >
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Rashmi Suralkar
          </h1>
          <p className="text-lg sm:text-sm md:text-3xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Senior Frontend Developer | Angular Expert | React Enthusiast
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="default" size="lg" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 md:py-20 bg-background"
        aria-label="About Me"
      >
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              I am a seasoned Senior Front-End Developer with over 15 years of
              experience in web development and front-end technologies. Known
              for my deep expertise in core web and browser concepts, I
              consistently deliver high-quality, user-centric solutions. As a
              collaborative team player with strong communication skills, I
              excel at bridging technical and non-technical teams, ensuring
              project success and adding significant value to every initiative I
              contribute to. I am available to join immediately and bring value
              to your team from day one.
            </p>
            <div className="flex gap-4 justify-center mt-8">
              <Button
                variant="outline"
                size="icon"
                aria-label="Visit GitHub Profile"
                asChild
              >
                <Link
                  href="https://github.com/prashmi9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Visit LinkedIn Profile"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/rashmisuralkar/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                aria-label="Send Email"
                asChild
              >
                <Link href="mailto:contact@example.com">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 md:py-20 bg-secondary/30"
        aria-label="Skills"
      >
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm py-2 px-4"
                role="listitem"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 md:py-20 bg-background"
        aria-label="Projects"
      >
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Suspense fallback={<ProjectsSkeleton />}>
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-20 bg-primary/5"
        aria-label="Contact"
      >
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-12">Get In Touch</h2>
          <div className="max-w-md mx-auto">
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="mailto:contact@example.com">
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                Send Message
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectsSkeleton() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-muted h-48 rounded-t-lg" />
          <div className="p-6 space-y-4">
            <div className="h-6 bg-muted rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
