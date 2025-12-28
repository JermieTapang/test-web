import React, { useState } from "react";
import { ArrowRight, ShoppingCart, Zap, ShieldCheck, Wind, Plus, Activity } from "lucide-react";

const Clothing = () => {
  const [activeBrand, setActiveBrand] = useState("All");

  const products = [
    {
      id: 1,
      name: "YONEX 2024 Korea National Team Jersey",
      brand: "Yonex",
      category: "Olympic Edition",
      price: "$75.00",
      tag: "CORE_TEMP // -3°C",
      image: "/korea.jpg",
      color: "from-emerald-600/20 to-emerald-500/5",
      desc: "Xylitol-infused fabric lowers body temp by 3°C."
    },
    {
      id: 2,
      name: "Li-Ning Isometric T-Shirt",
      brand: "Li-Ning",
      category: "Pro Series",
      price: "$35.00",
      tag: "AT-DRY // PROTOCOL",
      image: "/Isometric.jpg",
      color: "from-emerald-600/20 to-emerald-900/10",
      desc: "AT-Dry moisture management with gold dragon embroidery."
    },
    {
      id: 3,
      name: "VICTOR Capsule Collection Jersey",
      brand: "Victor",
      category: "Signature",
      price: "$45.00",
      tag: "FLEX // KINETIC",
      image: "/viktor.jpg",
      color: "from-emerald-400/20 to-emerald-500/5",
      desc: "Ultra-fine fiber for maximum swing flexibility."
    },
    {
      id: 4,
      name: "YONEX ESSENTIAL SHORTS",
      brand: "Aero Vault",
      category: "Performance",
      price: "$22.00",
      tag: "ERGONOMIC // V3",
      image: "/essential.jpg",
      color: "from-[#ccff00]/20 to-transparent",
      desc: "3D ergonomic cut specifically for deep lunges."
    },
  ];

  const filteredProducts = activeBrand === "All" 
    ? products 
    : products.filter(p => p.brand === activeBrand);

  return (
    <div className="w-full bg-[#020204] py-24 px-4 sm:px-6 lg:px-10 font-mono selection:bg-[#ccff00] selection:text-black relative overflow-hidden">
      
      {/* 1. CYBER GRID & SCANNING LINES */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40" />
      <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.5)] animate-scan z-0" />
      
      {/* 2. EMERALD BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] -z-10 rounded-full animate-pulse-slow" />
      
      {/* 3. TELEMETRY WATERMARK */}
      <div className="absolute top-20 left-10 hidden xl:block text-emerald-400/20 text-[10px] leading-relaxed tracking-widest uppercase pointer-events-none whitespace-pre">
        {`FABRIC_ID: BIO_SHIELD\nTHREAD_COUNT: 450K\nSTATUS: THERMO_ACTIVE\nMOISTURE_LINK: OPTIMAL`}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Activity size={16} className="text-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.5em] italic">
                AERO_CLOAK // SYSTEM LOADED
              </span>
            </div>
            
            <h2 className="text-white text-6xl sm:text-8xl font-black italic tracking-tighter leading-[0.85] uppercase mb-8">
              Gear For <br />
              <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]">Champions</span>
            </h2>

            {/* Brand Filter Bar */}
            <div className="flex flex-wrap gap-3 mt-4">
              {["All", "Yonex", "Li-Ning", "Victor"].map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    activeBrand === brand 
                    ? "bg-emerald-400 border-emerald-400 text-black shadow-[0_0_20px_rgba(52,211,153,0.4)]" 
                    : "bg-white/5 border-white/10 text-white/50 hover:border-emerald-400/50 hover:text-emerald-400"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-right hidden sm:block">
                    <p className="text-white font-black italic uppercase tracking-tighter text-sm">2025 BIO-SHIELD</p>
                    <p className="text-emerald-400/50 text-[10px] uppercase font-bold tracking-widest">ENCRYPTED_DROP</p>
                </div>
                <div className="w-14 h-14 bg-emerald-400 flex items-center justify-center skew-x-[-12deg] group-hover:rotate-12 transition-all duration-500 shadow-[0_0_20px_rgba(52,211,153,0.5)]">
                    <Plus className="text-black skew-x-12" />
                </div>
              </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-[#08080a] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-emerald-400/30 transition-all duration-700"
            >
              <div className="relative aspect-[3/4] m-3 overflow-hidden rounded-[2rem]">
                {/* Emerald Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} z-10 opacity-40 group-hover:opacity-20 transition-opacity`} />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                <div className="absolute top-5 left-5 z-30">
                  <span className="bg-black/80 backdrop-blur-xl text-emerald-400 text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest italic border border-emerald-400/20">
                    {product.tag}
                  </span>
                </div>

                <button className="absolute bottom-5 right-5 z-40 w-14 h-14 bg-emerald-400 rounded-xl flex items-center justify-center text-black translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_20px_rgba(52,211,153,0.6)] hover:scale-110">
                  <ShoppingCart size={22} />
                </button>
              </div>

              {/* Product Info */}
              <div className="px-8 pb-8 pt-4 font-mono">
                <span className="text-emerald-400/60 text-[10px] font-black uppercase tracking-[0.3em]">
                    {product.brand} // {product.category}
                </span>
                <h3 className="text-white text-xl font-black italic uppercase tracking-tighter leading-none mb-4 group-hover:text-emerald-400 transition-colors mt-2">
                  {product.name}
                </h3>
                
                <div className="flex items-end justify-between mt-8">
                  <div className="flex flex-col">
                    <span className="text-white/20 text-[9px] font-black uppercase tracking-widest mb-1">DATA_VALUE</span>
                    <span className="text-3xl font-black italic text-white tracking-tighter leading-none group-hover:text-emerald-400">
                        {product.price}
                    </span>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="w-5 h-5 rounded-full border-2 border-[#111113] bg-emerald-400 transition-colors opacity-50 group-hover:opacity-100" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Footer Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
                { icon: <Zap />, title: "3°C Cooler", desc: "BIO-COOLING THREAD TECHNOLOGY." },
                { icon: <Wind />, title: "Aero-Flow", desc: "DYNAMIC MOISTURE DISPERSION SYSTEM." },
                { icon: <ShieldCheck />, title: "Durazone", desc: "HEAVY-DUTY FRICTION REINFORCEMENT." }
            ].map((tech, i) => (
                <div key={i} className="flex items-center gap-6 bg-white/[0.02] border border-white/5 p-6 rounded-[2rem] hover:border-emerald-400/30 transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black group-hover:shadow-[0_0_15px_#34d399] transition-all">
                        {tech.icon}
                    </div>
                    <div>
                        <h4 className="text-white font-black italic uppercase tracking-tighter text-sm">{tech.title}</h4>
                        <p className="text-emerald-400/30 text-[10px] uppercase font-bold tracking-widest">{tech.desc}</p>
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
          animation: scan 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Clothing;