import Link from "next/link";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/Button";

export default function CategoriesPage() {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-black mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        BROWSE BY CATEGORY
      </h1>

      {categories.map((category) => (
        <section key={category} className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-white">{category}</h2>
            <div className="h-px bg-white/10 flex-grow" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.category === category)
              .map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group relative block overflow-hidden rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all"
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
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-400">${product.price}</span>
                      <span className="text-yellow-500 text-sm">★ {product.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
