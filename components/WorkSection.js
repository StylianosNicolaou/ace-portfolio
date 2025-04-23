"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import PortfolioCard from "./PortfolioCard";

// Framer variants
const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const projects = [
  {
    title: "E-Commerce Store",
    description:
      "A fully responsive modern e-commerce site with product filters, cart, and Stripe integration.",
    image: "/projects/ecommerce.jpg",
    link: "https://your-live-link.com",
  },
  {
    title: "Business Website",
    description:
      "Clean and fast-loading site for a local business with service booking and contact forms.",
    image: "/projects/business.jpg",
    link: "https://your-live-link.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal brand portfolio site built with Next.js and animations to showcase creativity.",
    image: "/projects/portfolio.jpg",
    link: "https://your-live-link.com",
  },
];

export default function WorkSection() {
  return (
    <motion.div
      id="work"
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <SectionWrapper>
        <h2 className="text-heading text-4xl md:text-5xl font-extrabold text-center mb-16">
          Our Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <PortfolioCard
              key={i}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </SectionWrapper>
    </motion.div>
  );
}
