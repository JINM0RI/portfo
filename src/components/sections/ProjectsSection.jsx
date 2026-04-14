import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../../data/portfolio";
import { Card } from "../ui/card";
import { SectionHeading } from "../SectionHeading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading tag="Projects Showcase" title="Proof Through Real System Outcomes" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
          >
            <Card className="flex h-full flex-col p-4">
              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-[#d5deee]">
                <span className="font-semibold text-text">The Problem:</span> {project.problem}
              </p>
              <p className="mt-3 text-sm text-[#d5deee]">
                <span className="font-semibold text-text">The Solution:</span> {project.solution}
              </p>
              <p className="mt-3 text-sm text-[#d5deee]">
                <span className="font-semibold text-text">Tech Stack:</span> {project.stack}
              </p>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  <Github size={15} />
                  GitHub
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  <ExternalLink size={15} />
                  Source Code
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
