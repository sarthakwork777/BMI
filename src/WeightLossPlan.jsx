import React from 'react';
import { 
  Dumbbell, Utensils, Droplets, Moon, 
  PieChart, ChevronLeft, Flame, Scale, Activity,
  Timer, Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const WeightLossPlan = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <Flame size={20} />, label: "Target Calories", value: "1,800 kcal", color: "text-[#FF0055] drop-shadow-[0_0_10px_rgba(255,0,85,0.8)]" },
    { icon: <Zap size={20} />, label: "Daily Deficit", value: "-500 kcal", color: "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" },
    { icon: <Timer size={20} />, label: "Cardio Goal", value: "45 min", color: "text-rose-400 drop-shadow-[0_0_10px_rgba(251,113,133,0.8)]" },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white p-6 md:p-12 font-sans relative overflow-x-hidden">
      {/* Background Ambient Glows - Shifted to Rose/Purple for Loss theme */}
      <div className="absolute top-[-15%] left-[-10%] w-[80vw] h-[80vw] bg-[#FF0055]/10 rounded-full blur-[160px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[70vw] h-[70vw] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="w-full relative z-10">
        
        {/* Header Section */}
        <div className="mb-16 flex flex-col xl:flex-row xl:items-end justify-between gap-10 border-b border-white/10 pb-12">
          <div className="flex-1">
            <button 
              onClick={() => navigate("/profile")}
              className="flex items-center gap-2 text-white/30 hover:text-rose-400 text-[11px] uppercase tracking-[0.3em] font-black mb-8 transition-all hover:drop-shadow-[0_0_8px_rgba(251,113,133,1)]"
            >
              <ChevronLeft size={16} /> Return to Dashboard
            </button>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase italic text-white leading-[0.85] select-none">
              Weight <br /> Loss <span className="text-rose-500 drop-shadow-[0_0_40px_rgba(244,63,94,0.6)]">.</span>
            </h1>
            <p className="text-white/40 mt-10 max-w-3xl text-xl font-medium leading-relaxed">
              Metabolic conditioning and fat-oxidation protocol. Designed to preserve lean muscle tissue while maximizing caloric expenditure and insulin sensitivity.
            </p>
          </div>
          
          {/* Stat Cards */}
          <div className="flex flex-wrap gap-6 w-full xl:w-auto">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-4 min-w-[220px] backdrop-blur-3xl flex-1 hover:bg-white/[0.06] transition-all">
                <span className={stat.color}>{stat.icon}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-black">{stat.label}</span>
                <span className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fluid Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          
          {/* Main Protocol Column */}
          <div className="xl:col-span-9 space-y-10">
            <section className="bg-white/[0.02] border border-white/10 rounded-[4rem] p-10 md:p-16 backdrop-blur-3xl">
              <div className="flex items-center gap-6 mb-12">
                <div className="p-5 bg-rose-500/10 rounded-3xl text-rose-500 shadow-[0_0_30px_rgba(244,63,94,0.2)]">
                  <Utensils size={40}/>
                </div>
                <div>
                  <h2 className="text-4xl font-black uppercase tracking-tight text-white italic">Fat-Loss Nutrition</h2>
                  <p className="text-white/30 text-sm uppercase tracking-[0.3em] mt-2 font-bold">Volume-Based Satiety Matrix</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-8">
                {[
                  { time: "08:00", meal: "Metabolic Kick", desc: "Egg white omelet, spinach, 1/2 grapefruit, black coffee." },
                  { time: "13:00", meal: "Lean Fuel", desc: "Grilled tilapia or turkey, massive green salad, light vinaigrette." },
                  { time: "16:30", meal: "Fiber Snack", desc: "Apple with 1 tbsp almond butter or a low-carb protein shake." },
                  { time: "19:30", meal: "End-Day Reset", desc: "Baked salmon, asparagus, cauliflower rice, herbal tea." }
                ].map((m, i) => (
                  <div key={i} className="group p-8 bg-white/[0.03] rounded-[2.5rem] border border-white/5 hover:border-rose-500/40 transition-all duration-500">
                    <span className="text-sm font-black text-rose-400 uppercase tracking-widest drop-shadow-[0_0_10px_rgba(251,113,133,0.6)] block mb-4">{m.time}</span>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-rose-300 transition-colors">{m.meal}</h4>
                    <p className="text-base text-white/40 leading-relaxed font-medium">{m.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/[0.02] border border-white/10 rounded-[4rem] p-10 md:p-16 backdrop-blur-3xl">
              <div className="flex items-center gap-6 mb-12">
                <div className="p-5 bg-purple-500/10 rounded-3xl text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
                  <Activity size={40}/>
                </div>
                <h2 className="text-4xl font-black uppercase tracking-tight text-white italic">Conditioning & Shred</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['High Intensity Intervals (HIIT)', 'Steady State Fat Oxidation', 'Circuit-Based Resistance Training'].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-8 bg-white/[0.03] rounded-3xl border border-white/5 group hover:bg-white/[0.08] transition-all">
                    <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_#A855F7]" />
                    <span className="text-white/90 font-black uppercase tracking-widest text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="xl:col-span-3 space-y-10">
            <div className="bg-gradient-to-br from-rose-500/20 to-purple-500/20 border border-white/10 rounded-[4rem] p-12 backdrop-blur-3xl relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 group-hover:scale-125 transition-all duration-1000 text-white">
                <Droplets size={200} />
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-blue-400 drop-shadow-[0_0_20px_#60A5FA]"><Droplets size={32}/></div>
                <h3 className="font-black uppercase tracking-tight text-white text-2xl">Hydration</h3>
              </div>
              <p className="text-8xl font-black text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">4.0L</p>
              <p className="text-[11px] text-white/40 mt-6 uppercase font-black tracking-[0.3em]">Flushing & Metabolism</p>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-[4rem] p-12 backdrop-blur-3xl relative overflow-hidden group">
               <div className="absolute -right-8 -top-8 opacity-5 group-hover:opacity-10 group-hover:scale-125 transition-all duration-1000 text-white">
                <Moon size={200} />
              </div>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-indigo-400 drop-shadow-[0_0_20px_#818CF8]"><Moon size={32}/></div>
                <h3 className="font-black uppercase tracking-tight text-white text-2xl">Rest</h3>
              </div>
              <p className="text-8xl font-black text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">7.5h</p>
              <p className="text-[11px] text-white/40 mt-6 uppercase font-black tracking-[0.3em]">Cortisol Regulation</p>
            </div>

            <button className="w-full py-8 px-10 rounded-[3rem] border border-white/10 bg-gradient-to-r from-rose-500 to-purple-600 text-base font-black uppercase tracking-[0.4em] text-white shadow-[0_0_40px_rgba(244,63,94,0.4)] transition-all hover:scale-[1.03] hover:shadow-[0_0_60px_rgba(244,63,94,0.6)] active:scale-[0.97]">
              Start The Shred
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightLossPlan;