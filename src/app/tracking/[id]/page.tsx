"use client";

import { use } from "react";
import { Check, Package, Truck, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function TrackingPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);

  const steps = [
    { icon: Check, label: "Order Confirmed", date: "Today, 2:30 PM", active: true },
    { icon: Package, label: "Processing", date: "Today, 3:00 PM", active: true },
    { icon: Truck, label: "On the Way", date: "Expected Tomorrow", active: false },
    { icon: Home, label: "Delivered", date: "Expected in 2 days", active: false },
  ];

  return (
    <div className="container mx-auto px-4 py-24 max-w-2xl text-center">
      <div className="mb-12">
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-4xl font-black mb-2">Order Confirmed!</h1>
        <p className="text-gray-400">
          Order ID: <span className="text-white font-mono">{resolvedParams.id}</span>
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
        <div className="space-y-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-white/10 -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex gap-4 items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    step.active
                      ? "bg-black border-primary text-primary"
                      : "bg-black border-white/10 text-gray-600"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className={`font-bold ${step.active ? "text-white" : "text-gray-500"}`}>
                    {step.label}
                  </div>
                  <div className="text-sm text-gray-500">{step.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Link href="/">
        <Button size="lg">Continue Shopping</Button>
      </Link>
    </div>
  );
}
