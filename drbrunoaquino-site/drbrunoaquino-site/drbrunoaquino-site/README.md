# Site Dr. Bruno Aquino · Next.js 14

Site institucional + e-commerce de ebooks para Dr. Bruno Aquino, oncologista clínico.
Construído em **Next.js 14 (App Router) + Tailwind CSS + TypeScript**, pronto para deploy gratuito na **Vercel**.

> Substitui o site atual em Wix (drbrunoaquino.med.br) com design moderno, performance superior e total controle de código.

---

## ✅ O que está pronto

- Home completa (hero, faixa de credibilidade, KIT em destaque, grid de ebooks, depoimentos, captura de e-mail, FAQ)
- Página de cada ebook (4 individuais + Kit Completo) com preço, descrição completa e botão Hotmart
- Página "Quem sou" reformulada
- Landing page do capítulo grátis com formulário de captura
- API `/api/lead` integrada com **Brevo** (envio automático de e-mail)
- Mobile responsivo (testado em 320px → 1440px+)
- SEO: meta tags, Open Graph, sitemap.xml, robots.txt
- Meta Pixel + Google Analytics prontos (basta colar IDs no .env)
- Página 404 customizada
- Página de obrigado pós-cadastro

---

## 🚀 Deploy em 15 minutos (Vercel)

### Passo 1 · Criar conta na Vercel
1. Vá em https://vercel.com → "Sign Up"
2. Use sua conta Google ou e-mail. É grátis.

### Passo 2 · Subir o projeto
**Opção A · Drag and drop (mais simples)**
1. Compacte a pasta `drbrunoaquino-site` em ZIP (já está zipada na pasta compartilhada).
2. Em https://vercel.com/new → "Import" → arraste o ZIP.
3. A Vercel detecta Next.js automaticamente.
4. Clique "Deploy".

**Opção B · GitHub (recomendado pra updates futuros)**
1. Crie um repositório vazio no seu GitHub.
2. `git init`, `git remote add origin ...`, `git push`.
3. Em vercel.com/new → "Import Git Repository" → escolha o repositório.
4. Deploy automático.

Em 2-3 minutos o site estará no ar em uma URL `*.vercel.app`.

### Passo 3 · Variáveis de ambiente
No painel da Vercel → Settings → Environment Variables, adicione (use o `.env.example` como referência):

```
BREVO_API_KEY=xkeysib-xxxxx
BREVO_LIST_ID=2
NEXT_PUBLIC_HOTMART_QUIMIO=https://pay.hotmart.com/SEULINK
NEXT_PUBLIC_HOTMART_NAUSEAS=https://pay.hotmart.com/SEULINK
NEXT_PUBLIC_HOTMART_CHAS=https://pay.hotmart.com/SEULINK
NEXT_PUBLIC_HOTMART_DIREITOS=https://pay.hotmart.com/SEULINK
NEXT_PUBLIC_HOTMART_KIT=https://pay.hotmart.com/SEULINK
NEXT_PUBLIC_META_PIXEL_ID=12345678901234  (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXX               (opcional)
```

Depois, faça um redeploy (botão "Redeploy" no dashboard).

### Passo 4 · Configurar o Brevo (lead capture)
1. Crie conta gratuita em https://www.brevo.com (até 9.000 e-mails/mês).
2. Settings → API Keys → gere uma chave (cole em `BREVO_API_KEY`).
3. Contacts → Lists → crie uma lista chamada "Capítulo Grátis - Manual Quimio". Anote o ID (cole em `BREVO_LIST_ID`).
4. Automation → Crie automação:
   - Gatilho: "Contato adicionado a uma lista" → escolha sua lista.
   - Ação: "Enviar e-mail" → crie o template de e-mail (sugestão de copy abaixo).
   - Anexe o PDF do Capítulo 1 do Manual de Quimioterapia.

### Passo 5 · Apontar o domínio drbrunoaquino.med.br
> ⚠️ Faça este passo apenas quando estiver **100% pronto pra ir ao ar** — o site Wix vai sair no momento que o DNS apontar pra Vercel.

