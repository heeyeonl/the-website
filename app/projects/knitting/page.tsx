'use client';

import { Instagram, Store } from 'lucide-react';
import Script from 'next/script';
import Image from 'next/image';

const FEATURED_PRODUCTS = [
  {
    title: "Cat Toys Crochet Pattern",
    image: "/products/cat-toys-crochet-pattern.jpg",
    href: "https://www.etsy.com/listing/1876603129/cat-toys-crochet-pattern-digital-fish?click_key=601485de8d2c7edbe352b46d3eb49b27fcf8a8c5%3A1876603129&click_sum=a221a40e&ref=items-pagination-3&sts=1",
  },
  {
    title: "Stitch Markers",
    image: "/products/stitch-markers.jpg",
    href: "https://www.etsy.com/listing/1867109221/ink-blue-butterfly-stitch-markers-set-of?ref=shop_home_active_1&sca=1&sts=1&logging_key=70854638c4e8c47cac3076a2301b24e1794d9e27%3A1867109221",
  },
  {
    title: "Handmade Doily Coasters",
    image: "/products/doily-coasters.jpg",
    href: "https://www.etsy.com/listing/1853845722/handmade-doily-crochet-coasters-set-of-2?ls=r&ref=listing-free-shipping-bundle-1&sts=1&content_source=4725f66d7f93a72615ff133d73a0c9926ef2c470%253A1853845722&logging_key=4725f66d7f93a72615ff133d73a0c9926ef2c470%3A1853845722",
  }
];

export default function EtsyStore() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-center gap-4 mb-8">
        <Store size={40} className="text-orange-500" />
        <h1 className="text-3xl font-bold">HeeyeonKnits</h1>
      </div>

      <div className="flex flex-col gap-6">
        <p>
          Welcome to my knitting corner! I create handmade knitted items with love and care.
          Follow me on Instagram to see my latest creations and works in progress.
        </p>

        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/heeyeon.knits/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 transition-colors"
          >
            <Instagram size={24} />
            <span>@heeyeon.knits</span>
          </a>

          <a
            href="http://etsy.com/shop/HeeyeonKnits"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition-colors"
          >
            <Store size={24} />
            <span>HeeyeonKnits on Etsy</span>
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Latest Creations</h2>
            <div className="relative overflow-hidden pb-[60%] w-full max-w-[500px]">
              <iframe
                src="https://www.instagram.com/heeyeon.knits/embed"
                className="absolute top-0 left-0 w-full h-full border-none"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {FEATURED_PRODUCTS.map((product) => (
                <a
                  key={product.title}
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg mb-2">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-orange-500 transition-colors">
                    {product.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </div>
  );
}