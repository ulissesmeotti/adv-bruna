"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialsCarousel from "../components/testimonials-carousel";

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-900 mb-4">
            O Que Meus Clientes Dizem
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A confiança dos meus clientes é minha maior conquista
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TestimonialsCarousel />
        </motion.div>
      </div>
    </section>
  );
}