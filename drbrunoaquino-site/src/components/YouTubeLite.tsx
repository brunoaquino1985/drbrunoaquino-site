"use client";

import { useState } from "react";

/**
 * Player "lite" do YouTube.
 *
 * Mostra apenas a capa até o clique. Ao clicar, carrega o iframe OFICIAL do
 * YouTube (youtube.com/embed/ID) — é isso que garante que a visualização seja
 * contabilizada no YouTube (aparece no Studio como "players incorporados em
 * sites externos").
 *
 * Requisitos do lado do YouTube para a view contar:
 *  - vídeo público ou não listado (privado NÃO pode ser incorporado);
 *  - opção "Permitir incorporação" ligada nas configurações do vídeo;
 *  - play intencional do usuário — por isso o player começa parado.
 */
export default function YouTubeLite({
  id,
  title,
  poster,
}: {
  id: string;
  title: string;
  poster?: string;
}) {
  const [playing, setPlaying] = useState(false);

  const frame =
    "relative aspect-video w-full overflow-hidden rounded-2xl border border-[#C9A24B]/30 bg-[#061921]";
  const shadow = { boxShadow: "0 30px 80px -30px rgba(0,0,0,0.9)" };

  // Sem ID configurado ainda: espaço reservado do player.
  if (!id) {
    return (
      <div className={frame} style={shadow}>
        {poster && (
          <img
            src={poster}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
        )}
        <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
          <span className="text-4xl">🎬</span>
          <p className="text-lg font-semibold text-white">
            A aula gratuita estará disponível aqui
          </p>
          <p className="max-w-sm text-sm text-white/60">
            Deixe seu e-mail abaixo para ser avisado(a) assim que ela for publicada.
          </p>
        </div>
      </div>
    );
  }

  if (playing) {
    return (
      <div className={frame} style={shadow}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Assistir: ${title}`}
      className={`${frame} group cursor-pointer`}
      style={shadow}
    >
      <img
        src={poster || `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,25,32,0.15) 0%, rgba(6,25,32,0.35) 55%, rgba(6,25,32,0.8) 100%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C9A24B] text-[#0a2029] transition group-hover:scale-110"
          style={{ boxShadow: "0 16px 50px -12px rgba(201,162,75,0.8)" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-9 w-9">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
      <span className="absolute bottom-5 left-6 right-6 text-left text-sm font-semibold uppercase tracking-[0.18em] text-[#E7CE93]">
        Assistir agora · grátis
      </span>
    </button>
  );
}
