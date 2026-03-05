import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ShoppingCart,
  LayoutDashboard,
  Server,
  Users,
  Monitor,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { getServiceBySlug, services } from "@/app/services/data";
import type { Metadata } from "next";

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  LayoutDashboard,
  Server,
  Users,
  Monitor,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} — Krunika Patel`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const Icon = iconMap[service.icon] ?? Monitor;

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 md:px-12 py-24">
        {/* Back link */}
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
            <Icon size={24} />
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">{service.title}</h1>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-10 text-base">
          {service.description}
        </p>

        {/* Features */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-lg mb-5">What&apos;s Included</h2>
          <ul className="space-y-3">
            {service.features.map((feat) => (
              <li key={feat} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0 glow-dot" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <a
          href="mailto:krunikasheth114@gmail.com"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Let&apos;s Work Together
          <ArrowRight size={16} />
        </a>
      </main>
    </div>
  );
}
