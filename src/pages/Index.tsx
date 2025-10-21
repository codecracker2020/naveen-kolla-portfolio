import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" id="home">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Awards />
      <Contact />
      
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 Naveen Babu Kolla. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
