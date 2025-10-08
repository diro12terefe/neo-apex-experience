import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users } from "lucide-react";
import { FaReact, FaNodeJs, FaAws, FaDocker, FaPalette, FaRocket } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPostgresql, SiFramer } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

interface TeamMember {
  name: string;
  role: string;
  skills: { name: string; icon: React.ReactNode }[];
  stack: { name: string; icon: React.ReactNode }[];
}

const teamMembers: TeamMember[] = [
  {
    name: "Firomsa Guteta",
    role: "Full-Stack Lead",
    skills: [
      { name: "Architecture", icon: <FaRocket className="w-4 h-4" /> },
      { name: "System Design", icon: <Code className="w-4 h-4" /> },
      { name: "DevOps", icon: <FaDocker className="w-4 h-4" /> },
    ],
    stack: [
      { name: "React", icon: <FaReact className="w-4 h-4" /> },
      { name: "Node.js", icon: <FaNodeJs className="w-4 h-4" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4" /> },
      { name: "AWS", icon: <FaAws className="w-4 h-4" /> },
      { name: "Docker", icon: <FaDocker className="w-4 h-4" /> },
    ],
  },
  {
    name: "Natnael Esayas",
    role: "Frontend Engineer",
    skills: [
      { name: "UI/UX", icon: <FaPalette className="w-4 h-4" /> },
      { name: "Animations", icon: <SiFramer className="w-4 h-4" /> },
      { name: "Performance", icon: <FaRocket className="w-4 h-4" /> },
    ],
    stack: [
      { name: "React", icon: <FaReact className="w-4 h-4" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="w-4 h-4" /> },
      { name: "Three.js", icon: <TbBrandThreejs className="w-4 h-4" /> },
      { name: "Framer", icon: <SiFramer className="w-4 h-4" /> },
    ],
  },
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group perspective cursor-hover"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-80 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <Card
          className={`absolute inset-0 glass-morph p-8 flex flex-col items-center justify-center text-center backface-hidden transition-all duration-500 ${
            isFlipped ? "invisible opacity-0 scale-95" : "visible opacity-100 scale-100"
          } group-hover:shadow-2xl group-hover:shadow-accent/30`}
        >
          <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/30 group-hover:rotate-6">
            <Code className="w-12 h-12 text-accent transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" />
          </div>
          <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-accent">{member.name}</h3>
          <p className="text-accent font-semibold mb-4 transition-all duration-300">{member.role}</p>
          <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:opacity-100 opacity-70">Click to reveal expertise</p>
        </Card>

        {/* Back */}
        <Card
          className={`absolute inset-0 glass-morph p-8 rotate-y-180 backface-hidden transition-all duration-500 ${
            isFlipped ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-95"
          } shadow-2xl shadow-accent/30`}
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-bold mb-3 text-accent">Core Skills</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {member.skills.map((skill, index) => (
                  <Badge 
                    key={skill.name} 
                    variant="secondary" 
                    className="bg-accent/20 text-foreground flex items-center gap-1.5 hover:bg-accent/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill.icon}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-3 text-accent">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {member.stack.map((tech, index) => (
                  <Badge 
                    key={tech.name} 
                    variant="outline" 
                    className="border-accent/50 flex items-center gap-1.5 hover:bg-accent/10 hover:border-accent transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {tech.icon}
                    {tech.name}
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
