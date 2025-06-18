"use client";

import React, { useState } from "react";
import { Search, ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import CartModal from "./CartModal";

const Header = () => {
  const { getCartCount } = useCart();
  const { wishlist } = useWishlist();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cartCount = getCartCount();
  const wishlistCount = wishlist.length;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to shop page with search query
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header className="w-full bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">Medifit</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link href="/shop" className="text-gray-600 hover:text-gray-900">
                Shop
              </Link>
              <Link
                href="/medicine-search"
                className="text-gray-600 hover:text-gray-900">
                Medicine Info
              </Link>
              <Link href="/pages" className="text-gray-600 hover:text-gray-900">
                Pages
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsSearchOpen(true)}>
                <Search className="w-5 h-5" />
              </button>
              <Link
                href="/wishlist"
                className="text-gray-600 hover:text-gray-900 relative">
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <button
                className="text-gray-600 hover:text-gray-900 relative"
                onClick={() => setIsCartOpen(true)}>
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSearchOpen(false)}
          />
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-white rounded-lg shadow-xl z-50 p-6">
            <form onSubmit={handleSearch}>
              <div className="flex items-center gap-4">
                <Search className="w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="flex-1 text-lg outline-none"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition">
                  Search
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
