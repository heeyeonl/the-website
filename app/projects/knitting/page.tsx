'use client';

import { Instagram, Store } from 'lucide-react';
import Image from 'next/image';
import ProjectContainer from "@/app/components/PageContainer";

const FEATURED_PRODUCTS = [
  {
    title: "Cat Toys Crochet Pattern",
    image: "/images/products/cat-toys-crochet-pattern.jpg",
    href: "https://www.etsy.com/listing/1876603129/cat-toys-crochet-pattern-digital-fish?click_key=601485de8d2c7edbe352b46d3eb49b27fcf8a8c5%3A1876603129&click_sum=a221a40e&ref=items-pagination-3&sts=1",
  },
  {
    title: "Stitch Markers",
    image: "/images/products/stitch-markers.jpg",
    href: "https://www.etsy.com/shop/HeeyeonKnits?ref=shop-header-name&listing_id=1867109221&from_page=listing&section_id=52770283",
  },
  {
    title: "Handmade Doily Coasters",
    image: "/images/products/doily-coasters.jpg",
    href: "https://www.etsy.com/listing/1853845722/handmade-doily-crochet-coasters-set-of-2?ls=r&ref=listing-free-shipping-bundle-1&sts=1&content_source=4725f66d7f93a72615ff133d73a0c9926ef2c470%253A1853845722&logging_key=4725f66d7f93a72615ff133d73a0c9926ef2c470%3A1853845722",
  }
];

export default function EtsyStore() {
  return (
    <ProjectContainer title="HeeyeonKnits" titleStyle="text-4xl font-[specialelite]">
      <p>
        Welcome to my knitting corner! I create handmade knitted items with love and care.
        Follow me on Instagram to see my latest creations and works in progress.
      </p>

      <div className="flex flex-col gap-4 mt-8">
        <a
          href="https://www.instagram.com/heeyeon.knits/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)]"
        >
          <Instagram size={24} />
          <span>@heeyeon.knits</span>
        </a>

        <a
          href="http://etsy.com/shop/HeeyeonKnits"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit inline-flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)]"
        >
          <Store size={24} />
          <span>HeeyeonKnits on Etsy</span>
        </a>
      </div>

      <div className="mt-8">
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
              <p className="text-sm text-[var(--ui-black)] group-hover:text-[var(--accent-hover)] transition-colors">
                {product.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </ProjectContainer>
  );
}