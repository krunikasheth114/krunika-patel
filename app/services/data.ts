export interface Service {
  slug: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  techStack: string[];
}

export const services: Service[] = [
  {
    slug: "ecommerce",
    title: "E-Commerce Development",
    icon: "ShoppingCart",
    description:
      "End-to-end online stores built for performance and conversion. From product catalogs to secure checkout flows, I build shopping experiences that turn visitors into customers.",
    features: [
      "Product catalog & inventory management",
      "Cart, checkout & payment integration (Stripe, Razorpay)",
      "Admin dashboard & order tracking",
      "Auth, reviews, wishlist & loyalty features",
      "SEO-optimized product pages",
      "Mobile-first responsive design",
    ],
    techStack: ["Next.js", "Node.js", "Stripe", "PostgreSQL", "Prisma", "Tailwind CSS"],
  },
  {
    slug: "admin-dashboards",
    title: "Admin Dashboards & Internal Tools",
    icon: "LayoutDashboard",
    description:
      "Data-rich dashboards that turn complex information into clear, actionable insights. I build internal tools that give teams full visibility and control over their operations.",
    features: [
      "Analytics & data visualization (charts, KPIs)",
      "Role-based access control (RBAC)",
      "Real-time updates & notifications",
      "CRUD interfaces & data tables",
      "Subscription & billing management",
      "Export to CSV / PDF",
    ],
    techStack: ["Next.js", "React Query", "Recharts", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    slug: "saas-products",
    title: "SaaS Products",
    icon: "Server",
    description:
      "Full-stack SaaS applications from idea to launch. I handle auth, billing, multi-tenancy, and the core product — so you can focus on your users.",
    features: [
      "Multi-tenant architecture",
      "Auth with OAuth & magic links",
      "Subscription billing (Stripe)",
      "Onboarding flows & user management",
      "API design & third-party integrations",
      "Scalable database schema",
    ],
    techStack: ["Next.js", "NextAuth", "Stripe", "PostgreSQL", "Prisma", "Redis"],
  },
  {
    slug: "social-platforms",
    title: "Social Platforms & Marketplaces",
    icon: "Users",
    description:
      "Community-driven apps and two-sided marketplaces that connect people. I build the real-time features, feeds, and trust systems that keep users engaged.",
    features: [
      "User profiles, follow & friend systems",
      "Real-time feed & notifications",
      "Messaging & chat (WebSockets)",
      "Listings, search & filtering",
      "Reviews, ratings & trust signals",
      "Payment escrow & payout flows",
    ],
    techStack: ["Next.js", "Socket.io", "Node.js", "PostgreSQL", "Redis", "Cloudinary"],
  },
  {
    slug: "portfolio-websites",
    title: "Portfolio Websites",
    icon: "Monitor",
    description:
      "Polished, fast personal sites that make a lasting first impression. Built with smooth animations, clean typography, and a design that reflects your brand.",
    features: [
      "Custom design tailored to your brand",
      "Smooth animations & micro-interactions",
      "Mobile-first & fully responsive",
      "Performance & Core Web Vitals optimized",
      "SEO-ready structure",
      "Contact form & social integrations",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Vercel"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
