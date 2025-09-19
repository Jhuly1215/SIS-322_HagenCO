import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative py-20 lg:py-32">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight text-dark-blue">
                Transformamos tu <span className="text-golden">visión digital</span> en realidad
              </h1>
              <p className="text-lg text-light-blue text-pretty max-w-lg">
                Soluciones innovadoras en software que impulsan el crecimiento de tu organización con tecnología de
                vanguardia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-golden text-dark-blue hover:bg-golden/90 font-semibold">
                Conócenos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-light-blue text-light-blue hover:bg-light-blue hover:text-dark-blue bg-transparent"
              >
                Ver Servicios
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-beige border border-light-blue p-8 flex items-center justify-center shadow-lg">
              <img
                src="/placeholder-blnzk.png"
                alt="Ilustración tecnológica de HagenCO"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
