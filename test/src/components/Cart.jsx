import React from "react";
import {
  ShoppingBag,
  Trash2,
  ArrowLeft,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart({ cartItems = [], onRemove }) {
  // Calculation Logic
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  // Free shipping over $200
  const shipping = subtotal > 200 || cartItems.length === 0 ? 0 : 15;

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white font-sans pt-24 pb-12 px-6 animate-in fade-in duration-700">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 animate-in slide-in-from-top-4 duration-700 delay-150 fill-mode-both">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-[#ccff00] text-xs font-black uppercase tracking-widest mb-4 hover:-translate-x-1 transition-transform group"
            >
              <ArrowLeft
                size={14}
                className="group-hover:mr-1 transition-all"
              />{" "}
              Return to Vault
            </Link>
            <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter uppercase">
              Your <span className="text-white/10 text-stroke-1">Bag</span>
            </h1>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
              Vault Status
            </p>
            <p className="text-2xl font-black italic text-[#ccff00]">
              {cartItems.length} ITEMS
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4 animate-in slide-in-from-left-8 duration-700 delay-300 fill-mode-both">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white/5 border border-white/10 p-6 rounded-3xl flex items-center gap-6 hover:border-red-500/40 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Subtle Red glow on card hover to signal removal capability */}
                  <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/[0.02] transition-colors pointer-events-none" />

                  <div
                    className={`w-24 h-24 ${
                      item.imageColor || "bg-white/10"
                    } rounded-2xl flex items-center justify-center shrink-0 overflow-hidden relative border border-white/5`}
                  >
                    <div
                      className={`absolute inset-0 ${item.imageColor} opacity-20 blur-xl`}
                    />
                    <ShoppingBag
                      className="text-white/20 group-hover:text-[#ccff00] transition-colors relative z-10"
                      size={32}
                    />
                  </div>

                  <div className="flex-1 relative z-10">
                    <p className="text-[#ccff00] text-[10px] font-bold uppercase tracking-widest mb-1">
                      {item.brand}
                    </p>
                    <h3 className="text-xl font-black italic uppercase leading-none mb-2">
                      {item.name}
                    </h3>
                    <p className="text-white/40 text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                      <ShieldCheck size={12} className="text-[#ccff00]/60" />{" "}
                      Authenticated Pro Stock
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-4 relative z-10">
                    <span className="text-xl font-black italic tracking-tighter">
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </span>

                    {/* IMPLEMENTED REMOVE ACTION */}
                    <button
                      onClick={() => onRemove(item.id)}
                      className="group/btn flex items-center gap-2 text-white/20 hover:text-red-500 transition-all p-2.5 hover:bg-red-500/10 rounded-xl border border-transparent hover:border-red-500/20 active:scale-90"
                      title="Remove from vault"
                    >
                      <span className="text-[10px] font-black uppercase tracking-tighter opacity-0 group-hover/btn:opacity-100 transition-all transform translate-x-2 group-hover/btn:translate-x-0">
                        Discard
                      </span>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              /* Empty State */
              <div className="py-32 text-center bg-white/[0.02] border border-dashed border-white/10 rounded-[3rem]">
                <XCircle size={48} className="mx-auto mb-6 text-white/5" />
                <p className="text-white/20 font-black italic text-2xl uppercase mb-8 tracking-widest">
                  The vault is empty
                </p>
                <Link
                  to="/"
                  className="inline-block bg-[#ccff00] text-black px-10 py-4 rounded-2xl font-black italic text-sm hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] transition-all active:scale-95"
                >
                  REPLENISH GEAR
                </Link>
              </div>
            )}
          </div>

          {/* Summary Card */}
          {cartItems.length > 0 && (
            <div className="lg:col-span-1 animate-in slide-in-from-right-8 duration-700 delay-500 fill-mode-both">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] sticky top-32 backdrop-blur-xl shadow-2xl">
                <h2 className="text-2xl font-black italic uppercase mb-8 border-b border-white/10 pb-4 tracking-tighter">
                  Deployment Summary
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-white/40">
                    <span>Subtotal</span>
                    <span className="text-white">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-white/40">
                    <span>Logistics</span>
                    <span
                      className={
                        shipping === 0 ? "text-[#ccff00]" : "text-white"
                      }
                    >
                      {shipping === 0
                        ? "COMPLIMENTARY"
                        : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="h-px bg-white/10 my-4" />
                  <div className="flex justify-between items-end">
                    <span className="font-black italic uppercase text-sm">
                      Total Due
                    </span>
                    <span className="text-3xl font-black text-[#ccff00] tracking-tighter leading-none">
                      ${(subtotal + shipping).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button className="group w-full bg-white text-black py-5 rounded-2xl font-black italic text-sm hover:bg-[#ccff00] transition-all mb-4 flex items-center justify-center relative overflow-hidden">
                  <span className="relative z-10 uppercase tracking-tighter group-hover:scale-105 transition-transform">
                    Authorize Deployment
                  </span>
                  <div className="absolute inset-0 bg-[#ccff00] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>

                <div className="flex items-center justify-center gap-2 text-white/20 text-[9px] font-black uppercase tracking-[0.2em]">
                  <ShieldCheck size={14} className="text-[#ccff00]/60" /> Secure
                  Vault Checkout
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
