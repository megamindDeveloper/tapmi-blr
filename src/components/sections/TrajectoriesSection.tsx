"use client";

import Image from "next/image";
import { trajectories } from "@/src/data/trajectoriesSectionData";
import { useState, useEffect, useRef } from "react";

export default function TrajectoriesSection() {
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
        setCurrentSlide((prev) => (prev + 1) % trajectories.length);
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
        setCurrentSlide((prev) => (prev + 1) % trajectories.length);
      } else {
        // Swiped right - previous slide
        setCurrentSlide((prev) => (prev - 1 + trajectories.length) % trajectories.length);
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

  <>
  <section id="trajectories" className="w-full bg-[#1BA3B9] relative overflow-hidden font-sans trajectories ">
{/*      
       <Image
    src="/svgs/vector1.svg"      // your actual file path
    alt="decor"
    width={1000}
    height={1000}
    className="pointer-events-none select-none absolute top-0 left-10 -translate-x-1/4 -translate-y-1/4 opacity-100 rotate-180"
  /> */}

  {/* BOTTOM-RIGHT VECTOR */}
  <Image
    src="/svgs/vector1.svg"      // your actual file path
    alt="decor"
    width={1000}
    height={1000}
    className="pointer-events-none select-none absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-60"
  />
     
      {/* Desktop Layout */}
      <div className="hidden md:block py-24">
        <div className="max-w-[1400px] mx-auto px-1 relative z-10">
          
          {/* Heading */}
          <h2 className="text-white text-[42px] font-medium mb-6 tracking-tight">
            Broad Area Trajectories for Presentation
          </h2>

          {/* Subtitle */}
          <p className="text-white/90 md:text-xl text-lg leading-8 max-w-5xl mb-16 font-light">
            The conference invites Early Career Researchers and PhD scholars to present papers that engage with, respond to, or challenge the dynamics of the New Global Order. Submissions are welcome from the following area trajectories:
          </p>

          {/* Trajectory Cards - Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trajectories.map((item) => (
              <div
                key={item.id}
                className="bg-white p-9 shadow-sm flex flex-col h-full"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* Trajectory number */}
                <p className="text-[13px] text-[#1aaeb3] font-medium mb-2 tracking-wide">{item.subtitle}</p>

                {/* Title */}
                <h3 className="text-[24px] font-semibold text-[#1aaeb3] mb-4 leading-7 min-h-[56px]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="md:text-xl text-lg text-[#2c7a7b] leading-7 font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout - Slider */}
      <div className="md:hidden px-8 py-12">
        {/* Heading */}
        <h2 className="text-white text-[28px] font-medium mb-4 tracking-tight leading-[1.2] px-2">
          Broad Area Trajectories for Presentation
        </h2>

        {/* Subtitle */}
        <p className="text-white/90 md:text-xl text-lg leading-6 mb-8 font-light px-2">
          The conference invites Early Career Researchers and PhD scholars to present papers that engage with, respond to, or challenge the dynamics of the New Global Order. Submissions are welcome from the following area trajectories:
        </p>

        {/* Slider Container */}
        <div className="relative pb-12">
          {/* Cards */}
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
              {trajectories.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="h-[90vw] bg-white p-6 py-10 shadow-sm flex flex-col min-h-0 overflow-hidden">
                    {/* Icon */}
                    <div className="mb-5">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={54}
                        height={54}
                        className="object-contain"
                        draggable={false}
                      />
                    </div>

                    {/* Trajectory number */}
                    <p className="text-[12px] text-[#1aaeb3] font-medium mb-2 tracking-wide">{item.subtitle}</p>

                    {/* Title */}
                    <h3 className="text-[20px] font-semibold text-[#1aaeb3] mb-3 leading-6">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="md:text-xl text-lg text-[#2c7a7b] leading-6 font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar Navigation */}
          <div className="absolute bottom-0 left-0 right-0 px-22 pt-6">
            <div className="flex gap-1">
              {trajectories.map((_, index) => (
                <div
                  key={index}
                  className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden cursor-pointer"
                  onClick={() => goToSlide(index)}
                >
                  <div
                    className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
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
    </section>
    
  </>
  );
}
