"use client";

import { useState, FormEvent } from "react";

/**
 * Captura de e-mail da aula gratuita do curso.
 * Usa a mesma rota /api/lead (Brevo), mas com origem própria — assim dá para
 * separar no Brevo quem veio do curso de quem veio do capítulo grátis do ebook.
 */
export default function AulaGratisForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, source: "curso-aula-gratis" }),
      });
      if (!res.ok) throw new Error(await res.text());

      if (typeof window !== "undefined") {
        const w = window as unknown as { fbq?: (...args: unknown[]) => void };
        if (typeof w.fbq === "function") {
          w.fbq("track", "Lead", {
            content_name: "Aula Gratuita - Capacitação em Oncologia para Enfermagem",
            content_category: "curso",
          });
        }
        const g = window as unknown as { gtag?: (...args: unknown[]) => void };
        if (typeof g.gtag === "function") {
          g.gtag("event", "generate_lead", {
            currency: "BRL",
            value: 0,
            method: "lead_magnet_curso_aula_gratis",
          });
        }
      }

      setStatus("ok");
      setMessage(
        "Pronto! Em alguns minutos você recebe o guia rápido no seu e-mail. Confira também a caixa de spam."
      );
      setName("");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(
        "Houve um erro. Tente de novo ou me chame no Instagram @drbrunoaquino."
      );
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-[#C9A24B]/40 bg-white/[0.06] p-8 text-center">
        <div className="text-3xl">✅</div>
        <p className="mt-3 text-lg text-white">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
      <input
        type="text"
        placeholder="Seu nome"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-xl border border-white/20 bg-white/[0.08] px-4 py-4 text-white outline-none transition placeholder:text-white/50 focus:border-[#C9A24B]"
      />
      <input
        type="email"
        placeholder="Seu melhor e-mail"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-xl border border-white/20 bg-white/[0.08] px-4 py-4 text-white outline-none transition placeholder:text-white/50 focus:border-[#C9A24B]"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-[#C9A24B] py-4 text-sm font-bold uppercase tracking-wide text-[#0a2029] transition hover:brightness-110 disabled:opacity-50 sm:col-span-2"
        style={{ boxShadow: "0 12px 40px -12px rgba(201,162,75,0.65)" }}
      >
        {status === "loading" ? "Enviando..." : "Quero o guia rápido"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-300 sm:col-span-2">{message}</p>
      )}
      <p className="mt-1 text-xs text-white/50 sm:col-span-2">
        Sem spam. Você pode se descadastrar quando quiser.
      </p>
    </form>
  );
}
