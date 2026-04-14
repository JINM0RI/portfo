import { motion } from "framer-motion";
import { skillGroups } from "../../data/portfolio";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { SectionHeading } from "../SectionHeading";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading tag="Skills Matrix" title="Tools Organized by What They Deliver" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: groupIndex * 0.1 }}
          >
            <Card className="h-full p-4">
              <h3 className="mb-3 text-xl font-semibold">{group.title}</h3>
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
  );
}
