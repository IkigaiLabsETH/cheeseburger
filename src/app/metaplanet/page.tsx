'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from "@/components/ui/card"

export default function MetaPlanetPage() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is MetaPlanet Inc.?",
      a: (
        <span>
          MetaPlanet Inc. (メタプラネット) is a publicly traded Japanese company that has evolved from a music distribution company to become Japan&apos;s first publicly listed Bitcoin Treasury Company. Founded in 1999 as Daiki Sound Co., Ltd., it went public on JASDAQ (now Tokyo Stock Exchange Standard Market) in 2004 and has since transformed into a Bitcoin-focused company with two main business segments: Bitcoin Treasury Business and Hotel Business.
        </span>
      ),
    },
    {
      q: "Who are the key leaders of MetaPlanet?",
      a: (
        <span>
          The company is led by Simon Morris Gerovich (Representative Director, President & CEO), a former Goldman Sachs trader who has been instrumental in MetaPlanet&apos;s transformation. The executive team also includes Yoshihisa Ikurumi (CFO) and Yoshimi Abe (COO). The board features prominent figures like Mark Yusko (founder of Morgan Creek Capital) and Eric Trump, who serves on the Strategic Advisory Board.
        </span>
      ),
    },
    {
      q: "What is MetaPlanet's Bitcoin strategy?",
      a: (
        <span>
          MetaPlanet has adopted Bitcoin as its core treasury asset, following a strategy similar to MicroStrategy. The company aims to hold at least 10,000 BTC by the end of 2025 and up to 21,000 BTC by 2026. It uses creative financing methods like zero-coupon bonds and equity warrants to fund Bitcoin purchases, targeting significant growth in Bitcoin holdings per share.
        </span>
      ),
    },
    {
      q: "What are MetaPlanet's current Bitcoin holdings?",
      a: (
        <span>
          As of April 2025, MetaPlanet holds approximately 4,525 BTC on its balance sheet, making it one of the top ten public companies worldwide in terms of Bitcoin treasury size. The company has been aggressively accumulating Bitcoin since 2023, with its holdings growing from 141 BTC in June 2023 to the current amount.
        </span>
      ),
    },
    {
      q: "How does MetaPlanet differ from other Bitcoin companies?",
      a: (
        <span>
          MetaPlanet is unique in being Japan&apos;s first publicly listed Bitcoin Treasury Company. Unlike many crypto companies, it maintains a Bitcoin-only strategy (no altcoins) and combines its treasury business with operational assets like hotels. The company also operates Bitcoin Magazine Japan and has a Web3 consulting subsidiary, creating a comprehensive ecosystem around its Bitcoin holdings.
        </span>
      ),
    },
    {
      q: "What are the risks of investing in MetaPlanet?",
      a: (
        <span>
          As with any investment, there are risks involved. MetaPlanet&apos;s stock price is highly correlated with Bitcoin&apos;s performance, and the company&apos;s strategy relies on continuous access to capital markets. The stock can be volatile, and the company&apos;s success depends on Bitcoin&apos;s long-term appreciation and its ability to execute its treasury strategy effectively.
        </span>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400">
              MetaPlanet Inc.
            </h1>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl">
                Japan&apos;s first publicly listed Bitcoin Treasury Company
              </p>
              <p className="text-xl md:text-2xl">
                Bridging traditional finance with Bitcoin through innovative treasury management
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🇯🇵</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                  Tokyo Based
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                First Japanese Bitcoin treasury company
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">₿</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                  4,525 BTC
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Current Bitcoin holdings (April 2025)
              </p>
            </div>
          </div>

          {/* Investment Strategy */}
          <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
              Investment Strategy
            </h3>
            <ul className="space-y-4 text-lg md:text-xl">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">🔗</span>
                <span>
                  <strong>Bitcoin treasury focus</strong> targeting <span className="text-yellow-400">10,000+ BTC</span> by end of 2025
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">🔗</span>
                <span>
                  <strong>Innovative financing</strong> through zero-coupon bonds and equity warrants
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400">🔗</span>
                <span>
                  <strong>Dual business model</strong> combining Bitcoin treasury with operational assets
                </span>
              </li>
            </ul>
          </div>

          {/* Leadership */}
          <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
              Leadership Team
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">Simon Morris Gerovich</h4>
                <p className="text-white/90">Representative Director, President & CEO</p>
                <p className="text-sm text-white/70">Former Goldman Sachs trader, instrumental in Bitcoin transformation</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-yellow-400">Strategic Advisors</h4>
                <p className="text-white/90">Mark Yusko & Eric Trump</p>
                <p className="text-sm text-white/70">Bringing global investment and business expertise</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#1c1f26] p-8 rounded-xl border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <Card key={i} className="border-yellow-500 rounded-xl overflow-hidden shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                  <button
                    className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className="text-lg font-semibold text-white">{item.q}</span>
                    <span className={`ml-4 transition-transform text-yellow-500 ${open === i ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden px-6"
                  >
                    {open === i && <div className="py-4 text-white/90 text-base">{item.a}</div>}
                  </motion.div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 