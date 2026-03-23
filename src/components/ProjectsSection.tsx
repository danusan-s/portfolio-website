import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/SectionWrapper";
import { FoldableCard } from "@/components/FoldableCard";
import type { CardData } from "@/components/FoldableCard";

const projects: CardData[] = [
  {
    title: "Planetary Simulation",
    image: "projects/planet.svg",
    slug: "planetary-simulation",
    description:
      "This is a planetary simulation built using C++. The project was built to help me understand the basics of physics simulations and how to implement them in code. I was inspired to build this project after I read about the n-body problem and how it is used to simulate the motion of planets in a solar system.",
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
    title: "Gossip - Web Forum",
    image: "projects/gossip.png",
    slug: "gossip-web-forum",
    description:
      "This is a web forum built using React + TypeScript frontend and a Go + MySQL + Azure backend. The project was built as a submission for CVWO. It helped me learn the basics of web development and how to build a full stack application. For the UI, I used Material UI (MUI) and netlify to host the frontend.",
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

export function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            Projects
          </h2>
          <p className="text-muted-foreground">
            These are some of my software projects.{" "}
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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-1 gap-4"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={item}>
              <FoldableCard card={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
