"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-400 mb-8">Looks like you haven't added any tech gear yet.</p>
        <Link href="/">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-white/5 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.category}</p>
                  </div>
                  <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-3 bg-black rounded-lg p-1 border border-white/10">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:text-primary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:text-primary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-end">
            <Button variant="ghost" onClick={clearCart} className="text-red-500 hover:text-red-400 hover:bg-red-500/10">
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="h-px bg-white/10 my-4" />
              <div className="flex justify-between text-xl font-bold text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Link href="/checkout" className="block w-full">
              <Button size="lg" className="w-full">
                Proceed to Checkout <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
