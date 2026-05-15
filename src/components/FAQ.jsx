"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-surface-light transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base md:text-lg font-medium text-foreground">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-muted-foreground shrink-0 ml-4 transition-transform duration-200 ${
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
        <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{answer}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  const { heading, subheading, items } = siteConfig.faq;

  return (
    <section id="faq" className="section-pad bg-surface-light">
      <div className="container-tight">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="eyebrow text-accent mb-5">Preguntas</p>
          <h2 className="display-2 text-foreground">
            {heading} <br />
            <span className="italic font-light text-muted-foreground">{subheading}</span>
          </h2>
        </div>
        <div className="rounded-2xl border border-border bg-background overflow-hidden">
          {items.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
