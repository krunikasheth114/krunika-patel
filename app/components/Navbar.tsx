"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = ["About", /* "Services", */ "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-12 py-3 md:py-4">
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </span>
          <span className="font-mono font-bold text-lg leading-none">
            <span className="text-muted-foreground">$ </span>
            <span className="text-primary typing-cursor">krunika.patel</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
          >
            {mounted ? (theme === "dark" ? <Sun size={16} /> : <Moon size={16} />) : null}
          </button>
          <a
            href="#contact"
            className="text-xs md:text-sm font-medium whitespace-nowrap bg-primary text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

