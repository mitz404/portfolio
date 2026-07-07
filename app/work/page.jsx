"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsEye, BsCode, BsCalendar3, BsGithub, BsArrowUpRight } from "react-icons/bs";
import { FaWordpress, FaLaravel, FaCss3Alt, FaServer, FaCloud, FaNetworkWired } from "react-icons/fa";
import { SiElementor, SiMysql, SiBootstrap, SiJquery } from "react-icons/si";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import CTA from "@/components/shared/CTA";
import WorkSliderButtons from "@/components/WorkSliderButtons";

// ---- Content (unchanged) ----------------------------------------------------
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
      "A complete redesign of the website`s blog section, including the Header, Footer, Blog Listing Page, and Single Blog Page. The goal was to deliver a modern, responsive, and user-friendly interface that improves readability, navigation, and overall engagement.",
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
      "A complete redesign of the website`s homepage and blog section, including the Header, Footer, Blog Listing Page, and Single Blog Page. The goal was to deliver a modern, responsive, and user-friendly interface that improves readability, navigation, and overall engagement.",
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
      "Develop Sinle Post Page",
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
    duration: "4days",
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
  {
    num: "07",
    category: "Hosting Migration & DNS",
    title: "WP Engine to Kinsta Migration with Bunny CDN",
    description:
      "Migrated Non WooCommerce WordPress sites and WooCommerce WordPress sites from WP Engine to Kinsta with zero data loss and minimal downtime, then configured Bunny.net CDN for faster global delivery and moved the DNS records from CrazyDomains to Bunny.",
    features: [
      "Full site and database migration from WP Engine to Kinsta",
      "Environment configuration and post-migration testing",
      "Bunny.net CDN setup for global content delivery",
      "DNS migration from CrazyDomains to Bunny",
      "Nameserver, SSL, and propagation verification",
    ],
    stack: [
      { name: "WordPress", icon: <FaWordpress /> },
      { name: "Kinsta", icon: <FaServer /> },
      { name: "Bunny CDN", icon: <FaCloud /> },
      { name: "DNS", icon: <FaNetworkWired /> },
    ],
    image: "/assets/work/site-migration_1.png",
    live: "",
    github: "",
    duration: "1 week",
    client: "Upwork Client",
    year: "2025",
  },
];

// Filter tabs, derived from the project categories (plus a leading "All").
const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const Work = () => {
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
          eyebrow="Selected projects"
          title={
            <>
              My <span className="text-accent">Portfolio</span>
            </>
          }
          subtitle="Explore my latest projects showcasing expertise in WordPress development, full-stack applications, and modern web technologies."
        />
        <Reveal delay={0.1} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button size="lg">Start a Project</Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg">
              View Services
            </Button>
          </Link>
        </Reveal>
      </Section>

      {/* ===================== PROJECT SHOWCASE ===================== */}
      <Section>
        {/* Category filter */}
        <Reveal className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategory(category)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "border-accent bg-accent text-primary shadow-glow"
                    : "border-line bg-white/[0.03] text-white/60 hover:border-accent/50 hover:text-white"
                )}
              >
                {category}
              </button>
            );
          })}
        </Reveal>

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
        title="Ready to Start Your Project?"
        description="Let`s collaborate to bring your vision to life. I`m here to help you create exceptional web solutions that drive results."
        primary={{ label: "Get Started", href: "/contact" }}
        secondary={{ label: "View Services", href: "/services" }}
      />
    </>
  );
};

export default Work;
