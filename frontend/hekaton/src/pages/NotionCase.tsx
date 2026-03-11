import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const NotionCase = () => {
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
            Crafting the All-in-One Workspace
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed"
          >
            Defining the visual language and core experiences for Notion's early product development.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-8"
          >
            As one of the first designers at Notion, I helped establish the{" "}
            <span className="text-primary">visual identity</span> and{" "}
            <span className="text-primary">interaction patterns</span> that would define the product. 
            The challenge was creating a system flexible enough to support notes, databases, wikis, 
            and everything in between.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-8"
          >
            I designed the <span className="text-primary">block-based editor</span> interactions, 
            the <span className="text-primary">sidebar navigation</span>, and early versions of{" "}
            <span className="text-primary">database views</span>. These foundations continue to 
            serve millions of users who organize their work and lives with Notion.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            href="https://notion.so"
            target="_blank"
            rel="noopener noreferrer"
            className="link-external inline-flex items-center gap-1 mb-16 text-lg"
          >
            notion.so
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
              <li>• Designed block-based content editing interactions</li>
              <li>• Created sidebar navigation and page hierarchy UX</li>
              <li>• Established early visual design language and typography system</li>
              <li>• Designed initial database views (table, board, list)</li>
              <li>• Built illustration system for empty states and onboarding</li>
            </ul>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotionCase;
