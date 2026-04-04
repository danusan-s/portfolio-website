import { motion, useReducedMotion } from "framer-motion";
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

const shapes = [
  {
    shape: "circle",
    size: 320,
    top: "10%",
    left: "5%",
    duration: 20,
    delay: 0,
    opacity: "opacity-[0.06]",
    color: "bg-primary",
  },
  {
    shape: "square",
    size: 200,
    top: "60%",
    right: "8%",
    duration: 25,
    delay: -5,
    opacity: "opacity-[0.04]",
    color: "bg-primary",
  },
  {
    shape: "circle",
    size: 160,
    bottom: "15%",
    left: "15%",
    duration: 18,
    delay: -10,
    opacity: "opacity-[0.05]",
    color: "bg-muted-foreground",
  },
  {
    shape: "square",
    size: 120,
    top: "20%",
    right: "20%",
    duration: 22,
    delay: -7,
    opacity: "opacity-[0.04]",
    color: "bg-muted-foreground",
  },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen px-6 overflow-hidden"
    >
      {/* Floating shapes */}
      {!shouldReduceMotion &&
        shapes.map((s, i) => (
          <motion.div
            key={i}
            className={`absolute ${s.color} ${s.opacity} rounded-${s.shape === "circle" ? "full" : "2xl"} blur-xl`}
            style={{
              width: s.size,
              height: s.size,
              top: s.top,
              left: s.left,
              right: s.right,
              bottom: s.bottom,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: s.delay,
            }}
          />
        ))}

      <motion.div
        variants={shouldReduceMotion ? undefined : container}
        initial={shouldReduceMotion ? {} : "hidden"}
        animate={shouldReduceMotion ? {} : "show"}
        className="text-center max-w-2xl relative z-10"
      >
        <motion.p
          variants={shouldReduceMotion ? undefined : item}
          initial={shouldReduceMotion ? {} : "hidden"}
          animate={shouldReduceMotion ? {} : "show"}
          className="text-sm uppercase tracking-widest text-muted-foreground mb-4"
        >
          Welcome
        </motion.p>

        <motion.h1
          variants={shouldReduceMotion ? undefined : item}
          initial={shouldReduceMotion ? {} : "hidden"}
          animate={shouldReduceMotion ? {} : "show"}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
        >
          Hi, I'm{" "}
          <span className="text-primary relative inline-block">
            Danusan
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary/20 rounded-full" />
          </span>
        </motion.h1>

        <motion.p
          variants={shouldReduceMotion ? undefined : item}
          initial={shouldReduceMotion ? {} : "hidden"}
          animate={shouldReduceMotion ? {} : "show"}
          className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto mb-3 leading-relaxed"
        >
          I'm a computer engineer with a passion for building things.
        </motion.p>

        <motion.p
          variants={shouldReduceMotion ? undefined : item}
          initial={shouldReduceMotion ? {} : "hidden"}
          animate={shouldReduceMotion ? {} : "show"}
          className="text-sm text-muted-foreground/60 tracking-wide mb-10"
        >
          Systems Programmer · Hardware Enthusiast · Builder
        </motion.p>

        <motion.div
          variants={shouldReduceMotion ? undefined : item}
          initial={shouldReduceMotion ? {} : "hidden"}
          animate={shouldReduceMotion ? {} : "show"}
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

        {!shouldReduceMotion && (
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
        )}
      </motion.div>
    </section>
  );
}
