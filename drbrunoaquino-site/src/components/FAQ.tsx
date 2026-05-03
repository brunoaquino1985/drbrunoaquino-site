"use client";
import { useState } from "react";
import { faq } from "@/content/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad">
      <div className="container-content max-w-narrow">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-3">
            Perguntas frequentes
          </h2>
          <p className="text-ink-light">
            Se ficar alguma dúvida, me chama no Instagram @drbrunoaquino.
          </p>
        </div>
        <div className="divide-y divide-sand-dark border-t border-b border-sand-dark">
          {faq.map((item, i) => (
            <div key={i} className="py-2">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-3 flex items-center justify-between gap-4 group"
              >
                <span className="font-medium text-navy group-hover:text-brand transition-colors">
                  {item.q}
                </span>
                <span
                  className={`text-brand text-xl flex-shrink-0 transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="pb-4 text-ink-light leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
