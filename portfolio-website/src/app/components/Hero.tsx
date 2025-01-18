// src/app/components/Hero.tsx
import { ArrowDown } from "lucide-react";

interface HeroProps {
  name: string;
  title: string;
}

export default function Hero({ name, title }: HeroProps) {
  return (
    <section id="home" className="pt-20 pb-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Nama */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{name}</h1>

        {/* Judul atau Deskripsi */}
        <p className="text-lg sm:text-xl text-gray-600 mb-8">{title}</p>

        {/* Ikon Panah ke Bawah */}
        <ArrowDown
          className="mx-auto animate-bounce text-gray-700"
          size={32}
          aria-label="Scroll down"
        />
      </div>
    </section>
  );
}
