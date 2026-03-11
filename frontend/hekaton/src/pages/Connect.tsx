import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const Connect = () => {
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
            Let's Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl md:text-2xl text-muted-foreground mb-20 leading-relaxed"
          >
            Have a project in mind? I'd love to hear about it. Reach out and let's create something extraordinary together.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-serif text-2xl text-foreground mb-8">Get in Touch</h3>
              <div className="flex flex-col gap-6">
                <a
                  href="mailto:hello@mayachen.design"
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-serif text-lg">hello@mayachen.design</span>
                </a>
                <a
                  href="https://linkedin.com/in/mayachen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="font-serif text-lg">LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://dribbble.com/mayachen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="font-serif text-lg">Dribbble</span>
                  <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://twitter.com/mayachen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="font-serif text-lg">Twitter</span>
                  <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-serif text-2xl text-foreground mb-8">Location</h3>
              <div className="flex items-start gap-3 text-muted-foreground mb-4">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-serif text-lg">San Francisco, California</p>
                  <p className="font-serif text-lg">United States</p>
                </div>
              </div>
              <p className="font-serif text-muted-foreground/70 mt-8">
                Available for remote collaborations worldwide. Open to on-site projects in the Bay Area.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-24 pt-16 border-t border-foreground/10"
          >
            <h3 className="font-serif text-2xl text-foreground mb-6">Project Inquiries</h3>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8">
              Currently accepting select projects for Q2 2026. For project inquiries, please include a brief description of your project, timeline, and budget range.
            </p>
            <a
              href="mailto:projects@mayachen.design"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-serif text-lg"
            >
              projects@mayachen.design
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Connect;
