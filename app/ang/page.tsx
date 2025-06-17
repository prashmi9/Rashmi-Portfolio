"use client";
import { Suspense } from "react";
import React, { useEffect } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  useEffect(() => {
    // Get canvas element using DOM methods
    const canvas = document.getElementById(
      "gradientCanvas"
    ) as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Gradient colors
    const colors = [
      { r: 99, g: 102, b: 241 }, // Indigo
      { r: 236, g: 72, b: 153 }, // Pink
      { r: 79, g: 70, b: 229 }, // Purple
      { r: 16, g: 185, b: 129 }, // Emerald
    ];

    // Gradient blobs
    const blobs = Array.from({ length: 4 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 300 + 200,
      color: colors[i],
      vx: Math.random() * 0.5 - 0.25,
      vy: Math.random() * 0.5 - 0.25,
    }));

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Update blob positions
      blobs.forEach((blob) => {
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off edges
        if (blob.x < 0 || blob.x > width) blob.vx *= -1;
        if (blob.y < 0 || blob.y > height) blob.vy *= -1;

        // Draw gradient blob
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );
        gradient.addColorStop(
          0,
          `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0.8)`
        );
        gradient.addColorStop(
          1,
          `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, 0)`
        );

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const projects = [
    {
      title: "Philips home appliances (Versuni)",
      description:
        "Delivering high quality frontend work for Philips home appliances (Versuni) using SAP Spartacus 6, Angular v17+, NgRx, RxJs Observables, HTML5/SCSS, Typescript, TDD approach using Jasmine & Karma unit testing tool. Delivering features like Multi country/language support for their e-commerce storefront. Integrated with RESTful services. Working with CI/CD pipelines tools like Gitlab and Git Actions. Azure devops for sprint ceremonies. Familiarity with techniques for optimizing web performances.",
      tech: [
        "Angular v17+",
        "SAP Spartacus 6",
        "JavaScript",
        "HTML5/SCSS/CSS3",
        "TDD",
        "NgRx",
        "RxJs Observables",
        "Typescript",
        "Jasmine & Karma",
        "RESTful services",
        "CI/CD pipelines",
        "Gitlab",
        "Git Actions",
        "Azure devops",
        "Web performances",
      ],
      image: "./assets/images/Philips-homeaplaince.png",
      link: "https://www.home-appliances.philips/nl/nl/",
    },
    {
      title: "Nisbets",
      description:
        " Lead the team to developed B2B e-commerce retailer web app for Nisbets using Spartacus 4.3, Angular v14, NgRx, RxJs, HTML5/SCSS, Typescript, TDD approach using Jasmine & Karma unit testing tools for 2 Years. Have used Data management patterns like observables, two-way binding, unidirectional data flow etc. Integrate with RESTful services using API Gateway and asynchronous programming. Integrated offline accessible mobile app - progressive web app (PWA). Was responsible for code reviews and mentoring. Helped with UI/UX requirements. Used CI/CD pipelines tools like Gitlab and Git Actions.",
      tech: [
        "Angular v14",
        "Spartacus 4.3",
        "NgRx",
        "RxJs",
        "HTML5",
        "SCSS",
        "Typescript",
        "Jasmine & Karma",
        "RESTful services",
        "API Gateway",
        "Progressive web app (PWA)",
        "CI/CD pipelines",
        "Gitlab",
        "Git Actions",
      ],
      image: "./assets/images/NisbetsDotCom.png",
      link: "https://www.nisbets.co.uk/homepage",
    },
    {
      title: "Baristina",
      description:
        "Web app for Baristina Coffee machine (Versuni) using SAP Spartacus 6, Angular v17+, NgRx, RxJs Observables, HTML5/SCSS, Typescript, TDD approach using Jasmine & Karma unit testing tool. Delivering features like heavy animation, Multi country/language support for their e-commerce storefront. Integrated with RESTful services. Working with CI/CD pipelines tools like Gitlab and Git Actions. Azure devops for sprint ceremonies. Familiarity with techniques for optimizing web performances.",
      tech: [
        "Angular v17+",
        "SAP Spartacus 6",
        "Typescript/ JavaScript",
        "TDD",
        "NgRx",
        "RxJs Observables",
        "HTML5/SCSS/CSS3",
        "Jasmine & Karma",
        "RESTful services",
        "CI/CD pipelines",
        "Gitlab",
        "Git Actions",
        "Azure devops",
        "Web performances",
      ],
      image: "./assets/images/BaristinaDotCom.png",
      link: "https://www.baristina.com/nl/nl/",
    },
    {
      title: "Barclays web chat application",
      description:
        "Developed web chat application for Barclays Nomi web chat app using inbuilt responsive framework, CSS, Bootstrap and jQuery. Proficiently, converted the Photoshop designs into HTML prototypes and backend implementation, which supported all devices such as iPhone, iPad, and Android browsers.",
      tech: [
        "HTML",
        "CSS",
        "MVC components",
        "Vanilla JavaScript",
        "AngularJs",
        "Bootstrap",
        "jQuery",
        "Photoshop",
        "WCAG",
        "Responsive Design",
      ],
      image: "./assets/images/Barclays-Webchat.png",
      link: "#",
    },
    {
      title: "Auto Insurance App",
      description:
        "Developed cross-platform hybrid mobile app using  Appcelerator Titanium JavaScript Hybrid framework for an Automobile insurance project. Ensured ACCORD compliance with JavaScript Hybrid framework, HTML, CSS, Accessibility, and JSON. Team lead activities including code reviews and mentoring. Developed this application with high-level interactivity on the client side using JavaScript and Ajax.",
      tech: [
        "Appcelerator Titanium  framework",
        "JavaScript Hybrid ",
        "HTML",
        "CSS",
        "Accessibility",
        "JSON",
        "Java",
      ],
      image: "./assets/images/AutoInsurance-homepage.png",
      link: "#",
    },
    {
      title: "The Body Shop",
      description:
        "Worked on web app using Angular, NgRx, CSS3 - LESS, Node, Grunt for 2 years, Implemented WCAG 2.1 Level AAA for The Body Shop online shopping web and mobile application, ensuring accessibility with assistive technologies. Collaborated with RNIB (Royal National Institute of Blind people) for approval on quality. Achieved that the app is usable and navigable by individuals with disabilities.",
      tech: [
        "Angular",
        "RxJs",
        "HTML5",
        "JavaScript",
        "TypeScript",
        "NgRx",
        "Responsive Design",
        "Web Performance",
        "CSS3 - LESS",
        "Node",
        "Grunt",
        "WCAG 2.1 Level AAA",
        "RNIB",
      ],
      image: "./assets/images/TheBosyShop.png",
      link: "https://www.thebodyshop.com/",
    },
    {
      title: "Fritzy's Pet Care pros",
      description:
        "As a web developer I Created web application using HTML, CSS, Vanilla JavaScript and ASP.NET Core Worked closely with the UX team to produce an enthralling user experience for one of our Pet care clients. Resolved browser compatibility issues for IE v7, IE8. Assisted the Dev team in integrating static code with back-end development",
      tech: [
        "HTML",
        "CSS",
        "Vanilla JavaScript",
        "Unit testing",
        "Web performance",
        "UX design",
        "ASP.NET Core",
      ],
      image: "./assets/images/FritzysPetCarePros.png",
      link: "https://fritzyspetcarepros.com/",
    },
    {
      title: " Long Tall Sally ecommerce",
      description:
        "As a web developer I built their web app Angular, NgRx, unit testing frameworks Karma-Jasmine, CSS3 - LESS, Node, UI/UX Grunt for 3 years, ​​Also was helping the team with uDeploy/Jenkins for code deployments. Used Automated Testing tools like Cypress for around 1 year",
      tech: [
        "Angular",
        "NgRx",
        "Karma-Jasmine",
        "HTML",
        "CSS3 - LESS",
        " JavaScript",
        "Node",
        "Grunt",
        "uDeploy/Jenkins",
        "Cypress",
      ],
      image: "./assets/images/LongTallSally.png",
      link: "https://www.longtallsally.com/",
    },
    {
      title: "International Bar Association",
      description:
        "Developed web app for this law firm with quality and in time using ReactJs, Redux, NextJs, unit testing frameworks Jest, CSS3 - LESS, Node, Micro-services. Have used Babel, Webpack Dev Server, Chakra, ESLint, Formik, Enzyme, Fetch API for REST API’s. Provided post go-live support with fixing defects and change requests.",
      tech: [
        "ReactJs",
        "Redux",
        "NextJs",
        "Jest",
        "CSS3 - LESS",
        "Node",
        "Micro-services",
        "Babel",
        "Webpack Dev Server",
        "Chakra",
        "ESLint",
        "Formik",
        "Enzyme",
        "Fetch API",
      ],
      image: "./assets/images/ibanet-org.png",
      link: "https://www.ibanet.org/",
    },
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "Angular 18+",
    "NgRx",
    "RxJs",
    "Redux",
    "REST API",
    "Node.JS",
    "JSON",
    "Docker",
    "Kubernetes",
    "Bootstrap",
    "Accessibility",
    "React",
    "Next.js",
    "Web Development",
    "Git",
    "Github",
    "Gitlabs",
    "Microservices",
    "HTML5/CSS3/SASS",
    "Web Components",
    "Web Performance",
    "MongoDB",
    "ExpressJS",
    "Tailwind CSS",
    "REST APIs",
    "SQL",
    "MySQL",
    "GraphQL",
    "MongoDB",
    "Responsive Design",
    "WCAG Accessibility",
    "AWS certification",
    "Java",
    "Spring",
    "Spring boot",
    "Spring Cloud",
    "jUnit",
    "Visual Studio Code",
    "Eclipse",
    "IntelliJ",
    "SonarQube",
    "Karma",
    "Jasmine",
    "Jest",
    "Playwright",
  ];

  return (
    <main className="min-h-screen">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4"
      >
        Skip to main content
      </a>

      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] md:h-screen flex items-center justify-center from-primary/10 gradient-section"
        aria-label="Introduction"
      >
        <canvas
          id="gradientCanvas"
          className="absolute top-0 left-0 w-full h-full -z-10"
        />
        <div className="backdrop-blur-sm bg-white/10 p-[18px] sm:p-12 rounded-2xl shadow-xl max-w-3xl w-full text-center">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-white bg-gradient-to-r from-primary to-primary/60">
              Rashmi Suralkar
            </h1>
            <p className="text-lg sm:text-sm md:text-3xl text-white mb-8 max-w-2xl mx-auto">
              Senior Frontend Developer <br /> Fullstack Developer <br />{" "}
              Angular Expert <br />
              Node Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="outline" size="lg" asChild className="shadow-md">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 hover:text-white transition-colors shadow-md"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
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
              I am a seasoned Senior Developer with over 15 years of experience
              in web development and Software technologies. Strong expertise in
              software development with proficiency in Node.JS (TS and JS).
              Demonstrative experience in development of web applications with
              thorough knowledge in front-end and backend server-side
              technologies. As a collaborative team player with strong
              communication skills, I excel at bridging technical and
              non-technical teams, ensuring project success and adding
              significant value to every initiative I contribute to.
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
        className="py-16 md:py-20 bg-gradient-to-br from-sky-400 to-violet-600"
        aria-label="Contact"
      >
        <div className="container px-4 mx-auto text-center ">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-white">
            Get In Touch
          </h2>
          <div className="max-w-md mx-auto">
            <p className="text-base md:text-lg text-white mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/rashmisuralkar/"
                target="_blank"
                rel="noopener noreferrer"
              >
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
