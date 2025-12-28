import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
// Import Link for the cart page and HashLink for smooth scrolling to sections
import { Link } from "react-router-dom";

export default function Navbar({ cartCount }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const links = [
    { name: "Badminton", id: "badminton" },
    { name: "Accessories", id: "accessories" },
    { name: "Clothing", id: "clothing" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Returns to top of home page */}
          <Link
            to="/"
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-white font-black italic tracking-tighter text-xl">
              AERO<span className="text-[#ccff00]">VAULT</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-gray-400 hover:text-[#ccff00] text-sm font-bold uppercase tracking-widest transition-colors italic"
              >
                {link.name}
              </a>
            ))}

            {/* --- CLEAN CART LINK --- */}
            <Link
              to="/cart"
              className="relative text-white bg-white/10 p-2.5 rounded-full hover:bg-[#ccff00] hover:text-black transition-all group"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#ccff00] text-black text-[10px] font-black rounded-full flex items-center justify-center border-2 border-black group-hover:bg-white transition-colors">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Link to="/cart" className="relative text-white p-2">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#ccff00] text-black text-[9px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="text-white"
              onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
            >
              {mobileMenuIsOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-black border-b border-white/10 px-4 py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-400 text-lg font-bold italic"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
