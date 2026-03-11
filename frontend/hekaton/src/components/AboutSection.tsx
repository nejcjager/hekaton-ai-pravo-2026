import { motion } from "framer-motion";
import heroImage from "@/assets/hero-showcase.jpg";

const AboutSection = () => {
  return (
    <section className="w-full">
      {/* Profile Section with Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="aspect-square lg:aspect-auto bg-foreground overflow-hidden"
        >
          <img
            src={heroImage}
            alt="Maya Chen"
            className="w-full h-full object-cover opacity-90"
          />
        </motion.div>

        {/* Profile Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-primary px-8 md:px-16 py-16 md:py-24 flex flex-col justify-center items-center text-center"
        >
          <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
            Maya Chen
          </h3>
          <p className="text-sm tracking-widest text-primary-foreground/80 uppercase mb-8">
            Principal
          </p>
          <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed max-w-md">
            Maya is a product design specialist with more than 12 years' experience. She brings industry-leading expertise to all stages of creative projects, from initial concepting and strategy, to prototyping, execution and post-launch optimization.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
