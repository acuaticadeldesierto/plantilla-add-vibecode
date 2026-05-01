"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");

  const { heading, subheading, form: formConfig, schedulingUrl, schedulingCta } = siteConfig.contact;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Limpia el error del campo cuando el usuario empieza a corregirlo
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Por favor escribe tu nombre.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Por favor escribe tu email.";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Ese email no parece valido. Ejemplo: nombre@correo.com";
    }
    if (formConfig.phoneRequired && !form.phone.trim()) {
      newErrors.phone = "Por favor escribe tu telefono.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Por favor escribe tu mensaje.";
    }
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || formConfig.errorMessage);
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch {
      setServerError(formConfig.errorMessage);
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="section-pad bg-surface-darker text-white">
      <div className="container-wide grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <p className="eyebrow text-accent mb-5">Contacto</p>
          <h2 className="display-2 mb-6">
            {heading} <br />
            <span className="italic font-light text-white/70">{subheading}</span>
          </h2>
          {schedulingUrl && (
            <a
              href={schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-medium backdrop-blur-md transition-colors hover:bg-white/10"
            >
              {schedulingCta}
            </a>
          )}
          <div className="mt-12 space-y-4 text-sm text-white/60">
            <p>Chihuahua, Chihuahua, México</p>
            <p>Lunes a sábado · 6:00 — 20:00</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="lg:col-span-7 space-y-6">
          {/* Nombre */}
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-1">
              Nombre completo
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder={formConfig.namePlaceholder}
              className={`w-full bg-transparent border-0 border-b py-4 text-lg text-white placeholder-white/30 focus:outline-none focus:ring-0 transition-colors ${
                errors.name ? "border-red-400" : "border-white/20 focus:border-[hsl(var(--accent))]"
              }`}
            />
            {errors.name && (
              <p className="mt-2 text-xs text-accent">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={formConfig.emailPlaceholder}
              className={`w-full bg-transparent border-0 border-b py-4 text-lg text-white placeholder-white/30 focus:outline-none focus:ring-0 transition-colors ${
                errors.email ? "border-red-400" : "border-white/20 focus:border-[hsl(var(--accent))]"
              }`}
            />
            {errors.email && (
              <p className="mt-2 text-xs text-accent">{errors.email}</p>
            )}
          </div>

          {/* Telefono */}
          <div>
            <label htmlFor="phone" className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-1">
              Teléfono {!formConfig.phoneRequired ? <span className="text-white/40 normal-case">(opcional)</span> : null}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder={formConfig.phonePlaceholder}
              className={`w-full bg-transparent border-0 border-b py-4 text-lg text-white placeholder-white/30 focus:outline-none focus:ring-0 transition-colors ${
                errors.phone ? "border-red-400" : "border-white/20 focus:border-[hsl(var(--accent))]"
              }`}
            />
            {errors.phone && (
              <p className="mt-2 text-xs text-accent">{errors.phone}</p>
            )}
          </div>

          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-[0.18em] text-white/50 mb-1">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder={formConfig.messagePlaceholder}
              className={`w-full bg-transparent border-0 border-b py-4 text-lg text-white placeholder-white/30 focus:outline-none focus:ring-0 transition-colors resize-none ${
                errors.message ? "border-red-400" : "border-white/20 focus:border-[hsl(var(--accent))]"
              }`}
            />
            {errors.message && (
              <p className="mt-2 text-xs text-accent">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-4 inline-flex w-full md:w-auto items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-foreground shadow-accent transition-all duration-300 hover:scale-[1.02] hover:shadow-glow disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "loading" ? formConfig.sendingButton : formConfig.submitButton}
          </button>

          {status === "success" && (
            <p className="text-sm text-white/80">
              {formConfig.successMessage}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-accent">
              {serverError || formConfig.errorMessage}
            </p>
          )}
          <p className="text-xs text-white/40">
            Al enviar, guardamos tus datos y te respondemos lo antes posible.
          </p>
        </form>
      </div>
    </section>
  );
}
