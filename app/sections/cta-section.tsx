"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MessageCircle, Phone } from "lucide-react";

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whatsappUrl = "https://wa.me/5545984163995";

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Breezeicons-actions-22-draw-square-inverted-corners.svg/3840px-Breezeicons-actions-22-draw-square-inverted-corners.svg.png fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-gold-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gold-500 rounded-full opacity-10 blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Pronto para Resolver Seu Problema Jurídico?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Não deixe suas dúvidas jurídicas se tornarem problemas maiores.
            Entre em contato agora e receba orientação especializada para seu caso.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-10 py-5 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Conversar no WhatsApp
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:bg-white hover:text-navy-900 text-white font-semibold px-10 py-5 rounded-lg transition-all duration-300 text-lg"
          >
            <Phone className="w-6 h-6" />
            Ver Informações de Contato
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <p className="text-sm text-gray-400">
            Atendimento de segunda a sexta-feira, das 8h às 18h
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Primeira conversa sem compromisso!
          </p>
        </motion.div>
      </div>
    </section>
  );
}