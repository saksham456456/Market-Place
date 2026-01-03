"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Package, LogOut, User as UserIcon } from "lucide-react";

interface User {
  name: string;
  email: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("flux-user");
    if (!stored) {
      router.push("/login");
    } else {
      setUser(JSON.parse(stored));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("flux-user");
    router.push("/");
  };

  if (!user) return null;

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-tr from-primary to-secondary rounded-full flex items-center justify-center mb-4 text-black">
                    <UserIcon className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-gray-400 text-sm">{user.email}</p>
            </div>

            <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                    <UserIcon className="mr-2 w-4 h-4" /> Account Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-400 hover:bg-red-500/10" onClick={handleLogout}>
                    <LogOut className="mr-2 w-4 h-4" /> Log Out
                </Button>
            </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Package className="text-primary" /> Order History
            </h2>

            <div className="space-y-4">
                {[1, 2, 3].map((order) => (
                    <div key={order} className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <div className="font-bold mb-1">Order #FLX-{2024000 + order}</div>
                            <div className="text-sm text-gray-400">Placed on {new Date().toLocaleDateString()}</div>
                            <div className="mt-2 text-sm">
                                <span className="text-primary bg-primary/10 px-2 py-0.5 rounded">Processing</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="font-bold text-lg">$299.99</div>
                            <Button size="sm" variant="outline" className="mt-2">View Details</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
