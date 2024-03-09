import React from "react";
import { Navigation } from "../components/nav";

const WhitePaper = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black text-white p-4">
      <Navigation />
      <h1 className="text-3xl font-bold mb-4">Killdozer Token White Paper</h1>
      <p className="text-lg mb-8">
        An in-depth look at the philosophy, mechanics, and goals of the
        Killdozer Token.
      </p>
      <div className="whitepaper-content">
        <section>
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p>
            The Killdozer Token aims to revolutionize the decentralized finance
            (DeFi) space by embodying the spirit of determination and
            resilience. Inspired by the events of the Komatsu D335A bulldozer in
            Colorado, our token symbolizes the power of community and the
            unstoppable force of collective will. This white paper outlines the
            philosophy, mechanics, and objectives behind the Killdozer Token,
            setting a path for a decentralized, community-driven future.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Tokenomics</h2>
          <p>
            The Killdozer Token has a fixed supply of 1,000,000,000 tokens. This
            finite supply ensures scarcity and potential value appreciation for
            token holders. Our tokenomics model is designed to encourage holding
            and community participation through the following features:
          </p>
          <ul className="list-disc pl-5">
            <li>Community-driven development and governance.</li>
            <li>
              Ownership renounced by the initial developers to ensure a
              decentralized project management structure.
            </li>
            <li>
              A portion of each transaction is redistributed to existing
              holders, encouraging a hold and earn strategy.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Vision and Goals</h2>
          <p>
            Our vision is to create a DeFi ecosystem that reflects the strength
            and perseverance of the Killdozer's legacy. We aim to break through
            the barriers of traditional finance, offering an alternative that is
            governed by its users. Our goals include:
          </p>
          <ul className="list-disc pl-5">
            <li>
              Establishing a robust, secure, and user-friendly DeFi platform.
            </li>
            <li>
              Empowering users with full control over their financial
              transactions without intermediaries.
            </li>
            <li>
              Cultivating a strong, supportive community that can steer the
              project towards innovative directions.
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Community Involvement</h2>
          <p>
            A cornerstone of the Killdozer Token is its commitment to community
            involvement. The project is not just community-run but thrives on
            the active participation of its members. From governance decisions
            to promotional efforts, every aspect of the token benefits from the
            collective input and energy of its community.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Conclusion</h2>
          <p>
            The Killdozer Token stands as a testament to the power of unity and
            perseverance in the face of adversity. With a clear vision, solid
            tokenomics, and a dedicated community, we are poised to make a
            significant impact on the DeFi landscape. Join us in our journey to
            pave a new path in finance, driven by the spirit of the Killdozer.
          </p>
        </section>
        {/* Sample ticker items visualization */}
        <div className="flex gap-4 overflow-auto py-4">
          <div className="ticker-item">1,000,000,000 SUPPLY</div>
          <div className="ticker-item">
            <img
              src="/killdozer.png"
              alt="killdozer"
              className="w-12 ticker-image"
            />
          </div>
          <div className="ticker-item">COMMUNITY RUN</div>
          <div className="ticker-item">
            <img
              src="/killdozer.png"
              alt="killdozer"
              className="w-12 ticker-image"
            />
          </div>
          <div className="ticker-item">OWNERSHIP RENOUNCED</div>
        </div>
      </div>
    </div>
  );
};

export default WhitePaper;
