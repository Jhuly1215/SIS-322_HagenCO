export function Footer() {
  return (
    <footer className="bg-earthy-red text-white">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo + descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-golden shadow-md shadow-dark-blue/30">
                <span className="text-sm font-bold text-dark-blue">H</span>
              </div>
              <span className="text-lg font-bold">HagenCO</span>
            </div>
            <p className="text-sm text-white/80">
              Innovación en Tecnología y Software para impulsar tu transformación digital.
            </p>
          </div>

          {/* Servicios */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-golden">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-light-blue transition-colors">
                  Big Data
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue transition-colors">
                  Calidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue transition-colors">
                  Cloud
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue transition-colors">
                  Hardware
                </a>
              </li>
            </ul>
          </div>

          {/* Más servicios */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-golden">Más Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-light-blue transition-colors">
                  Redes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue transition-colors">
                  Seguridad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue transition-colors">
                  Software
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-golden">Contacto</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>info@hagen.co</li>
              <li>+1 (555) 123-4567</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/70">
            © 2024 HagenCO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
