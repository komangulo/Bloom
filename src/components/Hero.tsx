import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Lock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const floatingCirclesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating circles animation
    const createFloatingCircles = () => {
      if (!floatingCirclesRef.current) return;
      
      const container = floatingCirclesRef.current;
      container.innerHTML = ''; // Clear previous circles
      
      const colors = [
        'rgba(236, 72, 153, 0.2)', // pink
        'rgba(196, 69, 228, 0.2)', // purple
        'rgba(236, 72, 153, 0.15)', // light pink
        'rgba(196, 69, 228, 0.15)', // light purple
      ];
      
      // Create 10 random circles
      for (let i = 0; i < 10; i++) {
        const circle = document.createElement('div');
        circle.classList.add('floating-circle');
        
        // Random properties
        const size = Math.random() * 200 + 100;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const animationDelay = Math.random() * 5;
        const animationDuration = Math.random() * 15 + 20;
        
        // Apply styles
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${x}%`;
        circle.style.top = `${y}%`;
        circle.style.backgroundColor = color;
        circle.style.animationDelay = `${animationDelay}s`;
        circle.style.animationDuration = `${animationDuration}s`;
        
        // Add animation class
        circle.style.animation = `float ${animationDuration}s ease-in-out infinite`;
        circle.style.opacity = '0.3';
        circle.style.transform = 'translateY(0)';
        
        container.appendChild(circle);
      }
    };
    
    createFloatingCircles();
    
    // Recreate on resize
    window.addEventListener('resize', createFloatingCircles);
    return () => window.removeEventListener('resize', createFloatingCircles);
  }, []);

  return (
    <div className="relative overflow-hidden hero-gradient">
      <div ref={floatingCirclesRef} className="floating-circles"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Bloom</span> - Your Privacy-First Reproductive Health Companion
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-700 dark:text-gray-300">
            Track your cycle, understand your fertility, and take control of your reproductive health—without compromising your privacy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/signup">
              <Button size="lg" className="bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600 text-white min-w-[160px] h-12">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
            <Button size="lg" variant="outline" className="border-bloom-300 dark:border-bloom-700 min-w-[160px] h-12">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center animate-float">
              <div className="h-12 w-12 rounded-full bg-bloom-100 dark:bg-bloom-900/30 flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-bloom-500" />
              </div>
              <h3 className="text-lg font-medium mb-2">Complete Privacy</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                All calculations done on your device, not our servers. Your data never leaves your device.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-medium mb-2">Easy Tracking</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Predict periods and ovulation with our intuitive calendar interface. Stay prepared.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="h-12 w-12 rounded-full bg-bloom-100 dark:bg-bloom-900/30 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-bloom-500" />
              </div>
              <h3 className="text-lg font-medium mb-2">Understand Fertility</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Learn your fertile days to either maximize chances of conception or practice informed family planning.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-background"></div>
    </div>
  );
}
