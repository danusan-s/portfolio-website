import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IconUser, IconFolder } from "@tabler/icons-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-2xl"
      >
        <motion.p
          variants={item}
          className="text-sm uppercase tracking-widest text-muted-foreground mb-4"
        >
          Welcome
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
        >
          Hi, I'm <span className="text-primary">Danusan</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed"
        >
          I'm a computer engineer with a passion for building things.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="gap-2 group">
            <a href="#about">
              <IconUser
                size={18}
                className="transition-transform group-hover:-translate-y-0.5"
              />
              About Me
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 group">
            <a href="#projects">
              <IconFolder
                size={18}
                className="transition-transform group-hover:-translate-y-0.5"
              />
              Projects
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
          >
            <motion.div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
