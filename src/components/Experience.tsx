import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Staff Software Engineer",
    company: "GE Vernova",
    location: "Hyderabad, India",
    period: "February 2019 - Present",
    description: "Serving as UI Architect across 8 Scrum teams, driving front-end architecture and technical leadership. Mentor interns and play a pivotal role in talent acquisition. Lead code reviews and strategic design decisions for scalability and performance.",
    highlights: [
      "UI Architect for 8 Scrum teams",
      "Technical Architect for 2 specialized teams",
      "Core member of interview panel",
      "Strategic design pattern decisions"
    ]
  },
  {
    title: "Sr Software Engineer",
    company: "Capgemini",
    location: "Hyderabad, India",
    period: "October 2016 - April 2019",
    description: "Worked for GE as contractor, delivered a quality check search tool for Volvo Truck Cooperation, Sweden. Individual contributor focusing on Angular and .NET Rest Endpoints with comprehensive unit testing.",
    highlights: [
      "Delivered product for Volvo Truck Cooperation",
      "Quality check tool implementation",
      "Angular & .NET development",
      "Individual contributor"
    ]
  },
  {
    title: "Software Engineer",
    company: "Squircle IT Consulting Services",
    location: "Hyderabad, India",
    period: "May 2009 - September 2016",
    description: "Developed enterprise software solutions with focus on quality and performance.",
    highlights: [
      "Enterprise software development",
      "Full-stack development",
      "Quality-focused delivery"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Journey</h2>
          <p className="text-xl text-muted-foreground">
            15 years of driving innovation in enterprise software
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
            
            {experiences.map((exp, index) => (
              <div 
                key={exp.title}
                className="relative mb-12 animate-slide-in-right"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border-4 border-primary flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elevated)]">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{exp.location}</p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span 
                          key={highlight}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/20 text-primary"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
