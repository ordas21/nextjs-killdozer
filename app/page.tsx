"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "White Paper", href: "/whitepaper" },
  { name: "Community", href: "/contact" },
];

export default function Home() {
  const [showFlame, setShowFlame] = useState(false);

  const toggleFlame = () => {
    setShowFlame(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="ticker-wrap">
        <div className="ticker">
          <div className="ticker-item">SOCIAL EXPERIMENT</div>
          <div className="ticker-item">
            <img
              src="/Untitled.png"
              alt="killdozer"
              className="w-12 ticker-image"
            />
          </div>
          <div className="ticker-item">DONT BE A BITCH</div>
          <div className="ticker-item">
            <img
              src="/Untitled.png"
              alt="killdozer"
              className="w-12 ticker-image"
            />
          </div>
          <div className="ticker-item">HOLD DAT SHIT</div>
          <div className="ticker-item">
            <img
              src="/Untitled.png"
              alt="killdozer"
              className="w-12 ticker-image"
            />
          </div>
        </div>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h2 className="z-10 text-xs text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-2xl md:text-4xl whitespace-nowrap bg-clip-text ">
        dev is chill like that
      </h2>
      <div className="flex items-center justify-center">
        <img
          src="https://pump.mypinata.cloud/ipfs/QmfF2i1rHCujWL48VMsjQ7e1WKS53XbdLK4BRZT9Qyg6xG"
          alt="Killdozer"
          className="w-1/4 animate-fade-in shake-animation image-shake-padding" // Added class here
          onClick={toggleFlame}
        />
        {showFlame && (
          <img
            src="https://cdn.pixabay.com/animation/2023/04/19/12/15/12-15-36-889_512.gif"
            alt="Flame"
            className="w-1/100 flame-image" // Added class here
          />
        )}
      </div>
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        $chilldev
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-400 w-1/2 text-center mx-auto">
          Basically, what would happen if the dev was not a punk ass bitch?
        </h2>
        <h2 className="text-sm text-zinc-500 "></h2>
      </div>
    </div>
  );
}
