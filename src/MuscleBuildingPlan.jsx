import React from 'react';
import { 
  Target, Utensils, Droplets, Moon, 
  ChevronLeft, Dumbbell, Activity, Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const MuscleBuildingPlan = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <Target size={20} />, label: "Strength Focus", value: "85% 1RM", color: "text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" },
    { icon: <Dumbbell size={20} />, label: "Weekly Sets", value: "22 Sets/Muscle", color: "text-neutral-400 drop-shadow-[0_0_10px_rgba(163,163,163,0.8)]" },
    { icon: <Shield size={20} />, label: "Protein Load", value: "2.2g/kg", color: "text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white p-6 md:p-12 font-sans relative overflow-x-hidden">
      {/* Background Ambient Glows - Red/Crimson theme */}
      <div className="absolute top-[-15%] left-[-10%] w-[80vw] h-[80vw] bg-red-600/10 rounded-full blur-[160px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-15%] right-[-10%] w-[70vw] h-[70vw] bg-neutral-800/20 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="w-full relative z-10">
        <div className="mb-16 flex flex-col xl:flex-row xl:items-end justify-between gap-10 border-b border-white/10 pb-12">
          <div className="flex-1">
            <button onClick={() => navigate("/profile")} className="flex items-center gap-2 text-white/30 hover:text-red-500 text-[11px] uppercase tracking-[0.3em] font-black mb-8 transition-all">
              <ChevronLeft size={16} /> Return to Dashboard
            </button>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase italic text-white leading-[0.85]">
              Power <br /> Building <span className="text-red-600 drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">.</span>
            </h1>
            <p className="text-white/40 mt-10 max-w-3xl text-xl font-medium leading-relaxed">
              Systematic strength and volume accumulation. This protocol prioritizes mechanical tension and neurological adaptation to move maximal loads while forcing tissue expansion.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 w-full xl:w-auto">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 flex flex-col gap-4 min-w-[220px] backdrop-blur-3xl flex-1 hover:bg-white/[0.06] transition-all">
                <span className={stat.color}>{stat.icon}</span>
                <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-black">{stat.label}</span>
                <span className="text-4xl font-black text-white">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
          <div className="xl:col-span-9 space-y-10">
            <section className="bg-white/[0.02] border border-white/10 rounded-[4rem] p-10 md:p-16 backdrop-blur-3xl">
              <div className="flex items-center gap-6 mb-12">
                <div className="p-5 bg-red-600/10 rounded-3xl text-red-500 shadow-[0_0_30px_rgba(220,38,38,0.2)]"><Utensils size={40}/></div>
                <h2 className="text-4xl font-black uppercase tracking-tight italic">Structural Nutrition</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-8">
                {[
                  { time: "AM Intake", meal: "Amino Prime", desc: "Whey isolate, leucine, 5g creatine, and oatmeal." },
                  { time: "Post-Work", meal: "Massive Recovery", desc: "White rice, lean beef, pineapple for digestion." },
                  { time: "System Fuel", meal: "Density Meal", desc: "Chicken thighs, pasta, and roasted root vegetables." },
                  { time: "Sleeptime", meal: "Casein Slow-Feed", desc: "Cottage cheese or casein shake with healthy fats (walnuts)." }
                ].map((m, i) => (
                  <div key={i} className="group p-8 bg-white/[0.03] rounded-[2.5rem] border border-white/5 hover:border-red-600/40 transition-all duration-500">
                    <span className="text-sm font-black text-red-500 uppercase tracking-widest block mb-4">{m.time}</span>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">{m.meal}</h4>
                    <p className="text-base text-white/40 leading-relaxed font-medium">{m.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white/[0.02] border border-white/10 rounded-[4rem] p-10 md:p-16 backdrop-blur-3xl">
              <div className="flex items-center gap-6 mb-12">
                <div className="p-5 bg-neutral-800/30 rounded-3xl text-white shadow-[0_0_30px_rgba(255,255,255,0.05)]"><Activity size={40}/></div>
                <h2 className="text-4xl font-black uppercase tracking-tight italic">The Lifting Logic</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['5-3-1 Compound Scaling', 'Rest-Pause Drop Sets', 'Maximal Eccentric Control'].map((item, i) => (
                  <div key={i} className="flex items-center gap-5 p-8 bg-white/[0.03] rounded-3xl border border-white/5 group hover:bg-white/[0.08] transition-all">
                    <div className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_15px_#dc2626]" />
                    <span className="text-white/90 font-black uppercase tracking-widest text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="xl:col-span-3 space-y-10">
            <div className="bg-gradient-to-br from-red-900/40 to-black border border-white/10 rounded-[4rem] p-12 backdrop-blur-3xl relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 opacity-5 text-white"><Droplets size={200} /></div>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-red-500 drop-shadow-[0_0_20px_#ef4444]"><Droplets size={32}/></div>
                <h3 className="font-black uppercase tracking-tight text-white text-2xl">Hydration</h3>
              </div>
              <p className="text-8xl font-black text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]">4.0L</p>
              <p className="text-[11px] text-white/40 mt-6 uppercase font-black tracking-[0.3em]">Cellular Volumization</p>
            </div>

            <button className="w-full py-8 px-10 rounded-[3rem] border border-white/10 bg-gradient-to-r from-red-600 to-red-800 text-base font-black uppercase tracking-[0.4em] text-white shadow-[0_0_40px_rgba(220,38,38,0.4)] transition-all hover:scale-[1.03] active:scale-[0.97]">
              Begin Protocol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuscleBuildingPlan;