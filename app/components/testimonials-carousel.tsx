"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    case: "Direito de Família",
    text: "A Dra. Bruna foi essencial no meu processo de divórcio. Ela me deu todo o suporte emocional e jurídico que eu precisava. Profissional incrível, atenciosa e muito competente.",
    rating: 5,
  },
  {
    id: 2,
    name: "João Santos",
    case: "Direito do Trabalho",
    text: "Excelente advogada! Me ajudou a conquistar meus direitos trabalhistas com muita dedicação e transparência. Recomendo de olhos fechados.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Paula Costa",
    case: "Direito de Família",
    text: "Profissional extremamente humana e competente. A Dra. Bruna conduziu meu caso de pensão alimentícia com muita seriedade e conseguiu um resultado excelente. Muito grata!",
    rating: 5,
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    case: "Direito Penal",
    text: "Tive uma situação muito delicada e a Dra. Bruna me atendeu com muita atenção e profissionalismo. Conseguiu resolver meu problema de forma rápida e eficiente. Super recomendo!",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative min-h-[300px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 relative">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-gold-500 opacity-20" />
              <div className="relative z-10">
                <p className="text-gray-700 text-lg md:text-xl mb-6 italic leading-relaxed">
                  "{testimonials[currentIndex]?.text}"
                </p>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(testimonials[currentIndex]?.rating ?? 5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-navy-700 text-lg">
                    {testimonials[currentIndex]?.name}
                  </p>
                  <p className="text-gold-600 text-sm">
                    {testimonials[currentIndex]?.case}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 -translate-x-12 top-1/2 -translate-y-1/2 bg-white hover:bg-navy-700 text-navy-700 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 hidden md:block"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 translate-x-12 top-1/2 -translate-y-1/2 bg-white hover:bg-navy-700 text-navy-700 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 hidden md:block"
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-gold-500 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir para depoimento ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="flex justify-center gap-4 mt-6 md:hidden">
        <button
          onClick={prevTestimonial}
          className="bg-white hover:bg-navy-700 text-navy-700 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-white hover:bg-navy-700 text-navy-700 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300"
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}