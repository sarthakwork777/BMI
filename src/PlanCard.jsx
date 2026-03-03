import { Dumbbell, Target, Flame, Zap, ChevronRight, Info } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const PlanCard = () => {
  const navigate = useNavigate(); // Initialize navigation

  const plans = [
    {
      title: "Weight Gain",
      desc: "Optimize muscle mass with high-density caloric intake and heavy compound lifting.",
      icon: <Dumbbell className="text-orange-400" size={28} />,
      tag: "Hypertrophy",
      accent: "border-orange-500/20",
      path: "/weight-gain-plan" // Path defined for routing
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

  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    } else {
      console.log("Details for this plan are coming soon!");
    }
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 pb-10">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`group relative backdrop-blur-3xl bg-white/5 border ${plan.accent} rounded-[2rem] p-6 hover:bg-white/[0.08] transition-all duration-500 flex flex-col min-h-[60px] max-h-[550px] w-full bottom-6 hover:cursor-pointer`}
        >
          <div className="mb-8">
            <div className="w-full h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-105 group-hover:bg-white/10 transition-all duration-500">
              {plan.icon}
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-2">
              {plan.tag}
            </p>
            <h3 className="text-2xl font-black tracking-tight mb-3 text-white group-hover:text-orange-400 transition-colors">
              {plan.title}
            </h3>
            <p className="text-white/40 text-sm leading-relaxed font-medium">
              {plan.desc}
            </p>
          </div>
          
          <div className="mt-auto space-y-4">
            {/* PRIMARY BUTTON - Triggers Route */}
            <button
              onClick={() => handleNavigation(plan.path)}
              className="relative group w-full py-3 px-6 rounded-2xl overflow-hidden bg-gradient-to-r from-orange-500 via-rose-500 to-red-500 text-white font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(255,60,0,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(255,0,60,0.5)] active:scale-[0.97]"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-500"></span>
              <span className="absolute -left-20 top-0 w-40 h-full bg-white/20 rotate-12 group-hover:translate-x-[250%] transition-all duration-700 ease-in-out"></span>
              <span className="relative z-10">Get This Plan</span>
              <ChevronRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* SECONDARY BUTTON */}
            <button
              onClick={() => handleNavigation(plan.path)}
              className="relative group w-full py-3 px-6 rounded-2xl border border-white/20 backdrop-blur-xl bg-white/5 text-white/80 font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-300 hover:text-white hover:bg-white/10 hover:border-orange-400/40 hover:shadow-[0_0_25px_rgba(255,120,0,0.35)] active:scale-[0.97]"
            >
              <Info size={14} className="transition-transform duration-300 group-hover:rotate-6" />
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCard;