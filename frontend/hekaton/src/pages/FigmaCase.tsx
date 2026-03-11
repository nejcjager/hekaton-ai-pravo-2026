import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const FigmaCase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="min-h-screen pt-40 pb-24 px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight"
          >
            Building the Future of Design Tools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed"
          >
            Shaping core editing experiences and design systems at Figma during its hypergrowth years.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-8"
          >
            Joining Figma when the team was still small gave me the opportunity to shape fundamental 
            aspects of the product. I worked on the <span className="text-primary">component system</span>, 
            helping designers create reusable design elements that would scale across entire organizations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-8"
          >
            My focus areas included <span className="text-primary">auto-layout</span>,{" "}
            <span className="text-primary">constraints</span>, and the early foundations of what 
            would become <span className="text-primary">variants</span>. These features transformed 
            how designers think about responsive design and design systems.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            href="https://figma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-external inline-flex items-center gap-1 mb-16 text-lg"
          >
            figma.com
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 pt-16 border-t border-foreground/10"
          >
            <h3 className="font-serif text-2xl text-foreground mb-6">Key Contributions</h3>
            <ul className="font-serif text-lg text-muted-foreground space-y-4">
              <li>• Designed and shipped Auto-layout v1 and v2</li>
              <li>• Created foundational component editing experiences</li>
              <li>• Built internal design system used across all Figma products</li>
              <li>• Contributed to FigJam's early concepting and prototyping</li>
              <li>• Grew with team from 50 to 800+ employees</li>
            </ul>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FigmaCase;
