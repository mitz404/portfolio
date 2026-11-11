"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsEye, BsCode, BsCalendar3, BsGithub, BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import { FaWordpress, FaLaravel, FaCss3Alt } from "react-icons/fa";
import { SiElementor, SiMysql, SiBootstrap, SiJquery } from "react-icons/si";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import CTA from "@/components/shared/CTA";
import WorkSliderButtons from "@/components/WorkSliderButtons";
import { caseStudies, workStats } from "@/lib/caseStudies";
import { staggerContainer, staggerItem } from "@/lib/motion";

// ---- Earlier freelance projects ---------------------------------------------
const projects = [
  {
    num: "01",
    category: "Full-Stack Development",
    title: "Clinic Management System",
    description:
      "Comprehensive automated clinic management system built with Laravel PHP framework. Features include patient management, appointment scheduling, medical records, billing system, and reporting dashboard.",
    features: [
      "Patient management system",
      "Appointment scheduling",
      "Medical records database",
      "Billing and invoicing",
      "Analytics dashboard",
    ],
    stack: [
      { name: "Laravel", icon: <FaLaravel /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "jQuery", icon: <SiJquery /> },
    ],
    image: "/assets/work/1.png",
    live: "",
    github: "",
    duration: "6 months",
    client: "Medical Clinic",
    year: "2022",
  },
  {
    num: "02",
    category: "WordPress Development",
    title: "Corporate Website from Figma",
    description:
      "Professional corporate website development from Figma design mockups using Elementor page builder. Implemented pixel-perfect design with custom animations, contact forms, and content management system.",
    features: [
      "Pixel-perfect Figma implementation",
      "Custom animations and interactions",
      "Contact form integration",
      "Content management system",
      "Multi-page architecture",
      "Plugin Customization",
    ],
    stack: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Elementor", icon: <SiElementor /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "jQuery", icon: <SiJquery /> },
    ],
    image: "/assets/work/2.png",
    live: "",
    github: "",
    duration: "3 weeks",
    client: "Upwork Client",
    year: "2025",
  },
  {
    num: "03",
    category: "WordPress Redesign",
    title: "Blog Redesign",
    description:
      "A complete redesign of the website's blog section, including the Header, Footer, Blog Listing Page, and Single Blog Page. The goal was to deliver a modern, responsive, and user-friendly interface that improves readability, navigation, and overall engagement.",
    features: [
      "Custom WordPress theme customization",
      "Redesigned header and footer for better branding",
      "Responsive blog listing and single post layouts",
      "Enhanced SEO structure for better visibility",
    ],
    stack: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Elementor", icon: <SiElementor /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "jQuery", icon: <SiJquery /> },
    ],
    image: "/assets/work/3.png",
    live: "",
    github: "",
    duration: "2 weeks",
    client: "Upwork Client",
    year: "2025",
  },
  {
    num: "04",
    category: "WordPress Redesign",
    title: "Home Page & Blog Redesign",
    description:
      "A complete redesign of the website's homepage and blog section, including the Header, Footer, Blog Listing Page, and Single Blog Page. The goal was to deliver a modern, responsive, and user-friendly interface that improves readability, navigation, and overall engagement.",
    features: [
      "Custom WordPress theme customization",
      "Redesigned header and footer for better branding",
      "Redesigned homepage and add motion effects",
      "Responsive blog listing and single post layouts",
      "Enhanced SEO structure for better visibility",
    ],
    stack: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Elementor", icon: <SiElementor /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "jQuery", icon: <SiJquery /> },
    ],
    image: "/assets/work/4.png",
    live: "",
    github: "",
    duration: "1 week",
    client: "Upwork Client",
    year: "2025",
  },
  {
    num: "05",
    category: "WordPress Development",
    title: "Develop WordPress Website from Figma",
    description:
      "Converted Figma design mockups into a fully functional WordPress website using Elementor. Delivered a responsive, pixel-perfect layout with smooth animations, optimized performance, and easy content management.",
    features: [
      "Responsive, pixel-perfect implementation from Figma",
      "Develop Homepage",
      "Develop Blog Page",
      "Develop Single Post Page",
      "Custom animations and interactive elements",
      "Cross-browser and mobile compatibility",
    ],
    stack: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Elementor", icon: <SiElementor /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "jQuery", icon: <SiJquery /> },
    ],
    image: "/assets/work/5.png",
    live: "",
    github: "",
    duration: "4 days",
    client: "Upwork Client",
    year: "2025",
  },
  {
    num: "06",
    category: "WordPress Redesign",
    title: "Redesign Existing Website",
    description:
      "Redesigned the homepage and created a modern contact page to improve branding, usability, and lead generation. Focused on delivering a clean, responsive design with optimized user experience.",
    features: [
      "Modern homepage redesign with improved layout",
      "Custom-designed contact page with form integration",
      "Responsive design across all devices",
      "Enhanced branding and visual consistency",
      "Optimized performance and fast loading speed",
    ],
    stack: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Elementor", icon: <SiElementor /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "jQuery", icon: <SiJquery /> },
    ],
    image: "/assets/work/6.png",
    live: "",
    github: "",
    duration: "1 day",
    client: "Upwork Client",
    year: "2025",
  },
];

