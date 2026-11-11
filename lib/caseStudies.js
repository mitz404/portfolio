import {
  FaExchangeAlt,
  FaShieldAlt,
  FaStore,
  FaPaw,
  FaTools,
  FaFileAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

/**
 * Client work delivered as a developer at Blaze Commerce (WooCommerce agency).
 * Clients are anonymized on purpose — no names, domains or screenshots.
 * Figures are rounded from project records.
 */
export const caseStudies = [
  {
    id: "store-migration",
    category: "Migration",
    icon: <FaExchangeAlt />,
    client: "Australian gourmet gift-hamper group",
    title: "Five-Store Hosting Migration to Kinsta",
    summary:
      "Moved a group of five WordPress/WooCommerce stores (retail, corporate, charity and content sites) from WP Engine to Kinsta, including DNS, without losing a single order.",
    metric: { value: "0", label: "orders lost across 13k+ migrated" },
    highlights: [
      "Two-leg process per site: a test clone on staging, then a gated go-live cutover with backups, parity probes and visual comparison against the source",
      "Store freeze + delta re-import so order counts matched exactly at cutover",
      "DNS moved to Bunny.net with SSL pre-issued before the switch, and email (DKIM) records kept working",
      "Fixed move-specific issues: page-builder CSS, core version drift, a stray maintenance flag and a font rendering bug (mu-plugin)",
      "Pre-migration security check caught and contained a compromised site before it was moved",
      "Reusable clone scripts (production → staging / live) for each site",
    ],
    stack: ["WordPress", "WooCommerce", "Kinsta", "Bunny DNS", "WP-CLI", "Playwright"],
    year: "2026",
  },
  {
    id: "corporate-store",
    category: "Redesign",
    icon: <FaStore />,
    client: "B2B corporate gifting store",
    title: "Corporate WooCommerce Store Rebuild",
    summary:
      "Rebuilt a high-volume corporate gifting store from Astra + Elementor onto a Blocksy child theme, with a fully reworked checkout for bulk, multi-recipient orders.",
    metric: { value: "13", label: "legacy plugins retired" },
    highlights: [
      "Homepage rebuilt as ACF blocks and patterns the client edits themselves in the block editor",
      "Checkout rebuilt on Fluid Checkout Pro: bulk address form for multi-recipient orders, logo artwork uploads and delivery-date messaging",
      "Build-your-own-hamper popup, wishlist, product, category and cart flyout redesigns",
      "Go-live simulation toolkit and runbook, plus order regression snapshots to prove nothing broke",
      "300+ commits over the project, shipped through Bitbucket Pipelines",
    ],
    stack: ["Blocksy", "ACF", "Fluid Checkout Pro", "FiboSearch", "Bitbucket Pipelines", "Kinsta"],
    year: "2026",
  },
  {
    id: "subscription-store",
    category: "Redesign",
    icon: <FaPaw />,
    client: "Australian subscription pet-food store",
    title: "Subscription Store Redesign & Speed-Up",
    summary:
      "Redesigned the key shopping pages from Figma, sped up the category experience and cleaned out a large wave of spam registrations while the store kept trading.",
    metric: { value: "65%", label: "less JavaScript on category pages" },
    highlights: [
      "Product, checkout, category and filter/sort off-canvas panels rebuilt from Figma",
      "Subscribe & Save made reliable; subscription “add item” flow fixed",
      "Category-page JS cut from 1.9 MB to 660 KB; filter taps went from ~1.5 s to instant",
      "Fixed ~100 SQL errors a day in the logs",
      "Cloudflare Turnstile + a rehearsed purge of 66k fake accounts with zero downtime",
    ],
    stack: ["WooCommerce Subscriptions", "Fluid Checkout Pro", "Figma", "Cloudflare Turnstile"],
    year: "2026",
  },
  {
    id: "malware-scanning",
    category: "Security",
    icon: <FaShieldAlt />,
    client: "Multi-site retail fleet",
    title: "Weekly Malware Scanning & Remediation",
    summary:
      "Built and ran a weekly security scan program across a fleet of WooCommerce sites, with a separate, gated clean-up process and client-ready reports.",
    metric: { value: "~700k", label: "files scanned every week" },
    highlights: [
      "Read-only scan runbook: core/plugin checksums, theme files, database injection, access logs, user enumeration and defacement checks",
      "Separate, approval-gated remediation runbook for anything that needs changing",
      "Found and removed backdoors and webshells, and patched the entry points",
      "Branded per-site and summary PDF reports for the client after every run",
      "Removed a third-party security plugin across 13 hosting environments, with full clean-up",
    ],
    stack: ["Bash", "SSH", "WP-CLI", "Kinsta", "PDF reporting"],
    year: "2026",
  },
  {
    id: "headless-storefront",
    category: "Headless",
    icon: <SiNextdotjs />,
    client: "Gift-hamper retailer",
    title: "Headless Storefront Features",
    summary:
      "Shipped features on a headless WooCommerce storefront built with Next.js and GraphQL, deployed on Vercel.",
    metric: { value: "Next.js", label: "+ GraphQL on Vercel" },
    highlights: [
      "Variable-product support on product pages",
      "Gift-finder quiz layout integration",
      "Product badges and improved login error handling",
      "Fixed the Bitbucket → Vercel CI environment setup",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Apollo GraphQL", "Vercel"],
    year: "2026",
  },
  {
    id: "managed-care",
    category: "Care & Maintenance",
    icon: <FaTools />,
    client: "9+ WooCommerce stores",
    title: "Managed WooCommerce Care",
    summary:
      "Safe monthly updates and fixes for a portfolio of live stores, from bike shops to ammunition retailers with 60k+ orders.",
    metric: { value: "9+", label: "live stores maintained" },
    highlights: [
      "Staged updates: backup gate, live → staging copy, isolation plugin that blocks emails and integrations, tiered tests, then live replay",
      "Automated Ghost Inspector test suites and payment-gateway drift checks",
      "Fixed a gift-card cron that crashed on memory with a bounded-cron mu-plugin, plus an admin redirect loop",
      "Rebuilt a mobile off-canvas menu and moved checkouts to Fluid Checkout Pro",
    ],
    stack: ["WooCommerce", "Kinsta", "Ghost Inspector", "WP-CLI", "mu-plugins"],
    year: "2025–2026",
  },
  {
    id: "static-pages",
    category: "Redesign",
    icon: <FaFileAlt />,
    client: "Australian wholesale supplier",
    title: "Static Pages Retheme",
    summary:
      "Rebuilt 10 content pages in the block editor to match a new store theme, with no page-builder lock-in.",
    metric: { value: "10", label: "pages rebuilt in Gutenberg" },
    highlights: [
      "FAQ with live search, shipping zones, safety data sheets, legal and contact pages",
      "Core blocks + GreenShift with scoped CSS in a Blocksy child theme",
      "Pages generated by build scripts so they can be rebuilt consistently",
    ],
    stack: ["Gutenberg", "GreenShift", "Blocksy", "Contact Form 7", "Python"],
    year: "2026",
  },
  {
    id: "catalogue-ops",
    category: "Care & Maintenance",
    icon: <FaDatabase />,
    client: "Gift retail & bakery stores",
    title: "Catalogue Data & Navigation Ops",
    summary:
      "Bulk product-data and store-structure changes done safely, with dry runs, backups and redirects.",
    metric: { value: "270+", label: "products synced by SKU" },
    highlights: [
      "Synced packing/box-size data between stores by SKU, with gap analysis, conflict reports, dry runs and apply logs",
      "Category restructure into 11 collections with updated homepage tiles, mega menu, footer and 301 redirects",
      "Plugin inventory across 6 live sites to plan clean-ups",
    ],
    stack: ["WP-CLI", "WooCommerce", "Kinsta redirects", "Mega menu"],
    year: "2026",
  },
];

export const workStats = [
  { value: "5", label: "stores migrated with zero lost orders" },
  { value: "66k", label: "spam accounts purged live" },
  { value: "~700k", label: "files security-scanned weekly" },
  { value: "9+", label: "live stores on managed care" },
];
