import React, { useState, useRef } from "react";
import { ShoppingCart, ArrowUpRight, Plus, Minus, Activity, Lock, Unlock, Zap, Wind, ShieldCheck } from "lucide-react";

// Glitch text component with Rose-400
const CyberText = ({ text, active }) => (
  <div className={`relative inline-block ${active ? 'animate-pulse' : ''}`}>
    <span className="relative z-10">{text}</span>
    {active && (
      <>
        <span className="absolute top-0 left-0 -translate-x-[2px] text-white opacity-70 z-0 animate-ping">{text}</span>
        <span className="absolute top-0 left-0 translate-x-[2px] text-rose-400 drop-shadow-[0_0_15px_rgba(251,113,133,0.8)] opacity-90 z-0 animate-pulse">
          {text}
        </span>
      </>
    )}
  </div>
);

const shoeData = [
  { id: 201, brand: "Yonex", name: "POWER CUSHION 65 Z3", price: 159, tag: "STABILITY // CORE", color: "from-rose-500/20 to-rose-900/10", image: "/power-cushion.jpg", specs: { weight: "310g", tech: "Power Cushion+" } },
  { id: 202, brand: "Yonex", name: "AERUS Z2 LIGHTWEIGHT", price: 145, tag: "ULTRA_LIGHT // V2", color: "from-rose-600/20 to-rose-500/5", image: "/aerus-z2-.jpg", specs: { weight: "240g", tech: "Durable Skin Light" } },
  { id: 203, brand: "Li-Ning", name: "BLADE DF LITE", price: 120, tag: "SPEED // AGILITY", color: "from-rose-500/20 to-rose-900/10", image: "/blade-lite.jpg", specs: { weight: "280g", tech: "Li-Ning Boom" } },
  { id: 204, brand: "Li-Ning", name: "SAGA II PRO", price: 135, tag: "PRO // TOURNAMENT", color: "from-rose-600/20 to-rose-500/5", image: "/sage-2.jpg", specs: { weight: "305g", tech: "Carbon Fiber Plate" } },
  { id: 205, brand: "Victor", name: "P9200CC SUPPORT", price: 150, tag: "MAX_SUPPORT", color: "from-rose-500/20 to-rose-900/10", image: "/p9200.jpg", specs: { weight: "320g", tech: "E-Vace" } },
  { id: 206, brand: "Victor", name: "A970TD NITRO", price: 140, tag: "NITRO_DRIVE", color: "from-rose-600/20 to-rose-500/5", image: "/nitro.jpg", specs: { weight: "295g", tech: "NitroLite" } },
];

