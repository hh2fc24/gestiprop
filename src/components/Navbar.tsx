'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#propiedades", label: "Propiedades" },
  { href: "#vende", label: "Vende con nosotros" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [elev, setElev] = useState(false);

  useEffect(() => {
    const onScroll = () => setElev(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-zinc-900/70 bg-black/40 backdrop-blur-xl transition-shadow",
        elev ? "shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "shadow-none",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="group inline-flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
            <path d="M3 11l9-7 9 7v8a2 2 0 0 1-2 2h-5v-6h-4v6H5a2 2 0 0 1-2-2v-8z" fill="#d4af37"/>
          </svg>
        <span className="text-xl font-semibold tracking-tight text-zinc-50">
            GESTIPROP
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-zinc-300 transition hover:text-zinc-100"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile button */}
        <div className="flex items-center gap-3">
          <Link
            href="#contacto"
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-black md:inline-block"
            style={{ backgroundColor: "#d4af37" }}
          >
            Publicar propiedad
          </Link>

          <button
            className="inline-flex items-center justify-center rounded-md border border-zinc-700 p-2 text-zinc-200 md:hidden"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className={`${open ? "hidden" : "block"}`} width="18" height="18" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/>
            </svg>
            <svg className={`${open ? "block" : "hidden"}`} width="18" height="18" viewBox="0 0 24 24">
              <path fill="currentColor" d="M18.3 5.71L12 12.01l-6.3-6.3L4.29 7.12l6.3 6.3l-6.3 6.3l1.41 1.41l6.3-6.3l6.3 6.3l1.41-1.41l-6.3-6.3l6.3-6.3z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden ${open ? "block" : "hidden"} border-t border-zinc-900/70 bg-black/70 backdrop-blur-xl`}>
        <nav className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
          <ul className="space-y-3">
            {NAV.map((i) => (
              <li key={i.href}>
                <Link
                  href={i.href}
                  className="block rounded-md px-2 py-2 text-sm text-zinc-200 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {i.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="#contacto"
                className="block rounded-md px-3 py-2 text-center text-sm font-medium text-black"
                style={{ backgroundColor: "#d4af37" }}
                onClick={() => setOpen(false)}
              >
                Publicar propiedad
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}