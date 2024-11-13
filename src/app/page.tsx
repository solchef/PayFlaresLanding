"use client";

import { useState } from "react";
import Countdown from "react-countdown";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [email, setEmail] = useState("");

  // const handleSubmit = (e: { preventDefault: () => void; }) => {
  //   e.preventDefault();
  //   console.log("Submitted email:", email);
  //   setEmail("");
  // };

  const countdownDate = new Date("2024-11-20T00:00:00").getTime();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white p-4">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-black to-green-800 opacity-50 z-0"></div>

      <main className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-20 animate-pulse">
          PayFlares
        </h1>
        <p className="text-xl md:text-2xl mb-20 text-green-300">
          The Revolution of Easy, Fast & Secure Global Transactions <br /> Powered by the BlockChain
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
                <span className="text-5xl md:text-7xl font-bold">{minutes}</span>
                <span className="text-sm uppercase">Minutes</span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl md:text-7xl font-bold">{seconds}</span>
                <span className="text-sm uppercase">Seconds</span>
              </div>
            </div>
          )}
        />
        {/* <form
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
        </form> */}
      </main>
    </div>
  );
}
