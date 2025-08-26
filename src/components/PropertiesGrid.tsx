'use client';

import { motion } from "framer-motion";
import PropertyCard, { Property } from "@/components/PropertyCard";

export default function PropertiesGrid({ items }: { items: Property[] }) {
  return (
    <section id="propiedades" className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 flex items-end justify-between"
        >
          <div>
            <h2 className="text-2xl font-semibold text-zinc-50">Propiedades destacadas</h2>
            <p className="mt-1 text-sm text-zinc-400">
              Selección curada de oportunidades en venta y arriendo.
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-medium underline decoration-zinc-600 underline-offset-4 hover:text-zinc-200"
          >
            Ver todas →
          </a>
        </motion.header>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } }
          }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {items.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}