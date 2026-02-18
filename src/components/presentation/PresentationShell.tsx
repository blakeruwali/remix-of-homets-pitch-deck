import React from "react";
import { slides } from "./slideData";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobilePresentation } from "./MobilePresentation";

export const PresentationShell: React.FC = () => {
  const isMobile = useIsMobile();

  if (isMobile) return <MobilePresentation />;

  return (
    <div className="min-h-screen w-full" style={{ background: "hsl(0,0%,5%)" }}>
      {/* Header */}
      <div className="sticky top-0 z-50 h-12 flex items-center justify-center border-b border-white/10 backdrop-blur-md"
        style={{ background: "hsl(0,0%,7%,0.9)" }}>
        <span className="text-white/40 text-sm font-medium">
          Customer Service & Dispatch Guide
        </span>
      </div>

      {/* All slides stacked vertically */}
      <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-8">
        {slides.map((slide, i) => {
          const SlideComponent = slide.component;
          return (
            <div key={i} className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              style={{ background: "hsl(0,0%,8%)" }}>
              {/* Slide number + title */}
              <div className="px-6 py-3 border-b border-white/10 flex items-center gap-3"
                style={{ background: "hsl(0,0%,7%)" }}>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-white/50">
                  {i + 1}
                </span>
                <span className="text-sm text-white/60">{slide.title}</span>
              </div>
              {/* Slide content - no fixed height, content flows naturally */}
              <div className="slide-content p-8 md:p-12">
                <SlideComponent />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
