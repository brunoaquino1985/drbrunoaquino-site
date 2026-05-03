"use client";
import { useState, FormEvent } from "react";

export default function LeadCapture({
  variant = "inline",
}: {
  variant?: "inline" | "fullbleed";
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("ok");
      setMessage(
        "Pronto! Em alguns minutos você recebe o capítulo no seu e-mail. Confere também a caixa de spam."
      );
      setName("");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(
        "Houve um erro. Por favor, tente de novo ou me chama no Instagram @drbrunoaquino."
      );
    }
  }

  const isFullbleed = variant === "fullbleed";

  return (
    <section
      className={
        isFullbleed
          ? "section-pad bg-navy text-white"
          : "section-pad bg-sand"
      }
    >
      <div className="container-content max-w-narrow text-center">
        <div
          className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 ${
            isFullbleed ? "bg-amber text-navy" : "bg-brand-50 text-brand-800"
          }`}
        >
          🎁 Material gratuito
        </div>
        <h2
          className={`text-3xl md:text-4xl font-display font-bold mb-3 ${
            isFullbleed ? "text-white" : "text-navy"
          }`}
        >
          Receba o capítulo 1 do Manual de Quimioterapia
        </h2>
        <p
          className={`mb-8 leading-relaxed ${
            isFullbleed ? "text-white/85" : "text-ink-light"
          }`}
        >
          8 páginas com checklist do que levar à 1ª sessão, o que esperar e os
          sinais de alerta. Escrito por oncologista clínico, sem alarmismo.
        </p>

        {status === "ok" ? (
          <div
            className={`rounded-xl p-6 text-left ${
              isFullbleed
                ? "bg-white/10 border border-amber"
                : "bg-white border border-teal"
            }`}
          >
            <div className="text-2xl mb-2">✅</div>
            <div className={isFullbleed ? "text-white" : "text-navy"}>
              {message}
            </div>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className={`grid sm:grid-cols-2 gap-3 ${
              isFullbleed ? "" : ""
            }`}
          >
            <input
              type="text"
              placeholder="Seu nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`px-4 py-3 rounded-lg outline-none transition-all ${
                isFullbleed
                  ? "bg-white/10 text-white placeholder-white/60 border border-white/20 focus:border-amber"
                  : "bg-white border border-sand-dark text-ink focus:border-brand"
              }`}
            />
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`px-4 py-3 rounded-lg outline-none transition-all ${
                isFullbleed
                  ? "bg-white/10 text-white placeholder-white/60 border border-white/20 focus:border-amber"
                  : "bg-white border border-sand-dark text-ink focus:border-brand"
              }`}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className={`sm:col-span-2 font-display font-semibold py-3 rounded-lg transition-all disabled:opacity-50 ${
                isFullbleed
                  ? "bg-amber text-navy hover:bg-amber-dark"
                  : "bg-brand text-white hover:bg-navy"
              }`}
            >
              {status === "loading"
                ? "Enviando..."
                : "Quero o capítulo grátis"}
            </button>
            {status === "error" && (
              <div className="sm:col-span-2 text-sm text-red-300">
                {message}
              </div>
            )}
          </form>
        )}
        <p
          className={`text-xs mt-4 ${
            isFullbleed ? "text-white/60" : "text-ink-light"
          }`}
        >
          Sem spam. Você pode descadastrar quando quiser.
        </p>
      </div>
    </section>
  );
}
