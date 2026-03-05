"use client";

import { useState, useEffect, useRef } from "react";
import { Sun, Moon, MoreVertical } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = ["About", /* "Services", */ "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-12 py-3 md:py-4">
        {/* Logo */}
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

        {/* Desktop nav links */}
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

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
          >
            {mounted ? (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />) : null}
          </button>
          <a
            href="#contact"
            className="text-sm font-medium whitespace-nowrap bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile three-dot menu */}
        <div className="relative md:hidden" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
          >
            <MoreVertical size={18} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-full mt-2 w-44 rounded-lg border border-border bg-background/95 backdrop-blur-md shadow-lg overflow-hidden">
              {/* Theme toggle row */}
              <button
                onClick={() => { toggleTheme(); setMenuOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted/40 transition-colors"
              >
                {mounted ? (
                  theme === "dark" ? (
                    <><Sun size={16} /><span>Light mode</span></>
                  ) : (
                    <><Moon size={16} /><span>Dark mode</span></>
                  )
                ) : <span>Toggle theme</span>}
              </button>
              <div className="border-t border-border" />
              {/* Hire Me link */}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-primary hover:bg-muted/40 transition-colors"
              >
                Hire Me
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
