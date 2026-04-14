import { motion } from "framer-motion";
import { experiences } from "../../data/portfolio";
import { SectionDivider } from "../SectionDivider";
import { Card } from "../ui/card";

export function ExperienceSection() {
  return (
    <>
      <SectionDivider className="mt-10" />
      <section id="experience" className="section-shell">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent2">Experience</p>
        <h2 className="mb-5 max-w-[15ch] text-3xl font-bold leading-tight text-white sm:text-5xl">Work and leadership journey</h2>
        <p className="mb-7 max-w-3xl text-[#dae4fb]">
          Roles where I built systems, analyzed data, and delivered measurable outcomes.
        </p>

        <div className="grid gap-4">
          {experiences.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <Card className="h-full border-white/20 bg-[rgba(8,13,24,0.58)] p-5">
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#f6ca92]">{item.org} · {item.date}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#d5deee] marker:text-[#f6ca92]">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
        </div>
      </section>
    </>
  );
}