// Filter tabs, derived from the categories (plus a leading "All").
const caseCategories = ["All", ...Array.from(new Set(caseStudies.map((c) => c.category)))];
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const Work = () => {
  const [activeCase, setActiveCase] = useState("All");
  const visibleCases =
    activeCase === "All" ? caseStudies : caseStudies.filter((c) => c.category === activeCase);

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // The subset of projects currently shown in the slider.
  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  // Guard against a stale index after the filtered set shrinks.
  const project = filtered[activeIndex] ?? filtered[0];

  const handleSlideChange = (swiper) => {
    // realIndex accounts for Swiper's loop-mode clones.
    setActiveIndex(swiper.realIndex);
  };

  const handleCategory = (category) => {
    setActiveCategory(category);
    setActiveIndex(0);
    // Swiper is re-keyed on category change, so it remounts at slide 0.
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <>
      {/* ===================== HERO ===================== */}
      <Section variant="accent" className="section-sm pt-28">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Stores that keep <span className="text-accent">selling</span>
            </>
          }
          subtitle="Migrations, redesigns, security and day-to-day care for live WooCommerce stores, delivered as a developer at Blaze Commerce, plus earlier freelance builds."
        />
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {workStats.map((stat) => (
            <motion.li key={stat.label} variants={staggerItem} className="card p-5 text-center">
              <p className="font-display text-3xl font-semibold text-white md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm leading-snug text-white/60">{stat.label}</p>
            </motion.li>
          ))}
        </motion.ul>
      </Section>

      {/* ===================== CASE STUDIES ===================== */}
      <Section>
        <SectionHeading
          eyebrow="Blaze Commerce · 2025–2026"
          title="Client case studies"
          subtitle="Real projects on live stores. Clients are kept anonymous; the numbers are real."
          className="mb-10"
        />
        <FilterChips
          options={caseCategories}
          active={activeCase}
          onChange={setActiveCase}
          className="mb-12"
        />
        <motion.div layout className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {visibleCases.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* ===================== EARLIER WORK ===================== */}
      <Section variant="surface">
        <SectionHeading
          eyebrow="Freelance · 2022–2025"
          title="Earlier projects"
          subtitle="WordPress builds and redesigns from Figma, plus a full-stack Laravel app."
          className="mb-10"
        />
        <FilterChips
          options={categories}
          active={activeCategory}
          onChange={handleCategory}
          className="mb-12"
        />

        <div className="flex flex-col gap-12 xl:flex-row xl:gap-16">
          {/* Details */}
          <motion.div
            key={project.num}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="order-2 flex w-full flex-col gap-8 xl:order-none xl:w-1/2 xl:justify-center"
          >
            <div className="space-y-4">
              <span className="block font-mono text-7xl font-extrabold leading-none text-transparent text-outline xl:text-8xl">
                {project.num}
              </span>
              <div className="space-y-3">
                <span className="tag-accent">{project.category}</span>
                <h2 className="h2 text-white">{project.title}</h2>
              </div>
            </div>

            {/* Meta */}
            <div className="grid grid-cols-3 gap-4 border-y border-line py-6">
              {[
                { icon: <BsCalendar3 />, label: "Duration", value: project.duration },
                { icon: <BsEye />, label: "Client", value: project.client },
                { icon: <BsCode />, label: "Year", value: project.year },
              ].map((meta) => (
                <div key={meta.label} className="text-center">
                  <span className="mx-auto mb-2 flex justify-center text-xl text-accent">
                    {meta.icon}
                  </span>
                  <p className="text-sm text-white/50">{meta.label}</p>
                  <p className="font-medium text-white">{meta.value}</p>
                </div>
              ))}
            </div>

            <p className="leading-relaxed text-white/60 md:text-lg">{project.description}</p>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Key Features:</h4>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    <span className="text-white/60">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Technologies Used:</h4>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span key={item.name} className="tag gap-2 px-4 py-2 text-sm">
                    <span className="text-base text-accent">{item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Links — only render when a URL is provided */}
            {(project.live || project.github) && (
              <div className="flex flex-wrap gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank" rel="noopener noreferrer">
                    <Button>
                      View Live
                      <BsArrowUpRight />
                    </Button>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      <BsGithub />
                      Source Code
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </motion.div>

          {/* Slider */}
          <div className="order-1 w-full xl:order-none xl:w-1/2">
            <div className="relative">
              <Swiper
                // Re-key on category so the slider remounts at slide 0 for the new set.
                key={activeCategory}
                spaceBetween={30}
                slidesPerView={1}
                loop={filtered.length > 1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                className="aspect-[585/460] w-full overflow-hidden rounded-2xl"
              >
                {filtered.map((item) => (
                  <SwiperSlide key={item.num}>
                    <div className="group relative h-full w-full overflow-hidden rounded-2xl border border-line bg-surface">
                      <Image
                        src={item.image}
                        alt={`${item.title} - ${item.category}`}
                        fill
                        sizes="(max-width: 1280px) 100vw, 50vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Gradient overlay + caption */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-bold text-white">{item.title}</h3>
                            <p className="text-sm text-accent">{item.category}</p>
                          </div>
                          <span className="font-mono text-4xl font-bold text-white/20">
                            {item.num}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                {filtered.length > 1 && (
                  <WorkSliderButtons
                    containerStyles="flex gap-3 absolute right-5 bottom-5 z-20"
                    btnStyles="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:border-accent hover:bg-accent hover:text-primary"
                    iconsStyles="text-lg"
                  />
                )}
              </Swiper>

              {/* Counter — position within the filtered set */}
              <div className="absolute right-5 top-5 z-20 rounded-full bg-black/70 px-4 py-2 backdrop-blur-sm">
                <span className="font-mono text-sm font-medium text-white">
                  {(activeIndex + 1).toString().padStart(2, "0")} /{" "}
                  {filtered.length.toString().padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Thumbnail strip — jump directly to any project */}
            {filtered.length > 1 && (
              <div className="mt-5 flex flex-wrap gap-3">
                {filtered.map((item, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <button
                      key={item.num}
                      type="button"
                      onClick={() => goToSlide(i)}
                      aria-label={`View ${item.title}`}
                      aria-current={isActive}
                      className={cn(
                        "relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-lg border transition-all duration-300 sm:h-16 sm:w-24",
                        isActive
                          ? "border-accent ring-2 ring-accent/50"
                          : "border-line opacity-60 hover:opacity-100"
                      )}
                    >
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* ===================== CTA ===================== */}
      <CTA
        title="Need a hand with your store?"
        description="Migrating hosts, redesigning a checkout, or cleaning up after a hack: I've done it on live stores, and I can do it on yours."
        primary={{ label: "Get Started", href: "/contact" }}
        secondary={{ label: "View Services", href: "/services" }}
      />
    </>
  );
};

// ---- FilterChips ------------------------------------------------------------
const FilterChips = ({ options, active, onChange, className }) => (
  <Reveal className={cn("flex flex-wrap justify-center gap-3", className)}>
    {options.map((option) => {
      const isActive = option === active;
      return (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-pressed={isActive}
          className={cn(
            "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
            isActive
              ? "border-accent bg-accent text-primary shadow-glow"
              : "border-line bg-white/[0.03] text-white/60 hover:border-accent/50 hover:text-white"
          )}
        >
          {option}
        </button>
      );
    })}
  </Reveal>
);

// ---- CaseStudyCard ----------------------------------------------------------
const PREVIEW_COUNT = 3;

const CaseStudyCard = ({ study }) => {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? study.highlights : study.highlights.slice(0, PREVIEW_COUNT);
  const hiddenCount = study.highlights.length - PREVIEW_COUNT;

  return (
    <motion.article
      id={study.id}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35 }}
      className="card card-interactive group flex scroll-mt-28 flex-col overflow-hidden"
    >
      {/* Cover: headline metric + icon (no screenshots, so clients stay anonymous) */}
      <div className="relative flex items-end justify-between gap-6 overflow-hidden border-b border-line bg-gradient-to-br from-accent/15 via-surface-2 to-surface p-6 md:p-8">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid [background-size:32px_32px] opacity-40 [mask-image:linear-gradient(to_bottom_left,black,transparent_70%)]"
        />
        <div className="relative">
          <p className="font-display text-5xl font-semibold leading-none text-white md:text-6xl">
            {study.metric.value}
          </p>
          <p className="mt-2 max-w-[16rem] text-sm text-white/60">{study.metric.label}</p>
        </div>
        <span className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-accent/15 text-2xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-primary">
          {study.icon}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="tag-accent">{study.category}</span>
          <span className="font-mono text-xs uppercase tracking-wider text-white/40">
            {study.year}
          </span>
        </div>

        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-wider text-accent-soft">
            {study.client}
          </p>
          <h3 className="h3 text-white">{study.title}</h3>
        </div>

        <p className="leading-relaxed text-white/60">{study.summary}</p>

        <ul className="space-y-2">
          {shown.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-white/70">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>

        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-soft"
          >
            {expanded ? "Show less" : `Show ${hiddenCount} more`}
            <BsChevronDown
              className={cn("transition-transform duration-300", expanded && "rotate-180")}
            />
          </button>
        )}

        <div className="mt-auto flex flex-wrap gap-2 border-t border-line pt-5">
          {study.stack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

export default Work;

