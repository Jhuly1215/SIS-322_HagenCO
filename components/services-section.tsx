"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const ServiceIcon = ({ type }: { type: string }) => {
  const iconProps = {
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    className:
      "text-dark-blue transition-colors duration-300 group-hover:text-golden drop-shadow-[0_4px_12px_rgba(166,81,74,0.25)]",
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
    short: "Transformamos datos en decisiones accionables.",
    details:
      "Integración de fuentes (ETL/ELT), data lakes y warehouses, dashboards ejecutivos y modelos de predicción. Gobernanza de datos, catalogación y linaje para asegurar calidad y trazabilidad.",
    bullets: ["ETL/ELT modern stack", "BI & dashboards", "ML para pronósticos"],
  },
  {
    id: "calidad",
    title: "Calidad de Software",
    short: "Excelencia continua en cada release.",
    details:
      "Estrategias de QA con SAST/DAST, pruebas funcionales y E2E, automatización CI/CD y métricas de cobertura. Shift-left testing para detectar fallos antes de producción.",
    bullets: ["SAST/DAST", "E2E & regresión", "CI/CD con gates"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    short: "Infraestructura escalable, segura y costo-eficiente.",
    details:
      "Arquitecturas nativas en la nube, IaC, observabilidad y alta disponibilidad. Optimización de costos, backups y políticas de recuperación ante desastres.",
    bullets: ["IaC (Terraform)", "Observabilidad 360°", "Alta disponibilidad"],
  },
  {
    id: "hardware",
    title: "Hardware & IoT",
    short: "Equipamiento y dispositivos a tu medida.",
    details:
      "Dimensionamiento de servidores, edge computing e IoT. Gestión de activos, rendimiento y energía, con planes de mantenimiento preventivo.",
    bullets: ["Edge/IoT", "Mantenimiento preventivo", "Optimización energética"],
  },
  {
    id: "redes",
    title: "Redes",
    short: "Conectividad empresarial robusta y segura.",
    details:
      "Diseño de topologías, segmentación, QoS y SD-WAN. Hardening, VPNs y monitoreo para máxima disponibilidad y baja latencia.",
    bullets: ["Segmentación & QoS", "SD-WAN/VPN", "Monitoreo continuo"],
  },
  {
    id: "seguridad",
    title: "Ciberseguridad",
    short: "Protección integral de activos y datos críticos.",
    details:
      "Gestión de identidades (IAM), hardening, respuesta a incidentes y SIEM. Cumplimiento normativo y gestión de riesgos end-to-end.",
    bullets: ["IAM & RBAC", "SIEM & respuesta", "Cumplimiento y riesgos"],
  },
  {
    id: "software",
    title: "Desarrollo de Software",
    short: "Soluciones a medida, centradas en el usuario.",
    details:
      "Web, móvil y escritorio con arquitectura limpia, APIs escalables y UX accesible. Ciclos ágiles con entrega continua.",
    bullets: ["Arquitectura limpia", "APIs escalables", "UX accesible"],
  },
] as const

export function ServicesSection() {
  // ya no usamos estado para diálogos; se mantiene por si deseas efectos de hover selectivo a futuro
  useState(null)

  return (
    <section id="servicios" className="py-20 relative">
      {/* halo rojizo muy suave (decorativo) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-15 bg-earthy-red"
      />
      <div className="container px-4 relative">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-blue">Nuestros Servicios</h2>
          <div className="mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-earthy-red via-golden to-earthy-red" />
          <p className="text-lg text-light-blue max-w-2xl mx-auto text-pretty">
            Ofrecemos soluciones tecnológicas integrales para impulsar la transformación digital de tu empresa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className="group relative transition-all duration-300 bg-beige border-light-blue hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(166,81,74,0.18)] hover:border-earthy-red/60"
            >
              {/* cinta decorativa roja (esquina) */}
              <div className="absolute -top-2 -right-2 h-8 w-8 rounded-lg bg-earthy-red/90" />
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-earthy-red/10 ring-2 ring-earthy-red/20">
                  <ServiceIcon type={service.id} />
                </div>
                <CardTitle className="text-lg font-semibold text-dark-blue">{service.title}</CardTitle>
                <CardDescription className="text-sm text-light-blue">{service.short}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-dark-blue text-pretty">
                  {service.details}
                </p>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {service.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-earthy-red" />
                      <span className="text-dark-blue">{b}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
