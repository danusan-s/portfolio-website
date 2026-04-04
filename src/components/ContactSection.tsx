import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import {
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const contactLinks = [
  {
    icon: IconMail,
    label: "Email",
    href: "mailto:danusansugumar@gmail.com",
    description: "Reach out directly via email",
  },
  {
    icon: IconBrandGithub,
    label: "GitHub",
    href: "https://github.com/danusan-s",
    description: "Check out my projects",
  },
  {
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/danusan-sugumar",
    description: "Connect with me professionally",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            I am always open to opportunities, collaborations, or just a
            friendly chat about tech. Feel free to reach out through any of the
            links below.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary hover:bg-accent"
            >
              <div className="rounded-full bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <link.icon size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{link.label}</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {link.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
