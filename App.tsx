import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Narrative } from './components/Narrative';
import { PropertyShowcase } from './components/PropertyShowcase';
import { Community } from './components/Community';
import { Footer } from './components/Footer';

function App() {
  // Simple intersection observer to trigger fade-in animations on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('section > div');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Narrative />
        <PropertyShowcase />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;