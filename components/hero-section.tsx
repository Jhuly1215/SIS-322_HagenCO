import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative py-20 lg:py-32 overflow-hidden bg-warm-cream">
      {/* blob rojizo suave de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-20 bg-earthy-red"
      />
      <div className="container px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* texto */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-earthy-red/10 px-3 py-1 text-sm font-medium text-earthy-red border border-earthy-red/30">
                Seguridad & Fiabilidad
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight text-dark-blue">
                Transformamos tu{" "}
                <span className="bg-gradient-to-r from-earthy-red via-golden to-earthy-red bg-clip-text text-transparent">
                  visión digital
                </span>{" "}
                en realidad
              </h1>
              <p className="text-lg text-light-blue text-pretty max-w-lg">
                Soluciones innovadoras en software que impulsan el crecimiento de tu organización con tecnología de
                vanguardia.
              </p>
            </div>
          </div>

          {/* visual sin recuadro, con barras animadas */}
          <div className="relative">
            {/* contenedor para barras animadas */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              {/* rojo */}
              <span
                className="absolute top-6 right-[-40%] h-3 rounded-full bg-earthy-red animate-slide-left"
                style={{ width: "80%", animationDelay: "0ms" }}
              />
              {/* dorado */}
              <span
                className="absolute top-16 right-[-40%] h-2.5 rounded-full bg-golden animate-slide-left"
                style={{ width: "70%", animationDelay: "250ms" }}
              />
              {/* azul oscuro */}
              <span
                className="absolute top-28 right-[-40%] h-2 rounded-full bg-dark-blue animate-slide-left"
                style={{ width: "85%", animationDelay: "500ms" }}
              />
              {/* repetición más baja para volumen */}
              <span
                className="absolute bottom-16 right-[-40%] h-2.5 rounded-full bg-golden/90 animate-slide-left"
                style={{ width: "65%", animationDelay: "800ms" }}
              />
              <span
                className="absolute bottom-6 right-[-40%] h-3 rounded-full bg-earthy-red/90 animate-slide-left"
                style={{ width: "75%", animationDelay: "1100ms" }}
              />
            </div>

            {/* imagen sola (sin tarjeta), con borde redondeado y sombra */}
            <div className="relative rounded-2xl p-2">
              <img
                src="/placeholder-blnzk.jpg"
                alt="Ilustración tecnológica de HagenCO"
                className="w-full h-auto rounded-xl object-cover shadow-[0_18px_40px_rgba(60,81,112,0.25)] ring-2 ring-light-blue/40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
