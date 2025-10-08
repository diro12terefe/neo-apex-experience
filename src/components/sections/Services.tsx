import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Code, Palette, Database, Rocket, RefreshCw, Cloud } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  technologies: string[];
  features: string[];
}

const services: Service[] = [
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    description: "End-to-end web applications built with modern frameworks and best practices.",
    icon: Code,
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "MongoDB"],
    features: [
      "Custom web applications",
      "API development & integration",
      "Real-time features",
      "Progressive Web Apps",
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Pixel-perfect, responsive interfaces that users love to interact with.",
    icon: Palette,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
    features: [
      "Responsive design",
      "Micro-interactions",
      "3D animations",
      "Performance optimization",
    ],
  },
  {
    id: "backend",
    title: "Backend Architecture",
    description: "Scalable, secure backend systems that power your business logic.",
    icon: Database,
    technologies: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
    features: [
      "RESTful & GraphQL APIs",
      "Database design",
      "Authentication & security",
      "Microservices architecture",
    ],
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality.",
    icon: Palette,
    technologies: ["Figma", "Adobe XD", "Framer", "Principle", "InVision"],
    features: [
      "User research",
      "Wireframing & prototyping",
      "Design systems",
      "Usability testing",
    ],
  },
  {
    id: "modernization",
    title: "System Modernization",
    description: "Transform legacy systems into modern, maintainable applications.",
    icon: RefreshCw,
    technologies: ["React", "Docker", "Kubernetes", "AWS", "Azure"],
    features: [
      "Legacy migration",
      "Code refactoring",
      "Performance tuning",
      "Cloud migration",
    ],
  },
  {
    id: "devops",
    title: "Deployment & DevOps",
    description: "Streamlined CI/CD pipelines and infrastructure management.",
    icon: Cloud,
    technologies: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Terraform"],
    features: [
      "CI/CD setup",
      "Cloud infrastructure",
      "Monitoring & logging",
      "Auto-scaling",
    ],
  },
];

export const Services = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section id="services" className="py-32 px-6 sm:px-8 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Full-Spectrum
            <br />
            <span className="text-accent">Digital Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we handle every aspect of your digital product with
            enterprise-grade quality.
          </p>
        </div>

        {/* Services Tabs */}
        <Tabs value={activeService} onValueChange={setActiveService} className="w-full">
          <TabsList className="glass-morph w-full flex flex-wrap justify-center gap-2 p-2 mb-12 h-auto">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="data-[state=active]:bg-accent data-[state=active]:text-primary px-6 py-3 rounded-full font-semibold transition-all"
              >
                {service.title.split(" ")[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Service Content */}
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <Card className="glass-morph p-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div>
                    <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                      <service.icon className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-4xl font-bold mb-4">{service.title}</h3>
                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-accent">Key Features</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4 text-accent">Technologies We Use</h4>
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-accent/50 px-4 py-2 text-sm font-semibold"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="glass-morph p-8 rounded-2xl border border-accent/20">
                      <p className="text-lg font-semibold mb-4">Need this service?</p>
                      <p className="text-muted-foreground mb-6">
                        Let's discuss how we can help transform your ideas into reality with
                        cutting-edge technology and best practices.
                      </p>
                      <button
                        className="bg-accent hover:bg-accent/90 text-primary font-bold px-6 py-3 rounded-full transition-colors"
                        onClick={() =>
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        Get Started →
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};
