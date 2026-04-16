"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Quanto tempo demora um processo de divórcio?",
    answer:
      "O tempo pode variar dependendo da complexidade do caso. Um divórcio consensual (quando ambas as partes concordam) pode ser finalizado em alguns meses. Já um divórcio litigioso pode levar mais tempo. Faço questão de manter você informado sobre cada etapa do processo.",
  },
  {
    id: 2,
    question: "Como funciona o cálculo da pensão alimentícia?",
    answer:
      "A pensão alimentícia é calculada com base nas necessidades de quem recebe e nas possibilidades de quem paga. São considerados fatores como renda, despesas, número de filhos e padrão de vida. Avalio cada caso individualmente para buscar um valor justo.",
  },
  {
    id: 3,
    question: "Fui demitido sem justa causa. Quais são meus direitos?",
    answer:
      "Ao ser demitido sem justa causa, você tem direito a: saldo de salário, aviso prévio, 13º salário proporcional, férias proporcionais + 1/3, saque do FGTS com multa de 40%, e seguro-desemprego (se cumprir os requisitos). Posso ajudar a garantir que todos esses direitos sejam respeitados.",
  },
  {
    id: 4,
    question: "O que fazer se fui acusado injustamente de um crime?",
    answer:
      "Em casos de acusação criminal, é fundamental ter assistência jurídica imediata. Não faça declarações sem a presença de um advogado. Atuo na defesa dos seus direitos desde o início, reunindo provas e construindo uma defesa sólida para proteger sua liberdade e reputação.",
  },
  {
    id: 5,
    question: "Como funciona a guarda compartilhada?",
    answer:
      "Na guarda compartilhada, ambos os pais têm responsabilidades e participação ativa na criação dos filhos. As decisões importantes são tomadas em conjunto, e a criança convive com ambos os pais. É a modalidade de guarda mais comum atualmente e prioriza o bem-estar dos filhos.",
  },
  {
    id: 6,
    question: "Qual o valor da consulta?",
    answer:
      "Os valores variam de acordo com a complexidade de cada caso. Entre em contato pelo WhatsApp para que eu possa entender sua situação e apresentar um orçamento personalizado. A primeira conversa é sempre sem compromisso!",
  },
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
          >
            <span className="font-semibold text-navy-700 text-lg pr-4">
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: openId === faq.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <ChevronDown className="w-5 h-5 text-gold-500" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openId === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}