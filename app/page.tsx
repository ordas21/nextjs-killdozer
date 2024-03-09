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
          <div className="ticker-item">1,000,000,000 SUPPLY</div>
          <div className="ticker-item">
            <img
              src="/Untitled.png"
              alt="killdozer"
              className="w-12 ticker-image"
            />
          </div>
          <div className="ticker-item">COMMUNITY RUN</div>
          <div className="ticker-item">
            <img
              src="/Untitled.png"
              alt="killdozer"
              className="w-12 ticker-image"
            />
          </div>
          <div className="ticker-item">OWNERSHIP RENOUNCED</div>
          <div className="ticker-item">
            <img
              src="/Untitled.png"
              alt="killdozer"
              className="w-12 ticker-image"
            />
          </div>
        </div>
      </div>
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h2 className="z-10 text-xs text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-2xl md:text-4xl whitespace-nowrap bg-clip-text ">
        Komatsu D355A
      </h2>
      <div className="flex items-center justify-center">
        <img
          src="https://info.texasfinaldrive.com/hs-fs/hubfs/Killdozer.png?width=933&name=Killdozer.png"
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
        $KILLDOZER
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-400 w-1/2 text-center mx-auto">
          $KILLDOZER is a Solana based token that serves the true purpose of
          crypto. Empowering the people to create their own path no matter the
          obstacle.
        </h2>
        <h2 className="text-sm text-zinc-500 "></h2>
      </div>
    </div>
  );
}
