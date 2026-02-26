import React, { useState, useMemo } from 'react';
import { User, Ruler, Weight, Calendar, Activity, RefreshCcw } from 'lucide-react';

const BMI = () => {
  const [data, setData] = useState({
    name: '',
    height: '',
    weight: '',
    age: ''
  });

  const result = useMemo(() => {
    const height = parseFloat(data.height);
    const weight = parseFloat(data.weight);

    if (!height || !weight) return null;

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = "";
    let color = "";

    if (bmiValue < 18.5) {
      category = "Underweight";
      color = "text-yellow-300";
    } else if (bmiValue < 25) {
      category = "Healthy";
      color = "text-green-400";
    } else {
      category = "Overweight";
      color = "text-red-300";
    }

    return { score: bmiValue, category, color };
  }, [data.height, data.weight]);

  const reset = () => {
    setData({ name: '', height: '', weight: '', age: '' });
  };

  return (
    /* FIX: Added 'fixed inset-0' and 'w-full' 
      This ensures the background takes up the entire browser window 
      and centers the content regardless of where the component is called.
    */
    <div className="fixed inset-0 h-screen w-screen flex items-center justify-center p-4 bg-gradient-to-tr via-black to-rose-600 font-sans overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] bg-orange-400/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-rose-400/15 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Card - Now perfectly centered */}
      <div className="relative w-full max-w-md backdrop-blur-3xl bg-white/10 border border-white/20 rounded-[2.5rem] p-6 md:p-8 shadow-2xl flex flex-col justify-between z-10">

        {/* Header */}
        <div className="text-center mb-5">
          <div className="inline-block p-2.5 bg-white/10 rounded-2xl mb-3 shadow-inner border border-white/10">
            <Activity className="text-white h-6 w-6 md:h-7 md:w-7" />
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
            BMI Index
          </h1>
          <p className="text-orange-100/40 text-[10px] uppercase tracking-[0.2em] mt-1">
            Personal Health Analytics
          </p>
        </div>

        {/* Form Container */}
        <div className="space-y-3.5">
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-200 h-4 w-4 opacity-60" />
            <input
              type="text"
              placeholder="Your Name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-white/20 outline-none focus:border-orange-400/50 transition-all text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative group">
              <Ruler className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-200 h-4 w-4 opacity-60" />
              <input
                type="number"
                placeholder="Height (cm)"
                value={data.height}
                onChange={(e) => setData({ ...data, height: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-white/20 outline-none focus:border-orange-400/50 transition-all text-sm"
              />
            </div>
            <div className="relative group">
              <Weight className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-200 h-4 w-4 opacity-60" />
              <input
                type="number"
                placeholder="Weight (kg)"
                value={data.weight}
                onChange={(e) => setData({ ...data, weight: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-white/20 outline-none focus:border-orange-400/50 transition-all text-sm"
              />
            </div>
          </div>

          <div className="relative group">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-200 h-4 w-4 opacity-60" />
            <input
              type="number"
              placeholder="Your Age"
              value={data.age}
              onChange={(e) => setData({ ...data, age: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-white/20 outline-none focus:border-orange-400/50 transition-all text-sm"
            />
          </div>
        </div>

        {/* Results Area */}
        <div
          className={`
            mt-6 bg-white/5 rounded-3xl p-5 text-center border border-white/5
            transition-all duration-500 min-h-[120px] flex flex-col justify-center
            ${result ? "opacity-100 scale-100" : "opacity-40 scale-95"}
          `}
        >
          {result ? (
            <>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">
                {data.name || "Student"} Score
              </p>
              <h2 className="text-5xl font-black text-white leading-none">
                {result.score}
              </h2>
              <p className={`text-sm font-bold mt-2 uppercase ${result.color}`}>
                {result.category}
              </p>
            </>
          ) : (
            <p className="text-white/30 text-xs italic">
              Results appear here instantly
            </p>
          )}
        </div>

        {/* Reset Button */}
        <button
          onClick={reset}
          className="mt-4 flex items-center justify-center gap-2 text-white/30 hover:text-white transition-all py-2 text-xs"
        >
          <RefreshCcw size={12} /> Reset Calculation
        </button>

      </div>
    </div>
  );
};

export default BMI;