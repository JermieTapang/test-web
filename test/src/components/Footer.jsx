import React from "react";
import { ArrowUpRight, Instagram, Twitter, Youtube, Send, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Define the mapping for navigation
  const productLinks = [
    { name: "Rackets", href: "#badminton" },
    { name: "Footwear", href: "#shoes" },
    { name: "Clothing", href: "#clothing" },
    { name: "Accessories", href: "#accessories" },
  ];

  return (
    <footer className="w-full bg-[#0a0a0c] pt-24 pb-12 px-6 lg:px-10 border-t border-white/5 font-sans relative overflow-hidden">
      {/* Decorative Glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[#ccff00]/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION: BRANDING & NEWSLETTER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-8 group cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 bg-[#ccff00] rounded-lg flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform duration-500">
                <div className="w-5 h-5 bg-black rounded-sm -rotate-45 group-hover:-rotate-90 transition-transform duration-500" />
              </div>
              <span className="text-white font-black tracking-tighter text-3xl italic uppercase">
                Aero Vault
              </span>
            </div>
            <p className="text-white/40 max-w-sm text-sm uppercase font-bold tracking-tight leading-relaxed mb-8">
              The premier destination for professional badminton athletes. 
              Official distributor of tournament-grade equipment and elite apparel.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-[#ccff00] hover:text-black transition-all duration-300 border border-white/10 hover:border-[#ccff00]">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white/2 border border-white/5 p-8 lg:p-12 rounded-[3rem] relative overflow-hidden group">
             <div className="relative z-10">
                <h4 className="text-[#ccff00] text-xs font-black uppercase tracking-[0.4em] mb-4 italic">The Inside Lane</h4>
                <h3 className="text-white text-3xl font-black italic uppercase tracking-tighter mb-8">Get exclusive drop alerts</h3>
                <div className="relative">
                    <input 
                        type="email" 
                        placeholder="EMAIL@AEROVAULT.COM" 
                        className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 text-white text-xs font-black uppercase tracking-widest focus:outline-none focus:border-[#ccff00] transition-colors"
                    />
                    <button className="absolute right-2 top-2 bottom-2 bg-[#ccff00] text-black px-6 rounded-xl font-black italic text-xs uppercase hover:bg-white transition-colors flex items-center gap-2">
                        Join <Send size={14} />
                    </button>
                </div>
             </div>
             <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                <ArrowUpRight size={200} className="text-[#ccff00]" />
             </div>
          </div>
        </div>

        {/* MIDDLE SECTION: QUICK LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-t border-white/5 pt-20">
          <div>
            <h5 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8 italic">Products</h5>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/30 hover:text-[#ccff00] text-xs font-bold uppercase tracking-widest transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8 italic">Support</h5>
            <ul className="space-y-4">
              {['Shipping', 'Warranty', 'Size Guide', 'Stringing Service'].map(link => (
                <li key={link}>
                  <a href="#home" className="text-white/30 hover:text-[#ccff00] text-xs font-bold uppercase tracking-widest transition-colors block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8 italic">Company</h5>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Sponsorship', 'Store Locator'].map(link => (
                <li key={link}>
                  <a href="#home" className="text-white/30 hover:text-[#ccff00] text-xs font-bold uppercase tracking-widest transition-colors block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-8 italic">Contact</h5>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ccff00] shrink-0" />
                <span className="text-white/30 text-[10px] font-black uppercase leading-tight">Elite Performance Center, Level 9, Singapore 129348</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#ccff00] shrink-0" />
                <span className="text-white/30 text-[10px] font-black uppercase leading-tight tracking-widest">HQ@AEROVAULT.COM</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#ccff00] shrink-0" />
                <span className="text-white/30 text-[10px] font-black uppercase leading-tight">+65 9182 3456</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: BRANDS & LEGAL */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center md:justify-start gap-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-white font-black italic text-xl tracking-tighter uppercase">Yonex</span>
            <span className="text-white font-black italic text-xl tracking-tighter uppercase">Li-Ning</span>
            <span className="text-white font-black italic text-xl tracking-tighter uppercase">Victor</span>
            <span className="text-white font-black italic text-xl tracking-tighter uppercase">Mizuno</span>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-white/20 text-[10px] font-black tracking-[0.2em] uppercase mb-2">
              © 2025 Aero Vault. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-white/10 text-[9px] font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}