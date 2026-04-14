import { motion } from "framer-motion";
import { services, skillGroups } from "../../data/portfolio";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";

export function SkillsSection() {
  return (
    <>
      <section id="what-i-do" className="section-shell">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent2"
        >
          What I Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-5 max-w-[14ch] text-3xl font-bold leading-tight text-white sm:text-5xl"
        >
          I build software that solves real workflows
        </motion.h2>
        <p className="mb-7 max-w-3xl text-[#dae4fb]">
          From automation tools to data dashboards, I focus on practical systems that reduce manual effort and improve decisions.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-2xl border border-white/20 bg-[rgba(9,15,27,0.52)] p-5 backdrop-blur"
            >
              <h3 className="mb-2 text-xl font-semibold text-white">{service.title}</h3>
              <p className="text-sm text-[#d8e2fa]">{service.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <div className="ticker mt-10">CREATE • CREATE • CREATE • CREATE • CREATE • CREATE • CREATE • CREATE •</div>

      <section id="skills" className="section-shell">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent2">Skills & Tools</p>
        <h2 className="mb-5 max-w-[18ch] text-3xl font-bold leading-tight text-white sm:text-5xl">Core technologies I work with</h2>
        <p className="mb-7 max-w-3xl text-[#dae4fb]">
          A balanced toolkit across backend development, analytics, and delivery-focused engineering.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: groupIndex * 0.1 }}
          >
            <Card className="h-full border-white/20 bg-[rgba(8,13,24,0.6)] p-4">
              <h3 className="mb-3 text-xl font-semibold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.3, delay: 0.06 * index }}
                  >
                    <Badge>{skill}</Badge>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
        </div>
      </section>

      <div className="ticker mt-10">SKILLS • TOOLS • SKILLS • TOOLS • SKILLS • TOOLS • SKILLS • TOOLS •</div>
    </>
  );
}
