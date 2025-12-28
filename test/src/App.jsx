import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Badminton from "./components/Badminton";
import Shoes from "./components/Shoes";
import Clothing from "./components/Clothing";
import Accessories from "./components/Accessories";
import Cart from "./components/Cart";
import Footer from "./components/footer"; // Matches footer.jsx

const Home = ({ addToCart, cartCount }) => (
  <div className="bg-[#0a0a0c] selection:bg-[#ccff00] selection:text-black min-h-screen">
    <Navbar cartCount={cartCount} />

    <section id="home">
      <Hero />
    </section>

    <section id="badminton">
      <Badminton addToCart={addToCart} />
    </section>

    <section id="shoes">
      <Shoes addToCart={addToCart} />
    </section>

    <section id="clothing">
      <Clothing addToCart={addToCart} />
    </section>

    <section id="accessories">
      <Accessories addToCart={addToCart} />
    </section>

    {/* The Footer is placed here so it appears at the bottom of the home page */}
    <Footer />
  </div>
);

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Note: removeFromCart logic is typically handled inside the Cart component
  // but passed down if necessary. 

  return (
    <Router>
      <Routes>
        {/* Main Landing Page */}
        <Route
          path="/"
          element={<Home addToCart={addToCart} cartCount={cartItems.length} />}
        />

        {/* Dedicated Cart Page Link */}
        <Route
          path="/cart"
          element={
            <div className="bg-[#0a0a0c] min-h-screen">
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
              <Footer /> {/* Footer also added to Cart page for consistency */}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}