import React, { useCallback } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { Download, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles
        id="tsparticles"
        className="particles-container"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#6366f1",
            },
            links: {
              color: "#6366f1",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          KANISHKAR D
        </h1>
        
        <div className="h-12 flex justify-center items-center">
          <TypeAnimation
            sequence={[
              'Code.',
              1000,
              'Code. Analyze.',
              1000,
              'Code. Analyze. Innovate.',
              3000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-xl sm:text-2xl md:text-3xl text-primary dark:text-primary-dark font-bold"
          />
        </div>
        
        <p className="text-md sm:text-lg md:text-xl mt-6 mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Final-year AI&DS student | WordPress Dev | Aspiring Analyst
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="/public/Kanishkar.D Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary glow flex items-center justify-center gap-2"
            download
          >
            <Download size={18} />
            Download Resume
          </a>
          
          <ScrollLink
            to="contact"
            smooth={true}
            duration={800}
            offset={-70}
            className="btn btn-secondary flex items-center justify-center gap-2 cursor-pointer"
          >
            Let's Connect
            <ArrowRight size={18} />
          </ScrollLink>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ScrollLink to="about" smooth={true} duration={800} className="cursor-pointer">
          <div className="w-8 h-14 rounded-full border-2 border-gray-400 dark:border-gray-500 flex justify-center">
            <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-float"></div>
          </div>
        </ScrollLink>
      </div>
    </section>
  );
};

export default Hero;