"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, ShoppingCart, X } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product: any) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-[#F5F1EB] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">My Wishlist</h1>
          <p className="text-center text-gray-600 mt-4">
            {wishlist.length} {wishlist.length === 1 ? "item" : "items"} saved
          </p>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {wishlist.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">Your wishlist is empty</p>
              <Link
                href="/shop"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Saved Items</h2>
                <button
                  onClick={clearWishlist}
                  className="text-red-500 hover:text-red-700 transition">
                  Clear All
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border rounded-lg overflow-hidden group">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-500 mb-1">
                        {item.category}
                      </p>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-lg font-bold">{item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {item.originalPrice}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => handleMoveToCart(item)}
                        className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition flex items-center justify-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Move to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
