'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function TeslaPage() {
  // Animation variants for staggered animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + (i * 0.1),
        duration: 0.5,
      }
    })
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section with Tesla 3P Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="text-yellow-500">Tesla</span> in 2025
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Performance, Innovation, and Bitcoin Strategy
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-full h-[65vh] mb-16 rounded-xl overflow-hidden group"
        >
          <div className="absolute inset-0 border-2 border-yellow-500 rounded-xl z-10 shadow-[0_0_20px_rgba(234,179,8,0.3)]"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 rounded-xl blur-xl group-hover:opacity-75 transition duration-500 z-0"></div>
          <Image
            src="/tesla_3P.jpeg"
            alt="Tesla Model 3 Performance"
            fill
            className="object-cover rounded-lg z-0 transition duration-700 transform group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0"></div>
          <div className="absolute bottom-8 left-8 max-w-xl z-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-black/60 backdrop-blur-sm p-6 rounded-lg border border-yellow-500/30"
            >
              <h2 className="text-3xl font-bold mb-2 text-yellow-500">Model 3 Performance</h2>
              <p className="text-white/90">The gateway to Tesla&apos;s performance lineup</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Intro Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16 text-lg"
        >
          <div className="border-l-4 border-yellow-500 pl-6 py-2">
            <p className="text-xl text-white/90 leading-relaxed">
              Tesla&apos;s 2025 narrative is a tug-of-war between brutal market headwinds and audacious bets on AI, autonomy, and Bitcoin — but the company keeps turning plot twists into propulsion, therefore it remains impossible to ignore. Below you&apos;ll find the numbers, products, and strategic moon-shots that matter most to a readership that measures value in both satoshis and seconds-to-sixty.
            </p>
          </div>
        </motion.div>

        {/* The Bitcoin War-Chest Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <div className="flex items-center mb-6">
            <h2 className="text-3xl font-bold text-yellow-500">The Bitcoin War-Chest</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          <div className="space-y-4 text-white/80 bg-zinc-900/40 p-6 rounded-xl border border-yellow-500/10">
            <p>
              Tesla still sits on 11,509 BTC, valued at ≈ $951 million at Q1-close and back above the $1 billion mark after Bitcoin&apos;s bounce to ~$93k in late April 2025.
            </p>
            <p>
              The stash survived the earnings miss, but this isn&apos;t Tesla&apos;s first crypto plot twist: in Q2 2022 the firm liquidated about 75% of its original 1.5 billion-dollar purchase to shore up cash during Shanghai lockdowns.
            </p>
            <p>
              That sale hurt hodler street-cred, but the remaining coins give Tesla asymmetric upside if Bitcoin re-rallies, therefore every quarterly report now doubles as a crypto-market signal.
            </p>
          </div>
        </motion.section>

        {/* Performance Icons on Four Wheels Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Performance Icons on Four Wheels</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 border-2 border-yellow-500 rounded-xl z-10 shadow-[0_0_20px_rgba(234,179,8,0.3)]"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 rounded-xl blur-xl group-hover:opacity-75 transition duration-500 z-0"></div>
                
                <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-yellow-500">Model 3 Performance (2024 refresh)</h3>
                  <ul className="list-disc pl-5 space-y-2 text-white/80 text-lg mb-8">
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6, duration: 0.3 }}
                    >
                      510 hp / 554 lb-ft, dual-motor AWD
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.3 }}
                    >
                      0-60 mph: 2.8 s, ¼-mile: 11.0 s @ 125 mph
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.3 }}
                    >
                      EPA 303 mi range, base price $56.6k
                    </motion.li>
                  </ul>
                  <p className="mt-auto text-white/80 text-lg">
                    The car is &quot;pocket-rocket&quot; quick but still under $60k, therefore it&apos;s the gateway drug for first-time EV buyers who used to mod 911s—and who now stack sats on the side.
                  </p>
                </Card>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <div className="relative h-full">
                <div className="absolute inset-0 border-2 border-yellow-500 rounded-xl z-10 shadow-[0_0_20px_rgba(234,179,8,0.3)]"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 rounded-xl blur-xl group-hover:opacity-75 transition duration-500 z-0"></div>
                
                <Card className="p-6 bg-black h-full relative group overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-yellow-500">Model S Plaid (2025)</h3>
                  <ul className="list-disc pl-5 space-y-2 text-white/80 text-lg mb-8">
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7, duration: 0.3 }}
                    >
                      Tri-motor, 1,020 hp, AWD
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8, duration: 0.3 }}
                    >
                      0-60 mph: 2.1 s—quicker than many hyper-cars
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9, duration: 0.3 }}
                    >
                      Top speed 200 mph, range 359 mi
                    </motion.li>
                  </ul>
                  <p className="mt-auto text-white/80 text-lg">
                    Its straight-line physics verge on videogame absurd, but the yoke steering and sparse cabin remind you Tesla still iterates in public, therefore the Plaid is both halo car and rolling beta-test.
                  </p>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Robots, Robotaxis & the Long-Delayed Roadster Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Robots, Robotaxis & the Long-Delayed Roadster</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cards with shared styling */}
            {[
              {
                title: "Optimus Humanoid",
                content: [
                  "Elon Musk now targets 5k &quot;Legion 1&quot; Optimus units in 2025, with capacity for 10× that in 2026.",
                  "The bot has progressed from guy-in-a-spandex-suit (2021) to factory-floor pick-and-place demos, but Musk claims it could eclipse vehicle revenues ten-fold in the 2030s, therefore investors treat it like a stealth call option."
                ],
                index: 0
              },
              {
                title: "Robotaxi \"Cybercab\" & Pilot Service",
                content: [
                  "A June 2025 pilot in Austin launches with 10–20 Model Y vehicles upgraded via software and Dojo-trained vision AI—no steering wheels on the purpose-built two-door cabs due in 2026.",
                  "Success here would turn every parked Tesla into a yield-generating asset, but regulatory gauntlets remain, therefore the pilot is small by design."
                ],
                index: 1
              },
              {
                title: "Next-Gen Roadster",
                content: [
                  "Officially &quot;aiming to ship in 2025,&quot; after multiple slips since its 2017 teaser. Reuters notes it&apos;s now part of a broader pivot away from cheap EVs toward brand-defining tech showcases.",
                  "Musk teases &lt; 1 s 0-60 mph and even &quot;momentary flight,&quot; but manufacturing priorities keep sliding, therefore fans treat each tweet like Schrödinger&apos;s ETA."
                ],
                index: 2
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <div className="relative h-full">
                  {/* Gold card border */}
                  <div className="absolute -inset-0.5 bg-yellow-500 rounded-lg">
                    <div className="absolute inset-0.5 bg-black rounded-md"></div>
                  </div>
                  
                  <Card className="p-6 bg-black border-none h-full z-10 relative group">
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-4 text-yellow-500">{item.title}</h3>
                      <div className="space-y-4 text-white/80">
                        {item.content.map((paragraph, index) => (
                          <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + (index * 0.1) + (i * 0.1), duration: 0.4 }}
                          >
                            {paragraph.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&apos;/g, "'")}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bottom highlight effect */}
                    <motion.div 
                      className="absolute bottom-0 left-0 h-1 bg-yellow-500"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.5 + (i * 0.2) }}
                    />
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Dojo, FSD v12 and the AI Flywheel Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Dojo, FSD v12 and the AI Flywheel</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Gold border with shadow */}
            <div className="absolute -inset-0.5 bg-yellow-500 rounded-lg z-0">
              <div className="absolute inset-0.5 bg-black rounded-md"></div>
            </div>
            
            <div className="p-8 bg-black border-none relative z-10">
              <ul className="list-none space-y-6 text-white/90 text-lg">
                {[
                  "Dojo & Cortex superclusters train end-to-end neural nets on billions of miles of camera footage.",
                  "FSD v12 is rolling to early testers with full vision-only autonomy; The Verge reports the shift to pure neural control \"from pixels to path.\"",
                  "AI spending tops $3 billion this year; analysts say most of Tesla's $845 billion market cap rests on software and robotaxis, not cars."
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + (i * 0.15) }}
                    className="flex items-start"
                  >
                    <span className="text-yellow-500 mr-4 text-2xl font-bold">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-8 border-l-4 border-yellow-500 pl-6 py-2"
              >
                <p className="text-white/90 text-lg">
                  Data begets better networks, which power safer drives, which attract more customers whose cars feed back more data—but competition from lidar-heavy rivals looms, therefore Tesla races to lock in regulatory wins before the loop stalls.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Starlink: Internet for Adventurers Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Starlink: Internet for Adventurers</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-full"
            >
              <div className="relative w-full h-[400px] rounded-xl overflow-hidden group">
                <div className="absolute inset-0 border-2 border-yellow-500 rounded-xl z-10 shadow-[0_0_20px_rgba(234,179,8,0.3)]"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 rounded-xl blur-xl group-hover:opacity-75 transition duration-500 z-0"></div>
                <Image
                  src="/starlink.jpg"
                  alt="Starlink Satellite Internet"
                  fill
                  className="object-cover rounded-lg z-0 transition duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-full"
            >
              <div className="relative h-full rounded-xl overflow-hidden group">
                <div className="absolute inset-0 border-2 border-yellow-500 rounded-xl z-10 shadow-[0_0_20px_rgba(234,179,8,0.3)]"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 rounded-xl blur-xl group-hover:opacity-75 transition duration-500 z-0"></div>
                
                <div className="p-8 bg-black relative z-10 h-full">
                  <div className="space-y-6">
                    <p className="text-white/90 text-lg">
                      Bringing high-speed internet to remote locations and adventurous spirits, Starlink now serves over 2.3 million users across 100+ countries with:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                        className="bg-zinc-900/50 p-4 rounded-lg border border-yellow-500/20"
                      >
                        <h3 className="text-yellow-500 font-medium mb-2">Performance</h3>
                        <ul className="text-white/80 space-y-1">
                          <li>• 50-150+ Mbps</li>
                          <li>• 20-60ms latency</li>
                          <li>• Global coverage</li>
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="bg-zinc-900/50 p-4 rounded-lg border border-yellow-500/20"
                      >
                        <h3 className="text-yellow-500 font-medium mb-2">Coverage</h3>
                        <ul className="text-white/80 space-y-1">
                          <li>• 100+ countries</li>
                          <li>• All continents</li>
                          <li>• Maritime support</li>
                        </ul>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                      className="bg-zinc-900/50 p-4 rounded-lg border border-yellow-500/20"
                    >
                      <h3 className="text-yellow-500 font-medium mb-2">Cutting-Edge Technology</h3>
                      <ul className="text-white/80 space-y-1">
                        <li>• Laser-linked mesh network</li>
                        <li>• Advanced tracking antennas</li>
                        <li>• Continuous constellation expansion</li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Why This Matters to a Bitcoin Lifestyle Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500">Why This Matters to a Bitcoin Lifestyle</h2>
            <div className="h-px flex-grow bg-yellow-500/20 ml-6"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Gold border */}
            <div className="absolute -inset-0.5 bg-yellow-500 rounded-lg z-0">
              <div className="absolute inset-0.5 bg-black rounded-md"></div>
            </div>
            
            <div className="p-8 bg-black border-none relative z-10">
              <p className="mb-8 text-white/90 text-xl">For readers who live on-chain:</p>
              
              <div className="space-y-10 mb-10">
                {[
                  {
                    number: "1.",
                    title: "Self-Custody Ethos",
                    content: "Tesla's refusal to trade its BTC in rough quarters signals conviction that mirrors hardcore hodlers."
                  },
                  {
                    number: "2.",
                    title: "Energy + Hashpower Symbiosis",
                    content: "Megapacks and Superchargers already stabilize grids; pairing them with off-peak mining could monetize idle renewables."
                  },
                  {
                    number: "3.",
                    title: "Machine Yield",
                    content: "Robotaxi fleets could become \"physical yield farming,\" turning depreciating cars into cash-flow nodes."
                  },
                  {
                    number: "4.",
                    title: "Optimus & Proof-of-Work",
                    content: "Humanoids could someday service solar–battery–miner farms in remote locales, automating both the energy and the hashing."
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + (i * 0.15) }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 w-12">
                      <span className="text-yellow-500 text-2xl font-bold">{item.number}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                      <p className="text-lg text-white/80">{item.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="mt-8 bg-zinc-900/50 border-l-4 border-yellow-500 p-6 rounded-r-lg"
              >
                <p className="text-xl text-white/90">
                  Tesla is not just selling cars; it&apos;s building a vertically-integrated, AI-defined compute-energy stack that could underwrite an autonomous, Bitcoin-denominated economy. That&apos;s a portfolio hedge you can park in your driveway—or hand the chores to.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
} 