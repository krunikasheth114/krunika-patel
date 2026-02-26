"use client";

import React from "react";
import useFadeIn from "@/hooks/use-fade-in";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Mongoose"],
  },
  {
    title: "DevOps / Tools",
    skills: ["Docker", "AWS", "Git", "CI/CD"],
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
              <h3 className="text-primary font-mono text-sm font-semibold mb-4 uppercase tracking-wider">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block glow-dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
