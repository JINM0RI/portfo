import { motion } from "framer-motion";
import { ArrowDownRight, Github } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { heroStats, profile } from "../../data/portfolio";
import { cn } from "../../lib-utils";

export function HeroSection() {
  return (
    <header id="top" className="section-shell pb-16 pt-2 md:pb-20">
      <nav className="sticky top-3 z-30 mb-8 flex flex-wrap items-center justify-end gap-4 rounded-full border border-stroke bg-[rgba(8,13,24,0.7)] px-5 py-3 text-sm backdrop-blur">
        <a href="#top" className="mr-auto font-bold tracking-[0.18em] text-text uppercase">
          {profile.name}
        </a>
        <a href="#what-i-do" className="text-muted transition hover:text-accent2">
          What I Do
        </a>
        <a href="#skills" className="text-muted transition hover:text-accent2">
          Skills
        </a>
        <a href="#certifications" className="text-muted transition hover:text-accent2">
          Certificates
        </a>
        <a href="#contact" className="text-muted transition hover:text-accent2">
          Contact
        </a>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="rounded-[34px] border border-[rgba(255,255,255,0.22)] bg-[linear-gradient(170deg,rgba(13,20,34,0.82),rgba(8,13,24,0.65))] p-7 shadow-glass backdrop-blur sm:p-10"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent2">Portfolio</p>
        <h1 className="max-w-[16ch] text-4xl font-bold leading-[1.03] text-white sm:text-6xl">
          {profile.role}
          <span className="mt-2 block text-[0.42em] font-medium uppercase tracking-[0.22em] text-[#f7ddbd]">{profile.headline}</span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#d4dbe8] sm:text-lg">
          {profile.summary}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a href="#projects" className={cn(buttonVariants({ variant: "primary" }), "gap-2 px-6 py-3")}>
            View Work
            <ArrowDownRight size={16} />
          </a>
          <a href="#skills" className={cn(buttonVariants({ variant: "ghost" }), "gap-2 border-white/35 px-6 py-3")}>
            View Skills
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(buttonVariants({ variant: "ghost" }), "gap-2 border-white/35 px-6 py-3")}
          >
            <Github size={16} />
            GitHub
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {heroStats.map((item) => (
            <article key={item.label} className="rounded-2xl border border-white/20 bg-[rgba(255,255,255,0.08)] p-4">
              <p className="text-2xl font-bold text-white sm:text-3xl">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[#fbe1bf]">{item.label}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
