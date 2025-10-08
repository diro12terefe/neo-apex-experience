import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  skills: string[];
  stack: string[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Firomsa Guteta",
    role: "Full-Stack Lead",
    skills: ["Architecture", "System Design", "DevOps"],
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    name: "Natnael Esayas",
    role: "Frontend Engineer",
    skills: ["UI/UX", "Animations", "Performance"],
    stack: ["React", "TypeScript", "Tailwind", "Three.js", "Framer"],
  },
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group perspective cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-80 transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <Card
          className={`absolute inset-0 glass-morph p-8 flex flex-col items-center justify-center text-center backface-hidden ${
            isFlipped ? "invisible" : "visible"
          }`}
        >
          <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mb-6">
            <Code className="w-12 h-12 text-accent" />
          </div>
          <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
          <p className="text-accent font-semibold mb-4">{member.role}</p>
          <p className="text-sm text-muted-foreground">Click to reveal expertise</p>
        </Card>

        {/* Back */}
        <Card
          className={`absolute inset-0 glass-morph p-8 rotate-y-180 backface-hidden ${
            isFlipped ? "visible" : "invisible"
          }`}
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold mb-3 text-accent">Core Skills</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {member.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-accent/20 text-foreground">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3 text-accent">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {member.stack.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-accent/50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 animate-fade-in">
            Elite Team.
            <br />
            <span className="text-accent">Exceptional Results.</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Led by senior engineers with years of experience building products for startups and
            Fortune 500 companies.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}

          {/* Additional Team Members Card */}
          <Card className="glass-morph p-8 flex flex-col items-center justify-center text-center">
            <Users className="w-16 h-16 text-accent mb-6" />
            <h3 className="text-3xl font-bold mb-2">+6</h3>
            <p className="text-xl font-semibold mb-2">Elite Developers</p>
            <p className="text-sm text-muted-foreground">
              Specialized in backend, mobile, AI, and blockchain technologies
            </p>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};
