import { Card } from "@/components/ui/card";
import { Target, Briefcase, Users, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "End-to-End Ownership",
    description:
      "We handle everything from initial concept and design through development, testing, deployment, and ongoing support.",
  },
  {
    icon: Briefcase,
    title: "Enterprise Quality",
    description:
      "Production-ready code with comprehensive testing, documentation, and security best practices from day one.",
  },
  {
    icon: Users,
    title: "Business-Minded Developers",
    description:
      "We don't just write code – we understand your business goals and build solutions that drive real results.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Regular updates, clear timelines, and direct access to our team. You're always in the loop.",
  },
];

export const WhyChoose = () => {
  return (
    <section className="py-32 px-6 sm:px-8 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            Why Choose
            <br />
            <span className="text-accent">APEX</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just developers – we're your strategic technology partner committed to your
            success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="glass-morph p-8 group hover:border-accent/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Process Timeline */}
        <div className="mt-20 glass-morph rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-12 text-center">Our Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision" },
              { step: "02", title: "Design", desc: "Crafting the experience" },
              { step: "03", title: "Development", desc: "Building with precision" },
              { step: "04", title: "Delivery", desc: "Launch and support" },
            ].map((phase, index) => (
              <div key={phase.step} className="text-center relative">
                <div className="text-6xl font-bold text-accent/20 mb-4">{phase.step}</div>
                <h4 className="text-xl font-bold mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-accent/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
