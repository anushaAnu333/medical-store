"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/hooks/useToast";
import { useSearchParams } from "next/navigation";
import { Product } from "@/types";
import Link from "next/link";
import { products } from "@/data/products";

const categories = [
  "All",
  "Vitamins",
  "Medical Devices",
  "Pain Relief",
  "Hygiene",
  "Protective Gear",
  "Emergency",
  "Medical Equipment",
  "Supplements",
  "Beauty",
  "Travel",
];
const priceRanges = [
  { label: "Under $25", min: 0, max: 25 },
  { label: "$25 - $50", min: 25, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "Over $100", min: 100, max: Infinity },
];

export default function ShopPage() {
  const searchParams = useSearchParams();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Get search query from URL
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    let filtered = [...products];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by price ranges
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) => {
        const price = parseFloat(product.price.replace("$", ""));
        return selectedPriceRanges.some((rangeIndex) => {
          const range = priceRanges[rangeIndex];
          return price >= range.min && price <= range.max;
        });
      });
    }

    // Sort products
    switch (sortBy) {
      case "priceLow":
        filtered.sort(
          (a, b) =>
            parseFloat(a.price.replace("$", "")) -
            parseFloat(b.price.replace("$", ""))
        );
        break;
      case "priceHigh":
        filtered.sort(
          (a, b) =>
            parseFloat(b.price.replace("$", "")) -
            parseFloat(a.price.replace("$", ""))
        );
        break;
      case "newest":
        filtered = filtered
          .filter((p) => p.tag === "New")
          .concat(filtered.filter((p) => p.tag !== "New"));
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedPriceRanges, sortBy, searchQuery]);

  const handlePriceRangeToggle = (index: number) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

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
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-[#F5F1EB] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">Shop</h1>
          <p className="text-center text-gray-600 mt-4">
            {searchQuery
              ? `Search results for "${searchQuery}"`
              : "Browse our collection of medical supplies and healthcare products"}
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="md:w-1/4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`text-left w-full py-1 ${
                          selectedCategory === category
                            ? "text-gray-900 font-semibold"
                            : "text-gray-600 hover:text-gray-900"
                        }`}>
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>

                <h3 className="font-bold text-lg mt-8 mb-4">Price Range</h3>
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <label key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                        checked={selectedPriceRanges.includes(index)}
                        onChange={() => handlePriceRangeToggle(index)}
                      />
                      <span className="text-gray-600">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="md:w-3/4">
              <div className="flex justify-between items-center mb-8">
                <p className="text-gray-600">
                  Showing {filteredProducts.length} products
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2">
                  <option value="featured">Sort by: Featured</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gray-500">
                    No products found matching your criteria.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="group">
                      <Link href={`/product/${product.id}`}>
                        <div className="relative overflow-hidden rounded-lg mb-4">
                          {product.tag && (
                            <span
                              className={`absolute top-2 left-2 px-2 py-1 text-xs text-white rounded z-10 ${
                                product.tag === "Sale"
                                  ? "bg-red-500"
                                  : "bg-green-500"
                              }`}>
                              {product.tag}
                            </span>
                          )}
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
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
                                    isInWishlist(product.id)
                                      ? "currentColor"
                                      : "none"
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
                        <p className="text-sm text-gray-500 mb-1">
                          {product.category}
                        </p>
                        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold">
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
              )}

              {/* Pagination - Only show if there are products */}
              {filteredProducts.length > 0 && (
                <div className="flex justify-center gap-2 mt-12">
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-4 py-2 bg-gray-900 text-white rounded">
                    1
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
