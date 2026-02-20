import React, { useCallback } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine } from 'tsparticles-engine';
import { Sparkles, Star } from 'lucide-react';
// Use your existing image here
import kanishImage from '../assets/image/kanish.jpg'; 

const Hero: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-20 pb-10 flex flex-col items-center justify-center bg-white dark:bg-[#0B0F1A] transition-colors duration-500 overflow-hidden">
      
      {/* 1. Dynamic Particles - Subtle contrast for both modes */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 120,
          particles: {
            color: { value: "#6366f1" },
            links: {
              color: "#6366f1",
              distance: 200,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: { enable: true, speed: 0.4, direction: "none", outModes: "out" },
            number: { value: 20, density: { enable: true, area: 1000 } },
            opacity: { value: 0.2 },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />

      {/* 2. Decorative Neon Sparks (Activated for both modes) */}
      {/* <div className="absolute top-40 left-[10%] text-[#BEF264] opacity-40 dark:opacity-60 animate-pulse">
        <Sparkles size={60} strokeWidth={1} />
      </div>
      <div className="absolute bottom-40 right-[10%] text-[#BEF264] opacity-40 dark:opacity-60">
        <Sparkles size={40} strokeWidth={1} className="rotate-45" />
      </div> */}

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* 3. Responsive Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] transition-colors">
            Empowering Brands <br />
            <span className="text-slate-900/30 dark:text-white/20 transition-colors">Through Creative Solutions</span>
          </h1>
        </motion.div>

        {/* 4. The Grid Row */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-4">
          
          {/* Left Side: Sub-description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 text-left order-2 lg:order-1"
          >
            <div className="text-primary dark mb-4">
              <Sparkles size={24} />
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed transition-colors">
              From web development to branding, I deliver innovative strategies that elevate your brand and drive growth. Let’s create something exceptional together.
            </p>
            <button className="mt-8 px-8 py-3 rounded-full border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all flex items-center gap-2">
              Innovate Your Brand
            </button>
          </motion.div>

          {/* Center: The Capsule Profile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="lg:col-span-6 flex justify-center relative order-1 lg:order-2"
          >
            {/* Visual Depth Circle */}
            <div className="absolute inset-0 bg-slate-100 dark:bg-white/5 rounded-full scale-90 -z-10 transition-colors" />
            
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] overflow-hidden rounded-full border-[12px] border-white dark:border-slate-800 shadow-2xl transition-all">
              <img 
                src={kanishImage} 
                alt="Kanishkar D" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Action Buttons */}
            <div className="absolute bottom-6 flex gap-3 bg-black/80 dark:bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
              <button className="bg-white dark:bg-primary dark:text-white text-black px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">
                Start Your Project
              </button>
              <ScrollLink to="contact" smooth={true} className="text-white dark:text-white px-6 py-3 rounded-full text-xs font-bold border border-white/20 hover:bg-white/10 cursor-pointer transition-colors">
                Let's Collaborate
              </ScrollLink>
            </div>
          </motion.div>

          {/* Right Side: Experience Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 flex flex-col items-start lg:items-end text-left lg:text-right order-3"
          >
            <div className="flex gap-1 mb-2">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={18} className="fill-white text-primary" />
              ))}
            </div>
            <h4 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter transition-colors">1+ Years</h4>
            <p className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-1 transition-colors">Professional Experience</p>
            {/* <div className="mt-6 text-[#BEF264]">
               <ArrowUpRight size={48} strokeWidth={1} />
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Glow - Changes color based on mode */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-black/20 to-transparent opacity-50" />
    </section>
  );
};

export default Hero;