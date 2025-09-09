'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';

export default function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const container1Ref = useRef<HTMLDivElement>(null);
  const container2Ref = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<'video1' | 'video2'>('video1');

  const videos = useMemo(() => [
    '/video/hero-1.mp4',
    '/video/hero-2.mp4',
    '/video/hero-3.mp4'
  ], []);

    // Initialize GSAP and videos
  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    const container1 = container1Ref.current;
    const container2 = container2Ref.current;
    
    if (video1 && video2 && container1 && container2) {
      setHasError(false);
      
      // Set initial GSAP states
      gsap.set(container1, { opacity: 1, zIndex: 10 });
      gsap.set(container2, { opacity: 0, zIndex: 5 });
      
      // Load both videos
      video1.load();
      video2.load();
    }
  }, []);

    // GSAP-powered smooth video transitions
  useEffect(() => {
    const currentVideoEl = activeVideo === 'video1' ? video1Ref.current : video2Ref.current;
    const nextVideoEl = activeVideo === 'video1' ? video2Ref.current : video1Ref.current;
    const currentContainer = activeVideo === 'video1' ? container1Ref.current : container2Ref.current;
    const nextContainer = activeVideo === 'video1' ? container2Ref.current : container1Ref.current;
    
    if (!currentVideoEl || !nextVideoEl || !currentContainer || !nextContainer) return;

    const handleTimeUpdate = () => {
      if (isTransitioning) return;
      
      // Start transition 1.5 seconds before end
      const timeLeft = currentVideoEl.duration - currentVideoEl.currentTime;
      if (timeLeft <= 1.5 && timeLeft > 0) {
        setIsTransitioning(true);
        
        // Prepare next video
        if (nextVideoEl.readyState >= 2) {
          nextVideoEl.currentTime = 0;
          const playPromise = nextVideoEl.play();
          
          if (playPromise !== undefined) {
            playPromise.then(() => {
              // Create smooth GSAP transition
              const tl = gsap.timeline({
                onComplete: () => {
                  setActiveVideo(activeVideo === 'video1' ? 'video2' : 'video1');
                  setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
                  setIsTransitioning(false);
                  
                  // Reset the now-hidden video
                  currentVideoEl.pause();
                  currentVideoEl.currentTime = 0;
                }
              });
              
              // Smooth crossfade transition
              tl.to(nextContainer, { 
                opacity: 1, 
                zIndex: 10, 
                duration: 0.5, 
                ease: "power2.inOut" 
              })
              .to(currentContainer, { 
                opacity: 0, 
                zIndex: 5, 
                duration: 0.5, 
                ease: "power2.inOut" 
              }, "-=0.5"); // Start at the same time as the first animation
              
            }).catch((error) => {
              console.log('Next video play failed:', error);
              setIsTransitioning(false);
            });
          }
        } else {
          nextVideoEl.load();
          setIsTransitioning(false);
        }
      }
    };

    const handleVideoEnd = () => {
      if (!isTransitioning) {
        // Immediate fallback transition
        setActiveVideo(activeVideo === 'video1' ? 'video2' : 'video1');
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      }
    };

    currentVideoEl.addEventListener('timeupdate', handleTimeUpdate);
    currentVideoEl.addEventListener('ended', handleVideoEnd);

    return () => {
      currentVideoEl.removeEventListener('timeupdate', handleTimeUpdate);
      currentVideoEl.removeEventListener('ended', handleVideoEnd);
    };
  }, [activeVideo, videos.length, isTransitioning]);

  // Simplified video source management
  useEffect(() => {
    const video1 = video1Ref.current;
    const video2 = video2Ref.current;
    if (!video1 || !video2) return;

    setHasError(false);

    // Update video sources
    const currentSrc = videos[currentVideoIndex];
    const nextSrc = videos[(currentVideoIndex + 1) % videos.length];

    // Set sources for both videos
    const video1Source = video1.querySelector('source');
    const video2Source = video2.querySelector('source');

    if (activeVideo === 'video1') {
      // Video1 is active, Video2 is next
      if (video1Source && video1Source.src !== currentSrc) {
        video1Source.src = currentSrc;
        video1.load();
        video1.play().catch(() => setHasError(true));
      }
      if (video2Source && video2Source.src !== nextSrc) {
        video2Source.src = nextSrc;
        video2.load();
      }
    } else {
      // Video2 is active, Video1 is next
      if (video2Source && video2Source.src !== currentSrc) {
        video2Source.src = currentSrc;
        video2.load();
        video2.play().catch(() => setHasError(true));
      }
      if (video1Source && video1Source.src !== nextSrc) {
        video1Source.src = nextSrc;
        video1.load();
      }
    }
  }, [currentVideoIndex, activeVideo, videos]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">


        {/* Error overlay */}
        {hasError && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
            <div className="text-center">
              <p className="text-white font-sans mb-4">Video unavailable</p>
            </div>
          </div>
        )}

        {/* Video Container 1 */}
        <div 
          ref={container1Ref}
          className="absolute inset-0 w-full h-full"
        >
          <video
            ref={video1Ref}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            crossOrigin="anonymous"
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Container 2 */}
        <div 
          ref={container2Ref}
          className="absolute inset-0 w-full h-full"
        >
          <video
            ref={video2Ref}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            preload="auto"
            crossOrigin="anonymous"
          >
            <source src={videos[(currentVideoIndex + 1) % videos.length]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="max-w-3xl pt-16 lg:pt-20">
            {/* Main Heading */}
            <h1 className="text-white font-semibold leading-none mb-4 lg:mb-6 font-sans">
              <div className="text-4xl md:text-7xl tracking-tight">
                <span className="block">
                  Building <span className="text-yellow-400">future</span> with Innovative  solutions
                </span>


              </div>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-base leading-relaxed mb-6 lg:mb-8 max-w-2xl font-sans">
              Our expertise is on the condition-based machinery that results in improved operational efficiency, low maintenance cost, and cost savings
            </p>

            {/* CTA Button */}
            <div className="flex items-center">
              <button className="group bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 flex items-center space-x-2 text-sm lg:text-base font-sans cursor-pointer">
                <span>Get in touch</span>
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}