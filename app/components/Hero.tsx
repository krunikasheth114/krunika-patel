import { Github, Linkedin, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-padding pt-32"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
        {/* Left */}
        <div>
          <p className="hero-animate-1 text-primary font-mono text-sm mb-3 tracking-widest uppercase">
            Full Stack Developer · MERN
          </p>
          <h1 className="hero-animate-2 text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6">
            Krunika Patel.
          </h1>
          <p className="hero-animate-3 text-muted-foreground text-lg max-w-md leading-relaxed mb-10">
            I build robust, scalable web applications and APIs —
            turning complex problems into clean, efficient solutions.
          </p>
          <div className="hero-animate-4 flex flex-wrap items-center gap-4">
            <a
              href="/resume.pdf"
              download="Krunika Patel – Full Stack Developer Resume.pdf"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-all text-sm hover:gap-3"
            >
              <Download size={18} className="transition-transform group-hover:-translate-y-0.5" />
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="hero-animate-4 hidden md:block">
          <div
            className="rounded-xl border border-border p-6 space-y-4 w-52"
            style={{ backgroundColor: "hsl(var(--card))" }}
          >
            <div className="space-y-1">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Projects</p>
              <p className="text-2xl font-bold">3+</p>
            </div>
            <div className="border-t border-border" />
            <div className="space-y-1">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Stack</p>
              <p className="text-sm font-medium">React · Node · MongoDB</p>
            </div>
            <div className="border-t border-border" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary glow-dot" />
              <p className="text-sm font-medium text-primary">Open to connect</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
