import React, { useState, useRef } from "react";
import { ShoppingCart, X, Scale, Plus, Activity, Lock, Unlock, Zap, Wind, ShieldCheck } from "lucide-react";

// Themed Glitch Text using Blue-400
const CyberText = ({ text, active }) => (
  <div className={`relative inline-block ${active ? 'animate-pulse' : ''}`}>
    <span className="relative z-10">{text}</span>
    {active && (
      <>
        <span className="absolute top-0 left-0 -translate-x-[2px] text-white opacity-70 z-0 animate-ping">{text}</span>
        <span className="absolute top-0 left-0 translate-x-[2px] text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] opacity-90 z-0 animate-pulse">
          {text}
        </span>
      </>
    )}
  </div>
);

const products = {
  Rackets: [
    { id: 1, name: "Astrox 100ZZ", brand: "Yonex", price: 245, specs: { weight: "4U", balance: "Head Heavy", tech: "Hyper Slim Shaft" }, tags: ["POWER // PRO"], image: "/Astrox-100-ZZ.jpg", color: "from-blue-600/20 to-blue-900/10" },
    { id: 2, name: "Nanoflare 1000Z", brand: "Yonex", price: 235, specs: { weight: "4U", balance: "Head Light", tech: "Sonic Flare" }, tags: ["SPEED // ELITE"], image: "/yonex-nanoflare-1000z.jpg", color: "from-blue-500/20 to-transparent" },
    { id: 3, name: "ArcSaber 11 Pro", brand: "Yonex", price: 230, specs: { weight: "3U", balance: "Even", tech: "Control Assist" }, tags: ["CONTROL // MASTER"], image: "/Arcsaber-11.jpg", color: "from-blue-600/20 to-blue-900/10" },
    { id: 11, name: "Thruster Ryuga II", brand: "Victor", price: 215, specs: { weight: "4U", balance: "Head Heavy", tech: "WES 2.0" }, tags: ["ATTACK // HEAVY"], image: "/ryuga-2.jpg", color: "from-blue-500/20 to-transparent" },
    { id: 13, name: "DriveX 10 Metallic", brand: "Victor", price: 220, specs: { weight: "3U", balance: "Even", tech: "Metallic Frame" }, tags: ["ALL-AROUND"], image: "/DriveX101.jpg", color: "from-blue-600/20 to-blue-900/10" },
    { id: 21, name: "Axforce 100", brand: "Li-Ning", price: 260, specs: { weight: "4U", balance: "Head Heavy", tech: "M40X Carbon" }, tags: ["ULTIMATE // PRO"], image: "/Axforce-100.jpg", color: "from-blue-500/20 to-transparent" },
    { id: 22, name: "Halbertec 8000", brand: "Li-Ning", price: 235, specs: { weight: "3U", balance: "Even", tech: "6.8mm Shaft" }, tags: ["PRECISION"], image: "/Halbertec-8000.jpg", color: "from-blue-600/20 to-blue-900/10" },
    { id: 30, name: "Axforce 90 Tiger", brand: "Li-Ning", price: 240, specs: { weight: "4U", balance: "Head Heavy", tech: "Box Wing" }, tags: ["STRIKE // MAX"], image: "/Axforce-90-tiger.jpg", color: "from-blue-500/20 to-transparent" },
  ],
};

