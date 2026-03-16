import { IconMail, IconBrandGithub } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-16">
      <div className="mx-auto max-w-3xl">
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Danusan Sugumar
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:danusansugumar@gmail.com"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <IconMail
                size={16}
                className="transition-transform group-hover:-translate-y-0.5"
              />
              Send me an email
            </a>
            <div className="h-4 w-px bg-border" />
            <a
              href="https://github.com/danusan-s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <IconBrandGithub
                size={16}
                className="transition-transform group-hover:-translate-y-0.5"
              />
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
