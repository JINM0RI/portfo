import * as Separator from "@radix-ui/react-separator";
import { motion } from "framer-motion";

export function SectionHeading({ tag, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="mb-5"
    >
      <p className="mb-1 font-mono text-xs uppercase tracking-[0.03em] text-accent2">{tag}</p>
      <h2 className="mb-3 text-2xl font-bold leading-tight sm:text-3xl">{title}</h2>
      <Separator.Root className="h-px w-24 bg-stroke" decorative />
    </motion.div>
  );
}
