"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname();

  // Configuración de Navbar según la ruta
  const navbarVariants = {
    landing: {
      styles: "bg-black-primary text-white px-6 py-4 flex justify-between items-center",
      content: (
        <div className="flex gap-4">
          <Link href="/login" className="px-4 py-2 border border-primary rounded text-primary hover:bg-primary hover:text-black">
            Ingresar
          </Link>
          <Link href="/register" className="px-4 py-2 bg-primary text-black rounded hover:opacity-80">
            Crear cuenta
          </Link>
        </div>
      ),
    },
    auth: {
      styles: "bg-primary text-black px-6 py-4 flex justify-between items-center",
      content: null, // Solo el logo
    },
    dashboard: {
      styles: "bg-black-primary text-white px-6 py-4 flex justify-between items-center",
      content: (
        <div className="flex items-center gap-4">
          <span className="text-sm">Hola, Mauricio Brito</span>
          <div className="w-8 h-8 bg-primary text-black flex items-center justify-center rounded-full font-bold">
            MB
          </div>
        </div>
      ),
    },
  };

  // Determinar el tipo de Navbar según la ruta
  const currentNavbar =
    pathname === "/"
      ? navbarVariants.landing
      : pathname === "/login" || pathname === "/register"
      ? navbarVariants.auth
      : pathname.startsWith("/dashboard")
      ? navbarVariants.dashboard
      : navbarVariants.landing; // Default a landing

  return (
    <nav className={currentNavbar.styles}>
      <div className="text-xl font-bold text-primary">
        <Link href="/">
          <Image
            src="/img/Logo 01.png" 
            alt="Digital Money House Logo"
            width={86}
            height={33}
            priority 
          />
        </Link>
      </div>
      {currentNavbar.content}
    </nav>
  );
}
