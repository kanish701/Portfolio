import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-40 transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <Link
        to="hero"
        smooth={true}
        duration={500}
        className="flex items-center justify-center w-12 h-12 bg-primary dark:bg-primary-dark text-white rounded-full shadow-lg cursor-pointer hover:bg-primary/90 dark:hover:bg-primary-dark/90 transition-colors"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </Link>
    </div>
  );
};

export default ScrollToTop;