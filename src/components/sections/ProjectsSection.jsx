import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { certifications, projects } from "../../data/portfolio";
import { Card } from "../ui/card";

export function ProjectsSection() {
  return (
    <>
      <section id="projects" className="section-shell">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent2">Featured Work</p>
        <h2 className="mb-5 max-w-[16ch] text-3xl font-bold leading-tight text-white sm:text-5xl">Projects built around measurable impact</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col border-white/20 bg-[linear-gradient(160deg,rgba(13,21,36,0.86),rgba(9,14,25,0.6))] p-5">
                <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-[#d5deee]">{project.problem}</p>
                <p className="mt-3 text-sm text-[#f0f4ff]">{project.solution}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-[#f8d9ae]">{project.stack}</p>
                <div className="mt-5 flex items-center gap-4">
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
                    Details
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="ticker mt-10">CERTIFIED • CERTIFIED • CERTIFIED • CERTIFIED • CERTIFIED • CERTIFIED •</div>

      <section id="certifications" className="section-shell">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent2">Certificates</p>
        <h2 className="mb-5 max-w-[14ch] text-3xl font-bold leading-tight text-white sm:text-5xl">Certifications & continuous learning</h2>
        <p className="mb-7 max-w-3xl text-[#dae4fb]">
          Verified learning across analytics, development, and tooling that supports my project delivery workflow.
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Card className="h-full border-white/20 bg-[rgba(9,14,25,0.56)] p-5">
                <p className="text-lg font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#f8d9ae]">{item.track}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
