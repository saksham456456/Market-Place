"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/products";
import { Suspense } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const results = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-8">
        Search Results for <span className="text-primary">"{query}"</span>
      </h1>

      {results.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400 mb-4">No results found.</p>
          <Link href="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group block overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
            >
              <div className="aspect-square w-full overflow-hidden bg-white/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white group-hover:text-primary transition-colors truncate">
                  {product.name}
                </h3>
                <p className="text-gray-400">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
