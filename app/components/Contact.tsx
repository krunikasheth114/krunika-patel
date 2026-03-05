"use client";

import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import useFadeIn from "@/hooks/use-fade-in";

const Contact = () => {
  const ref = useFadeIn();

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-section section-padding"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-primary font-mono text-lg mr-2">04.</span>
          Get In Touch
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-10" />

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
          I'm currently open to new opportunities. Whether you have a project in mind or just want to connect — my inbox is always open.
        </p>

        <a
          href="mailto:krunikasheth114@gmail.com"
          className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:opacity-90 transition-all text-sm hover:gap-3"
        >
          <Mail size={18} />
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-6 mt-10">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={22} />
          </a>
        </div>
      </div>

    </section>
  );
};

export default Contact;
