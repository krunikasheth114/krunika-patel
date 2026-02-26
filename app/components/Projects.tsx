"use client";

import React from "react";
import { ExternalLink, Github } from "lucide-react";
import useFadeIn from "@/hooks/use-fade-in";

const projects = [
  {
    title: "E-Commerce Platform",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    problem: "Small businesses needed a lightweight, self-hosted store without paying for Shopify.",
    built: "Full-stack store with auth, cart, payment integration, admin dashboard, and order tracking.",
    live: "#",
    github: "#",
  },
  {
    title: "Real-Time Chat App",
    stack: ["React", "Socket.io", "Express", "Redis"],
    problem: "Teams needed a fast internal messaging tool without third-party data concerns.",
    built: "WebSocket-based chat with rooms, typing indicators, file sharing, and message persistence.",
    live: "#",
    github: "#",
  },
  {
    title: "Task Management API",
    stack: ["Node.js", "PostgreSQL", "Docker", "JWT"],
    problem: "Existing task tools didn't integrate well with the company's internal workflow.",
    built: "RESTful API with role-based access, recurring tasks, analytics endpoints, and webhook support.",
    live: "#",
    github: "#",
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
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-2">
                <span className="text-foreground font-medium">Problem:</span>{" "}
                {project.problem}
              </p>
              <p className="text-muted-foreground text-sm mb-5">
                <span className="text-foreground font-medium">Built:</span>{" "}
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
