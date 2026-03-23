import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-5 md:col-span-2 flex justify-center"
          >
            <div className="relative group overflow-hidden">
              <div className="absolute -inset-1 rounded-2xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/danusan.jpg"
                alt="Danusan Sugumar"
                className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl object-cover shadow-lg ring-1 ring-border transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-5 md:col-span-3 space-y-5"
          >
            <h3 className="text-xl font-semibold text-foreground">
              Danusan Sugumar
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hey there! I'm Danusan -- a Computer Engineering undergrad with
                a passion for building things that are fast, beautiful, and
                meaningful. Whether it's tinkering with embedded systems or
                crafting web apps, I love connecting the dots between hardware
                and software.
              </p>
              <p>
                I enjoy learning by building and believe the best ideas come
                from curiosity.
              </p>
              <p>
                This site is a small collection of what I'm working on and
                thinking about. Thanks for stopping by!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
