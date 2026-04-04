import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FoldableCard } from "@/components/FoldableCard";
import type { CardData } from "@/components/FoldableCard";

const education: CardData[] = [
  {
    title: "National University of Singapore (NUS) - Computer Engineering",
    image: "nus.png",
    slug: "nus-education",
    description:
      "Pursuing a Bachelor of Engineering in Computer Engineering. Aug 2023 - May 2027 (Expected). Specialization in Robotics and Advanced Electronics.",
    keyLearnings: [
      "Computer architecture and organization",
      "Digital logic design",
      "Signals and systems",
      "Embedded programming",
    ],
    links: [],
  },
];

const workExperience: CardData[] = [
  {
    title:
      "Advanced Microelectronic Devices Inc. (AMD) - System Level Test Development Intern",
    image: "amd.png",
    slug: "amd-internship",
    description:
      "During my internship at AMD, I worked with the team responsible for writing system level tests for AMD Instinct GPUs (AMD's data center gpu lineup). I worked on automation tools in python to help with generation of clean styled and presentable excel reports given the run data files as input. Furthermore, I helped refactor and rollout the next generation of the test framework written in Java. I also had the opportunity to work on some of the system level tests and got to see how the tests are run in the lab and how the data is collected and analyzed.",
    keyLearnings: [
      "GPU system-level testing",
      "Python automation",
      "Java framework development",
      "Lab data collection and analysis",
    ],
    links: [],
  },
  {
    title: "National University of Singapore (NUS) - Teaching Assistant",
    image: "nus.png",
    slug: "nus-ta",
    description:
      "Worked as a Teaching Assistant for CS1010 Programming Methodology in C and CS2040S for Data Structures and Algorithms in Java.",
    keyLearnings: [
      "Mentoring and communication",
      "C programming fundamentals",
      "Data structures and algorithms",
      "Code review and grading",
    ],
    links: [],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Experience
          </h2>
        </motion.div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Education
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-1 gap-4"
          >
            {education.map((edu) => (
              <motion.div key={edu.slug} variants={item}>
                <FoldableCard card={edu} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Work</h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-1 gap-4"
          >
            {workExperience.map((work) => (
              <motion.div key={work.slug} variants={item}>
                <FoldableCard card={work} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
