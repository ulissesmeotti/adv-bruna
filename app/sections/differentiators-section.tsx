"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heart, Zap, Eye, Award } from "lucide-react";

const differentiators = [
  {
    id: 1,
    icon: Heart,
    title: "Atendimento Humanizado",
    description:
      "Você não é apenas mais um número. Escuto sua história com empatia e atenção, entendendo suas necessidades reais.",
  },
  {
    id: 2,
    icon: Zap,
    title: "Agilidade e Eficiência",
    description:
      "Respostas rápidas, processos bem conduzidos e soluções eficazes. Seu tempo é valioso e eu respeito isso.",
  },
  {
    id: 3,
    icon: Eye,
    title: "Transparência Total",
    description:
      "Você terá acesso a todas as informações sobre seu caso. Sem juridiquês complicado, apenas clareza e honestidade.",
  },
  {
    id: 4,
    icon: Award,
    title: "Experiência Comprovada",
    description:
      "Mais de 3 anos resolvendo casos e ajudando pessoas.",
  },
];

export default function DifferentiatorsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-28 bg-navy-900 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="https://i.pinimg.com/736x/66/a1/43/66a1431e3b539748d3642b8a9989242f.jpg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
            Por Que Escolher Meu Trabalho?
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Compromisso com excelência e resultados que fazem a diferença
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-navy-800 rounded-xl p-8 h-full border border-navy-700 hover:border-gold-500 transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/10">
                {/* Icon */}
                <div className="bg-gold-500/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-gold-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}