export default function Shoes({ addToCart }) {
  const [filter, setFilter] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const gridTopRef = useRef(null);

  const filteredShoes = shoeData.filter((item) => {
    if (filter === "All") return true;
    return item.brand === filter || item.tag.includes(filter);
  });

  const displayShoes = isExpanded ? filteredShoes : filteredShoes.slice(0, 4);

  const handleToggleExpand = () => {
    if (isExpanded) {
      gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setIsExpanded(false), 300);
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section id="shoes" className="w-full bg-[#020204] min-h-screen py-24 px-4 sm:px-10 relative overflow-hidden font-mono selection:bg-rose-400 selection:text-black">
      
      {/* 1. CYBER GRID & SCANNING LINE (Badminton Effect) */}
      <div className="cyber-grid absolute inset-0 opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-rose-400/20 shadow-[0_0_15px_rgba(251,113,133,0.5)] animate-scan z-0" />
      
      {/* 2. AMBIENT GLOW */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-500/10 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />

      {/* 3. TELEMETRY OVERLAY */}
      <div className="absolute top-24 left-8 hidden xl:block text-rose-400/20 text-[10px] leading-relaxed tracking-widest uppercase pointer-events-none whitespace-pre z-0">
        {`FOOT_CORE: ACTIVE\nSECTOR: SH-04\nSYNC: CALIBRATED\nENCRYPTION: ROSE-SHIFT\nTRACTION_LOCK: 100%`}
      </div>

      <div className="relative w-full max-w-7xl mx-auto z-10">
        
        {/* Header Area (Badminton Logic) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-rose-500/10 pb-12" ref={gridTopRef}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Activity size={16} className="text-rose-400 animate-pulse" />
              <span className="text-rose-400 text-[10px] font-black uppercase tracking-[0.5em] italic">
                SYSTEM_ACCESS // TRACTION_VAULT
              </span>
            </div>
            
            <h2 className="text-rose-400 drop-shadow-[0_0_15px_rgba(251,113,133,0.8)] text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.85] uppercase mb-8">
              The <span className="text-white brightness-110">Footwear</span>
            </h2>

            {/* Filter Bar */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["All", "Yonex", "Victor", "Li-Ning"].map((f) => (
                <button
                  key={f}
                  onClick={() => { setFilter(f); setIsExpanded(false); }}
                  className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all border ${
                    filter === f 
                    ? "bg-rose-500 text-white border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.4)]" 
                    : "bg-white/5 text-white/40 border-white/10 hover:border-rose-400/50 hover:text-rose-400"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <p className="text-white/40 max-w-sm text-[10px] font-bold uppercase tracking-widest leading-relaxed text-left lg:text-right">
              Precision traction units engineered for high-intensity lateral shifts and explosive verticality.
            </p>
          </div>
        </div>

        {/* Product Grid (Badminton Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700">
          {displayShoes.map((shoe) => {
            const isHovered = hoveredId === shoe.id;
            return (
              <div
                key={shoe.id}
                onMouseEnter={() => setHoveredId(shoe.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative bg-[#08080a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-rose-400/30 transition-all duration-700"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] m-3 overflow-hidden rounded-[2rem] bg-black">
                  <div className={`absolute inset-0 bg-gradient-to-t ${shoe.color} z-10 opacity-40 group-hover:opacity-20 transition-opacity`} />
                  <img
                    src={shoe.image}
                    alt={shoe.name}
                  />
                  
                  {/* Tag */}
                  <div className="absolute top-5 left-5 z-30">
                    <span className="bg-black/80 backdrop-blur-xl text-rose-400 text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic border border-rose-400/20">
                      {shoe.tag}
                    </span>
                  </div>

                  {/* Hover Overlay Stats */}
                  <div className={`absolute inset-0 z-20 bg-rose-500/90 backdrop-blur-sm p-8 flex flex-col justify-center transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                    <div className="text-white font-black text-[10px] uppercase space-y-4">
                      <div className="flex justify-between border-b border-white/20 pb-2"><span>Mass_Unit</span><span>{shoe.specs.weight}</span></div>
                      <div className="flex justify-between border-b border-white/20 pb-2"><span>Core_Tech</span><span>{shoe.specs.tech}</span></div>
                      <button className="w-full bg-white text-black py-3 flex items-center justify-center gap-2 hover:bg-[#ccff00] transition-all font-black skew-x-[-10deg]">
                         <span className="skew-x-[10deg]">VIEW_METRICS</span>
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => addToCart(shoe)}
                    className="absolute bottom-5 right-5 z-40 w-14 h-14 bg-rose-500 rounded-xl flex items-center justify-center text-white translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_20px_rgba(244,63,94,0.6)] hover:scale-110"
                  >
                    <ShoppingCart size={22} />
                  </button>
                </div>

                {/* Product Info */}
                <div className="px-8 pb-8 pt-4">
                  <span className="text-rose-400/60 text-[10px] font-black uppercase tracking-[0.3em]">
                      {shoe.brand} // ACCESS_LVL_02
                  </span>
                  <h3 className="text-white text-xl font-black italic uppercase tracking-tighter leading-none mb-4 group-hover:text-rose-400 transition-colors mt-2 h-12">
                    <CyberText text={shoe.name} active={isHovered} />
                  </h3>
                  
                  <div className="flex items-end justify-between mt-8 border-t border-white/5 pt-4">
                    <div className="flex flex-col">
                      <span className="text-white/20 text-[9px] font-black uppercase tracking-widest mb-1">UNIT_CREDITS</span>
                      <span className="text-3xl font-black italic text-white tracking-tighter leading-none group-hover:text-rose-400">
                          ${shoe.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expand/Collapse (HUD Style) */}
        {filteredShoes.length > 4 && (
          <div className="mt-16 flex justify-center pt-8">
            <button onClick={handleToggleExpand} className="group relative flex flex-col items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-rose-400 transition-colors">
                {isExpanded ? "SECURE_DATABASE" : "EXPAND_VAULT"}
              </span>
              <div className={`w-14 h-14 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-rose-400/50 group-hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] ${isExpanded ? "rotate-180 bg-rose-500/10 border-rose-400" : "bg-white/5"}`}>
                {isExpanded ? <Lock size={20} className="text-rose-400" /> : <Unlock size={20} className="text-white" />}
              </div>
            </button>
          </div>
        )}

        {/* Tech Footer (Shoes Specific) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
                { icon: <Zap />, title: "Explosive Kick", desc: "ENERGY RETURN MIDSOLE TECH." },
                { icon: <Wind />, title: "Breath-Flow", desc: "HEAT DISSIPATION MESH MATRIX." },
                { icon: <ShieldCheck />, title: "Ankle Guard", desc: "LATERAL STABILITY REINFORCEMENT." }
            ].map((tech, i) => (
                <div key={i} className="flex items-center gap-6 bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] hover:border-rose-400/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-rose-400 group-hover:bg-rose-500 group-hover:text-white group-hover:shadow-[0_0_15px_#f43f5e] transition-all">
                        {tech.icon}
                    </div>
                    <div>
                        <h4 className="text-white font-black italic uppercase tracking-tighter text-sm">{tech.title}</h4>
                        <p className="text-rose-400/30 text-[10px] uppercase font-bold tracking-widest">{tech.desc}</p>
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
          animation: scan 5s linear infinite;
        }
      `}</style>
    </section>
  );
}