import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(220_15%_25%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(220_15%_25%/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-primary/20 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">#OpentoWork</span>
          </div>
          
          {/* Profile Photo */}
          <div className="mb-8">
            <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56">
              <img
                src="/myphoto.png"
                alt="Naveen Babu Kolla"
                className="w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-2xl hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] transition-all duration-300 bg-secondary/20"
              />
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Naveen Babu Kolla
          </h1>
          
          <p className="text-2xl md:text-3xl text-primary font-semibold mb-4">
            Staff Software Engineer
          </p>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            AI Expert & Frontend Lead with 15 years of experience in enterprise software development, 
            industrial automation, and digital transformation
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-[var(--glow-primary)] transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
              onClick={() => window.open('https://linkedin.com/in/naveen-babu-84a71744', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            {['Angular', 'TypeScript', 'MES', 'Industrial Automation', 'Workflow Automation n8n', 'GE Proficy', 'Node Js', 'Node-Red','AI Integration'].map((skill, i) => (
              <span 
                key={skill}
                className="px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;
