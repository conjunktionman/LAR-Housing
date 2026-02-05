import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* Background Image - Architectural Render style */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2600&auto=format&fit=crop" 
          alt="Architectural Render of The Barracks" 
          className="w-full h-full object-cover grayscale-[20%] brightness-[0.95]"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Floating Content Box - Swiss Style Layout */}
      <div className="absolute bottom-16 left-6 md:bottom-24 md:left-24 max-w-xl z-20">
        <div className="bg-white p-8 md:p-12 shadow-2xl animate-[fadeInUp_1s_ease-out]">
          <h1 className="font-serif text-4xl md:text-6xl text-deep-charcoal leading-[1.1] mb-6 tracking-tight">
            A Legacy <br/> Reclaimed.
          </h1>
          <div className="h-px w-24 bg-dusty-blue mb-6"></div>
          <p className="font-sans text-deep-charcoal/80 text-sm md:text-base leading-relaxed tracking-wide mb-0">
            THE BARRACKS AT PORT EDGAR
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 md:right-12 z-20 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" strokeWidth={1} />
      </div>
    </header>
  );
};