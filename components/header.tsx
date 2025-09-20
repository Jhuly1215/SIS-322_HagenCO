import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-light-blue bg-dark-blue/95 backdrop-blur supports-[backdrop-filter]:bg-dark-blue/90">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Marca */}
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-golden">
            <span className="text-lg font-bold text-dark-blue">H</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-warm-cream">HagenCO</h1>
            <p className="text-xs text-light-blue">Innovación en Tecnología y Software</p>
          </div>
        </div>

        {/* Nav + botón */}
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#inicio" className="text-sm font-medium text-warm-cream hover:text-golden transition-colors">Inicio</a>
            <a href="#servicios" className="text-sm font-medium text-warm-cream hover:text-golden transition-colors">Servicios</a>
            <a href="#nosotros" className="text-sm font-medium text-warm-cream hover:text-golden transition-colors">Nosotros</a>
            <a href="#contacto" className="text-sm font-medium text-warm-cream hover:text-golden transition-colors">Contacto</a>
          </nav>

          {/* Iniciar sesión: link externo envuelto en Button */}
          <Button
            asChild
            className="hidden md:inline-flex bg-earthy-red text-warm-cream hover:bg-earthy-red/90 font-semibold shadow-md"
          >
            <a href="https://calidad-software-frontend.pages.dev">Iniciar sesión</a>
          </Button>

          {/* Botón hamburguesa (decorativo) */}
          <Button
            variant="outline"
            className="md:hidden bg-transparent border-light-blue text-warm-cream hover:bg-golden hover:text-dark-blue"
            aria-label="Abrir menú"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}
