"use client";

import React from "react";
import useFadeIn from "@/hooks/use-fade-in";

const skillCategories = [
  {
    title: "Frontend",
    skills: "React, Next.js, TypeScript, Tailwind CSS, State Management",
  },
  {
    title: "Backend",
    skills: "Node.js, Express, REST APIs, Authentication, GraphQL",
  },
  {
    title: "Database",
    skills: "MongoDB, PostgreSQL, Prisma, Redis",
  },
  {
    title: "DevOps & Tools",
    skills: "Git, Docker, AWS EC2, CI/CD",
  },
];

const Skills = () => {
  const ref = useFadeIn();

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-primary font-mono text-lg mr-2">02.</span>
          Skills
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-10" />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 stagger-children"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card border border-border rounded-lg p-6 card-hover hover:border-primary/40"
            >
              <h3 className="text-primary font-mono text-sm font-semibold mb-2 uppercase tracking-wider">
                {cat.title}
              </h3>
              <p className="text-foreground text-sm leading-relaxed">
                {cat.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
