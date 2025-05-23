import { Metadata } from 'next';
import { fetchNFTs } from '@/lib/nft';
import { NFTGallery } from '@/components/NFTGallery';
import { featuredNFTs } from '@/config/featured-nfts-2';

// Force dynamic rendering to prevent build timeouts
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Explore Collection | Digital Art Gallery',
  description: 'Explore our complete collection of exceptional digital artworks showcasing unique pieces from our featured collection.',
  openGraph: {
    title: 'Explore Collection | Digital Art Gallery',
    description: 'Explore our complete collection of exceptional digital artworks showcasing unique pieces from our featured collection.',
    type: 'website',
  },
};

// Increase revalidation time to reduce build load
export const revalidate = 86400; // 24 hours

// Structured data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Explore Collection',
  description: 'Explore our complete collection of exceptional digital artworks',
  about: {
    '@type': 'Thing',
    name: 'Digital Art',
    description: 'A collection of unique digital artworks'
  }
};

// Use all featured NFTs
const nftConfigs = featuredNFTs;

export default async function ExplorePage() {
  const nfts = await fetchNFTs(nftConfigs);

  return (
    <div className="min-h-screen bg-black px-8 pt-32 pb-8 md:px-12 md:pt-36 md:pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-16 relative z-10 text-center">
          <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Digital Art • Explore</p>
          <h1 className="text-center">
            <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
              Explore Collection
            </span>
          </h1>
          <div className="flex items-center justify-center mt-6">
            <div className="h-px w-24 bg-yellow-500/30"></div>
            <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Explore our complete collection of exceptional digital artworks</p>
            <div className="h-px w-24 bg-yellow-500/30"></div>
          </div>
        </div>
        <NFTGallery nfts={nfts} />
      </div>
    </div>
  );
} 