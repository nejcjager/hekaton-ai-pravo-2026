import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const SpotifyCase = () => {
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
            Designing for 500 Million Listeners
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed"
          >
            Leading product design for Spotify's core listening experience, from discovery to daily rituals.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-8"
          >
            During my four years at Spotify, I worked across multiple teams to shape the{" "}
            <span className="text-primary">core listening experience</span> for hundreds of millions of users. 
            From <span className="text-primary">personalized playlists</span> to{" "}
            <span className="text-primary">seamless cross-device experiences</span>, every design decision 
            was guided by a deep understanding of how music fits into people's lives.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-lg md:text-xl text-foreground leading-relaxed mb-8"
          >
            I led the redesign of the <span className="text-primary">Now Playing</span> screen, 
            introducing dynamic visuals that respond to the music. I also worked on{" "}
            <span className="text-primary">Spotify Wrapped</span>, creating interactive experiences 
            that became cultural moments shared by millions.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="link-external inline-flex items-center gap-1 mb-16 text-lg"
          >
            spotify.com
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
              <li>• Redesigned Now Playing experience with dynamic album art visualization</li>
              <li>• Led design for Spotify Wrapped 2022 & 2023 campaigns</li>
              <li>• Created design system components for playlist creation flows</li>
              <li>• Designed cross-device handoff experiences for seamless listening</li>
              <li>• Mentored team of 4 product designers</li>
            </ul>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SpotifyCase;
