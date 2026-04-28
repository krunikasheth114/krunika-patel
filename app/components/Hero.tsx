"use client";

import Image from "next/image";
import { useState } from "react";
import { Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const [showDeveloperImage, setShowDeveloperImage] = useState(false);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-padding pt-24 sm:pt-28 md:pt-32"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.55fr)] lg:gap-12 xl:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="hero-animate-1 text-primary font-mono text-xs sm:text-sm mb-3 tracking-widest uppercase">
              Full Stack Developer - MERN
            </p>
            <h1 className="hero-animate-2 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-5 md:mb-6">
              Krunika Patel.
            </h1>
            <p className="hero-animate-3 mx-auto max-w-2xl text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-7 md:mb-10 lg:mx-0">
              I build scalable web applications and high-performance APIs that
              power real-world products. With 4+ years of experience in the
              MERN ecosystem, I focus on clean architecture, optimized
              databases, and production-ready solutions.
            </p>
            <div className="hero-animate-4 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="/Krunika_Patel_MERN.pdf"
                download="Krunika_Patel_MERN.pdf"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 sm:px-6 py-3 rounded-md font-medium hover:opacity-90 transition-all text-sm hover:gap-3"
              >
                <Download
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
                Download Resume
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-animate-5 order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-[330px] lg:max-w-[380px]">
              <div className="absolute -inset-10 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -inset-6 rounded-full bg-amber-500/10 blur-3xl" />
              <button
                type="button"
                aria-label="Toggle developer portrait"
                onClick={() => setShowDeveloperImage((current) => !current)}
                className="hero-portrait-blend group relative block aspect-[3/4] w-full overflow-hidden text-left"
              >
                <Image
                  src="/krunika-profile.jpeg"
                  alt="Krunika Patel"
                  fill
                  priority
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 330px, (min-width: 640px) 280px, 210px"
                  className={`object-cover object-top brightness-110 contrast-105 saturate-110 transition duration-500 ease-out lg:group-hover:scale-105 lg:group-hover:opacity-0 ${
                    showDeveloperImage ? "scale-105 opacity-0" : "opacity-100"
                  }`}
                />
                <Image
                  src="/krunika-developer-wave-hover.png"
                  alt="Anime-style Krunika Patel waving hello with a laptop"
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 330px, (min-width: 640px) 280px, 210px"
                  className={`object-cover object-top transition duration-500 ease-out lg:group-hover:scale-105 lg:group-hover:opacity-100 ${
                    showDeveloperImage
                      ? "scale-105 opacity-100"
                      : "opacity-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
