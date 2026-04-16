"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Briefcase, Shield, ArrowRight } from "lucide-react";

const practiceAreas = [
  {
    id: 1,
    icon: Heart,
    title: "Direito de Família",
    description:
      "Cuido de questões familiares com sensibilidade e profissionalismo.",
    services: [
      "Divórcio consensual e litigioso",
      "Pensão alimentícia",
      "Guarda de filhos",
      "Partilha de bens",
      "União estável",
      "Inventário",
    ],
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Direito do Trabalho",
    description:
      "Defendo seus direitos trabalhistas com dedicação e transparência.",
    services: [
      "Demissão sem justa causa",
      "Horas extras",
      "FGTS e verbas rescisórias",
      "Assédio moral e sexual",
      "Acidente de trabalho",
      "Negociação de acordos",
    ],
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 3,
    icon: Shield,
    title: "Direito Penal",
    description:
      "Proteção da sua liberdade e direitos em questões criminais.",
    services: [
      "Defesa criminal",
      "Habeas Corpus",
      "Acompanhamento em audiências",
      "Recursos criminais",
      "Crimes contra a honra",
      "Medidas protetivas",
    ],
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
];

export default function PracticeAreasSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-900 mb-4">
            Áreas de Atuação
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Atendimento especializado em três áreas fundamentais do direito
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative p-8">
                {/* Icon */}
                <div
                  className={`${area.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <area.icon className={`w-8 h-8 ${area.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-3">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {area.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gray-200 mb-6"></div>

                {/* Services List */}
                <ul className="space-y-3 mb-6">
                  {area.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-gold-600 flex-shrink-0 mt-1" />
                      <span className="text-sm text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <a
                  href="https://wa.me/5545984163995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-gold-600 transition-colors duration-300"
                >
                  Fale sobre seu caso
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}