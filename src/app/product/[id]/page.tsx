"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ShoppingCart,
  Heart,
  Shield,
  Truck,
  RefreshCw,
  Star,
  ChevronRight,
  Minus,
  Plus,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/hooks/useToast";
import Link from "next/link";
import { Product } from "@/types";
import {
  getProductById,
  getProductsByCategory,
  products,
} from "@/data/products";

// Additional product images for gallery
const productGallery = [
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1584744901111-9bb1a49fa9a6?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=600&fit=crop",
];

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  // Find product by ID
  const product = getProductById(parseInt(params.id as string));

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-blue-600 hover:underline">
            Return to Shop
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    showToast(`${quantity} × ${product.name} added to cart!`, "success");
  };

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      showToast(`${product.name} removed from wishlist`, "info");
    } else {
      addToWishlist(product);
      showToast(`${product.name} added to wishlist!`, "success");
    }
  };

  const updateQuantity = (value: number) => {
    if (value >= 1 && value <= 10) {
      setQuantity(value);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/shop" className="text-gray-600 hover:text-gray-900">
              Shop
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link
              href={`/shop?category=${product.category}`}
              className="text-gray-600 hover:text-gray-900">
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div>
              <div className="relative mb-4">
                {product.tag && (
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-sm text-white rounded z-10 ${
                      product.tag === "Sale" ? "bg-red-500" : "bg-green-500"
                    }`}>
                    {product.tag}
                  </span>
                )}
                <img
                  src={productGallery[selectedImage] || product.image}
                  alt={product.name}
                  className="w-full h-[500px] object-cover rounded-lg"
                />
              </div>
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {productGallery.slice(0, 4).map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`border-2 rounded-lg overflow-hidden ${
                      selectedImage === index
                        ? "border-gray-900"
                        : "border-gray-200"
                    }`}>
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.5 out of 5)</span>
                <span className="text-sm text-gray-400">|</span>
                <span className="text-sm text-gray-600">124 reviews</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                    Save $
                    {(
                      parseFloat(product.originalPrice.replace("$", "")) -
                      parseFloat(product.price.replace("$", ""))
                    ).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Stock Status */}
              <p
                className={`text-sm mb-6 ${
                  product.inStock ? "text-green-600" : "text-red-600"
                }`}>
                {product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
              </p>

              {/* Description */}
              <p className="text-gray-600 mb-8">{product.description}</p>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => updateQuantity(quantity - 1)}
                    className="p-3 hover:bg-gray-100">
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      updateQuantity(parseInt(e.target.value) || 1)
                    }
                    className="w-16 text-center border-x"
                  />
                  <button
                    onClick={() => updateQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>

                <button
                  onClick={handleWishlistToggle}
                  className={`p-3 border rounded-lg hover:bg-gray-100 transition ${
                    isInWishlist(product.id)
                      ? "text-red-500 border-red-500"
                      : ""
                  }`}>
                  <Heart
                    className={`w-5 h-5 ${
                      isInWishlist(product.id) ? "fill-current" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Features */}
              <div className="border-t pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">100% Authentic Products</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">
                    Free Shipping on Orders Over $50
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-5 h-5 text-gray-400" />
                  <span className="text-sm">Easy 30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-16">
            <div className="border-b">
              <div className="flex gap-8">
                {["description", "additional", "reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 capitalize ${
                      activeTab === tab
                        ? "text-gray-900 border-b-2 border-gray-900"
                        : "text-gray-600 hover:text-gray-900"
                    }`}>
                    {tab === "additional" ? "Additional Information" : tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="py-8">
              {activeTab === "description" && (
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">
                    Product Description
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>High-quality pharmaceutical grade product</li>
                    <li>Manufactured under strict quality control</li>
                    <li>Clinically tested and approved</li>
                    <li>Suitable for adult use</li>
                  </ul>
                </div>
              )}

              {activeTab === "additional" && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Additional Information
                  </h3>
                  <table className="w-full max-w-2xl">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 font-medium">Category</td>
                        <td className="py-3 text-gray-600">
                          {product.category}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-medium">SKU</td>
                        <td className="py-3 text-gray-600">
                          MED-{product.id.toString().padStart(5, "0")}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-medium">Weight</td>
                        <td className="py-3 text-gray-600">0.2 kg</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-medium">Dimensions</td>
                        <td className="py-3 text-gray-600">10 × 5 × 3 cm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Customer Reviews
                  </h3>
                  <div className="space-y-6">
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border-b pb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < 4
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-medium">John Doe</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-600">
                            2 days ago
                          </span>
                        </div>
                        <p className="text-gray-600">
                          Great product! Fast delivery and exactly as described.
                          Would definitely recommend to others.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {getProductsByCategory(product.category)
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/product/${relatedProduct.id}`}
                    className="group">
                    <div className="relative overflow-hidden rounded-lg mb-3">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                      />
                    </div>
                    <h3 className="font-medium mb-1">{relatedProduct.name}</h3>
                    <p className="text-gray-900 font-bold">
                      {relatedProduct.price}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
