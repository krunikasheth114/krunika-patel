"use client";

import React from "react";
import { ShoppingCart, LayoutDashboard, Server, Monitor } from "lucide-react";
import useFadeIn from "@/hooks/use-fade-in";

const services = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description:
      "End-to-end online stores built for performance and conversion.",
    features: [
      "Product catalog & inventory management",
      "Cart, checkout & payment integration",
      "Admin dashboard & order tracking",
      "Auth, reviews & wishlist",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Dashboard",
    description:
      "Data-rich dashboards that turn complex information into clear insights.",
    features: [
      "Analytics & data visualization",
      "Role-based access control",
      "Real-time updates & notifications",
      "Subscription & billing management",
    ],
  },
  {
    icon: Server,
    title: "REST API & Backend",
    description:
      "Robust, scalable server-side systems that power your product.",
    features: [
      "RESTful & GraphQL API design",
      "JWT / OAuth authentication",
      "Database modelling & optimization",
      "Third-party service integrations",
    ],
  },
  {
    icon: Monitor,
    title: "Landing Page",
    description:
      "Fast, responsive pages designed to convert visitors into clients.",
    features: [
      "Pixel-perfect responsive layouts",
      "Performance & Core Web Vitals optimized",
      "SEO-ready structure",
      "Smooth animations & interactions",
    ],
  },
];

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
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-card border border-border rounded-lg p-6 card-hover hover:border-primary/40 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 transition-colors">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-semibold text-base leading-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-1.5">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className="text-muted-foreground text-sm flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0 glow-dot" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
