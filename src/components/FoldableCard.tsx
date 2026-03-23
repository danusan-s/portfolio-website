import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconExternalLink,
  IconBrandGithub,
  IconChevronDown,
  IconBook,
} from "@tabler/icons-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectLink {
  label: string;
  url: string;
  icon: "github" | "external" | "book";
}

export interface CardData {
  title: string;
  image: string;
  slug: string;
  description: string;
  links: ProjectLink[];
  keyLearnings?: string[];
}

const linkIcons = {
  github: IconBrandGithub,
  external: IconExternalLink,
  book: IconBook,
};

export function FoldableCard({ card }: { card: CardData }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
    >
      <Card
        className="group cursor-pointer overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5"
        onClick={() => setExpanded(!expanded)}
      >
        <CardContent className="p-0">
          {/* Project image + title */}
          <div className="flex items-center gap-4 p-5">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <img
                src={`/${card.image}`}
                alt={card.title}
                className="w-6 h-6 max-w-6 max-h-6 object-contain dark:filter dark:invert"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate">
                {card.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                Click to {expanded ? "collapse" : "expand"}
              </p>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconChevronDown size={18} className="text-muted-foreground" />
            </motion.div>
          </div>

          {/* Expandable content */}
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 border-t border-border pt-4 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>

                  {card.keyLearnings && card.keyLearnings.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                        Key Learnings
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {card.keyLearnings.map((learning) => (
                          <Badge
                            key={learning}
                            variant="secondary"
                            className="text-xs"
                          >
                            {learning}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 pt-1">
                    {card.links.map((link) => {
                      const Icon = linkIcons[link.icon];
                      return (
                        <Button
                          key={link.url}
                          variant="outline"
                          size="sm"
                          className="gap-1.5 text-xs"
                          asChild
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon size={14} />
                            {link.label}
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}
