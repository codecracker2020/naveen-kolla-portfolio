import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "knaveenbabu@gmail.com",
    link: "mailto:knaveenbabu@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98664 72298",
    link: "tel:+919866472298"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India 500072",
    link: null
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "naveen-babu-84a71744",
    link: "https://linkedin.com/in/naveen-babu-84a71744"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <p className="text-xl text-muted-foreground">
              Open to new opportunities and collaborations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={info.label}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elevated)] group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center animate-fade-in">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border-primary/20">
              <h3 className="text-2xl font-semibold mb-4">Ready to collaborate?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                With 15 years of experience in AI integration, enterprise software, and technical leadership, 
                I'm excited to take on new challenges and drive innovation.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-[var(--glow-primary)] transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:knaveenbabu@gmail.com'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  onClick={() => window.open('https://linkedin.com/in/naveen-babu-84a71744', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
