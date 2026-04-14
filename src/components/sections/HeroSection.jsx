import { motion } from "framer-motion";
import { ArrowDownRight, Github } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { profile } from "../../data/portfolio";
import { cn } from "../../lib-utils";

export function HeroSection() {
  return (
    <header id="top" className="mx-auto w-[min(1100px,92vw)] pb-14 pt-2">
      <nav className="flex flex-wrap items-center justify-end gap-4 py-6 text-sm">
        <a href="#top" className="mr-auto font-bold tracking-wide text-text">
          Portfolio
        </a>
        <a href="#projects" className="text-muted transition hover:text-accent">
          Projects
        </a>
        <a href="#experience" className="text-muted transition hover:text-accent">
          Experience
        </a>
        <a href="#contact" className="text-muted transition hover:text-accent">
          Contact
        </a>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="rounded-[22px] border border-stroke bg-[linear-gradient(140deg,rgba(19,31,52,0.92),rgba(13,21,37,0.78))] p-6 shadow-glass backdrop-blur-sm sm:p-10"
      >
        <p className="mb-3 font-mono text-sm text-accent2">Hi, I am {profile.name}.</p>
        <h1 className="mb-3 max-w-[18ch] text-3xl font-bold leading-[1.15] sm:text-5xl">{profile.role} | {profile.headline}</h1>
        <p className="max-w-3xl text-muted">{profile.summary}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href="#projects" className={cn(buttonVariants({ variant: "primary" }), "gap-2")}>
            Explore Projects
            <ArrowDownRight size={16} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(buttonVariants({ variant: "ghost" }), "gap-2")}
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </motion.div>
    </header>
  );
}
