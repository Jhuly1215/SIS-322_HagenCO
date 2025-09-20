export function AboutSection() {
  return (
    <section id="nosotros" className="relative py-20 bg-beige overflow-hidden">
      {/* halo decorativo en rojo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-0 h-72 w-72 rounded-full blur-3xl opacity-15 bg-earthy-red"
      />
      <div className="container px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-blue animate-fadeInUp">
              Sobre HagenCO
            </h2>
            <div className="w-28 h-1 mx-auto rounded-full bg-gradient-to-r from-earthy-red via-golden to-earthy-red animate-pulse"></div>
          </div>

          <p className="text-lg text-dark-blue leading-relaxed text-pretty animate-fadeInUp [animation-delay:200ms]">
            En HagenCO somos una empresa de software dedicada a crear soluciones innovadoras que impulsan la
            transformación digital de las organizaciones. Ofrecemos servicios especializados en análisis de datos,
            calidad de software, infraestructura en la nube, hardware, redes, ciberseguridad y desarrollo de software a
            medida. Nuestro compromiso es combinar tecnología de vanguardia con talento humano para brindar valor real y
            sostenible a nuestros clientes.
          </p>

          {/* métricas con animación */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-2 transform transition-transform duration-500 hover:scale-105 animate-fadeInUp [animation-delay:400ms]">
              <div className="text-3xl font-bold text-earthy-red">10+</div>
              <p className="text-sm text-dark-blue">Años de experiencia</p>
            </div>
            <div className="text-center space-y-2 transform transition-transform duration-500 hover:scale-105 animate-fadeInUp [animation-delay:600ms]">
              <div className="text-3xl font-bold text-earthy-red">500+</div>
              <p className="text-sm text-dark-blue">Proyectos completados</p>
            </div>
            <div className="text-center space-y-2 transform transition-transform duration-500 hover:scale-105 animate-fadeInUp [animation-delay:800ms]">
              <div className="text-3xl font-bold text-earthy-red">50+</div>
              <p className="text-sm text-dark-blue">Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
