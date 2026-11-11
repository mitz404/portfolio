"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight, BsArrowUpRight, BsWordpress, BsShop, BsGraphUp, BsPlusLg } from "react-icons/bs";
import {
  FaExchangeAlt,
  FaShieldAlt,
  FaStore,
  FaTools,
  FaTachometerAlt,
  FaCode,
  FaClipboardCheck,
  FaFlask,
  FaRocket,
  FaFileAlt,
} from "react-icons/fa";

import { Button } from "@/components/ui/button";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import CTA from "@/components/shared/CTA";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { caseStudies } from "@/lib/caseStudies";

// ---- Core services (each backed by real client work on /work) ---------------
const coreServices = [
  {
    icon: <FaStore />,
    title: "WooCommerce Builds & Redesigns",
    description:
      "Store redesigns from Figma on lightweight block themes, so you can edit pages yourself and stop depending on heavy page builders.",
    deliverables: [
      "Blocksy child themes, ACF blocks & Gutenberg patterns",
      "Product, category, cart and wishlist UX",
      "Page-builder → block-editor rebuilds",
      "Retiring plugins you no longer need",
    ],
    proof: ["corporate-store", "subscription-store", "static-pages"],
  },
  {
    icon: <FaExchangeAlt />,
    title: "Hosting Migrations & DNS",
    description:
      "Moving live stores between hosts (WP Engine, cPanel → Kinsta) with a rehearsed cutover, so no orders, emails or rankings go missing.",
    deliverables: [
      "Test clone, then gated go-live with order parity checks",
      "Freeze + delta re-import at cutover",
      "Bunny.net / Cloudflare DNS, SSL and email records",
      "Post-move visual comparison and fixes",
    ],
    proof: ["store-migration"],
  },
  {
    icon: <FaShieldAlt />,
    title: "Security & Malware Remediation",
    description:
      "Finding and removing malware, closing the hole it came through, and keeping an eye on things with scheduled scans and clear reports.",
    deliverables: [
      "Checksum, database and access-log scanning",
      "Backdoor / webshell removal and hardening",
      "Spam-registration clean-ups and Turnstile",
      "Client-ready PDF security reports",
    ],
    proof: ["malware-scanning", "subscription-store"],
  },
  {
    icon: <FaRocket />,
    title: "Checkout & Performance",
    description:
      "Faster pages and smoother checkouts, which mean fewer abandoned carts. I measure first, then remove what slows the store down.",
    deliverables: [
      "Fluid Checkout Pro setup & customisation",
      "B2B checkout flows (bulk addresses, artwork uploads)",
      "JavaScript and plugin weight reduction",
      "Fixing slow filters, SQL errors and cron issues",
    ],
    proof: ["subscription-store", "corporate-store"],
  },
  {
    icon: <FaTools />,
    title: "Managed WooCommerce Care",
    description:
      "Monthly updates done safely: tested on an isolated staging copy first, then replayed on live, with automated checks before and after.",
    deliverables: [
      "Backup-gated plugin, theme and core updates",
      "Staging isolation (no stray emails or orders)",
      "Ghost Inspector / Playwright regression tests",
      "Bulk catalogue changes with dry runs",
    ],
    proof: ["managed-care", "catalogue-ops"],
  },
  {
    icon: <FaCode />,
    title: "Headless & Custom Development",
    description:
      "Features for headless storefronts and custom code for WordPress, from React components to mu-plugins and CI pipelines.",
    deliverables: [
      "Next.js + GraphQL storefront features",
      "Custom plugins & mu-plugins",
      "Bitbucket Pipelines → Kinsta / Vercel deploys",
      "Scripts and runbooks for repeatable ops",
    ],
    proof: ["headless-storefront", "managed-care"],
  },
];

const caseById = Object.fromEntries(caseStudies.map((c) => [c.id, c]));

// ---- How I work (the same process used on every live-store change) ----------
const process = [
  {
    icon: <FaClipboardCheck />,
    title: "Audit & back up",
    description: "Review the site, take backups and record a baseline (orders, pages, plugins) before touching anything.",
  },
  {
    icon: <FaFlask />,
    title: "Rehearse on staging",
    description: "Do the full change on an isolated copy so emails, payments and integrations can't fire by accident.",
  },
  {
    icon: <FaTachometerAlt />,
    title: "Gated go-live",
    description: "Apply to live in checked steps, with a rollback plan ready, at a time that suits your trading.",
  },
  {
    icon: <FaFileAlt />,
    title: "Verify & report",
    description: "Compare against the baseline, run tests, and send a clear summary of what changed.",
  },
];

