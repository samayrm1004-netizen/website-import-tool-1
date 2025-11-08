"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";

// BlurText animation component with IntersectionObserver
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
            WebkitTextStroke: "0.5px rgba(0, 0, 0, 0.5)",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
            ...style,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

interface PortfolioHeroProps {
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
  imageAlt?: string;
  tagline?: string;
  textColor?: string;
}

export default function PortfolioHero({
  firstName = "SAMAY",
  lastName = "MANCHHARAMANI",
  imageUrl = "https://files.catbox.moe/27cuu1.jpg",
  imageAlt = "Samay Manchharamani",
  tagline = "AI Product Engineer & Business Innovator",
  textColor = "#8B5CF6", // Blue-purple mix (violet)
}: PortfolioHeroProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-16 relative">
      {/* Hero Name Section with Image in Center */}
      <div className="relative w-full px-4">
        <div className="relative text-center">
          {/* First Name */}
          <div>
            <BlurText
              text={firstName}
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-bold text-[80px] sm:text-[100px] md:text-[130px] lg:text-[160px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{ 
                color: textColor,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                WebkitTextStroke: "1px rgba(253, 224, 71, 0.8)",
                textShadow: "0 0 10px rgba(253, 224, 71, 0.5), 1px 1px 3px rgba(253, 224, 71, 0.4)"
              }}
            />
          </div>
          
          {/* Last Name */}
          <div>
            <BlurText
              text={lastName}
              delay={100}
              animateBy="letters"
              direction="top"
              className="font-bold text-[80px] sm:text-[100px] md:text-[130px] lg:text-[160px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap"
              style={{ 
                color: textColor,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 900,
                WebkitTextStroke: "1px rgba(253, 224, 71, 0.8)",
                textShadow: "0 0 10px rgba(253, 224, 71, 0.5), 1px 1px 3px rgba(253, 224, 71, 0.4)"
              }}
            />
          </div>

          {/* Profile Picture - Positioned in Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-[60px] h-[100px] sm:w-[80px] sm:h-[135px] md:w-[100px] md:h-[170px] lg:w-[120px] lg:h-[200px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer border-4 border-purple-500/30">
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <div className="mt-8 w-full px-6">
        <div className="flex justify-center">
          <BlurText
            text={tagline}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-center transition-colors duration-300 text-gray-400 hover:text-gray-200"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>
      </div>
    </div>
  );
}