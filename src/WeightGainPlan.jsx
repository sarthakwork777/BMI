import React from 'react';
import { 
  Dumbbell, Utensils, Droplets, Moon, 
  PieChart, ChevronLeft, Flame, Scale, Activity
} from "lucide-react";

const WeightGainPlan = () => {
  const stats = [
    { icon: <Flame size={18} />, label: "Target Calories", value: "3,200 kcal", color: "text-[#FF6B35] drop-shadow-[0_0_8px_rgba(255,107,53,0.8)]" },
    { icon: <PieChart size={18} />, label: "Protein Goal", value: "180g", color: "text-[#FF0055] drop-shadow-[0_0_8px_rgba(255,0,85,0.8)]" },
    { icon: <Scale size={18} />, label: "Surplus", value: "+500 kcal", color: "text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white p-4 md:p-10 font-sans relative overflow-x-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[-10%] left-[-5%] w-[70vw] h-[70vw] bg-[#FF6B35]/10 rounded-full blur-[150px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-[#FF0055]/10 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Main Wrapper - Now w-full without max-width limits */}
      <div className="w-full relative z-10">
        
        {/* Header Section - Fluid spacing */}
        <div className="mb-12 flex flex-col xl:flex-row xl:items-end justify-between gap-8 border-b border-white/5 pb-10">
          <div className="flex-1">
            <button className="flex items-center gap-2 text-white/40 hover:text-[#FF6B35] text-[10px] uppercase tracking-widest font-bold mb-6 transition-all hover:drop-shadow-[0_0_5px_rgba(255,107,53,1)]">
              <ChevronLeft size={14} /> Back to Dashboard
            </button>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic text-white leading-none">
              Weight Gain <span className="text-[#FF6B35] drop-shadow-[0_0_25px_rgba(255,107,53,0.8)]">.</span>
            </h1>
            <p className="text-white/40 mt-6 max-w-2xl text-lg font-medium leading-relaxed">
              Precision hypertrophy programming. This layout is optimized for high-performance tracking and nutritional oversight.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 lg:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-3 min-w-[160px] backdrop-blur-2xl flex-1">
                <span className={stat.color}>{stat.icon}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{stat.label}</span>
                <span className="text-2xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 100% Width Grid System */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          
          {/* Nutrition & Exercise (Span 3 columns for dominance) */}
          <div className="xl:col-span-3 space-y-8">
            <section className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-3xl shadow-2xl">
              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 bg-[#FF6B35]/10 rounded-2xl text-[#FF6B35] shadow-[0_0_20px_rgba(255,107,53,0.2)]">
                  <Utensils size={32}/>
                </div>
                <div>
                  <h2 className="text-3xl font-black uppercase tracking-tight text-white italic">Dietary Protocol</h2>
                  <p className="text-white/30 text-xs uppercase tracking-widest mt-1">Nutrient Timing & Meal Frequency</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8">
                {[
                  { time: "08:00", meal: "Power Breakfast", desc: "Oatmeal, peanut butter, 3 eggs, protein shake." },
                  { time: "12:30", meal: "Performance Lunch", desc: "Chicken breast, 2 cups brown rice, avocado." },
                  { time: "16:00", meal: "Anabolic Window", desc: "Greek yogurt, granola, honey, 1 banana." },
                  { time: "20:00", meal: "Recovery Dinner", desc: "Lean steak, sweet potato, massive greens." }
                ].map((m, i) => (
                  <div key={i} className="group p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-[#FF6B35]/30 transition-all">
                    <span className="text-xs font-black text-[#FF6B35] uppercase tracking-widest drop-shadow-[0_0_8px_rgba(255,107,53,0.5)] block mb-2">{m.time}</span>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF885B] transition-colors">{m.meal}</h4>
                    <p className="text-sm text-white/40 leading-relaxed font-medium">{m.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-8 md:p-12 backdrop-blur-3xl">
              <div className="flex items-center gap-5 mb-10">
                <div className="p-4 bg-[#FF0055]/10 rounded-2xl text-[#FF0055] shadow-[0_0_20px_rgba(255,0,85,0.2)]">
                  <Dumbbell size={32}/>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tight text-white italic">Hypertrophy Split</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['Compound Dominance', 'Time Under Tension', 'Progressive Overload'].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-all">
                    <div className="w-2 h-2 rounded-full bg-[#FF0055] shadow-[0_0_12px_#FF0055]" />
                    <span className="text-white/80 font-bold uppercase tracking-wider text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar (Span 1 column) */}
          <div className="xl:col-span-1 space-y-8">
            <div className="bg-gradient-to-br from-[#FF6B35]/20 to-[#FF0055]/20 border border-white/10 rounded-[3rem] p-10 backdrop-blur-3xl relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-700 text-white">
                <Droplets size={120} />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-[#00BFFF] drop-shadow-[0_0_15px_#00BFFF]"><Droplets size={28}/></div>
                <h3 className="font-black uppercase tracking-tight text-white text-xl">Hydration</h3>
              </div>
              <p className="text-6xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">3.5L</p>
              <p className="text-xs text-white/40 mt-4 uppercase font-black tracking-widest">Target Intake / Day</p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-10 backdrop-blur-3xl relative overflow-hidden group">
               <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-700 text-white">
                <Moon size={120} />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-[#8A2BE2] drop-shadow-[0_0_15px_#8A2BE2]"><Moon size={28}/></div>
                <h3 className="font-black uppercase tracking-tight text-white text-xl">Recovery</h3>
              </div>
              <p className="text-6xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">9.0h</p>
              <p className="text-xs text-white/40 mt-4 uppercase font-black tracking-widest">Sleep Cycle Goal</p>
            </div>

            <button className="w-full py-6 px-8 rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#FF6B35] to-[#FF0055] text-sm font-black uppercase tracking-[0.3em] text-white shadow-[0_0_30px_rgba(255,0,85,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,0,85,0.6)] active:scale-[0.98]">
              Deploy Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightGainPlan;