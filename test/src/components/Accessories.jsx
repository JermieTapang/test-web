import React, { useState } from "react";
import { ShoppingCart, Star, Package, Activity, Layers, Check, Plus, Zap, Wind, ShieldCheck } from "lucide-react";

// Glitch text updated to Amber (#fbbf24)
const CyberText = ({ text, active }) => (
  <div className={`relative inline-block ${active ? 'animate-pulse' : ''}`}>
    <span className="relative z-10">{text}</span>
    {active && (
      <>
        <span className="absolute top-0 left-0 -translate-x-[2px] text-white opacity-70 z-0 animate-ping">{text}</span>
        <span className="absolute top-0 left-0 translate-x-[2px] text-[#fbbf24] drop-shadow-[0_0_15px_rgba(251,191,36,0.8)] opacity-90 z-0 animate-pulse">
          {text}
        </span>
      </>
    )}
  </div>
);

const accessoryProducts = [
  {
    id: 1,
    name: "Aero-Flight Pro Shuttles",
    category: "Shuttlecocks",
    price: 34.0,
    tag: "FLIGHT_STABLE // A-GRADE",
    image: "/shuttle.jpg", // Replace with your image path
    icon: <Package className="text-[#fbbf24]" size={32} />,
    color: "from-amber-600/20 to-amber-500/5",
    variationType: "Speed",
    variations: ["76", "77", "78"],
  },
  {
    id: 2,
    name: "Nanogy 95 Strings",
    category: "Strings",
    price: 18.0,
    tag: "REPULSION // 0.69MM",
    image: "/strings.jpg",
    icon: <Activity className="text-[#fbbf24]" size={32} />,
    color: "from-amber-600/20 to-orange-900/10",
    variationType: "Color",
    variations: ["#fbbf24", "#FFFFFF", "#3b82f6"],
  },
  {
    id: 3,
    name: "Super-Tac Overgrips",
    category: "Grips",
    price: 12.0,
    tag: "MAX_TRACTION // DRY",
    image: "/grips.jpg",
    icon: <Layers className="text-[#fbbf24]" size={32} />,
    color: "from-amber-400/20 to-amber-500/5",
    variationType: "Texture",
    variations: ["Smooth", "Tacky", "Dry"],
  },
  {
    id: 4,
    name: "Tour-Series 9 Bag",
    category: "Bags",
    price: 85.0,
    tag: "THERMAL_SHIELD // 9R",
    image: "/bag.jpg",
    icon: <ShoppingCart className="text-[#fbbf24]" size={32} />,
    color: "from-amber-600/20 to-transparent",
    variationType: "Color",
    variations: ["#000000", "#ccff00", "#b91c1c"],
  },
];

const AccessoryCard = ({ item }) => {
  const [selectedVar, setSelectedVar] = useState(item.variations[0]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-[#08080a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#fbbf24]/30 transition-all duration-700"
    >
      {/* Image Container with Amber HUD Overlay */}
      <div className="relative aspect-[3/4] m-3 overflow-hidden rounded-[2rem] bg-black/40">
        <div className={`absolute inset-0 bg-gradient-to-t ${item.color} z-10 opacity-40 group-hover:opacity-20 transition-opacity`} />
        
        {/* Placeholder for actual image or icon fallback */}
        <div className="w-full h-full flex items-center justify-center transition-transform duration-1000 group-hover:scale-110">
           {item.icon}
        </div>
        
        <div className="absolute top-5 left-5 z-30">
          <span className="bg-black/80 backdrop-blur-xl text-[#fbbf24] text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic border border-[#fbbf24]/20">
            {item.tag}
          </span>
        </div>

        <button className="absolute bottom-5 right-5 z-40 w-14 h-14 bg-[#fbbf24] rounded-xl flex items-center justify-center text-black translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_20px_rgba(251,191,36,0.6)] hover:scale-110">
          <Plus size={22} />
        </button>
      </div>

      {/* Info Section */}
      <div className="px-8 pb-8 pt-4 font-mono">
        <span className="text-[#fbbf24]/60 text-[10px] font-black uppercase tracking-[0.3em]">
          {item.category} // LVL_4
        </span>
        <h3 className="text-white text-xl font-black italic uppercase tracking-tighter leading-none mb-4 group-hover:text-[#fbbf24] transition-colors mt-2">
          <CyberText text={item.name} active={isHovered} />
        </h3>

        {/* Variations Selector */}
        <div className="mb-6 pt-4 border-t border-white/5">
          <p className="text-[8px] text-white/20 uppercase font-black tracking-widest mb-3">
            SELECT_{item.variationType.toUpperCase()}
          </p>
          <div className="flex gap-2">
            {item.variations.map((v) => (
              <button
                key={v}
                onClick={() => setSelectedVar(v)}
                className={`transition-all duration-300 relative ${
                  item.variationType === "Color" ? "w-6 h-6 rounded-md" : "px-3 py-1 text-[10px] font-black"
                } border ${
                  selectedVar === v ? "border-[#fbbf24] text-[#fbbf24]" : "border-white/10 text-white/40 hover:border-white/30"
                }`}
                style={item.variationType === "Color" ? { backgroundColor: v } : {}}
              >
                {item.variationType !== "Color" && v}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-end justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-white/20 text-[9px] font-black uppercase tracking-widest mb-1">VALUE_CREDITS</span>
            <span className="text-3xl font-black italic text-white tracking-tighter leading-none group-hover:text-[#fbbf24]">
                ${item.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Accessories() {
  return (
    <section id="accessories" className="w-full bg-[#020204] min-h-screen py-24 px-4 sm:px-10 relative overflow-hidden font-mono">
      {/* 1. CYBER GRID & AMBER SCANNING LINE */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#fbbf24]/20 shadow-[0_0_15px_rgba(251,191,36,0.5)] animate-scan z-0" />
      
      {/* 2. AMBER BACKGROUND GLOW */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#fbbf24]/10 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />

      {/* 3. HUD TELEMETRY */}
      <div className="absolute top-24 left-8 hidden xl:block text-[#fbbf24]/20 text-[10px] leading-relaxed tracking-widest uppercase pointer-events-none whitespace-pre">
        {`CAT_ID: ACC-99\nTYPE: ESSENTIALS\nSTATUS: IN_STOCK\nENCRYPTION: AMBER_GOLD`}
      </div>

      <div className="relative w-full max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-[#fbbf24]/10 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Activity size={16} className="text-[#fbbf24] animate-pulse" />
              <span className="text-[#fbbf24] text-[10px] font-black uppercase tracking-[0.5em] italic">
                AERO_SUPPLY // LOGISTICS_ON
              </span>
            </div>
            
            <h2 className="text-white text-6xl sm:text-8xl font-black italic tracking-tighter leading-[0.85] uppercase mb-8">
              Tournament <br />
              <span className="text-[#fbbf24] drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]">Add-Ons</span>
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-right hidden sm:block">
                    <p className="text-white font-black italic uppercase tracking-tighter text-sm">PRO_GRADE ACCESSORIES</p>
                    <p className="text-[#fbbf24]/50 text-[10px] uppercase font-bold tracking-widest">BATCH: 0042-Z</p>
                </div>
                <div className="w-14 h-14 bg-[#fbbf24] flex items-center justify-center skew-x-[-12deg] group-hover:rotate-12 transition-all duration-500 shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                    <Plus className="text-black skew-x-12" />
                </div>
              </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessoryProducts.map((item) => (
            <AccessoryCard key={item.id} item={item} />
          ))}
        </div>

        {/* Promo Banner */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
                { icon: <Zap />, title: "Bulk Solutions", desc: "PREFERRED RATES FOR ACADEMIES." },
                { icon: <Wind />, title: "Fast Shipping", desc: "LOGISTICS_SYNC: 24H DISPATCH." },
                { icon: <ShieldCheck />, title: "Auth Gear", desc: "100% VERIFIED EQUIPMENT." }
            ].map((tech, i) => (
                <div key={i} className="flex items-center gap-6 bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] hover:border-[#fbbf24]/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#fbbf24] group-hover:bg-[#fbbf24] group-hover:text-black group-hover:shadow-[0_0_15px_#fbbf24] transition-all">
                        {tech.icon}
                    </div>
                    <div>
                        <h4 className="text-white font-black italic uppercase tracking-tighter text-sm">{tech.title}</h4>
                        <p className="text-[#fbbf24]/30 text-[10px] uppercase font-bold tracking-widest">{tech.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 6s linear infinite;
        }
      `}</style>
    </section>
  );
}