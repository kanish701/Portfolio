import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, ArrowUpRight, Zap, MessageCircle } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Your WhatsApp Configuration
  const whatsappNumber = "919994496256";
  const message = encodeURIComponent("Hi Kanishkar, I saw your portfolio and I'd like to discuss a potential project with you.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Credentials', to: 'credentials' },
    { name: 'Works', to: 'projects' },
    { name: 'Ecosystem', to: 'skills' },
    { name: 'Experience', to: 'experience' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3 bg-white/80 dark:bg-[#0B0F1A]/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5' 
          : 'py-6 bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <ScrollLink to="hero" smooth={true} className="group cursor-pointer flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform">K</div>
              <span className="font-black text-xl tracking-tighter text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                KANISHKAR<span className="text-primary">.</span>
              </span>
            </ScrollLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-1 bg-slate-100/50 dark:bg-white/5 p-1 rounded-full border border-slate-200/50 dark:border-white/5">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  spy={true}
                  activeClass="bg-white dark:bg-slate-900 shadow-sm text-primary"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-full transition-all"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-200 dark:bg-white/10 mx-2" />

            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-primary/10 hover:text-primary transition-all">
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>

              {/* UPDATED: Hire Me -> WhatsApp Trigger */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary !py-3 !px-6 !rounded-xl !text-xs flex items-center gap-2 group shadow-lg shadow-primary/20"
              >
                Hire Me
                <MessageCircle size={14} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Mobile Trigger */}
          <div className="lg:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-slate-500">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-900 dark:text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#0B0F1A] border-b border-slate-200 dark:border-white/10 overflow-hidden"
          >
            <div className="px-8 py-12 flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }} key={item.name}>
                  <ScrollLink to={item.to} smooth={true} onClick={() => setIsMenuOpen(false)} className="text-4xl font-black tracking-tighter text-slate-900 dark:text-white hover:text-primary transition-colors">
                    {item.name}
                  </ScrollLink>
                </motion.div>
              ))}
              
              {/* UPDATED: Mobile Start Conversation -> WhatsApp Trigger */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary font-bold mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Start a Conversation <Zap size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;