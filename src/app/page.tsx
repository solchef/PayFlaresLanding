"use client";

import { useState } from "react";
import Countdown from "react-countdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email);
    setEmail("");
  };

  const countdownDate = new Date("2024-11-12T00:00:00").getTime();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-900 via-black to-green-800 text-white p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="glowing-orb"></div>
      </div>
      <main className="z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-pulse">
          PayFlares
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-green-300">
          The  Revolution of Easy, Fast & Secure Global Transactions <br/> Powered by the BlockChain
        </p>
        <Countdown
          date={countdownDate}
          renderer={({ days, hours, minutes, seconds }) => (
            <div className="text-2xl md:text-4xl font-mono mb-12 grid grid-cols-4 gap-4">
              <div className="flex flex-col">
                <span className="text-5xl md:text-7xl font-bold">{days}</span>
                <span className="text-sm uppercase">Days</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl md:text-7xl font-bold">{hours}</span>
                <span className="text-sm uppercase">Hours</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl md:text-7xl font-bold">
                  {minutes}
                </span>
                <span className="text-sm uppercase">Minutes</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl md:text-7xl font-bold">
                  {seconds}
                </span>
                <span className="text-sm uppercase">Seconds</span>
              </div>
            </div>
          )}
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full md:w-64 bg-white/10 border-white/20 text-white placeholder-white/50"
          />
          <Button
            type="submit"
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white"
          >
            Notify Me
          </Button>
        </form>
      </main>
      <style jsx>{`
        .glowing-orb {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(
            circle,
            rgba(22, 163, 74, 0.3) 0%,
            rgba(21, 128, 61, 0.1) 50%,
            rgba(0, 0, 0, 0) 70%
          );
          border-radius: 50%;
          filter: blur(60px);
          animation: float 10s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-20px);
          }
        }

        .glowing-orb {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
}
