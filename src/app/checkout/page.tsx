"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    clearCart();
    // Generate random order ID
    const orderId = "FLX-" + Math.random().toString(36).substr(2, 9).toUpperCase();
    router.push(`/tracking/${orderId}`);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="text-gray-400">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <section>
            <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="First Name" className="bg-white/5 border border-white/10 rounded-lg p-3 w-full focus:border-primary outline-none" />
                <input required placeholder="Last Name" className="bg-white/5 border border-white/10 rounded-lg p-3 w-full focus:border-primary outline-none" />
              </div>
              <input required placeholder="Address" className="bg-white/5 border border-white/10 rounded-lg p-3 w-full focus:border-primary outline-none" />
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="City" className="bg-white/5 border border-white/10 rounded-lg p-3 w-full focus:border-primary outline-none" />
                <input required placeholder="ZIP Code" className="bg-white/5 border border-white/10 rounded-lg p-3 w-full focus:border-primary outline-none" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Payment Details (Mock)</h2>
            <div className="space-y-4">
              <input required placeholder="Card Number" className="bg-white/5 border border-white/10 rounded-lg p-3 w-full focus:border-primary outline-none" />
              <div className="grid grid-cols-2 gap-4">
                <input required placeholder="MM/YY" className="bg-white/5 border border-white/10 rounded-lg p-3 w-full focus:border-primary outline-none" />
                <input required placeholder="CVC" className="bg-white/5 border border-white/10 rounded-lg p-3 w-full focus:border-primary outline-none" />
              </div>
            </div>
          </section>

          <Button
            type="submit"
            size="lg"
            className="w-full mt-8"
            disabled={loading}
          >
            {loading ? "Processing..." : `Pay $${total.toFixed(2)}`}
          </Button>
        </form>

        <div className="bg-white/5 p-6 rounded-2xl h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="h-px bg-white/10 my-4" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
