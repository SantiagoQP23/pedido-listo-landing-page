import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Página no encontrada | Teikio",
  description: "La página que buscas no existe o fue movida a otra dirección.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
      <div className="text-center max-w-lg mx-auto">
        {/* Illustration */}
        <div className="mb-8 flex justify-center">
          <svg
            width="280"
            height="200"
            viewBox="0 0 280 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[280px] h-auto"
          >
            {/* Plate */}
            <ellipse
              cx="140"
              cy="130"
              rx="100"
              ry="30"
              fill="#F1F5F9"
              stroke="#E2E8F0"
              strokeWidth="2"
            />
            <ellipse
              cx="140"
              cy="128"
              rx="70"
              ry="20"
              fill="white"
              stroke="#E2E8F0"
              strokeWidth="2"
            />
            
            {/* Fork */}
            <rect x="85" y="40" width="6" height="80" rx="3" fill="#CBD5E1" />
            <rect x="80" y="30" width="4" height="25" rx="2" fill="#CBD5E1" />
            <rect x="87" y="30" width="4" height="25" rx="2" fill="#CBD5E1" />
            <rect x="94" y="30" width="4" height="25" rx="2" fill="#CBD5E1" />
            
            {/* Knife */}
            <rect x="189" y="40" width="6" height="80" rx="3" fill="#CBD5E1" />
            <path
              d="M186 40 L198 40 L198 25 C198 18 192 15 186 20 Z"
              fill="#CBD5E1"
            />
            
            {/* 404 floating above plate */}
            <text
              x="140"
              y="115"
              textAnchor="middle"
              fontSize="48"
              fontWeight="bold"
              fill="#0977CA"
              fontFamily="var(--font-inter), sans-serif"
            >
              404
            </text>
            
            {/* Decorative crumbs/dots */}
            <circle cx="120" cy="145" r="3" fill="#0977CA" opacity="0.3" />
            <circle cx="140" cy="150" r="2" fill="#0977CA" opacity="0.2" />
            <circle cx="160" cy="145" r="3" fill="#0977CA" opacity="0.3" />
            <circle cx="110" cy="140" r="2" fill="#0977CA" opacity="0.2" />
            <circle cx="170" cy="140" r="2" fill="#0977CA" opacity="0.2" />
          </svg>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Image
            src="/teikio-logo.svg"
            alt="Teikio Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="text-lg font-bold text-gray-900">Teikio</span>
        </div>

        {/* Text */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Página no encontrada
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          La página que buscas no existe o fue movida a otra dirección.
        </p>

        {/* Button */}
        <Button asChild size="lg">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
