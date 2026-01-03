"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock login
    setTimeout(() => {
      localStorage.setItem("flux-user", JSON.stringify({ name: "Cyber Nomad", email: "user@flux.market" }));
      router.push("/profile");
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-24 max-w-md">
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-400">Enter the matrix.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input
                required
                type="email"
                defaultValue="user@flux.market"
                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
            <input
                required
                type="password"
                defaultValue="password"
                className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors"
            />
          </div>

          <Button type="submit" className="w-full mt-4" disabled={loading}>
            {loading ? "Authenticating..." : "Login"}
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
            Don't have an ID? <Link href="#" className="text-primary hover:underline">Request Access</Link>
        </div>
      </div>
    </div>
  );
}
