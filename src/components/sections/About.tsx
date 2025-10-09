import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Palette, Zap, Rocket, Award, Clock, Heart } from "lucide-react";

// PROPER TECH ICONS
import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiFramer,
  SiNextdotjs,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiJest,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  skills: string[];
  stack: { name: string; icon: React.ReactNode; level: number }[];
  icon: React.ReactNode;
  gradient: string;
  type: "backend" | "frontend";
  quickTech: React.ReactNode[];
}

const TeamCard = ({ member }: { member: TeamMember }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isBackend = member.type === "backend";
  const mainColor = isBackend ? "blue" : "purple";
  const hoverShadow = isBackend
    ? "hover:shadow-blue-500/10"
    : "hover:shadow-purple-500/10";
  const dotColor = isBackend ? "bg-blue-400" : "bg-purple-400";
  const middleDotColor = isBackend ? "bg-cyan-400" : "bg-pink-400";

  return (
    <div
      className="group perspective cursor-pointer h-80"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-all duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side - DYNAMIC BASED ON MEMBER TYPE */}
        <Card
          className={`absolute inset-0 bg-gradient-to-br from-card via-accent/5 to-card/80 border border-border rounded-xl p-8 flex flex-col items-center justify-center text-center backface-hidden shadow-lg hover:shadow-accent/10 transition-all duration-300 group`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className={`absolute top-4 right-4 w-8 h-8 border-2 border-${mainColor}-500 rounded-full`}
            ></div>
            <div
              className={`absolute bottom-4 left-4 w-6 h-6 border border-${mainColor}-300 rotate-45`}
            ></div>
          </div>

          {/* Avatar Container */}
          <div className="relative mb-6">
            <div
              className={`w-20 h-20 rounded-xl bg-gradient-to-br from-${mainColor}-600 to-${
                isBackend ? "cyan" : "pink"
              }-500 flex items-center justify-center shadow-lg shadow-${mainColor}-500/30 group-hover:shadow-${mainColor}-500/50 group-hover:scale-105 transition-all duration-300`}
            >
              <div className="text-white">{member.icon}</div>
            </div>
            {/* Active Indicator */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-card rounded-full animate-pulse"></div>
          </div>

          {/* Name & Role */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
              {member.name}
            </h3>
            <div className="flex items-center justify-center gap-2 text-muted-foreground font-medium text-sm">
              <div className="w-1 h-1 bg-accent rounded-full"></div>
              {member.role}
            </div>
          </div>

          {/* Quick Tech Stack */}
          <div className="flex items-center gap-3 mb-6 opacity-80">
            {member.quickTech}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full border border-border">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-muted-foreground">
              Available for projects
            </span>
          </div>

          {/* Hover Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div
              className={`w-1 h-1 ${dotColor} rounded-full animate-bounce`}
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className={`w-1 h-1 ${middleDotColor} rounded-full animate-bounce`}
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className={`w-1 h-1 ${dotColor} rounded-full animate-bounce`}
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </Card>

        {/* Back - TECH STACK HEAVEN */}
        <Card className="absolute inset-0 bg-gradient-to-br from-card to-card/80 border border-border rounded-2xl p-6 rotate-y-180 backface-hidden shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/70" />

          <div className="h-full flex flex-col">
            <h4 className="text-lg font-bold mb-4 text-foreground flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              Tech Stack Mastery
            </h4>

            <div className="space-y-3 flex-1 overflow-y-auto">
              {member.stack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl text-muted-foreground transform group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {tech.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div
                        key={star}
                        className={`w-2 h-2 rounded-full ${
                          star <= tech.level
                            ? "bg-accent shadow-lg shadow-accent/25"
                            : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex flex-wrap gap-1">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-muted/50 rounded-lg text-xs text-muted-foreground border border-border"
                  >
                    {skill}
                  </span>
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
  const teamMembers: TeamMember[] = [
    {
      name: "Firomsa Guteta",
      role: "Full-Stack Architect",
      type: "backend",
      skills: [
        "System Design",
        "Cloud Architecture",
        "DevOps",
        "Database Optimization",
      ],
      stack: [
        {
          name: "React",
          icon: <SiReact className="text-cyan-400" />,
          level: 5,
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs className="text-green-500" />,
          level: 5,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-500" />,
          level: 5,
        },
        {
          name: "AWS",
          icon: <FaAws className="text-orange-500" />,
          level: 4,
        },
        {
          name: "Docker",
          icon: <SiDocker className="text-blue-400" />,
          level: 5,
        },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="text-blue-500" />,
          level: 4,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
          level: 5,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white" />,
          level: 5,
        },
      ],
      quickTech: [
        <SiReact className="text-cyan-400 text-lg" key="react" />,
        <SiNodedotjs className="text-green-500 text-lg" key="node" />,
        <SiPostgresql className="text-blue-400 text-lg" key="postgres" />,
        <FaAws className="text-orange-400 text-lg" key="aws" />,
      ],
      icon: <Cpu className="w-8 h-8" />,
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
    },
    {
      name: "Natnael Esayas",
      role: "Frontend Specialist",
      type: "frontend",
      skills: ["UI/UX Design", "Performance", "Animations", "Design Systems"],
      stack: [
        {
          name: "React",
          icon: <SiReact className="text-cyan-400" />,
          level: 5,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
          level: 5,
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="text-cyan-400" />,
          level: 5,
        },
        {
          name: "Three.js",
          icon: <SiThreedotjs className="text-white" />,
          level: 4,
        },
        {
          name: "Framer",
          icon: <SiFramer className="text-pink-500" />,
          level: 5,
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-white" />,
          level: 5,
        },
        { name: "Jest", icon: <SiJest className="text-red-500" />, level: 4 },
        {
          name: "GraphQL",
          icon: <SiGraphql className="text-pink-500" />,
          level: 4,
        },
      ],
      quickTech: [
        <SiReact className="text-cyan-400 text-lg" key="react" />,
        <SiTypescript className="text-blue-500 text-lg" key="ts" />,
        <SiTailwindcss className="text-cyan-300 text-lg" key="tailwind" />,
        <SiFramer className="text-pink-400 text-lg" key="framer" />,
      ],
      icon: <Palette className="w-8 h-8" />,
      gradient: "from-purple-500 via-pink-500 to-purple-600",
    },
  ];

  const additionalTeam = [
    {
      role: "Backend Engineer",
      tech: ["Python", "FastAPI", "MongoDB"],
      icon: <SiPython className="text-yellow-500" />,
    },
    {
      role: "DevOps Engineer",
      tech: ["AWS", "Docker", "Kubernetes"],
      icon: <SiDocker className="text-blue-400" />,
    },
    {
      role: "Mobile Developer",
      tech: ["React Native", "TypeScript"],
      icon: <SiReact className="text-cyan-400" />,
    },
    {
      role: "AI/ML Engineer",
      tech: ["Python", "TensorFlow"],
      icon: <Cpu className="text-green-500" />,
    },
    {
      role: "UX Designer",
      tech: ["Figma", "Prototyping"],
      icon: <Palette className="text-pink-500" />,
    },
    {
      role: "QA Engineer",
      tech: ["Testing", "Automation"],
      icon: <SiJest className="text-red-500" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden bg-gradient-to-br from-background via-primary/10 to-background"
    >
      {/* ANIMATED BACKGROUND THAT WILL BLOW MINDS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-500" />

        {/* FLOATING TECH ICONS */}
        <div className="absolute top-1/4 left-10 animate-float">
          <SiReact className="text-cyan-400/20 text-4xl" />
        </div>
        <div className="absolute top-1/3 right-20 animate-float delay-1000">
          <SiNodedotjs className="text-green-500/20 text-4xl" />
        </div>
        <div className="absolute bottom-1/4 left-20 animate-float delay-500">
          <SiTypescript className="text-blue-600/20 text-4xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER THAT COMMANDS RESPECT */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-muted/50 rounded-full border border-border">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
              The Apex Engineers
            </span>
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-500" />
          </div>

          <h2 className="text-6xl sm:text-8xl font-black mb-8">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              WE BUILD
            </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-accent/80 to-accent/60 bg-clip-text text-transparent">
              DIGITAL EMPIRES
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Senior engineers who don't just write code—we architect systems that
            power millions of users. From startups to Fortune 500, we deliver
            excellence that scales.
          </p>
        </div>

        {/* TEAM GRID THAT LOOKS LIKE A MILLION BUCKS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}

          {/* ADDITIONAL TEAM - PURE FIRE */}
          <Card className="bg-gradient-to-br from-card to-card/80 border border-border rounded-2xl p-8 shadow-2xl group hover:scale-105 transition-all duration-500">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-accent to-accent/70 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-accent/25 transition-shadow">
                <Rocket className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-4xl font-black mb-2 bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">
                +6
              </h3>
              <p className="text-xl font-bold text-foreground mb-1">
                Specialized Engineers
              </p>
              <p className="text-muted-foreground text-sm">
                Elite talent across all domains
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {additionalTeam.map((member, index) => (
                <div
                  key={index}
                  className="text-center group/item hover:scale-105 transition-transform"
                >
                  <div className="text-2xl mb-2 transform group-hover/item:rotate-12 transition-transform">
                    {member.icon}
                  </div>
                  <p className="text-xs font-semibold text-foreground mb-1">
                    {member.role}
                  </p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.tech.map((tech) => (
                      <span key={tech} className="text-[10px] text-muted-foreground">
                        •{tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* STATS THAT DON'T FUCK AROUND */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Rocket className="w-6 h-6" />,
              value: "50+",
              label: "Projects Shipped",
            },
            {
              icon: <Award className="w-6 h-6" />,
              value: "8+",
              label: "Years Experience",
            },
            {
              icon: <Heart className="w-6 h-6" />,
              value: "100%",
              label: "Client Satisfaction",
            },
            {
              icon: <Clock className="w-6 h-6" />,
              value: "24/7",
              label: "Elite Support",
            },
          ].map((stat, index) => (
            <Card
              key={stat.label}
              className="bg-gradient-to-br from-card to-card/80 border border-border rounded-2xl p-6 text-center group hover:scale-105 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl group-hover:shadow-accent/30 transition-shadow">
                <div className="text-accent-foreground">{stat.icon}</div>
              </div>
              <div className="text-2xl font-black text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
