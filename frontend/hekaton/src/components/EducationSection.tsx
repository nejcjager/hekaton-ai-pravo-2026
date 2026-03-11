import { motion } from "framer-motion";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

const education: EducationItem[] = [
  {
    degree: "Master of Fine Arts (M.F.A.)",
    institution: "Rhode Island School of Design",
    period: "2010–2012",
  },
  {
    degree: "Interaction Design",
    institution: "Copenhagen Institute of Interaction Design",
    period: "2011–2012",
  },
];

const EducationSection = () => {
  return (
    <section className="section-container">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        education
      </motion.h3>
      <div className="flex flex-col gap-10">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-border pb-6"
          >
            <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
              <span className="font-serif text-xl md:text-2xl text-foreground">{item.degree}</span>
              <span className="text-sm text-muted-foreground">{item.period}</span>
            </div>
            <span className="text-sm text-muted-foreground">{item.institution}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
