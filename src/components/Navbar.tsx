import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconSun, IconMoon, IconMenu2, IconX } from "@tabler/icons-react";
import { useTheme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [handleIntersection]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent">
          <motion.div
            className="h-full bg-primary"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        <div className="mx-auto max-w-3xl flex items-center justify-between px-6 py-4">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            Danusan
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const section = link.href.replace("#", "");
              const isActive = activeSection === section;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm transition-colors group ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 rounded-full ${
                      isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                    }`}
                  />
                </a>
              );
            })}
            <div className="ml-2 h-5 w-px bg-border" />
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={toggleTheme}
              className="ml-1"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {resolvedTheme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconSun size={16} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <IconMoon size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-1">
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? (
                <IconSun size={16} />
              ) : (
                <IconMoon size={16} />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => {
                const section = link.href.replace("#", "");
                const isActive = activeSection === section;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.1 }}
                    className={`text-2xl font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
