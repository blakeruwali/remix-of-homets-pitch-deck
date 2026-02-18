import React, { useRef, useEffect, useState } from "react";

const BASE_W = 1920;
const BASE_H = 1080;

interface ScaledSlideProps {
  children: React.ReactNode;
  className?: string;
}

export const ScaledSlide: React.FC<ScaledSlideProps> = ({ children, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const parent = containerRef.current.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      setScale(Math.min(width / BASE_W, height / BASE_H));
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current?.parentElement) ro.observe(containerRef.current.parentElement);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`absolute left-1/2 top-1/2 ${className}`}
      style={{
        width: BASE_W, height: BASE_H,
        marginLeft: -BASE_W / 2, marginTop: -BASE_H / 2,
        transform: `scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      <div className="slide-content w-full h-full">
        {children}
      </div>
    </div>
  );
};
