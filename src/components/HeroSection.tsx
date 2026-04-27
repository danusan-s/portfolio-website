import { useState, useEffect } from "react";
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

const tagline = "Systems Programmer · Hardware Enthusiast · Builder";

function TypewriterText({ text, delay }: { text: string; delay: number }) {
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
          setDone(true);
        }
      }, 50);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  useEffect(() => {
    if (!done) return;
    const blink = setInterval(() => setShowCursor((p) => !p), 530);
    const stop = setTimeout(() => clearInterval(blink), 2000);
    return () => {
      clearInterval(blink);
      clearTimeout(stop);
    };
  }, [done]);

  return (
    <span>
      {displayed}
      <span
        className={`inline-block w-[2px] h-[1.1em] bg-primary/60 ml-0.5 align-middle ${
          showCursor ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}

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
        className="text-center max-w-2xl relative z-10"
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
          Hi, I'm{" "}
          <span className="text-primary relative inline-block">
            Danusan
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary/20 rounded-full" />
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto mb-3 leading-relaxed"
        >
          I'm a computer engineer with a passion for building things.
        </motion.p>

        <motion.div
          variants={item}
          className="text-sm text-muted-foreground/60 tracking-wide mb-10 min-h-[1.25rem]"
        >
          <TypewriterText text={tagline} delay={1200} />
        </motion.div>

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
            <a href="#skills">
              <IconFolder
                size={18}
                className="transition-transform group-hover:-translate-y-0.5"
              />
              Projects
            </a>
          </Button>
        </motion.div>

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
