"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Mail, Phone, Clock, MessageCircle, Scale } from "lucide-react";

const contactInfo = [
  {
    id: 1,
    icon: MapPin,
    title: "Localização",
    content: "Paraná, Brasil",
    link: null,
  },
  {
    id: 2,
    icon: Mail,
    title: "E-mail",
    content: "advbrunarafaela@gmail.com",
    link: "mailto:advbrunarafaela@gmail.com",
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "WhatsApp",
    content: "(45) 98416-3995",
    link: "https://wa.me/5545984163995",
  },
  {
    id: 4,
    icon: Clock,
    title: "Horário de Atendimento",
    content: "Segunda a Sexta, 8h - 18h",
    link: null,
  },
];

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contato" className="py-20 md:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estou à disposição para atender você e esclarecer suas dúvidas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {item.link ? (
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full group"
                >
                  <div className="bg-gold-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-200 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 group-hover:text-gold-600 transition-colors duration-300">
                    {item.content}
                  </p>
                </a>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-6 h-full">
                  <div className="bg-gold-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Professional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-navy-900 rounded-xl p-8 md:p-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="bg-gold-500/10 w-16 h-16 rounded-full flex items-center justify-center">
              <Scale className="w-8 h-8 text-gold-500" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            Dra. Bruna Machado
          </h3>
          <p className="text-gray-300 mb-2">Advogada inscrita na OAB/PR 133.638</p>
          <p className="text-gray-400">Direito de Família | Direito do Trabalho | Direito Penal</p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 pt-8 border-t border-gray-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 text-sm">
            <p className="mb-2">
              © {new Date().getFullYear()} Bruna Machado Advocacia. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500">
              OAB/PR 133.638 | Paraná, Brasil
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
}