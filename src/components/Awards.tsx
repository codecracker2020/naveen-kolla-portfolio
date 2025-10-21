import { Card } from "@/components/ui/card";
import { Trophy, Award as AwardIcon, GraduationCap } from "lucide-react";

const awards = [
  {
    title: "Engineering Excellence",
    organization: "GE Vernova",
    period: "Q3 2024",
    icon: Trophy
  },
  {
    title: "Engineering Excellence",
    organization: "GE Vernova",
    period: "Q4 2023",
    icon: Trophy
  },
  {
    title: "Star Award",
    organization: "Capgemini",
    period: "2014",
    icon: AwardIcon
  }
];

const certifications = [
  {
    title: "Oracle Cloud Infrastructure Generative AI",
    credential: "I1974-7DW-W0CI4P4DGAI0C3h",
    icon: GraduationCap
  },
  {
    title: "ThingWorx Certification",
    organization: "PTC University",
    period: "2015",
    icon: GraduationCap
  }
];

const Awards = () => {
  return (
    <section id="awards" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Awards */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Awards & Recognition</h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Recognized for excellence and innovation
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <Card 
                  key={`${award.title}-${award.period}`}
                  className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elevated)] group animate-fade-in-up text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <award.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                  <p className="text-primary font-medium">{award.organization}</p>
                  <p className="text-sm text-muted-foreground mt-1">{award.period}</p>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Certifications</h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Continuous learning and skill development
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {certifications.map((cert, index) => (
                <Card 
                  key={cert.title}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elevated)] group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h3>
                      {cert.organization && (
                        <p className="text-sm text-muted-foreground">{cert.organization}</p>
                      )}
                      {cert.credential && (
                        <p className="text-xs text-muted-foreground mt-1 font-mono">
                          {cert.credential}
                        </p>
                      )}
                      {cert.period && (
                        <p className="text-sm text-primary mt-1">{cert.period}</p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
