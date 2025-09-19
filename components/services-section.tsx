"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const ServiceIcon = ({ type }: { type: string }) => {
  const iconProps = {
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    className: "text-dark-blue group-hover:text-golden transition-colors duration-300",
  }

  switch (type) {
    case "bigdata":
      return (
        <svg {...iconProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 8h10M7 12h8M7 16h6" />
          <circle cx="17" cy="8" r="1" fill="currentColor" />
          <circle cx="15" cy="12" r="1" fill="currentColor" />
          <circle cx="13" cy="16" r="1" fill="currentColor" />
        </svg>
      )
    case "calidad":
      return (
        <svg {...iconProps}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          <path d="M9 12l2 2 4-4" strokeWidth="2" />
        </svg>
      )
    case "cloud":
      return (
        <svg {...iconProps}>
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          <path d="M12 13v8M8 17l4-4 4 4" strokeWidth="2" />
        </svg>
      )
    case "hardware":
      return (
        <svg {...iconProps}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="7" y="7" width="10" height="10" rx="1" />
          <path d="M9 9h6M9 12h6M9 15h4" strokeWidth="1" />
          <circle cx="6" cy="6" r="1" fill="currentColor" />
          <circle cx="18" cy="6" r="1" fill="currentColor" />
          <circle cx="6" cy="18" r="1" fill="currentColor" />
          <circle cx="18" cy="18" r="1" fill="currentColor" />
        </svg>
      )
    case "redes":
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
          <circle cx="12" cy="8" r="1" fill="currentColor" />
          <circle cx="8" cy="12" r="1" fill="currentColor" />
          <circle cx="16" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="16" r="1" fill="currentColor" />
          <path d="M8 8l8 8M16 8l-8 8" strokeWidth="0.5" opacity="0.5" />
        </svg>
      )
    case "seguridad":
      return (
        <svg {...iconProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" strokeWidth="2" />
        </svg>
      )
    case "software":
      return (
        <svg {...iconProps}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="M7 8l3 3-3 3M13 14h4" strokeWidth="2" />
        </svg>
      )
    default:
      return null
  }
}

const services = [
  {
    id: "bigdata",
    title: "Big Data y Analíticas",
    description: "Transformamos datos en insights valiosos para tu negocio",
    subdomain: "bigdata.hagen.co",
    details:
      "Implementamos soluciones de Big Data que permiten procesar, analizar y visualizar grandes volúmenes de información para tomar decisiones estratégicas basadas en datos reales.",
  },
  {
    id: "calidad",
    title: "Calidad",
    description: "Aseguramos la excelencia en cada línea de código",
    subdomain: "calidad.hagen.co",
    details:
      "Nuestros procesos de QA garantizan software robusto, confiable y libre de errores mediante testing automatizado, revisiones de código y metodologías ágiles.",
  },
  {
    id: "cloud",
    title: "Cloud",
    description: "Infraestructura escalable en la nube",
    subdomain: "cloud.hagen.co",
    details:
      "Diseñamos y desplegamos arquitecturas cloud nativas que escalan automáticamente, optimizan costos y garantizan alta disponibilidad para tus aplicaciones.",
  },
  {
    id: "hardware",
    title: "Hardware",
    description: "Soluciones de hardware personalizadas",
    subdomain: "hardware.hagen.co",
    details:
      "Proveemos consultoría especializada en hardware, desde servidores empresariales hasta dispositivos IoT, optimizando rendimiento y eficiencia energética.",
  },
  {
    id: "redes",
    title: "Redes",
    description: "Conectividad robusta y segura",
    subdomain: "redes.hagen.co",
    details:
      "Diseñamos e implementamos infraestructuras de red empresariales que garantizan conectividad confiable, alta velocidad y seguridad en todas las comunicaciones.",
  },
  {
    id: "seguridad",
    title: "Seguridad",
    description: "Protección integral de tus activos digitales",
    subdomain: "seguridad.hagen.co",
    details:
      "Implementamos estrategias de ciberseguridad multicapa que protegen tu información crítica contra amenazas internas y externas, cumpliendo estándares internacionales.",
  },
  {
    id: "software",
    title: "Software",
    description: "Desarrollo de software a medida",
    subdomain: "software.hagen.co",
    details:
      "Creamos aplicaciones web, móviles y de escritorio personalizadas que se adaptan perfectamente a los procesos únicos de tu organización.",
  },
]

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)

  return (
    <section id="servicios" className="py-20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-blue">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-golden mx-auto rounded-full"></div>
          <p className="text-lg text-light-blue max-w-2xl mx-auto text-pretty">
            Ofrecemos soluciones tecnológicas integrales para impulsar la transformación digital de tu empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-beige border-light-blue hover:border-golden"
              onClick={() => setSelectedService(service)}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <ServiceIcon type={service.id} />
                </div>
                <CardTitle className="text-lg font-semibold text-dark-blue group-hover:text-golden transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-sm text-light-blue">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-md bg-beige border-light-blue">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-dark-blue">
                {selectedService && <ServiceIcon type={selectedService.id} />}
                {selectedService?.title}
              </DialogTitle>
              <DialogDescription className="text-left pt-4 text-dark-blue">
                {selectedService?.details}
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-3 mt-6">
              <Button
                onClick={() => window.open(`https://${selectedService?.subdomain}`, "_blank")}
                className="w-full bg-golden text-dark-blue hover:bg-golden/90 font-semibold"
              >
                Visitar {selectedService?.subdomain}
              </Button>
              <Button
                variant="outline"
                onClick={() => setSelectedService(null)}
                className="w-full border-light-blue text-light-blue hover:bg-light-blue hover:text-dark-blue"
              >
                Cerrar
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
