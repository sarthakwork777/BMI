import React from "react";
import { Dumbbell, Target, Flame, Zap, ChevronRight, Info } from "lucide-react";

const PlanCard = () => {
  const plans = [
    {
      title: "Weight Gain",
      desc: "Optimize muscle mass with high-density caloric intake and heavy compound lifting.",
      icon: <Dumbbell className="text-orange-400" size={28} />,
      tag: "Hypertrophy",
      accent: "border-orange-500/20"
    },
    {
      title: "Weight Loss",
      desc: "Incinerate fat through metabolic conditioning and precision macro tracking.",
      icon: <Flame className="text-rose-400" size={28} />,
      tag: "Shred",
      accent: "border-rose-500/20"
    },
    {
      title: "Endurance",
      desc: "Boost VO2 max and stamina with progressive aerobic and anaerobic training.",
      icon: <Zap className="text-yellow-400" size={28} />,
      tag: "Performance",
      accent: "border-yellow-500/20"
    },
    {
      title: "Muscle Building",
      desc: "Sculpt definition and raw power with specialized resistance programming.",
      icon: <Target className="text-red-500" size={28} />,
      tag: "Strength",
      accent: "border-red-500/20"
    }
  ];

  return (
    /* w-full ensures it stretches to the parent's edges. 
       gap-4 provides a small modern gutter between cards. */
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 pb-10">
      {plans.map((plan, index) => (
        <div 
          key={index} 
          className={`group relative backdrop-blur-3xl bg-white/5 border ${plan.accent} rounded-[2rem] p-8 hover:bg-white/[0.08] transition-all duration-500 flex flex-col h-full w-full`}
        >
          {/* Icon & Description */}
          <div className="mb-8">
            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
              {plan.icon}
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">
                {plan.tag}
            </p>
            <h3 className="text-2xl font-black tracking-tight mb-3 group-hover:text-orange-400 transition-colors">
                {plan.title}
            </h3>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              {plan.desc}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto space-y-4">
            <button className="group/btn w-full py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-xl">
              Get This Plan
              <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
            
            <button className="w-full flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-all">
              <Info size={12} /> View Details
            </button>
          </div>

          {/* Animated Hover Indicator */}
          <div className="absolute top-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
             <div className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;