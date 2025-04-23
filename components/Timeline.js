"use client";

import { useState } from "react";
import TimelineItem from "./TimelineItem";
import projects from "@/data/projects";
import { motion } from "framer-motion";

export default function Timeline() {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [activeProjectSide, setActiveProjectSide] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-32 px-4 md:px-10 min-h-screen"
    >
      <h2 className="text-center text-4xl md:text-5xl font-bold text-heading mb-20">
        Our Work Timeline
      </h2>

      <div className="relative w-full max-w-5xl mx-auto">
        {/* Timeline Line that shifts based on hovered side */}
        <motion.div
          animate={{
            x:
              activeProjectSide === "left"
                ? 250
                : activeProjectSide === "right"
                ? -250
                : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/40 z-0 pointer-events-none"
        />

        {/* Timeline Items */}
        {projects.map((project, index) => {
          const side = project.side ?? (index % 2 === 0 ? "left" : "right");
          return (
            <TimelineItem
              key={project.id}
              {...project}
              side={side}
              isActive={activeProjectId === project.id}
              isInactive={activeProjectId && activeProjectId !== project.id}
              onHover={() => {
                setActiveProjectId(project.id);
                setActiveProjectSide(side);
              }}
              onLeave={() => {
                setActiveProjectId(null);
                setActiveProjectSide(null);
              }}
            />
          );
        })}
      </div>
    </section>
  );
}
