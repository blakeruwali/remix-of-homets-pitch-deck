import React, { useRef, useState, useEffect, useCallback } from "react";
import { slides } from "./slideData";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobilePresentation } from "./MobilePresentation";

export const PresentationShell: React.FC = () => {
  const isMobile = useIsMobile();
  if (isMobile) return <MobilePresentation />;
  return <ScrollablePresentation />;
};

const ScrollablePresentation: React.FC = () => {
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSlide = useCallback((i: number) => {
    slideRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-slide-index"));
            if (!isNaN(idx)) setActiveIndex(idx);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    slideRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex h-screen w-screen overflow-hidden" style={{ background: "hsl(0,0%,5%)" }}>
      {/* Left sidebar navigation */}
      <div className="w-56 flex-shrink-0 flex flex-col border-r border-white/10 h-full"
        style={{ background: "hsl(0,0%,7%)" }}>
        <div className="h-12 flex items-center px-4 border-b border-white/10 flex-shrink-0">
          <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">Slides</span>
        </div>
        <div className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-2.5 ${
                i === activeIndex
                  ? "bg-white/10 text-white font-medium"
                  : "text-white/45 hover:text-white/70 hover:bg-white/5"
              }`}
            >
              <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${
                i === activeIndex ? "bg-[hsl(15,90%,55%)] text-white" : "bg-white/10 text-white/40"
              }`}>
                {i + 1}
              </span>
              <span className="truncate">{slide.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="h-12 flex items-center justify-between px-6 border-b border-white/10 flex-shrink-0"
          style={{ background: "hsl(0,0%,7%)" }}>
          <span className="text-white/40 text-sm font-medium">
            Customer Service & Dispatch Guide
          </span>
          <span className="text-white/30 text-xs">
            {activeIndex + 1} / {slides.length}
          </span>
        </div>

        {/* Scrollable slides */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {slides.map((slide, i) => {
            const SlideComponent = slide.component;
            return (
              <div
                key={i}
                ref={(el) => (slideRefs.current[i] = el)}
                data-slide-index={i}
                className="rounded-xl overflow-hidden border border-white/10 shadow-lg"
                style={{ background: "hsl(0,0%,8%)" }}
              >
                <div className="slide-content p-6 md:p-8">
                  <SlideComponent />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
