'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: number;
  image: string;
  tag?: string;
};

export default function PropertyCard({ p }: { p: Property }) {
  const [hover, setHover] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-neutral-950 will-change-transform"
      style={{
        transform: hover ? "translateY(-2px)" : undefined,
        transition: "transform 280ms ease",
      }}
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority={false}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
        {p.tag && (
          <span
            className="absolute left-3 top-3 rounded-md px-2 py-1 text-xs font-medium"
            style={{ backgroundColor: "#d4af37", color: "#111" }}
          >
            {p.tag}
          </span>
        )}
      </div>

      <div className="space-y-2 p-4">
        <h3 className="text-lg font-semibold text-zinc-50">{p.title}</h3>
        <p className="text-sm text-zinc-400">{p.location}</p>

        <div className="mt-3 flex items-center gap-4 text-sm text-zinc-300">
          <span className="inline-flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80"><path fill="currentColor" d="M7 6h10v2H7zM5 10h14v2H5zM3 14h18v7H3z"/></svg>
            {p.beds}D
          </span>
          <span className="inline-flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80"><path fill="currentColor" d="M7 22v-2h10v2H7zM5 8h14l-2 10H7L5 8zm9-6H10v2h4V2z"/></svg>
            {p.baths}B
          </span>
          <span className="inline-flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80"><path fill="currentColor" d="M3 3h18v2H3zm0 16h18v2H3zM3 7h2v10H3zm16 0h2v10h-2z"/></svg>
            {p.area} m²
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-base font-semibold text-zinc-50">{p.price}</span>
          <button
            className="relative overflow-hidden rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/5"
            aria-label="Ver detalles"
          >
            <span className="relative z-10">Ver detalles</span>
            {/* Barrido de luz */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/15 to-transparent"
              style={{
                transform: hover ? "translateX(120%)" : undefined,
                transition: "transform 700ms ease",
              }}
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}