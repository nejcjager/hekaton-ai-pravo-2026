import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import caseImage1 from "@/assets/verve-case-1.jpg";
import caseImage2 from "@/assets/verve-case-2.jpg";
import caseImage3 from "@/assets/verve-case-3.jpg";

const VerveCase = () => {
  const images = [caseImage1, caseImage2, caseImage3];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="min-h-screen pt-40 pb-24 px-8">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight"
          >
            Reimagining Creative Collaboration
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed"
          >
            Verve is the new standard for how creative teams can ideate, prototype, and ship design work together.
          </motion.p>

          {/* Body */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-8"
          >
            As part of Verve's founding design team, I helped craft a{" "}
            <span className="text-primary">next-generation collaborative design platform</span> from the ground up. 
            I led early <span className="text-primary">product design</span>,{" "}
            <span className="text-primary">experience design</span>,{" "}
            <span className="text-primary">design systems</span>, and{" "}
            <span className="text-primary">visual identity</span>, shaping a tool now trusted by teams worldwide to ideate, iterate, and ship with confidence.
          </motion.p>

          {/* External Link */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            href="https://verve.design"
            target="_blank"
            rel="noopener noreferrer"
            className="link-external inline-flex items-center gap-1 mb-16 text-lg"
          >
            verve.design
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Image Gallery */}
        <div className="my-24 flex flex-col gap-6 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <img
                src={image}
                alt={`Verve case study image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VerveCase;
