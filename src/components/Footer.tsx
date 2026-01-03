export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">FLUX</h3>
            <p className="text-gray-400 text-sm">
              The marketplace for the next generation. Future-ready gear delivered at light speed.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary">New Arrivals</a></li>
              <li><a href="#" className="hover:text-primary">Best Sellers</a></li>
              <li><a href="#" className="hover:text-primary">Tech</a></li>
              <li><a href="#" className="hover:text-primary">Fashion</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary">Order Status</a></li>
              <li><a href="#" className="hover:text-primary">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-primary">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-white/5 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-primary w-full"
              />
              <button className="bg-primary text-black font-bold px-4 py-2 rounded hover:bg-emerald-400">
                →
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Flux Market. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
