'use client';

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useState, useRef } from "react";

const badgeIn: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};
const titleIn: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};
const textIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.15 } }
};
const ctasIn: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.25 } }
};

export default function Hero() {
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<1 | 2>(1);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const handleEnded = () => {
    if (currentVideo === 1) {
      setCurrentVideo(2);
      video2Ref.current?.play();
    } else {
      setCurrentVideo(1);
      video1Ref.current?.play();
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-neutral-950">
      {/* === Background video secuencial === */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          ref={video1Ref}
          key="v1"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            currentVideo === 1 ? "opacity-100" : "opacity-0"
          }`}
          src="/1.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleEnded}
        />
        <video
          ref={video2Ref}
          key="v2"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            currentVideo === 2 ? "opacity-100" : "opacity-0"
          }`}
          src="/2.mp4"
          muted
          playsInline
          onEnded={handleEnded}
        />
      </div>

      {/* === Overlay negro + ruido + spotlight === */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/75 to-black/90" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 15%, #fff 0.5px, transparent 0.5px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(600px 300px at 50% 0%, rgba(212,175,55,0.15), transparent 60%)",
        }}
      />

      {/* === Contenido === */}
      <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
        <motion.div
          variants={badgeIn}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-black/40 px-3 py-1 text-xs text-zinc-300"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Corretaje premium en Chile
        </motion.div>

        <motion.h1
          variants={titleIn}
          initial="hidden"
          animate="show"
          className="mt-6 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl"
        >
          GESTIPROP
        </motion.h1>

        <motion.p
          variants={textIn}
          initial="hidden"
          animate="show"
          className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-300"
        >
          Compra, venta y arriendo con experiencia de alto nivel. Transparencia,
          velocidad y negociación estratégica para maximizar el valor de tu propiedad.
        </motion.p>

        <motion.div
          variants={ctasIn}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="#propiedades"
            className="group relative inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium text-black"
            style={{ backgroundColor: "#d4af37" }}
            onMouseEnter={() => setHoverPrimary(true)}
            onMouseLeave={() => setHoverPrimary(false)}
          >
            <span className="relative z-10">Ver propiedades</span>
            <span
              aria-hidden
              className="absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ boxShadow: "0 0 40px 12px rgba(212,175,55,0.35)" }}
            />
            <span
              className={`ml-2 inline-block transition-transform ${hoverPrimary ? "translate-x-0.5" : ""}`}
              aria-hidden
            >
              →
            </span>
          </Link>

          <Link
            href="#contacto"
            className="inline-flex items-center justify-center rounded-md border border-zinc-700 bg-black/30 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/5"
          >
            Evalúa tu propiedad
          </Link>
        </motion.div>
      </div>
    </section>
  );
}