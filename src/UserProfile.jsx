import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { User, Activity } from "lucide-react";
import PlanCards from "./PlanCard";

const UserProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  if (!user) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white font-sans">
        <div className="text-center">
          <p className="text-xl font-bold uppercase tracking-widest opacity-50">No Data Found</p>
          <button onClick={() => navigate("/")} className="mt-4 text-rose-500 underline text-sm">Return to Calculator</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#050505] text-white font-sans relative overflow-x-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* TOP LEFT: Mini User Profile Badge */}
      <div className="fixed top-6 left-6 z-50">
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 p-3 rounded-2xl shadow-2xl flex items-center gap-4 hover:bg-white/10 transition-all duration-300">
          <div className="bg-gradient-to-br from-orange-500 to-rose-600 p-2.5 rounded-xl shadow-lg">
            <User size={20} className="text-white" />
          </div>
          <div className="pr-2">
            <h2 className="text-xs font-black tracking-tight text-white/90 leading-none">{user.name || "Member"}</h2>
            <p className="text-[10px] text-orange-400 uppercase font-bold tracking-tighter mt-1 flex items-center gap-1">
              <Activity size={10} /> BMI: {user.bmi}
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT WRAPPER - Changed to w-full and removed max-width */}
      <div className="w-full pt-32 pb-10 relative z-10">
        
        {/* Header Section - Matches the padding of the grid for alignment */}
        <div className="px-8 mb-16">
          <h1 className="text-6xl font-black tracking-tighter leading-none mb-4">
            LEVEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-600">UP.</span>
          </h1>
          <p className="text-white/30 text-lg max-w-2xl font-medium">
            Personalized training protocols engineered for your current BMI and physical goals.
          </p>
        </div>

        {/* This component now takes up 100% width of the parent */}
        <PlanCards />

        {/* Footer Navigation */}
        <div className="mt-12 mb-10 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-2 text-white/20 hover:text-white transition-all text-sm font-bold uppercase tracking-widest"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Calculator
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;