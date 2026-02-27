"use client";

import React from "react";
import useFadeIn from "@/hooks/use-fade-in";

const projects = [
  {
    title: "FieldCamp – Field Service Management SaaS",
    stack: ["React", "Next.js", "Node.js", "Prisma", "MongoDB", "Redux", "React Query"],
    built: "Developed client onboarding, product & inventory modules, teams & roles management, and a client portal for service booking and job tracking. Optimized APIs and improved performance using Prisma + MongoDB.",
  },
  {
    title: "Abhiman – Job Marketplace Platform",
    stack: ["React", "Node.js", "Express", "MongoDB", "Zustand"],
    built: "Created admin panel, job lifecycle timeline, and dispute resolution system. Developed scalable REST APIs and implemented efficient global state management.",
  },
  {
    title: "Oppi-Wallet – Crypto Web Application",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    built: "Implemented dynamic forms, external API integrations, real-time chat using sockets, and secure QR-based login flow. Contributed to both admin and user-facing features.",
  },
];

const Projects = () => {
  const ref = useFadeIn();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-section section-padding"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-primary font-mono text-lg mr-2">03.</span>
          Projects
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-10" />

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-6 md:p-8 card-hover hover:border-primary/40 group"
            >
              <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors mb-4">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm mb-5">
                {project.built}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
