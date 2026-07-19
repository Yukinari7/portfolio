'use client';

import { useState, useEffect } from 'react';

interface ImageModalProps {
  images: Array<{ image: string; label: string;}>;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  onClose: () => void;
}

export default function ImageModal({ images, currentIndex, setCurrentIndex, onClose }: ImageModalProps) {
  
  // 1. NAVIGATION LOGIC
  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents clicking the background and closing modal
    setCurrentIndex((prev) => (prev + 1) % images.length); // Loops to first
  };

  const goToPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); // Loops to last
  };

  // 2. Handle Key Presses (Optional but helpful: ESC to close, Arrows to navigate)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, setCurrentIndex, images.length]);

  return (
    // Dark background overlay, clickable to close
    <div 
      className="fixed inset-0 z-50 flex flex-col gap-2 items-center justify-center bg-black/80 p-4 backdrop-blur-sm z-[100000]"
      onClick={onClose}
    >
      {/* Main image content area (stopProp to prevent closing) */}
      <div 
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* 3. The large image */}
        <img 
          src={images[currentIndex].image} 
          alt={images[currentIndex].label} 
          className="w-auto h-auto max-w-[85vw] max-h-[80vh] border-2 border-white/10 rounded shadow-lg"
        />

        {/* 4. Side Buttons (Floating circular arrows) */}
        <button 
          onClick={goToPrev}
          className="absolute left-3 md:left-[-80px] top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary p-3 rounded-full transition"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="md:h-8 md:w-8 w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button 
          onClick={goToNext}
          className="absolute right-3 md:right-[-80px] top-1/2 -translate-y-1/2 bg-black/60 hover:bg-primary p-3 rounded-full transition"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="md:h-8 md:w-8 w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* 5. Footer and Close details (like reference image) */}
        

      </div>
              {/* 6. Counter (like second image) */}
        <div className="flex flex-col items-center gap-">
            <span className="text-white text-sm font-semibold">{images[currentIndex].label}</span>
            <div className=' text-gray-400 text-sm font-semibold p-2 bg-black/60 rounded'>{currentIndex + 1} / {images.length}</div>
        </div>
      <div className="absolute top-5 right-5 flex items-center gap-3">
            <button onClick={onClose} className="text-white hover:bg-black/60 w-8 h-8 hover:text-gray-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    </div>
  );
}