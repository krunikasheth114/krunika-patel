"use client";

import { useEffect, useRef, useState } from "react";

const PACKAGES = [
  { name: "krunika-patel", version: "latest" },
  { name: "problem-solver", version: "3.7.2" },
  { name: "full-stack-dev", version: "2.1.0" },
  { name: "@krunika/react-architect", version: "1.4.0" },
  { name: "node-express-api", version: "4.0.1" },
  { name: "mongodb-wizard", version: "2.8.3" },
  { name: "docker-deployer", version: "1.2.0" },
  { name: "open-to-opportunities", version: "latest" },
];

// Delays between each line reveal (ms after the "installing" phase starts)
const LINE_DELAYS = [100, 380, 600, 880, 1150, 1380, 1600, 1850];

export default function InstallScreen() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<
    "typing" | "installing" | "summary" | "launching" | "fading" | "done"
  >("typing");
  const [visibleLines, setVisibleLines] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  function clearAllTimers() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }

  function proceed() {
    clearAllTimers();
    sessionStorage.setItem("install-seen", "1");
    setIsFading(true);
    const t = setTimeout(() => setIsDone(true), 700);
    timers.current.push(t);
  }

  useEffect(() => {
    if (sessionStorage.getItem("install-seen")) {
      setIsDone(true);
      setMounted(true);
      return;
    }
    sessionStorage.setItem("install-seen", "1");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const schedule = (fn: () => void, delay: number) => {
      const t = setTimeout(fn, delay);
      timers.current.push(t);
    };

    // t=300ms — begin installing phase
    schedule(() => setPhase("installing"), 300);

    // Reveal lines one by one
    LINE_DELAYS.forEach((delay, i) => {
      schedule(() => setVisibleLines(i + 1), 300 + delay);
    });

    // t=3000ms — summary
    schedule(() => setPhase("summary"), 3000);

    // t=3600ms — launching
    schedule(() => setPhase("launching"), 3600);

    window.addEventListener("keydown", proceed);
    return () => {
      clearAllTimers();
      window.removeEventListener("keydown", proceed);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  if (!mounted || isDone) return null;

  const showSkipHint = phase !== "typing" && phase !== "launching" && phase !== "fading";

  return (
    <div
      className="fixed inset-0 z-[9999] cursor-pointer flex items-center justify-center bg-background"
      style={{
        opacity: isFading ? 0 : 1,
        transition: isFading ? "opacity 0.7s ease" : undefined,
      }}
      onClick={proceed}
    >
      {/* Terminal card */}
      <div
        className="w-full max-w-2xl mx-4 rounded-xl overflow-hidden border border-border shadow-2xl"
        style={{ backgroundColor: "hsl(var(--card))" }}
      >
        {/* Chrome bar */}
        <div
          className="flex items-center gap-2 px-4 py-3 border-b border-border"
          style={{ backgroundColor: "hsl(220 18% 8%)" }}
        >
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span
            className="ml-auto text-xs"
            style={{ color: "hsl(var(--muted-foreground))", fontFamily: "JetBrains Mono, monospace" }}
          >
            bash
          </span>
        </div>

        {/* Terminal body */}
        <div className="p-6 space-y-1" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.875rem" }}>
          {/* Prompt line */}
          <div className="flex items-center gap-2">
            <span style={{ color: "hsl(var(--primary))" }}>$</span>
            <span style={{ color: "hsl(var(--foreground))" }}>
              npm install krunika-patel@latest
            </span>
            {phase === "typing" && (
              <span className="typing-cursor">&nbsp;</span>
            )}
          </div>

          {/* npm warn line */}
          {phase !== "typing" && (
            <div style={{ color: "hsl(var(--muted-foreground))", fontSize: "0.8rem" }}>
              npm warn idealTree buildDeps
            </div>
          )}

          {/* Package lines */}
          {PACKAGES.slice(0, visibleLines).map((pkg, i) => (
            <div key={pkg.name} className="flex items-center gap-2 npm-line">
              <span className="npm-check" style={{ color: "hsl(var(--primary))" }}>
                ✓
              </span>
              <span style={{ color: "hsl(var(--foreground))" }}>{pkg.name}</span>
              <span style={{ color: "hsl(var(--muted-foreground))" }}>@{pkg.version}</span>
            </div>
          ))}

          {/* Summary line */}
          {(phase === "summary" || phase === "launching" || phase === "fading") && (
            <div className="pt-2 npm-line" style={{ color: "hsl(var(--muted-foreground))" }}>
              added 7 packages, and audited 312 packages in 2.3s
            </div>
          )}

          {/* Launch line */}
          {(phase === "launching" || phase === "fading") && (
            <div className="npm-line" style={{ color: "hsl(var(--primary))", fontWeight: 500 }}>
              → Launching portfolio...
            </div>
          )}

          {/* Continue button */}
          {(phase === "launching" || phase === "fading") && (
            <div className="pt-4 npm-line flex justify-end">
              <button
                onClick={(e) => { e.stopPropagation(); proceed(); }}
                className="px-5 py-2 rounded border text-sm font-medium transition-colors"
                style={{
                  borderColor: "hsl(var(--primary))",
                  color: "hsl(var(--primary))",
                  backgroundColor: "transparent",
                  fontFamily: "JetBrains Mono, monospace",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "hsl(var(--primary) / 0.1)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                → continue
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Skip hint */}
      <div
        className="fixed bottom-6 right-6 text-xs transition-opacity duration-300"
        style={{
          color: "hsl(var(--muted-foreground))",
          fontFamily: "JetBrains Mono, monospace",
          opacity: showSkipHint ? 1 : 0,
        }}
      >
        press any key or click to skip
      </div>
    </div>
  );
}
