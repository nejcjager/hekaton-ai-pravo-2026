import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface ExpertiseArea {
  title: string;
  description: string;
  services: string[];
}

const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Product Design",
    description: "End-to-end product design from discovery to delivery. Creating intuitive interfaces that users love.",
    services: ["User Research", "Interaction Design", "Prototyping", "Usability Testing", "Design Systems"],
  },
  {
    title: "Brand Identity",
    description: "Building memorable brands that stand out. From visual identity to voice and tone.",
    services: ["Logo Design", "Visual Identity", "Brand Guidelines", "Art Direction", "Naming"],
  },
  {
    title: "Motion Design",
    description: "Bringing interfaces and stories to life through thoughtful animation and movement.",
    services: ["UI Animation", "Micro-interactions", "Motion Systems", "Video Production", "3D Animation"],
  },
  {
    title: "Creative Direction",
    description: "Leading creative vision across projects. Ensuring cohesive experiences at every touchpoint.",
    services: ["Creative Strategy", "Campaign Direction", "Visual Storytelling", "Team Leadership", "Client Collaboration"],
  },
];

const Expertise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="min-h-screen pt-40 pb-24 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display text-5xl md:text-6xl lg:text-7xl mb-8"
          >
            Expertise
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl md:text-2xl text-muted-foreground mb-20 leading-relaxed"
          >
            We bring together diverse skills and perspectives to solve complex design challenges with clarity and purpose.
          </motion.p>

          <div className="flex flex-col gap-16">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-foreground/10 pb-12"
              >
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  {area.title}
                </h3>
                <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-6">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {area.services.map((service) => (
                    <span
                      key={service}
                      className="text-sm text-primary border border-primary/30 px-3 py-1 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Expertise;