export default function Badminton({ addToCart }) {
  const [filter, setFilter] = useState("All");
  const [isExpanded, setIsExpanded] = useState(false);
  const [compareList, setCompareList] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);
  const gridTopRef = useRef(null);

  const allFiltered = products.Rackets.filter((item) => {
    if (filter === "All") return true;
    return item.brand === filter || item.tags.some(tag => tag.includes(filter));
  });

  const displayRackets = isExpanded ? allFiltered : allFiltered.slice(0, 4);

  const handleToggleExpand = () => {
    if (isExpanded) {
      gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setIsExpanded(false), 300);
    } else {
      setIsExpanded(true);
    }
  };

  const handleCompare = (p) => {
    setCompareList((prev) =>
      prev.find((x) => x.id === p.id)
        ? prev.filter((x) => x.id !== p.id)
        : prev.length < 2 ? [...prev, p] : [prev[1], p]
    );
  };

  return (
    <section id="badminton" className="w-full bg-[#020204] min-h-screen py-24 px-4 sm:px-10 relative overflow-hidden font-mono selection:bg-blue-400 selection:text-black">
      
      {/* 1. CYBER GRID & SCANNING LINE */}
      <div className="cyber-grid absolute inset-0 opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/20 shadow-[0_0_15px_rgba(96,165,250,0.5)] animate-scan z-0" />
      
      {/* 2. AMBIENT GLOW */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />

      {/* 3. HUD TELEMETRY */}
      <div className="absolute top-24 left-8 hidden xl:block text-blue-400/20 text-[10px] leading-relaxed tracking-widest uppercase pointer-events-none whitespace-pre z-0">
        {`RACKET_CORE: ACTIVE\nSECTOR: BDM-07\nSYNC: ESTABLISHED\nENCRYPTION: BLUE-SHIFT\nAERO_DYNAMICS: 0.88`}
      </div>

      <div className="relative w-full max-w-7xl mx-auto z-10">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 border-b border-blue-500/10 pb-12" ref={gridTopRef}>
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Activity size={16} className="text-blue-400 animate-pulse" />
              <span className="text-blue-400 text-[10px] font-black uppercase tracking-[0.5em] italic">
                SYSTEM_ACCESS // RACKET_VAULT
              </span>
            </div>
            
            <h2 className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)] text-6xl sm:text-8xl font-black italic tracking-tighter leading-[0.85] uppercase mb-8">
              Aero <span className="text-white brightness-110">Rackets</span>
            </h2>

            {/* Filter Bar */}
            <div className="flex flex-wrap gap-2">
              {["All", "Yonex", "Victor", "Li-Ning"].map((f) => (
                <button
                  key={f}
                  onClick={() => { setFilter(f); setIsExpanded(false); }}
                  className={`px-5 py-2 text-[10px] font-black uppercase tracking-widest transition-all border ${
                    filter === f 
                    ? "bg-blue-500 text-white border-blue-500 shadow-[0_0_15px_rgba(96,165,250,0.4)]" 
                    : "bg-white/5 text-white/40 border-white/10 hover:border-blue-400/50 hover:text-blue-400"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end">
             <p className="text-white/40 max-w-sm text-[10px] font-bold uppercase tracking-widest leading-relaxed text-left lg:text-right">
              Calibrated for maximum repulsion and precision. Select a frame to initiate hardware synchronization.
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700">
          {displayRackets.map((item) => {
            const isHovered = hoveredId === item.id;
            const isComparing = compareList.find(x => x.id === item.id);

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative bg-[#08080a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-blue-400/30 transition-all duration-700"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] m-3 overflow-hidden rounded-[2rem] bg-black">
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} z-10 opacity-40 group-hover:opacity-20 transition-opacity`} />
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                  
                  {/* Tag */}
                  <div className="absolute top-5 left-5 z-30">
                    <span className="bg-black/80 backdrop-blur-xl text-blue-400 text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic border border-blue-400/20">
                      {item.tags[0]}
                    </span>
                  </div>

                  {/* Hover Overlay Stats */}
                  <div className={`absolute inset-0 z-20 bg-blue-500/90 backdrop-blur-sm p-8 flex flex-col justify-center transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-full'}`}>
                    <div className="text-white font-black text-[10px] uppercase space-y-4">
                      <div className="flex justify-between border-b border-white/20 pb-2"><span>Balance</span><span>{item.specs.balance}</span></div>
                      <div className="flex justify-between border-b border-white/20 pb-2"><span>Weight</span><span>{item.specs.weight}</span></div>
                      <div className="flex justify-between border-b border-white/20 pb-2"><span>Core_Tech</span><span className="text-[8px]">{item.specs.tech}</span></div>
                      
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleCompare(item); }}
                        className={`w-full py-3 flex items-center justify-center gap-2 transition-all font-black skew-x-[-10deg] ${isComparing ? 'bg-black text-blue-400' : 'bg-white text-black hover:bg-[#ccff00]'}`}
                      >
                         <Scale size={14} className="skew-x-[10deg]" />
                         <span className="skew-x-[10deg]">{isComparing ? 'SYNCED' : 'COMPARE_DATA'}</span>
                      </button>
                    </div>
                  </div>

                  <button 
                    onClick={() => addToCart(item)}
                    className="absolute bottom-5 right-5 z-40 w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center text-white translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_20px_rgba(96,165,250,0.6)] hover:scale-110"
                  >
                    <Plus size={22} />
                  </button>
                </div>

                {/* Product Info */}
                <div className="px-8 pb-8 pt-4">
                  <span className="text-blue-400/60 text-[10px] font-black uppercase tracking-[0.3em]">
                      {item.brand} // TRACE_SYNC
                  </span>
                  <h3 className="text-white text-xl font-black italic uppercase tracking-tighter leading-none mb-4 group-hover:text-blue-400 transition-colors mt-2 h-12">
                    <CyberText text={item.name} active={isHovered} />
                  </h3>
                  
                  <div className="flex items-end justify-between mt-8 border-t border-white/5 pt-4">
                    <div className="flex flex-col">
                      <span className="text-white/20 text-[9px] font-black uppercase tracking-widest mb-1">VAL_CREDITS</span>
                      <span className="text-3xl font-black italic text-white tracking-tighter leading-none group-hover:text-blue-400">
                          ${item.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expand Button */}
        {allFiltered.length > 4 && (
          <div className="mt-16 flex justify-center pt-8">
            <button onClick={handleToggleExpand} className="group relative flex flex-col items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-hover:text-blue-400 transition-colors">
                {isExpanded ? "SECURE_DATABASE" : "EXPAND_VAULT"}
              </span>
              <div className={`w-14 h-14 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-blue-400/50 group-hover:shadow-[0_0_30px_rgba(96,165,250,0.2)] ${isExpanded ? "rotate-180 bg-blue-500/10 border-blue-400" : "bg-white/5"}`}>
                {isExpanded ? <Lock size={20} className="text-blue-400" /> : <Unlock size={20} className="text-white" />}
              </div>
            </button>
          </div>
        )}

        {/* Tech Footer */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
                { icon: <Zap />, title: "Instant Repulsion", desc: "M40X CARBON FIBER MATRIX." },
                { icon: <Wind />, title: "Aero-Dynamic", desc: "DRAG REDUCTION PROFILE // 0.88." },
                { icon: <ShieldCheck />, title: "Torsion Shield", desc: "MAXIMUM STABILITY ON IMPACT." }
            ].map((tech, i) => (
                <div key={i} className="flex items-center gap-6 bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] hover:border-blue-400/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_15px_#60a5fa] transition-all">
                        {tech.icon}
                    </div>
                    <div>
                        <h4 className="text-white font-black italic uppercase tracking-tighter text-sm">{tech.title}</h4>
                        <p className="text-blue-400/30 text-[10px] uppercase font-bold tracking-widest">{tech.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Comparison Drawer */}
      {compareList.length > 0 && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-2xl animate-in slide-in-from-bottom duration-500">
          <div className="bg-black/90 backdrop-blur-2xl border-2 border-blue-500/50 p-2 flex items-center gap-2 shadow-[0_0_50px_rgba(0,0,0,0.9)] rounded-[2rem] overflow-hidden">
             {compareList.map(p => (
                <div key={p.id} className="bg-white/5 flex items-center gap-3 px-6 py-4 flex-1 relative rounded-2xl group border border-white/5">
                  <img src={p.image} className="w-8 h-8 object-contain" alt="" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white italic truncate uppercase">{p.name}</span>
                    <span className="text-[8px] text-blue-400 font-bold uppercase tracking-widest">{p.specs.weight} // {p.specs.balance}</span>
                  </div>
                  <X size={16} className="ml-auto cursor-pointer text-white/40 hover:text-red-500 transition-colors" onClick={() => handleCompare(p)} />
                </div>
              ))}
              {compareList.length === 2 && (
                <button className="bg-blue-500 px-10 h-16 text-white text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all rounded-2xl shadow-[0_0_20px_rgba(96,165,250,0.4)]">
                  RUN_SYNC
                </button>
              )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 7s linear infinite;
        }
      `}</style>
    </section>
  );
}