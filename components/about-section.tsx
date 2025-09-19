export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-beige">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-blue">Sobre HagenCO</h2>
            <div className="w-24 h-1 bg-golden mx-auto rounded-full"></div>
          </div>

          <p className="text-lg text-dark-blue leading-relaxed text-pretty">
            En HagenCO somos una empresa de software dedicada a crear soluciones innovadoras que impulsan la
            transformación digital de las organizaciones. Ofrecemos servicios especializados en análisis de datos,
            calidad de software, infraestructura en la nube, hardware, redes, ciberseguridad y desarrollo de software a
            medida. Nuestro compromiso es combinar tecnología de vanguardia con talento humano para brindar valor real y
            sostenible a nuestros clientes.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-golden">10+</div>
              <p className="text-sm text-light-blue">Años de experiencia</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-golden">500+</div>
              <p className="text-sm text-light-blue">Proyectos completados</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-golden">50+</div>
              <p className="text-sm text-light-blue">Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
