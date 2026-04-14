import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../../data/portfolio";

export function ContactSection() {
  return (
    <footer id="contact" className="section-shell pb-14">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-[30px] border border-white/20 bg-[linear-gradient(165deg,rgba(12,20,35,0.85),rgba(8,13,24,0.6))] p-6 shadow-glass sm:p-10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent2">Get In Touch</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-5xl">Let's build something practical</h2>
        <p className="mt-3 max-w-2xl text-[#dbe4fb]">
          Open to internships, freelance projects, and software or analytics collaborations where I can add measurable value.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:text-base">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-accent hover:border-accent2 hover:text-accent2">
            <Mail size={16} />
            Email
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-accent hover:border-accent2 hover:text-accent2"
          >
            <Phone size={16} />
            Phone
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-accent hover:border-accent2 hover:text-accent2">
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-accent hover:border-accent2 hover:text-accent2">
            <Github size={16} />
            GitHub
          </a>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.22em] text-[#f5d7ae]">Designed & Built by {profile.name} · © 2026</p>
      </motion.div>
    </footer>
  );
}
