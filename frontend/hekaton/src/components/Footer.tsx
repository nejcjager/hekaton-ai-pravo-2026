import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border mt-24"
    >
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col gap-4 md:flex-row justify-between items-center">
        <span className="text-sm text-muted-foreground">© Maya Chen</span>
        <span className="text-sm text-muted-foreground">Made in California</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
