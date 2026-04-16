"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, BookOpen, Heart, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Award,
      title: "3+ Anos de Experiência",
      description: "Atuação sólida em diversas áreas do direito",
    },
    {
      icon: BookOpen,
      title: "Formação Sólida",
      description: "Graduação em Direito com atualização constante",
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cada cliente é único e merece atenção especial",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-900 mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advogada dedicada a transformar momentos difíceis em soluções claras e seguras
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-900 mb-6">
              Comprometida com{" "}
              <span className="text-gold-600">Seus Direitos</span>
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Sou a Dra. Bruna Machado, advogada inscrita na OAB/PR sob o número 133.638,
                com mais de 3 anos de experiência defendendo os direitos de pessoas
                que enfrentam momentos delicados.
              </p>
              <p>
                Acredito que o direito vai muito além de processos e leis. Trata-se de
                pessoas, histórias e soluções. Por isso, meu trabalho é pautado na
                <strong className="text-navy-700"> transparência</strong>,{" "}
                <strong className="text-navy-700">humanização</strong> e{" "}
                <strong className="text-navy-700">eficiência</strong>.
              </p>
              <p>
                Cada caso é tratado com dedicação e estratégia personalizada,
                sempre buscando a melhor solução para você. Estou aqui para
                guiar você em cada etapa do processo, com clareza e segurança.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                "Linguagem clara e acessível",
                "Respostas rápidas e eficientes",
                "Estratégia personalizada para cada caso",
                "Acompanhamento constante",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gold-100 p-3 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 text-lg mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}