// ---- Everything else I can help with ----------------------------------------
const moreServices = [
  {
    icon: <BsWordpress />,
    title: "WordPress",
    items: [
      "Setup, hosting & SSL",
      "Theme customisation",
      "Plugin development & tweaks",
      "Responsive fixes",
      "Site restoration from backups",
      "Login security & 2FA",
    ],
  },
  {
    icon: <BsShop />,
    title: "WooCommerce",
    items: [
      "Store setup & configuration",
      "Payment gateway integration",
      "Shipping & tax setup",
      "Product & inventory management",
      "Subscriptions",
      "Delivery-date & gift options",
    ],
  },
  {
    icon: <BsGraphUp />,
    title: "SEO & Tracking",
    items: [
      "On-page SEO",
      "Technical SEO fixes",
      "301 redirects & site structure",
      "Keyword research",
      "Analytics reporting",
    ],
  },
  {
    icon: <BsPlusLg />,
    title: "Other",
    items: [
      "Frontend & backend bug fixes",
      "API integrations",
      "Contact forms",
      "Backup monitoring",
      "Figma to WordPress",
    ],
  },
];

const Services = () => {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <Section variant="accent" className="section-sm pt-28">
        <SectionHeading
          eyebrow="What I offer"
          title={
            <>
              WooCommerce work, <span className="text-accent">done safely</span>
            </>
          }
          subtitle="I build, move, secure and look after WordPress and WooCommerce stores. Every service below comes from work I've done on live client stores."
        />
        <Reveal delay={0.1} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button size="lg">
              Get Started
              <BsArrowDownRight />
            </Button>
          </Link>
          <Link href="/work">
            <Button variant="outline" size="lg">
              See Case Studies
            </Button>
          </Link>
        </Reveal>
      </Section>

      {/* ===================== CORE SERVICES ===================== */}
      <Section>
        <SectionHeading
          eyebrow="Core services"
          title="Where I can help most"
          subtitle="Each one links to a real project, so you can see how it went."
          className="mb-14"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
        >
          {coreServices.map((service, i) => (
            <CoreServiceCard key={service.title} service={service} num={i + 1} />
          ))}
        </motion.div>
      </Section>

      {/* ===================== PROCESS ===================== */}
      <Section variant="surface">
        <SectionHeading
          eyebrow="How I work"
          title="Every change is rehearsed first"
          subtitle="Your store keeps taking orders while I work on it. This is the process I use for migrations, redesigns and updates."
          className="mb-14"
        />
        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Connector line on desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-accent/0 via-accent/40 to-accent/0 lg:block"
          />
          {process.map((step, i) => (
            <motion.li key={step.title} variants={staggerItem} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-primary text-xl text-accent shadow-glow">
                {step.icon}
              </span>
              <span className="mb-1 font-mono text-xs uppercase tracking-widest text-white/40">
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="max-w-xs text-sm leading-relaxed text-white/60">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* ===================== MORE SERVICES ===================== */}
      <Section>
        <SectionHeading
          eyebrow="And more"
          title="Also available"
          subtitle="Smaller jobs and one-off fixes across WordPress, WooCommerce and SEO."
          className="mb-14"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {moreServices.map((group) => (
            <motion.div key={group.title} variants={staggerItem} className="card p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-lg text-accent">
                  {group.icon}
                </span>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ===================== CTA ===================== */}
      <CTA
        title="Have a store that needs work?"
        description="Tell me what's going on, whether that's a migration, a redesign, a hack or slow pages, and I'll suggest a plan."
        primary={{ label: "Get In Touch", href: "/contact" }}
        secondary={{ label: "View Case Studies", href: "/work" }}
      />
    </>
  );
};

// ---- CoreServiceCard --------------------------------------------------------
const CoreServiceCard = ({ service, num }) => (
  <motion.div variants={staggerItem} className="card card-interactive group flex flex-col p-8">
    <div className="mb-6 flex items-center justify-between">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-primary">
        {service.icon}
      </span>
      <span className="font-mono text-3xl font-bold text-transparent text-outline transition-all duration-500 group-hover:text-outline-hover">
        {String(num).padStart(2, "0")}
      </span>
    </div>

    <h3 className="mb-3 text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-accent">
      {service.title}
    </h3>
    <p className="mb-6 text-sm leading-relaxed text-white/60">{service.description}</p>

    <ul className="mb-6 space-y-2">
      {service.deliverables.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-white/70">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>

    <div className="mt-auto border-t border-line pt-5">
      <p className="mb-3 font-mono text-xs uppercase tracking-wider text-white/40">Proven on</p>
      <div className="flex flex-col gap-2">
        {service.proof.map((id) => (
          <Link
            key={id}
            href={`/work#${id}`}
            className="group/link inline-flex items-center justify-between gap-3 text-sm text-white/70 transition-colors hover:text-accent"
          >
            {caseById[id].title}
            <BsArrowUpRight className="flex-shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Services;
