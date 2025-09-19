export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">H</span>
              </div>
              <span className="text-lg font-bold text-card-foreground">HagenCO</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Innovación en Tecnología y Software para impulsar tu transformación digital.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-card-foreground">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Big Data
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Calidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cloud
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Hardware
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-card-foreground">Más Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Redes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Seguridad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Software
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-card-foreground">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@hagen.co</li>
              <li>+1 (555) 123-4567</li>
              <li>Madrid, España</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 HagenCO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
