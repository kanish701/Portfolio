import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate Visibility
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);

      // 2. Calculate Scroll Progress Percentage
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (scrolled / height) * 100;
      setProgress(scrolledPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SVG Circle Logic: Circumference of a circle with radius 18 is ~113
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-10 right-10 z-50"
        >
          <Link
            to="hero"
            smooth={true}
            duration={800}
            className="relative group flex items-center justify-center w-14 h-14 cursor-pointer"
            aria-label="Scroll to top"
          >
            {/* The Radial Progress Background */}
            <svg className="absolute w-full h-full -rotate-90 transform">
              <circle
                cx="28"
                cy="28"
                r={radius}
                fill="transparent"
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-200 dark:text-white/10"
              />
              <motion.circle
                cx="28"
                cy="28"
                r={radius}
                fill="transparent"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray={circumference}
                animate={{ strokeDashoffset: offset }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="text-primary"
              />
            </svg>

            {/* The Inner Button */}
            <div className="w-10 h-10 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-xl border border-slate-100 dark:border-white/5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </div>

            {/* Hover Tooltip (UX Polish) */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md">
              Top
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;