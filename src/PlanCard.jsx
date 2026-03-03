import React from 'react';
import { Dumbbell, Target, Flame, Zap, ChevronRight, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PlanCard = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Weight Gain",
      desc: "Optimize muscle mass with high-density caloric intake and heavy compound lifting.",
      icon: <Dumbbell className="text-orange-400" size={28} />,
      tag: "Hypertrophy",
      accent: "border-orange-500/20",
      hoverText: "group-hover:text-orange-400",
      glow: "shadow-[0_0_25px_rgba(251,146,60,0.35)]",
      path: "/weight-gain-plan"
    },
    {
      title: "Weight Loss",
      desc: "Incinerate fat through metabolic conditioning and precision macro tracking.",
      icon: <Flame className="text-rose-400" size={28} />,
      tag: "Shred",
      accent: "border-rose-500/20",
      hoverText: "group-hover:text-rose-400",
      glow: "shadow-[0_0_25px_rgba(244,63,94,0.35)]",
      path: "/weight-loss-plan"
    },
    {
      title: "Endurance",
      desc: "Boost VO2 max and stamina with progressive aerobic and anaerobic training.",
      icon: <Zap className="text-yellow-400" size={28} />,
      tag: "Performance",
      accent: "border-yellow-500/20",
      hoverText: "group-hover:text-yellow-400",
      glow: "shadow-[0_0_25px_rgba(250,204,21,0.35)]",
      path: "/endurance-plan"
    },
    {
      title: "Muscle Building",
      desc: "Sculpt definition and raw power with specialized resistance programming.",
      icon: <Target className="text-red-500" size={28} />,
      tag: "Strength",
      accent: "border-red-500/20",
      hoverText: "group-hover:text-red-500",
      glow: "shadow-[0_0_25px_rgba(239,68,68,0.35)]",
      path: "/muscle-building-plan"
    }
  ];

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
      // Scroll to top of the new page
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-12">
      {plans.map((plan, index) => (
        <div
          key={index}
          onClick={() => handleNavigation(plan.path)}
          className={`group relative backdrop-blur-3xl bg-white/[0.03] border ${plan.accent} rounded-[2.5rem] p-8 hover:bg-white/[0.07] transition-all duration-500 flex flex-col min-h-[480px] w-full hover:-translate-y-3 ${plan.glow} hover:cursor-pointer overflow-hidden`}
        >
          {/* Subtle Inner Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Icon Container */}
          <div className="relative z-10 mb-8">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-2xl">
              {plan.icon}
            </div>
            
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mb-3">
              {plan.tag}
            </p>
            
            <h3 className={`text-3xl font-black tracking-tighter mb-4 text-white ${plan.hoverText} transition-colors uppercase italic leading-none`}>
              {plan.title}
            </h3>
            
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              {plan.desc}
            </p>
          </div>
          
          {/* Buttons Area */}
          <div className="relative z-10 mt-auto space-y-4">
            {/* Main Action Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNavigation(plan.path); }}
              className="relative group/btn w-full py-4 px-6 rounded-2xl overflow-hidden bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-300 hover:bg-neutral-200 active:scale-[0.97]"
            >
              <span className="relative z-10">Deploy Protocol</span>
              <ChevronRight size={14} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </button>

            {/* Secondary Details Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNavigation(plan.path); }}
              className="relative w-full py-4 px-6 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 text-white/50 font-bold text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:bg-white/10 active:scale-[0.97]"
            >
              <Info size={14} />
              Full Briefing
            </button>
          </div>

          {/* Decorative Corner Background Element */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/[0.02] rounded-full blur-3xl group-hover:bg-white/[0.05] transition-colors duration-500" />
        </div>
      ))}
    </div>
  );
};

export default PlanCard;