"use client";

import Image from "next/image";
import { objectives, eventHighlights } from "@/src/data/objectivesAndHighlights";
import { useState, useEffect, useRef } from "react";

export default function ObjectivesHighlightsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const AUTO_SLIDE_DURATION = 5000; // 5 seconds per slide
  const SWIPE_THRESHOLD = 50; // minimum swipe distance in pixels

  // Auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      // Clear existing timers
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      
      // Reset progress
      setProgress(0);
      
      // Progress bar animation (updates every 50ms for smooth animation)
      progressTimerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + (100 / (AUTO_SLIDE_DURATION / 50));
        });
      }, 50);
      
      // Slide transition
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % objectives.length);
        setProgress(0);
      }, AUTO_SLIDE_DURATION);
    };

    if (!isDragging) {
      startAutoSlide();
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [currentSlide, isDragging]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  // Touch/Mouse drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setCurrentX(clientX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    
    const diff = startX - currentX;
    
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff > 0) {
        // Swiped left - next slide
        setCurrentSlide((prev) => (prev + 1) % objectives.length);
      } else {
        // Swiped right - previous slide
        setCurrentSlide((prev) => (prev - 1 + objectives.length) % objectives.length);
      }
    }
    
    setIsDragging(false);
    setStartX(0);
    setCurrentX(0);
    setProgress(0);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  const dragOffset = isDragging ? currentX - startX : 0;
  return (
    <section className="w-full font-sans bg-white">

      {/* ====================== OBJECTIVES ====================== */}
      <div className="max-w-full lg:px-15 mx-auto px-4 py-24">
        
        {/* Title */}
        <h2 className="text-center text-5xl font-medium mb-16 text-black">
          Objectives
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-14">
          {objectives.map((item) => (
            <div
              key={item.id}
              className="py-10 border border-[#0EA5A9] rounded-none px-16 flex flex-col justify-center items-center text-center transition-transform hover:scale-101 duration-300 bg-white"
            >
              <div className="mb-8 w-20 h-20 relative">
                 <Image
                  src={item.icon}
                  alt={item.text}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-lg text-gray-800 leading-relaxed max-w-xs">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative pb-12">
          <div 
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className={`flex ${isDragging ? '' : 'transition-transform duration-300 ease-in-out'}`}
              style={{ 
                transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))` 
              }}
            >
              {objectives.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="aspect-square border border-[#0EA5A9] bg-white p-6 py-10 shadow-sm flex flex-col justify-center items-center text-center h-full">
                    {/* Icon */}
                    <div className="mb-5 w-20 h-20 relative">
                      <Image
                        src={item.icon}
                        alt={item.text}
                        fill
                        className="object-contain"
                        draggable={false}
                      />
                    </div>

                    {/* Text */}
                    <p className="text-lg text-gray-800 leading-relaxed max-w-xs">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar Navigation */}
          <div className="absolute bottom-0 left-0 right-0 px-12 pt-6">
            <div className="flex gap-1">
              {objectives.map((_, index) => (
                <div
                  key={index}
                  className="flex-1 h-1 bg-[#0EA5A9]/30 rounded-full overflow-hidden cursor-pointer"
                  onClick={() => goToSlide(index)}
                >
                  <div
                    className="h-full bg-[#0EA5A9] rounded-full transition-all duration-100 ease-linear"
                    style={{
                      width: index === currentSlide 
                        ? `${Math.min(progress, 100)}%` 
                        : index < currentSlide 
                          ? '100%' 
                          : '0%'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ====================== EVENT HIGHLIGHTS ====================== */}
      <div className="w-full bg-[#1BA3B9] px-8 lg:px-15 py-24 relative overflow-hidden">
        
        {/* Title */}
        <h2 className="text-center md:text-center text-left  md:px-0 text-white text-4xl md:text-5xl font-medium mb-10 md:mb-16">
          Event Highlights
        </h2>

        {/* 3 Cards */}
        <div className="max-w-full  mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-14">
          {eventHighlights.map((item) => (
            <div
              key={item.id}
              className="border border-white rounded-none px-6 md:px-12 py-8 md:py-0 flex flex-row md:flex-col justify-start md:justify-center items-center text-left md:text-center text-white min-h-[auto] md:min-h-[240px] transition-transform hover:scale-101 duration-300 gap-6 md:gap-0"
            >
              <div className="mb-0 md:mb-8 w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.text}
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <p className="text-lg md:text-xl leading-relaxed max-w-xs">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
