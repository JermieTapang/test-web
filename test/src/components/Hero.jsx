import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingBag, Zap, Trophy, Shirt, ArrowRight, Activity } from "lucide-react";

// DYNAMIC GLITCH COMPONENT
const GlitchTitle = ({ text, isActive, slideColorClass, glowClass }) => {
  const [glitchPhase, setGlitchPhase] = useState(0);

  useEffect(() => {
    if (isActive) {
      const sequence = [
        () => setGlitchPhase(1),
        () => setGlitchPhase(2),
        () => setGlitchPhase(0),
        () => setGlitchPhase(1),
        () => setGlitchPhase(0),
      ];
      sequence.forEach((action, i) => {
        setTimeout(action, i * 60);
      });
    }
  }, [isActive, text]);

  const getGlitchStyle = (phase) => {
    switch (phase) {
      case 1: return `translate-x-[4px] skew-x-[10deg] brightness-150 ${slideColorClass}`;
      case 2: return "translate-x-[-4px] skew-x-[-10deg] contrast-200 text-white";
      default: return "translate-x-0 skew-x-0";
    }
  };

  return (
    <div className="relative inline-block overflow-visible group">
      <span className={`relative block transition-all duration-[50ms] z-10 ${getGlitchStyle(glitchPhase)}`}>
        {text}
      </span>
      {glitchPhase > 0 && (
        <>
          {/* THEME SPECIFIC GLITCH LAYER */}
          <span className={`absolute top-0 left-0 translate-x-[2px] ${slideColorClass} ${glowClass} z-0 animate-pulse select-none`}>
            {text}
          </span>
          <span className="absolute top-0 left-0 -translate-x-[2px] text-white opacity-30 z-0 select-none">
            {text}
          </span>
        </>
      )}
    </div>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      id: 1,
      category: "Rackets",
      tag: "SYSTEM-ACTIVE // 001",
      title: "LI-NING BLAZE 100",
      desc: "Tactical carbon technology for maximum power output.",
      price: "$189.00",
      colorClass: "text-blue-400",
      glowClass: "drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]",
      aura: "bg-blue-500/10",
      icon: <Zap size={64} className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.8)]" />,
    },
    {
      id: 2,
      category: "Footwear",
      tag: "KINETIC-DRIVE // 002",
      title: "COURT-GRIP PRO V2",
      desc: "Hexagrip sole technology for lightning-fast lateral movement.",
      price: "$125.00",
      colorClass: "text-rose-400",
      glowClass: "drop-shadow-[0_0_15px_rgba(251,113,133,0.8)]",
      aura: "bg-rose-500/10",
      icon: <ShoppingBag size={64} className="text-rose-400 drop-shadow-[0_0_15px_rgba(251,113,133,0.8)]" />,
    },
    {
      id: 3,
      category: "Clothing",
      tag: "BIO-SHIELD // 003",
      title: "AERO-DRY JERSEY",
      desc: "Moisture-wicking tech engineered for intense professional rallies.",
      price: "$45.00",
      colorClass: "text-emerald-400",
      glowClass: "drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]",
      aura: "bg-emerald-500/10",
      icon: <Shirt size={64} className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]" />,
    },
    {
      id: 4,
      category: "Accessories",
      tag: "FLIGHT-DATA // 004",
      title: "AERO-FLIGHT SHUTTLES",
      desc: "Premium goose feather for consistent flight and durability.",
      price: "$32.00",
      colorClass: "text-amber-400",
      glowClass: "drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]",
      aura: "bg-amber-500/10",
      icon: <Trophy size={64} className="text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]" />,
    },
  ];

  const SLIDE_DURATION = 6000;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (100 / (SLIDE_DURATION / 100));
      });
    }, 100);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setProgress(0);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  return (
    <div className="w-full bg-[#020204] min-h-screen py-24 px-4 sm:px-10 relative overflow-hidden font-mono selection:bg-[#ccff00] selection:text-black">
      
      {/* BACKGROUND TECH GRID */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* DYNAMIC BACKGROUND AURA - Transitions with slide */}
      <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] blur-[120px] rounded-full animate-pulse pointer-events-none transition-colors duration-1000 ${slides[currentSlide].aura}`} />

      {/* TELEMETRY DATA */}
      <div className="absolute top-32 left-8 hidden xl:block text-[#ccff00]/40 text-[10px] leading-relaxed tracking-widest uppercase pointer-events-none whitespace-pre z-50">
        {`CORE_ID: AERO-VAULT\nLINK: ESTABLISHED\nSTATUS: ONLINE\nTEMP: OPTIMAL\nUSER: ROOT_ADMIN`}
      </div>

      <div className="relative w-full max-w-7xl mx-auto z-10">
        <div className="relative bg-[#08080a]/80 backdrop-blur-md border border-white/5 p-6 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden">
          
          {/* HUD BRACKETS */}
          <div className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2 border-[#ccff00]/30" />
          <div className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2 border-[#ccff00]/30" />

          {/* PROGRESS BAR */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5">
            <div 
              className="h-full bg-[#ccff00] shadow-[0_0_15px_#ccff00] transition-all duration-100 ease-linear" 
              style={{ width: `${progress}%` }} 
            />
          </div>

          {/* HEADER */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 border-b border-white/5 pb-8 relative z-50">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => goToSlide(0)}>
              <div className="w-10 h-10 bg-[#ccff00] flex items-center justify-center skew-x-[-12deg] shadow-[0_0_20px_rgba(204,255,0,0.4)]">
                <div className="w-4 h-4 bg-black" />
              </div>
              <span className="text-white font-black tracking-tighter text-2xl uppercase italic">
                AERO<span className="text-[#ccff00]">VAULT</span>.SYS
              </span>
            </div>

            <div className="hidden md:flex gap-6 mt-6 md:mt-0">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all ${
                    currentSlide === idx ? "text-[#ccff00]" : "text-white/20 hover:text-white"
                  }`}
                >
                  [{s.category}]
                </button>
              ))}
            </div>
          </div>

          {/* MAIN SLIDE AREA */}
          <div className="relative h-[550px] w-full flex items-center">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-out flex flex-col lg:flex-row items-center ${
                  index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12 pointer-events-none"
                }`}
              >
                <div className="flex-1 z-20">
                  <div className="flex items-center gap-3 mb-6">
                    <Activity size={14} className="text-[#ccff00] animate-pulse" />
                    <span className="text-[#ccff00] text-[10px] font-black uppercase tracking-[0.4em] italic bg-[#ccff00]/10 px-3 py-1 border border-[#ccff00]/20">
                      {slide.tag}
                    </span>
                  </div>

                  <h1 className="text-white text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] mb-8">
                    {slide.title.split(" ").map((word, i) => (
                      <span key={i} className="block">
                        <GlitchTitle 
                          text={word} 
                          isActive={index === currentSlide} 
                          slideColorClass={slide.colorClass} 
                          glowClass={slide.glowClass}
                        />
                      </span>
                    ))}
                  </h1>

                  <p className="text-white/50 text-lg mb-10 max-w-md font-medium border-l-2 border-[#ccff00] pl-6 italic">
                    {slide.desc}
                  </p>

                  <div className="flex items-center gap-8">
                    <button className="px-10 py-4 bg-[#ccff00] text-black font-black text-xs uppercase tracking-widest skew-x-[-12deg] transition-all hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] flex items-center gap-3 group">
                      <span className="skew-x-12 flex items-center gap-2">
                        INITIALIZE_PURCHASE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#ccff00] font-bold uppercase tracking-widest opacity-60">PRC_UNIT</span>
                      <span className="text-2xl font-black italic text-white tracking-widest">{slide.price}</span>
                    </div>
                  </div>
                </div>

                {/* DYNAMIC ICON COMPONENT */}
                <div className="hidden lg:flex flex-1 justify-center items-center relative">
                    <div className={`absolute w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse transition-colors duration-1000 ${slide.aura}`} />
                    <div className="relative p-16 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_50px_rgba(255,255,255,0.05)] animate-[float_6s_ease-in-out_infinite]">
                      {slide.icon}
                      <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-[spin_30s_linear_infinite]" />
                      <div className="absolute -top-2 -right-2 bg-[#ccff00] text-black text-[8px] font-bold px-2 py-1 rotate-12 shadow-lg">
                        DATA_STABLE
                      </div>
                    </div>
                </div>
              </div>
            ))}

            {/* NAVIGATION */}
            <div className="absolute bottom-4 right-4 flex gap-1 z-50">
              <button onClick={prevSlide} className="w-14 h-14 bg-white/5 hover:bg-[#ccff00] hover:text-black text-white transition-all border border-white/10 flex items-center justify-center skew-x-[-12deg]">
                <ChevronLeft size={20} className="skew-x-12" />
              </button>
              <button onClick={nextSlide} className="w-14 h-14 bg-white/5 hover:bg-[#ccff00] hover:text-black text-white transition-all border border-white/10 flex items-center justify-center skew-x-[-12deg]">
                <ChevronRight size={20} className="skew-x-12" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;