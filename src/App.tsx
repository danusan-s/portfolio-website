import { ThemeProvider } from "@/hooks/useTheme";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
