import Link from "next/link";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background" />
        </div>

        <div className="relative z-10 text-center container px-4 mx-auto">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary animate-pulse">
            FUTURE MARKET
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Discover the next generation of tech and fashion.
            Curated for the digital age.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              Shop Now
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              View Deals
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Trending Now</h2>
          <Link href="/categories" className="text-primary hover:text-emerald-400 font-medium">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group relative block overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-square w-full overflow-hidden bg-white/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button className="w-full">View Details</Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-white">${product.price}</p>
                </div>
                <p className="text-sm text-gray-400 line-clamp-2">{product.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                    {product.category}
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-yellow-500">
                    ★ {product.rating}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
