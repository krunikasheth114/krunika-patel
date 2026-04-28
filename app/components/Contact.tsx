"use client";

import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import useFadeIn from "@/hooks/use-fade-in";
import ContactFormModal from "./ContactFormModal";

const Contact = () => {
  const ref = useFadeIn();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="fade-section section-padding"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          <span className="text-primary font-mono text-base sm:text-lg mr-2">
            04.
          </span>
          Get In Touch
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-8 md:mb-10" />

        <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-10">
          I&apos;m currently open to new opportunities. Whether you have a
          project in mind or just want to connect, my inbox is always open.
        </p>

        <button
          type="button"
          onClick={() => setIsContactFormOpen(true)}
          className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 sm:px-8 py-3 rounded-md font-medium hover:opacity-90 transition-all text-sm hover:gap-3"
        >
          <Mail size={18} />
          Say Hello
        </button>

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

      <ContactFormModal
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </section>
  );
};

export default Contact;
