import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Verve",
    role: "Design Director",
    period: "2024–Present",
    link: "/verve",
  },
  {
    company: "Spotify",
    role: "Staff Designer",
    period: "2020–2024",
    link: "/spotify",
  },
  {
    company: "Figma",
    role: "Senior Designer",
    period: "2016–2020",
    link: "/figma",
  },
  {
    company: "Notion",
    role: "Senior Designer",
    period: "2012–2016",
    link: "/notion",
  },
];

const ExperienceCard = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="experience-card group"
    >
      <div className="flex-1 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-serif text-2xl md:text-3xl text-foreground">{item.company}</span>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-muted-foreground">{item.period}</span>
            <span className="text-muted-foreground/40">·</span>
            <span className="text-muted-foreground">{item.role}</span>
          </div>
        </div>
        {item.link && (
          <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        )}
      </div>
    </motion.div>
  );

  if (item.link) {
    return <Link to={item.link}>{content}</Link>;
  }
  return content;
};

const ExperienceSection = () => {
  return (
    <section className="section-container">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        experience
      </motion.h3>
      <div className="flex flex-col">
        {experiences.map((item, index) => (
          <ExperienceCard key={item.company} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
