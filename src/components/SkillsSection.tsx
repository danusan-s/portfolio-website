import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FoldableCard } from "@/components/FoldableCard";
import type { CardData } from "@/components/FoldableCard";
import {
  IconCode,
  IconCpu,
  IconBrain,
  IconTerminal2,
  IconRobot,
  IconWorldWww,
} from "@tabler/icons-react";

const skillCategories = [
  {
    category: "Languages",
    icon: IconCode,
    skills: [
      "C++ (Proficient)",
      "C",
      "Java",
      "Go",
      "Python",
      "TypeScript",
      "ARM Assembly",
      "Verilog",
      "GLSL",
    ],
  },
  {
    category: "Systems Programming",
    icon: IconCpu,
    skills: [
      "Multithreading",
      "Lock-Free Data Structures",
      "Memory Optimization",
      "Network Programming",
      "TCP/UDP Protocols",
    ],
  },
  {
    category: "Machine Learning",
    icon: IconBrain,
    skills: [
      "NumPy",
      "Pandas",
      "TensorFlow",
      "Scikit-learn",
      "Matplotlib",
      "Data Analysis",
    ],
  },
  {
    category: "Linux & Tooling",
    icon: IconTerminal2,
    skills: [
      "Linux (Proficient)",
      "Bash Scripting",
      "tmux",
      "Vim",
      "GDB",
      "perf",
      "CMake",
      "Make",
      "Git",
      "Docker",
    ],
  },
  {
    category: "Hardware & Robotics",
    icon: IconRobot,
    skills: [
      "ROS2",
      "SLAM",
      "ESP32",
      "Embedded Systems",
      "Microcontrollers",
      "Sensors & Actuators",
    ],
  },
  {
    category: "Web Development",
    icon: IconWorldWww,
    skills: [
      "React",
      "Tailwind CSS",
      "Go",
      "Node.js",
      "MySQL",
      "REST APIs",
      "Azure",
    ],
  },
];

