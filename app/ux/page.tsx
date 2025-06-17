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
        " Delivered high quality frontend work for Philips home appliances (Versuni). Delivering features like Multi country/language support for their e-commerce storefront. Advocated for improvements to product quality, security, responsiveness.",
      tech: [
        "Figma",
        "User Experience",
        "Visual Design",
        "JavaScript",
        "HTML5/SCSS/CSS3",
        "Product quality",
        "Responsiveness",
        "Security",
        "Angular v17+",
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
        "Led a customer-centric UX strategy for Hospitality Equipment Retailer Nisbets. \n Designed home screen icon, various screens and Integrated offline accessible mobile app - progressive web app (PWA).",
      tech: [
        "Figma",
        "Product quality",
        "Responsiveness",
        "JavaScript",
        "HTML5/SCSS/CSS3",
        "Security",
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
        "Contributed with Landing page Animations creation for Baristina app. Web app for Baristina Coffee machine (Versuni).  Working with CI/CD pipelines tools like Gitlab and Git Actions. Familiarity with techniques for optimizing web performances.",
      tech: [
        "Animations",
        "Design",
        "Figma",
        "Interaction Design",
        "Typescript/ JavaScript",
        "RxJs Observables",
        "HTML5/SCSS/CSS3",
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
      title: "BNP Paribas Fortis",
      description:
        "Worked on designing flyouts for client visits using Irise design software. Creation of journey flows and wireframes to help visualise the new journeys Define interaction models/wireframes, user task flows, and UI (user interface) specifications",
      tech: [
        "Irise",
        "Design",
        "Layouts",
        "Interactive design",
        "Flyouts",
        "Client visits",
        "User Experience",
      ],
      image: "./assets/images/Bnpflyer.jpg",
      link: "#",
    },
    {
      title: "Barclays web chat application",
      description:
        "Developed web chat application for Barclays Nomi web chat app using inbuilt responsive framework, CSS, Bootstrap and jQuery. Proficiently, converted the Photoshop designs into HTML prototypes and backend implementation, which supported all devices such as iPhone, iPad, and Android browsers.",
      tech: [
        "Photoshop",
        "Visual Design",
        "Prototyping",
        "Wireframes",
        "User Experience",
        "User Interface Design",
        "Interaction Design",
        "HTML",
        "CSS",
        "Responsive Design",
        "MVC components",
        "Vanilla JavaScript",
        "AngularJs",
        "Bootstrap",
        "jQuery",
        "WCAG",
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
        "Cross-platform",
        "Mobile app",
        "Interactivity",
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
        "Implemented WCAG 2.1 Level AAA for The Body Shop online shopping web and mobile application, ensuring accessibility with assistive technologies. Collaborated with RNIB (Royal National Institute of Blind people) for approval on quality. Achieved that the app is usable and navigable by individuals with disabilities.",
      tech: [
        "Pa11y",
        "VoiceOver",
        "Screen readers",
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
        " I was responsible for producing an enthralling user experience and creating wireframes. Worked closely with the UX team to produce an enthralling user experience for one of our Pet care clients. Resolved browser compatibility issues for IE v7, IE8. Assisted the Dev team in integrating static code with back-end development",
      tech: [
        "Wireframes",
        "Photoshop",
        "User interface design",
        "Animation effects",
        "User experience",
        "Browser compatibility",
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
    // {
    //   title: " Long Tall Sally ecommerce",
    //   description:
    //     "As a web developer I built their web app Angular, NgRx, unit testing frameworks Karma-Jasmine, CSS3 - LESS, Node, UI/UX Grunt for 3 years, ​​Also was helping the team with uDeploy/Jenkins for code deployments. Used Automated Testing tools like Cypress for around 1 year",
    //   tech: [
    //     "Angular",
    //     "NgRx",
    //     "Karma-Jasmine",
    //     "HTML",
    //     "CSS3 - LESS",
    //     " JavaScript",
    //     "Node",
    //     "Grunt",
    //     "uDeploy/Jenkins",
    //     "Cypress",
    //   ],
    //   image: "./assets/images/LongTallSally.png",
    //   link: "https://www.longtallsally.com/",
    // },
    {
      title: "International Bar Association",
      description:
        "Developed web app for this law firm with quality and in time using ReactJs, Redux, NextJs, unit testing frameworks Jest, CSS3 - LESS, Node, Micro-services. Have used Babel, Webpack Dev Server, Chakra, ESLint, Formik, Enzyme, Fetch API for REST API’s. Provided post go-live support with fixing defects and change requests.",
      tech: [
        "Design",
        "Figma",
        "Interaction Design",
        "Typescript/ JavaScript",
        "CSS3 - LESS",
        "Node",
        "Micro-services",
        "Babel",
        "ESLint",
      ],
      image: "./assets/images/ibanet-org.png",
      link: "https://www.ibanet.org/",
    },
  ];

  const skills = [
    "Interaction Design",
    " UX Design and User Interface Design",
    " User Research",
    " Attention to Detail",
    " WCAG Accessibility",
    " Usability Testing and Refinement",
    " Customer Research",
    " Storyboarding ",
    "Animations",
    " Logo Animations",
    "Architectural Visualisations",
    " Prototyping - Figma, Sketch and Axure",
    " Agile - Azure, Confluence, Jira",
    " Adobe creative suite",
    " Design Thinking",
    "Innovation Data-Driven",
    " Design and Research Metrics",
    " Strategic Leadership & UX Advocacy",
    "HTML/CSS",
    " JavaScript/TypeScript",
    " Angular 18+",
    " Bootstrap/Material-UI",
    "REST API",
    "Node.JS",
    "Web Development",
    "Github",
    "Microservices",
    "HTML5/CSS3/SASS",
    "Web Components",
    "Web Performance",
    "Tailwind CSS",
    "Responsive Design",
    "WCAG Accessibility",
    "AWS certification",
    "Visual Studio Code",
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
              Senior UX/UI Expert <br /> Interaction Design <br /> WCAG
              Accessibility <br />
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
              I am a seasoned Senior Front-End Designer with over 15 years of
              experience in web design and front-end technologies. I possess
              extensive expertise in the design and development of web
              applications and comprehensive understanding of modern design
              principles and development practices. As a collaborative team
              player with strong communication skills, a positive mindset, and a
              solution-oriented approach, I excel at bridging the gap between
              design, technical, and non-technical teams to ensure successful
              project outcomes. My passion for creating user-centric designs
              drives me to deliver high-quality, accessible, and engaging web
              experiences. I am committed to continuous learning and staying
              updated with the latest industry trends and technologies to
              deliver innovative solutions that meet the evolving needs of users
              and businesses.
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
