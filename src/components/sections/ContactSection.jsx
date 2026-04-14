import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../../data/portfolio";
import { Card } from "../ui/card";

export function ContactSection() {
  return (
    <footer id="contact" className="section-shell pb-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="p-5 sm:p-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to collaborate?</h2>
          <p className="mt-2 text-muted">
            Let us build smart software, automated workflows, and data-backed decisions together.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm sm:text-base">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-accent hover:underline">
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              <Phone size={16} />
              {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 text-accent hover:underline">
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 text-accent hover:underline">
              <Github size={16} />
              GitHub
            </a>
          </div>
        </Card>
      </motion.div>
    </footer>
  );
}