const projects: CardData[] = [
  {
    title: "ComponEng",
    image: "projects/componeng.svg",
    slug: "componeng",
    description:
      "After building projects like the planetary simulation by just hacking together code, I wanted to instead build a reusable engine that I can just plug in different projects. I set my eyes on building a Enitity-Component-System (ECS) engine. ECS is a software architectural pattern that is commonly used in game development. It is a data oriented architecture that allows for better performance (better caching) and flexibility.",
    keyLearnings: [
      "Entity-Component-System architecture",
      "Data-oriented design",
      "C++ memory management",
      "Cache-friendly data structures",
    ],
    links: [
      {
        label: "Repository",
        url: "https://github.com/danusan-s/ComponEng",
        icon: "github",
      },
    ],
  },
  {
    title: "Planetary Simulation",
    image: "projects/planet.svg",
    slug: "planetary-simulation",
    description:
      "This is a planetary simulation built using C++. The project was built to help me understand the basics of physics simulations and how to implement them in code. I was inspired to build this project after I read about the n-body problem and how it is used to simulate the motion of planets in a solar system.",
    keyLearnings: [
      "N-body physics simulation",
      "Numerical integration methods",
      "Real-time rendering with C++",
      "Performance optimization",
    ],
    links: [
      {
        label: "Repository",
        url: "https://github.com/danusan-s/planetary-simulation",
        icon: "github",
      },
    ],
  },
  {
    title: "Cache Simulator",
    image: "projects/cpu.svg",
    slug: "cache-simulator",
    description:
      "This is a cache simulator built using C++. The project was built to help me understand the intricacies of how caches work. I was inspired to build this project after I read about the layers of caches in the modern CPU architecture. I wanted to build a simulator that would allow me to visualize how caches work and how they affect the performance of a CPU.",
    keyLearnings: [
      "CPU cache hierarchy",
      "Cache replacement policies",
      "Memory access patterns",
      "Performance analysis",
    ],
    links: [
      {
        label: "Repository",
        url: "https://github.com/danusan-s/cache-sim",
        icon: "github",
      },
    ],
  },
  {
    title: "Redis Clone",
    image: "projects/redis.svg",
    slug: "redis-clone",
    description:
      "This is a Redis clone built using C++. Redis is an in-memory database that can be hosted on servers and requests can be made through a TCP socket. I came across Redis while I was looking through the tech stack breakdown of major companies. Redis is often used as a caching layer to speed up database queries. I thought it would be a fun project to build a Redis clone from scratch.",
    keyLearnings: [
      "The Redis protocol",
      "Implementing an event loop",
      "Implementing a TCP server",
      "Intrusive data structures",
    ],
    links: [
      {
        label: "Repository",
        url: "https://github.com/danusan-s/redis-clone",
        icon: "github",
      },
      {
        label: "Build Your Own Redis",
        url: "https://build-your-own.org/redis/",
        icon: "book",
      },
    ],
  },
  {
    title: "Lox interpreters",
    image: "projects/lox.svg",
    slug: "lox-interpreters",
    description:
      "This is a collection of Lox programming language interpreters built using Java and C. Lox is a simple programming language that was designed to be easy to implement. The project was built to help me understand the basics of how programming languages work and how to implement them in code. I was inspired to build this project after I read about the book 'Crafting Interpreters' by Bob Nystrom. The book walks you through the process of building a Lox interpreter in both Java and C.",
    keyLearnings: [
      "Lexical analysis and parsing",
      "Abstract syntax trees",
      "Tree-walk interpreters",
      "Bytecode compilation",
    ],
    links: [
      {
        label: "Repository",
        url: "https://github.com/danusan-s/lox-interpreters",
        icon: "github",
      },
      {
        label: "Crafting Interpreters",
        url: "https://craftinginterpreters.com/",
        icon: "book",
      },
    ],
  },
  {
    title: "Gossip - Web Forum",
    image: "projects/gossip.png",
    slug: "gossip-web-forum",
    description:
      "This is a web forum built using React + TypeScript frontend and a Go + MySQL + Azure backend. The project was built as a submission for CVWO. It helped me learn the basics of web development and how to build a full stack application. For the UI, I used Material UI (MUI) and netlify to host the frontend.",
    keyLearnings: [
      "Full-stack web development",
      "REST API design with Go",
      "Database schema design",
      "Authentication and authorization",
    ],
    links: [
      {
        label: "Repository",
        url: "https://github.com/danusan-s/gossip",
        icon: "github",
      },
      {
        label: "Live Site",
        url: "https://gossip-forum.netlify.app",
        icon: "external",
      },
    ],
  },
  {
    title: "Chess Render - OpenGL",
    image: "projects/chess.svg",
    slug: "chess-render-opengl",
    description:
      "This is a chess GUI written in C++ using OpenGL. The project was made to learn the basics of OpenGL and the graphics pipeline. Initially, this project started out as a CLI chess game written in C++ but then I decided I should build on top of it. So I started looking at designing either a chess engine or a chess GUI. I found that I could make my GUI with a game engine like unity. But this sort of led me down a rabbit hole of how game engines work and how they render graphics. This is when I discovered OpenGL.",
    keyLearnings: [
      "OpenGL graphics pipeline",
      "3D rendering fundamentals",
      "Game loop architecture",
      "Shader programming",
    ],
    links: [
      {
        label: "Repository",
        url: "https://github.com/danusan-s/Chess-Render-with-OpenGL",
        icon: "github",
      },
      {
        label: "Learn OpenGL",
        url: "https://learnopengl.com/",
        icon: "book",
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
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

const projectContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projectItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Skills
          </h2>
          <p className="text-muted-foreground">
            Skills I have picked up and projects I have built.{" "}
            <a
              href="https://github.com/danusan-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline underline-offset-4"
            >
              Also on GitHub
            </a>
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-lg font-semibold text-foreground mb-5">
            Skills & Technologies
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skillCategories.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div key={group.category} variants={item}>
                  <div className="group rounded-lg border border-border bg-card p-5 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5 hover:border-l-2 hover:border-l-primary hover:pl-[18px]">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-sm font-semibold text-primary tracking-wide uppercase">
                        {group.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-5">
            Projects
          </h3>
          <motion.div
            variants={projectContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-1 gap-4"
          >
            {projects.map((project) => (
              <motion.div key={project.slug} variants={projectItem}>
                <FoldableCard card={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
