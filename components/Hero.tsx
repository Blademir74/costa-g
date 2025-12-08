import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  description?: string;
  image?: string;
  images?: string[];
}

const Hero: React.FC<HeroProps> = ({ title, description, image, images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define slides
  const displayImages = images && images.length > 0 
    ? images 
    : [
        image || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000', 
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000', 
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000', 
      ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  }, [displayImages.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-costa-navy group">
      
      {/* Carousel Images */}
      {displayImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={img}
            alt={`${title} - slide ${index + 1}`}
            fill
            priority={index === 0} // Load first image immediately (LCP optimization)
            sizes="100vw"
            className="object-cover"
            quality={85}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-costa-navy/90 via-costa-navy/50 to-costa-sky/10 mix-blend-multiply"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={32} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300"
        aria-label="Next Slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-fade-in-up drop-shadow-lg">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto animate-fade-in-up delay-100 drop-shadow-md">
            {description}
          </p>
        )}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
        {displayImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-costa-gold w-8' 
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;