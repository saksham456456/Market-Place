import Link from "next/link";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/Button";

export default function DealsPage() {
  const deals = products.filter((p) => p.salePrice);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-primary animate-pulse">
          FLASH DEALS
        </h1>
        <p className="text-xl text-gray-400">Limited time offers on future-ready gear.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {deals.map((product) => {
            const discount = Math.round(((product.price - (product.salePrice || 0)) / product.price) * 100);
            return (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group relative block overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 transition-all duration-300"
                >
                  <div className="absolute top-4 left-4 z-10 bg-accent text-white font-bold px-3 py-1 rounded-full text-sm">
                    -{discount}%
                  </div>

                  <div className="aspect-video w-full overflow-hidden bg-white/5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl font-bold text-accent">${product.salePrice}</span>
                        <span className="text-gray-500 line-through">${product.price}</span>
                    </div>
                    <Button className="w-full bg-accent hover:bg-rose-600 border-none shadow-[0_0_15px_rgba(244,63,94,0.4)]">
                        Grab Deal
                    </Button>
                  </div>
                </Link>
            );
        })}
      </div>
    </div>
  );
}
