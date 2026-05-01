"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10">
      <button
        className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-black/[0.02] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base md:text-lg font-medium text-[hsl(var(--foreground))]">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-black/50 shrink-0 ml-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <p className="px-6 pb-6 text-black/60 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  const { heading, subheading, items } = siteConfig.faq;

  return (
    <section id="faq" className="section-pad bg-background">
      <div className="container-tight">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="eyebrow text-accent mb-5">Preguntas</p>
          <h2 className="display-2 text-[hsl(var(--foreground))]">
            {heading} <br />
            <span className="italic font-light text-black/50">{subheading}</span>
          </h2>
        </div>
        <div className="rounded-2xl border border-black/10 bg-white overflow-hidden">
          {items.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
