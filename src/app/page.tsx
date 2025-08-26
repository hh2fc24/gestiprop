import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertiesGrid from "@/components/PropertiesGrid";
import SiteFooter from "@/components/SiteFooter";
import type { Property } from "@/components/PropertyCard";

export const metadata = {
  title: "Gestiprop — Corretaje Inmobiliario",
  description:
    "Corretaje premium en Chile: compra, venta y arriendo con estrategia y confianza.",
};

const MOCK: Property[] = [
  {
    id: "1",
    title: "Depto. 2D/2B — Vitacura",
    location: "Vitacura, Santiago",
    price: "UF 10.900",
    beds: 2,
    baths: 2,
    area: 78,
    image: "/1.png",
    tag: "Destacada",
  },
  {
    id: "2",
    title: "Casa 4D — Chicureo",
    location: "Colina, RM",
    price: "UF 19.800",
    beds: 4,
    baths: 3,
    area: 210,
    image: "/2.png",
  },
  {
    id: "3",
    title: "Studio — Providencia",
    location: "Providencia, Santiago",
    price: "$ 320.000.000",
    beds: 1,
    baths: 1,
    area: 36,
    image: "/3.png",
    tag: "Nueva",
  },
  {
    id: "4",
    title: "Oficina — El Golf",
    location: "Las Condes, Santiago",
    price: "UF 7.500",
    beds: 0,
    baths: 1,
    area: 65,
    image: "/4.png",
  },
];

export default function Page() {
  return (
    <main className="min-h-dvh bg-neutral-950 text-zinc-100">
      <Navbar />
      <Hero />
      <PropertiesGrid items={MOCK} />
      <SiteFooter />
    </main>
  );
}