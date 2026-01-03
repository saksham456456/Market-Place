"use client";

import React, { use } from "react";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/Button";
import { Check, Truck, Shield } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);
  const { addToCart } = useCart();
  const [added, setAdded] = React.useState(false);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block">
        ← Back to Browse
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="relative aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <span className="text-primary text-sm font-bold tracking-widest uppercase mb-2 block">
              {product.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-4">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-white">${product.price}</span>
              <div className="flex items-center text-yellow-500">
                {"★".repeat(Math.floor(product.rating))}
                <span className="text-gray-500 ml-1">({product.rating})</span>
              </div>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {product.description}
            </p>
          </div>

          <div className="flex gap-4 mb-8">
            <Button
              size="lg"
              className="flex-1 text-lg"
              onClick={handleAddToCart}
              disabled={added}
            >
              {added ? (
                <>
                  <Check className="mr-2" /> Added to Cart
                </>
              ) : (
                "Add to Cart"
              )}
            </Button>
            <Button variant="outline" size="lg" className="w-12 px-0">
              ♡
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
              <Truck className="text-primary" />
              <div className="text-sm">
                <div className="font-bold">Free Shipping</div>
                <div className="text-gray-500">Global delivery</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
              <Shield className="text-primary" />
              <div className="text-sm">
                <div className="font-bold">2 Year Warranty</div>
                <div className="text-gray-500">Full coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
