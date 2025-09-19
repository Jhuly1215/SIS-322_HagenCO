import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-light-blue bg-dark-blue/95 backdrop-blur supports-[backdrop-filter]:bg-dark-blue/90">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-golden">
            <span className="text-lg font-bold text-dark-blue">H</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-warm-cream">HagenCO</h1>
            <p className="text-xs text-light-blue">Innovación en Tecnología y Software</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-sm font-medium text-warm-cream hover:text-golden transition-colors">
            Inicio
          </a>
          <a href="#servicios" className="text-sm font-medium text-warm-cream hover:text-golden transition-colors">
            Servicios
          </a>
          <a href="#nosotros" className="text-sm font-medium text-warm-cream hover:text-golden transition-colors">
            Nosotros
          </a>
          <a href="#contacto" className="text-sm font-medium text-warm-cream hover:text-golden transition-colors">
            Contacto
          </a>
        </nav>

        <Button
          variant="outline"
          className="md:hidden bg-transparent border-light-blue text-warm-cream hover:bg-golden hover:text-dark-blue"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  )
}
