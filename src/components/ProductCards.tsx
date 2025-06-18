"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/useToast";
import { Product } from "@/types";
import { products as allProducts } from "@/data/products";

// Get specific products for display cards
const products = allProducts.filter((p) => [13, 14, 15].includes(p.id));

const ProductCards = () => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    showToast(`${product.name} added to cart!`, "success");
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg p-6 group hover:shadow-lg transition">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <span
                    className={`absolute -top-2 -left-2 ${
                      product.tag === "Sale" ? "bg-red-500" : "bg-green-500"
                    } text-white text-xs px-2 py-1 rounded`}>
                    {product.tag}
                  </span>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {product.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition opacity-0 group-hover:opacity-100">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
