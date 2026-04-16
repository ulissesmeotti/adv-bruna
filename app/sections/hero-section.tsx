"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, Scale } from "lucide-react";

export default function HeroSection() {
  const whatsappUrl = "https://wa.me/5545984163995";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='https://c8.alamy.com/comp/2CAJJP9/simple-chevron-pattern-abstract-geometric-background-vector-classic-navy-blue-and-white-colors-easy-to-recolor-2CAJJP9.jpg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-4"
            >
              <Scale className="w-6 h-6 text-gold-500" />
              <span className="text-gold-500 font-semibold text-sm uppercase tracking-wider">
                OAB/PR 133.638
              </span>
            </motion.div>
            

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight"
            >
              Defenda Seus Direitos com{" "}
              <span className="text-gold-500">Segurança</span> e{" "}
              <span className="text-gold-500">AGILIDADE</span>
            </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed text-justify max-w-3xl mx-auto"
>
             Se você está enfrentando algum <span className="text-yellow-400 font-semibold">problema jurídico</span>, 
             fale comigo e receba uma solução eficaz em Direito de Família, Trabalho ou Penal, com um atendimento próximo, transparente e totalmente focado em resolver seu caso.
          </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Fale Comigo no WhatsApp
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-navy-900 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Conheça Meu Trabalho
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500">3+</div>
                <div className="text-sm text-gray-400">Anos de Experiência</div>
              </div>
              <div className="h-12 w-px bg-gray-600"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500">100+</div>
                <div className="text-sm text-gray-400">Casos Resolvidos</div>
              </div>
              <div className="h-12 w-px bg-gray-600"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-500">100%</div>
                <div className="text-sm text-gray-400">Dedicação</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent z-10"></div>
              <Image
                src="/bruna-machado.jpg"
                alt="Dra. Bruna Machado - Advogada"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-500 rounded-full opacity-20 blur-2xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}