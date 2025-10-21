import { Card } from "@/components/ui/card";
import { Brain, Code, Rocket, Users, Database, Zap } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "AI Integration Expert",
    description: "Integrated OpenAI solutions into enterprise-grade products, embedding intelligent automation and LLMs to optimize operations",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Code,
    title: "Frontend Architecture",
    description: "UI Architect across 8 Scrum teams, specializing in Angular, TypeScript, and modern SPA development",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Rocket,
    title: "Industrial Automation",
    description: "Deep expertise in GE Proficy suite, ThingWorx IoT platform, and manufacturing optimization systems",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description: "Proven track record guiding cross-functional teams, mentoring interns, and maintaining technical excellence",
    color: "from-green-500 to-teal-500"
  },
  {
    icon: Database,
    title: "Full Stack Development",
    description: "End-to-end project lifecycle management with expertise in Node.js, .NET, and cloud infrastructure",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Zap,
    title: "DevOps & Quality",
    description: "Hands-on with Git, Jenkins, CI/CD pipelines, code reviews, and strategic design pattern decisions",
    color: "from-blue-500 to-cyan-500"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Expertise</h2>
          <p className="text-xl text-muted-foreground">
            A unique blend of technical depth, leadership acumen, and domain expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-elevated)] group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {skill.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
