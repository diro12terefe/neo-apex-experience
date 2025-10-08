import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    title: "TalkASTU University Platform",
    description:
      "Comprehensive learning management system connecting 15,000+ students with real-time collaboration, video streaming, and AI-powered study tools.",
    category: "EdTech Platform",
    technologies: ["React", "Node.js", "WebRTC", "PostgreSQL", "AWS"],
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Clinic Management System",
    description:
      "Enterprise healthcare solution managing patient records, appointments, billing, and telemedicine for 50+ clinics across the region.",
    category: "Healthcare SaaS",
    technologies: ["Next.js", "Python", "MongoDB", "Redis", "Docker"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "YC Directory",
    description:
      "Modern startup discovery platform featuring 5,000+ Y Combinator companies with advanced search, filtering, and analytics dashboard.",
    category: "B2B Platform",
    technologies: ["React", "TypeScript", "GraphQL", "Elasticsearch", "Kubernetes"],
    gradient: "from-orange-500 to-red-600",
  },
];

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-32 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Featured
            <br />
            <span className="text-accent">Case Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world projects that showcase our commitment to excellence and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group glass-morph p-0 overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-500"
            >
              {/* Gradient Header */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 right-4">
                  <ExternalLink className="w-6 h-6 text-white opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-4 left-6">
                  <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6">{project.description}</p>

                <div>
                  <p className="text-sm font-semibold mb-3 text-accent">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-accent/30 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 glass-morph rounded-3xl p-12">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">&lt;2s</div>
              <div className="text-muted-foreground">Average Load Time</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">90+</div>
              <div className="text-muted-foreground">Lighthouse Score</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
    </section>
  );
};
