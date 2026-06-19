"use client";

import { Feature } from "@/types/feature";
import { useState } from "react";

interface SingleFeatureProps {
  feature: Feature;
  index?: number;
}

const SingleFeature = ({ feature, index = 0 }: SingleFeatureProps) => {
  const { icon, title, paragraph } = feature;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full px-3 sm:px-4"
      style={{
        animation: `fadeInUp 0.8s ease-out ${0.1 + index * 0.1}s both`,
      }}
    >
      <div
        className="group relative h-full overflow-hidden rounded-2xl bg-white/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:border-transparent hover:shadow-2xl dark:bg-gray-800/80"
        style={{
          border: "1px solid rgba(229, 231, 235, 0.5)",
          boxShadow: isHovered
            ? "0 20px 60px -15px rgba(0, 0, 0, 0.12)"
            : "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Decorative Pattern */}
        <div
          className="pointer-events-none absolute -right-1/2 -top-1/2 h-full w-full transition-all duration-500 group-hover:scale-110 group-hover:opacity-50"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.03) 0%, transparent 70%)",
          }}
        />

        {/* Border Gradient */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15))",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Decorative Number */}
        <div className="absolute right-3 top-3 font-mono text-xs font-bold tracking-wider text-gray-300/30 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-400/40 dark:text-gray-600/20">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 group-hover:w-full" />

        {/* Icon Section */}
        <div className="group-hover:animate-float relative mb-5 flex h-[70px] w-[70px] items-center justify-center rounded-xl border-2 border-blue-200/20 bg-blue-500/10 text-blue-500 transition-all duration-500 group-hover:border-blue-400/40 dark:border-blue-400/20 dark:bg-blue-400/15">
          {/* Glow Effect */}
          <div className="group-hover:animate-pulse-glow absolute -inset-1 rounded-xl bg-blue-500 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20" />
          <div className="relative z-10 text-[28px] transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>

        {/* Paragraph */}
        <p className="text-base font-medium leading-relaxed text-gray-500 transition-colors duration-300 dark:text-gray-400">
          {paragraph}
        </p>
      </div>

      {/* Tailwind Custom Animations - Add to global.css */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-8px) rotate(3deg); 
          }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            transform: scale(1);
            opacity: 0.2;
          }
          50% { 
            transform: scale(1.2);
            opacity: 0.4;
          }
        }

        .animate-float {
          animation: float 1.5s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SingleFeature;
