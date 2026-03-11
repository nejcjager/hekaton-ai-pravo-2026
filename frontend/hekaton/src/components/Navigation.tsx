import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  const location = useLocation();
  
  const getPageName = () => {
    const path = location.pathname;
    if (path === "/") return null;
    if (path === "/verve") return "verve";
    return path.slice(1).toLowerCase();
  };

  const pageName = getPageName();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-background"
    >
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Navigation Links */}
          <div className="flex items-center gap-12 text-sm tracking-wide">
            <Link to="/" className="nav-link">
              about
            </Link>
            <Link to="/people" className="nav-link">
              people
            </Link>
            <Link to="/expertise" className="nav-link">
              expertise
            </Link>
            <Link to="/connect" className="nav-link">
              connect
            </Link>
          </div>

          {/* Brand Mark */}
          <div className="flex items-center gap-6">
            <div className="text-primary">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="8" y1="8" x2="32" y2="32" stroke="currentColor" strokeWidth="2"/>
                <line x1="32" y1="8" x2="8" y2="32" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="font-serif text-2xl text-primary" style={{ writingMode: 'vertical-rl' }}>
              mayachen
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
