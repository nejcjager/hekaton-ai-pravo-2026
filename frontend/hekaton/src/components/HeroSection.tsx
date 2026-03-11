import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 pt-40 pb-24 max-w-7xl mx-auto">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="heading-display text-7xl md:text-8xl lg:text-[120px] leading-none tracking-tight mb-24"
      >
        people
      </motion.h2>

      {/* Main Statement */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl"
      >
        <p className="font-serif text-3xl md:text-4xl lg:text-[42px] leading-snug text-foreground mb-8">
          Maya was born with an inquisitive mind. After 12 years serving as a product designer, she asked herself why she should still follow the antiquated processes of traditional design studios.
        </p>
        <p className="font-serif text-3xl md:text-4xl lg:text-[42px] leading-snug text-primary">
          The answer was, she shouldn't.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
