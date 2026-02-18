import React from "react";
import hometsLogoWhite from "@/assets/homets-logo-white.png";

export const HometsLogo: React.FC<{ className?: string; width?: number }> = ({ className = "", width = 400 }) => {
  return (
    <img 
      src={hometsLogoWhite} 
      alt="Home+s Air & Heat" 
      width={width} 
      className={className}
      style={{ height: "auto" }}
    />
  );
};

export const HometsLogoDark: React.FC<{ className?: string; width?: number }> = ({ className = "", width = 400 }) => {
  return (
    <img 
      src={hometsLogoWhite} 
      alt="Home+s Air & Heat" 
      width={width} 
      className={className}
      style={{ height: "auto" }}
    />
  );
};
