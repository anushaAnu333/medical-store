"use client";

import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/hooks/useToast";
import { Product } from "@/types";
import Link from "next/link";
import { getLatestProducts } from "@/data/products";

// Get the latest 4 products
const latestProducts = getLatestProducts(4);

const LatestProducts = () => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    showToast(`${product.name} added to cart!`, "success");
  };

  const handleWishlistToggle = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      showToast(`${product.name} removed from wishlist`, "info");
    } else {
      addToWishlist(product);
      showToast(`${product.name} added to wishlist!`, "success");
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest health product
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {latestProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <Link href={`/product/${product.id}`}>
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <span
                    className={`absolute top-2 left-2 ${
                      product.tag === "New"
                        ? "bg-green-500"
                        : product.tag === "Hot"
                        ? "bg-orange-500"
                        : "bg-red-500"
                    } text-white text-xs px-2 py-1 rounded z-10`}>
                    {product.tag}
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleWishlistToggle(product);
                        }}
                        className={`p-2 rounded-full shadow-lg hover:scale-110 transition ${
                          isInWishlist(product.id)
                            ? "bg-red-500 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                        }`}>
                        <Heart
                          className="w-5 h-5"
                          fill={
                            isInWishlist(product.id) ? "currentColor" : "none"
                          }
                        />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleAddToCart(product);
                        }}
                        className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 hover:scale-110 transition">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;
