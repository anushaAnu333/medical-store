"use client";

import React from "react";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0  bg-opacity-30 z-40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl z-50 overflow-y-auto">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Shopping Cart ({cart.length})</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64">
            <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
            <Link
              href="/shop"
              onClick={onClose}
              className="mt-4 bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="p-4 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    <p className="text-gray-600 text-sm">{item.category}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 border rounded hover:bg-gray-100">
                          <Minus className="w-4 h-4 mx-auto" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 border rounded hover:bg-gray-100">
                          <Plus className="w-4 h-4 mx-auto" />
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{item.price}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 text-xs hover:underline">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-xl">
                  ${getCartTotal().toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-gray-900 text-white py-3 rounded hover:bg-gray-800 transition mb-2">
                Proceed to Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full text-gray-600 py-2 hover:text-gray-900 transition">
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartModal;
