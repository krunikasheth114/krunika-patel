"use client";

import React from "react";
import Link from "next/link";
import {
  ShoppingCart,
  LayoutDashboard,
  Server,
  Users,
  Monitor,
  ArrowRight,
} from "lucide-react";
import useFadeIn from "@/hooks/use-fade-in";
import { services } from "@/app/services/data";

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  LayoutDashboard,
  Server,
  Users,
  Monitor,
};

const Services = () => {
  const ref = useFadeIn();

  return (
    <section id="services" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-primary font-mono text-lg mr-2">02.</span>
          Services
        </h2>
        <div className="w-16 h-0.5 bg-primary mb-10" />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 stagger-children"
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Monitor;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-card border border-border rounded-lg p-6 card-hover hover:border-primary/40 group flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-semibold text-base leading-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  {service.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-mono">
                    {service.features.length} features included
                  </span>
                  <span className="text-primary text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    View details <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
