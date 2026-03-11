import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

const team: TeamMember[] = [
  {
    name: "Maya Chen",
    role: "Founder & Design Director",
    bio: "Over a decade of experience crafting digital products and brands. Previously at Verve, Spotify, Figma, and Notion.",
  },
  {
    name: "Elena Rodriguez",
    role: "Senior Product Designer",
    bio: "Specialist in user experience and interaction design. Passionate about accessible design that works for everyone.",
  },
  {
    name: "James Liu",
    role: "Motion Designer",
    bio: "Bringing interfaces to life through thoughtful animation. Background in film and digital arts.",
  },
  {
    name: "Sarah Kim",
    role: "Brand Designer",
    bio: "Creating cohesive visual identities that resonate. Previously at Nike and Apple.",
  },
  {
    name: "Marcus Webb",
    role: "Design Engineer",
    bio: "Bridging design and development. Building design systems that scale.",
  },
  {
    name: "Priya Patel",
    role: "UX Researcher",
    bio: "Understanding users through empathy and data. Making design decisions grounded in research.",
  },
];

const People = () => {
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
            People
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl md:text-2xl text-muted-foreground mb-20 leading-relaxed"
          >
            A small team of passionate designers, researchers, and engineers working together to craft exceptional experiences.
          </motion.p>

          <div className="flex flex-col gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-foreground/10 pb-8"
              >
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary text-sm mb-4">{member.role}</p>
                <p className="font-serif text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default People;
