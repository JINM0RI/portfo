import { motion } from "framer-motion";
import { experiences } from "../../data/portfolio";
import { Card } from "../ui/card";
import { SectionHeading } from "../SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading tag="Experience" title="Action + Outcome Work History" />
      <div className="grid gap-4">
        {experiences.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <Card className="bg-surfaceStrong p-4 sm:p-5">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mb-3 mt-1 font-mono text-sm text-accent2">
                {item.org} | {item.date}
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm text-white marker:text-accent2 sm:text-base">
                {item.points.map((point) => (
                  <li key={point} className="font-medium leading-relaxed text-white [text-shadow:0_0_1px_rgba(255,255,255,0.2)]">
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
