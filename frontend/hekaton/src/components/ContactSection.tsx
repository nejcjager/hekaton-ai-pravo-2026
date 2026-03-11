import { motion } from "framer-motion";
import { Mail, Linkedin, Dribbble, ArrowUpRight, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const sfTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(sfTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "hello@mayachen.design",
      href: "mailto:hello@mayachen.design",
      external: false,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      text: "linkedin.com/in/mayachen",
      href: "https://linkedin.com/in/mayachen",
      external: true,
    },
    {
      icon: <Dribbble className="w-5 h-5" />,
      text: "dribbble.com/mayachen",
      href: "https://dribbble.com/mayachen",
      external: true,
    },
  ];

  return (
    <section className="section-container">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        connect
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="font-serif text-2xl text-foreground mb-8">Get in touch</h4>
          <div className="flex flex-col gap-2">
            {contacts.map((contact) => (
              <a
                key={contact.text}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 py-3 group border-b border-border"
              >
                <span className="text-primary">{contact.icon}</span>
                <span className="text-base text-muted-foreground group-hover:text-primary transition-colors duration-200">
                  {contact.text}
                </span>
                {contact.external && (
                  <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto" />
                )}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h4 className="font-serif text-2xl text-foreground mb-8">Location</h4>
          <div className="flex items-center gap-4 py-3 border-b border-border">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-base text-muted-foreground flex items-center gap-2">
              San Francisco, USA <span className="text-xl">🇺🇸</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            {currentTime} local time
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
