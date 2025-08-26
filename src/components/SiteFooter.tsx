'use client';

import { motion } from "framer-motion";

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-zinc-900 bg-black" id="contacto">
      {/* Glow superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-6 left-0 right-0 h-6 opacity-40"
        style={{
          background:
            "radial-gradient(40% 60% at 50% 100%, rgba(212,175,55,0.25), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3">
              <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
                <path d="M3 11l9-7 9 7v8a2 2 0 0 1-2 2h-5v-6H10v6H5a2 2 0 0 1-2-2v-8z" fill="#d4af37" />
              </svg>
              <div className="text-2xl font-semibold tracking-tight text-zinc-50">GESTIPROP</div>
            </div>
            <p className="mt-3 max-w-md text-sm text-zinc-400">
              Corretaje inmobiliario con estándar premium. Gestión ágil, due diligence y negociación
              precisa para cerrar con confianza.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-200">Contacto</h4>
            <ul className="mt-3 space-y-2 text-sm text-zinc-400">
              <li>+56 9 5555 5555</li>
              <li>contacto@gestiprop.cl</li>
              <li>Santiago, Chile</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="mailto:contacto@gestiprop.cl"
                className="rounded-md px-3 py-2 text-sm font-medium text-black"
                style={{ backgroundColor: "#d4af37" }}
              >
                Escríbenos
              </a>
              <a
                href="#"
                className="rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-200 transition hover:bg-white/5"
              >
                Agendar visita
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-200">Sitio</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="text-zinc-400 hover:text-zinc-200" href="#propiedades">Propiedades</a></li>
              <li><a className="text-zinc-400 hover:text-zinc-200" href="#vende">Vende con nosotros</a></li>
              <li><a className="text-zinc-400 hover:text-zinc-200" href="#nosotros">Nosotros</a></li>
              <li><a className="text-zinc-400 hover:text-zinc-200" href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 origin-left border-t border-zinc-900"
        />
        <div className="pt-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} GESTIPROP. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}