1. No painel da Vercel → Settings → Domains → "Add" → digite `drbrunoaquino.med.br`.
2. Vercel mostra os registros DNS necessários (CNAME ou A record).
3. No painel onde você comprou o domínio (Registro.br geralmente, no caso do .med.br):
   - Edite os registros DNS.
   - Adicione/altere conforme instrução da Vercel.
4. Aguarde propagação (5 min a 24h, geralmente é rápido).
5. A Vercel emite SSL automaticamente.

---

## 🛠 Desenvolvimento local

Se quiser rodar/editar localmente:

```bash
npm install
npm run dev
# abre em http://localhost:3000
```

Crie um `.env.local` com as mesmas variáveis do `.env.example`.

---

## 📁 Estrutura do projeto

```
drbrunoaquino-site/
├── src/
│   ├── app/                  # Rotas Next.js (App Router)
│   │   ├── page.tsx          # Home
│   │   ├── layout.tsx        # Layout raiz (header + footer)
│   │   ├── globals.css       # Estilos globais (Tailwind + custom)
│   │   ├── ebooks/           # /ebooks e /ebooks/[slug]
│   │   ├── quem-sou/
│   │   ├── capitulo-gratis/
│   │   ├── obrigado/
│   │   └── api/lead/         # Endpoint que recebe e-mails
│   ├── components/           # Componentes React reutilizáveis
│   └── content/              # Dados (ebooks, depoimentos, FAQ)
├── public/images/            # Imagens estáticas
├── tailwind.config.ts        # Tema (cores, fontes, etc.)
└── package.json
```

### Onde editar o quê

| Quero mudar... | Edite... |
|---|---|
| Texto do hero | `src/components/Hero.tsx` |
| Preço de um ebook | `src/content/ebooks.ts` (campo `price`) |
| Adicionar/remover ebook | `src/content/ebooks.ts` (array `ebooks`) |
| Depoimentos | `src/content/testimonials.ts` |
| Perguntas do FAQ | `src/content/faq.ts` |
| Cores da marca | `tailwind.config.ts` (paleta `colors`) |
| Footer (telefones, redes) | `src/components/Footer.tsx` |
| Página "Quem sou" | `src/app/quem-sou/page.tsx` |

Mudou algo? Faça commit/push (se usar GitHub) ou redeploy manual no Vercel.

---

## ⚠️ Antes de ir ao ar — checklist

- [ ] Substitua `public/images/hero-bruno.jpg` pela sua foto real (proporção 3:4, fundo claro)
- [ ] Configure todas as variáveis de ambiente no Vercel (Brevo + Hotmart links)
- [ ] Teste a captura de e-mail em produção (envie um lead pelo formulário e veja se chega)
- [ ] Teste cada botão "Comprar" para garantir que abre o checkout Hotmart correto
- [ ] Configure Pixel da Meta (Gerenciador de Eventos → cole o ID nas envs)
- [ ] Configure GA4 (analytics.google.com → Property ID nas envs)
- [ ] Verifique no celular (responsivo)
- [ ] Atualize o link do Facebook no `Footer.tsx` se o handle for diferente
- [ ] DNS apontado para Vercel (último passo)

---

## 💡 Próximos passos sugeridos (depois do go-live)

1. **Coletar 5-10 depoimentos reais** via WhatsApp/Instagram → trocar os textos placeholder em `src/content/testimonials.ts`
2. **Gravar capítulo grátis em PDF** (8 páginas do Manual de Quimioterapia) → anexar no Brevo
3. **Configurar evento Purchase no Meta Pixel** quando o Hotmart redirecionar de volta (precisa de tracking customizado)
4. **A/B test do botão CTA**: testar "Quero o kit" vs "Comprar agora" vs "Garantir meu acesso"
5. **Adicionar blog** (App Router suporta MDX nativo) com posts educativos para SEO orgânico
6. **Migrar conteúdo dos PDFs para HTML** em algumas seções (SEO matador) — manter venda via Hotmart

---

## 📞 Suporte

Qualquer ajuste necessário: me chama no chat e eu reviso.

Stack escolhida pra ser fácil de manter:
- Sem dependências exóticas
- Tailwind para evitar arquivos CSS espalhados
- TypeScript para evitar bugs silenciosos
- Vercel para deploy zero-config

Bom lançamento. 🚀
