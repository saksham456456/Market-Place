"use client";

import Link from "next/link";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "./ui/Button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-primary blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
             <img src="/logo.svg" alt="Flux Logo" className="relative w-full h-full text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            FLUX
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Discover
          </Link>
          <Link href="/categories" className="text-sm font-medium hover:text-primary transition-colors">
            Categories
          </Link>
          <Link href="/deals" className="text-sm font-medium hover:text-primary transition-colors">
            Deals
          </Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Search className="w-5 h-5" />
          </button>

          <Link href="/cart">
            <Button variant="ghost" className="relative p-2">
              <ShoppingCart className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-accent text-white text-xs font-bold rounded-full">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>

          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Discover
            </Link>
            <Link
              href="/categories"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
             <Link
              href="/cart"
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart ({itemCount})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
