"use client";

import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

const ScrollToTopRocket = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const distanceFromBottom = pageHeight - (scrollTop + viewportHeight);

      setIsVisible(distanceFromBottom < 420 && scrollTop > viewportHeight);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);

    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary text-primary-foreground shadow-2xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:opacity-90 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <Rocket size={22} className="-rotate-45" />
    </button>
  );
};

export default ScrollToTopRocket;
