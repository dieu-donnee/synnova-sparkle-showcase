import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ArrowUpRight, Clock3, Facebook, Instagram, Linkedin, Mail, MapPin, Music2, Youtube } from "lucide-react";
import { SOCIALS } from "@/lib/synnova";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>) => ({
    sujet: typeof s.sujet === "string" ? s.sujet : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contact — Travaillons ensemble | Synnova Tocloe" },
      { name: "description", content: "Contactez Synnova Tocloe pour une animation, une collaboration cinéma, une mission de communication digitale ou les emballages biodégradables." },
      { property: "og:title", content: "Contact — Synnova Tocloe" },
      { property: "og:description", content: "Travaillons ensemble : animation, cinéma, communication, éco-emballages." },
      { property: "og:url", content: "https://synnova-sparkle-showcase.lovable.app/contact" },
    ],
    links: [
      { rel: "canonical", href: "https://synnova-sparkle-showcase.lovable.app/contact" },
    ],
  }),
  component: Contact,
});

const SUBJECTS = [
  { v: "animation", l: "Animation d'événement" },
  { v: "cinema", l: "Collaboration cinéma" },
  { v: "communication", l: "Communication digitale" },
  { v: "entrepreneuriat", l: "Emballages biodégradables" },
  { v: "autre", l: "Autre" },
];

const schema = z.object({
  prenom: z.string().trim().min(1, "Prénom requis").max(60),
  nom: z.string().trim().min(1, "Nom requis").max(60),
  email: z.string().trim().email("Email invalide").max(255),
  sujet: z.string().min(1, "Choisissez un sujet"),
  message: z.string().trim().min(10, "Message trop court (10 caractères min)").max(2000),
});

const INFO_CARDS = [
  {
    icon: MapPin,
    title: "Lieu",
    text: "Grand-Popo, Bénin",
  },
  {
    icon: Clock3,
    title: "Réponse",
    text: "Sous 48 heures",
  },
  {
    icon: Mail,
    title: "Canaux",
    text: "Formulaire et réseaux sociaux",
  },
  {
    icon: ArrowUpRight,
    title: "Projets",
    text: "Animation, cinéma, communication, éco-emballages",
  },
] as const;

const SOCIAL_ICON: Record<string, typeof Facebook> = {
  Facebook,
  Instagram,
  LinkedIn: Linkedin,
  TikTok: Music2,
  Youtube,
};

function Contact() {
  const { sujet: presetSujet } = Route.useSearch();
  const [status, setStatus] = useState<"idle" | "sending" | "ok">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("sending");
    setTimeout(() => setStatus("ok"), 900);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06104a] px-5 pt-22 pb-14 text-white md:px-10 md:pt-24 md:pb-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_42%),radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.14),transparent_25%),radial-gradient(circle_at_80%_65%,rgba(255,255,255,0.08),transparent_20%)]" aria-hidden />
        <div className="absolute inset-0 opacity-35 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_18%,transparent_80%,rgba(255,255,255,0.04))]" aria-hidden />

        <div className="relative mx-auto flex min-h-[24svh] max-w-4xl flex-col items-center justify-center text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.3em] text-white/75">Contact</p>
            <h1 className="mt-2.5 font-display text-[clamp(2.4rem,6.4vw,4.8rem)] leading-[0.92] tracking-[-0.06em] text-white">
              Restons en contact
            </h1>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/68 md:text-[1rem]">
              Animation, cinéma, communication digitale ou projets éco-responsables. Dites-moi ce que vous construisez.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MAIN BLOCK */}
      <section className="bg-[#f5f4f0] px-5 pb-10 md:px-10 md:pb-16">
        <div className="mx-auto max-w-[1600px]">
          <div className="-mt-8 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_28px_80px_rgba(0,0,0,0.12)] ring-1 ring-white/70">
            <div className="h-14 -skew-y-3 bg-[#f5f4f0] shadow-[0_8px_20px_rgba(0,0,0,0.05)]" aria-hidden />

            <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <Reveal className="border-b border-black/5 p-3.5 md:p-5 lg:border-b-0 lg:border-r">
                {status === "ok" ? (
                  <div className="flex min-h-full flex-col justify-center rounded-[1.35rem] border border-emerald-200 bg-emerald-50 p-[1.125rem] text-center md:p-6">
                    <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-emerald-100 text-[1.35rem]">
                      🌞
                    </div>
                    <h2 className="mt-3.5 font-display text-[1.8rem] text-black md:text-[2.15rem]">Message envoyé !</h2>
                    <p className="mt-2 text-sm leading-6 text-black/65">
                      Merci pour votre message. Synnova vous répond dans les plus brefs délais.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-4 inline-flex self-center rounded-full border border-black/10 bg-white px-[0.875rem] py-[0.4rem] text-xs font-medium text-black transition hover:border-black/20 hover:bg-black hover:text-white md:px-4 md:py-2 md:text-sm"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form id="formulaire" onSubmit={onSubmit} noValidate className="space-y-3 rounded-[1.35rem] bg-white p-1">
                    <div className="rounded-[1.35rem] border border-black/8 bg-white p-3.5 md:p-5">
                      <p className="text-[0.65rem] uppercase tracking-[0.3em] text-black/45">Leave your message</p>
                      <h2 className="mt-2 font-display text-[1.35rem] text-black md:text-[1.7rem]">Laissez votre message</h2>

                      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                        <Field name="prenom" label="Prénom" error={errors.prenom} />
                        <Field name="nom" label="Nom" error={errors.nom} />
                      </div>

                      <div className="mt-3">
                        <Field name="email" type="email" label="Email" error={errors.email} />
                      </div>

                      <div className="mt-3">
                        <label htmlFor="sujet" className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-black/45">
                          Type de demande
                        </label>
                        <select
                          id="sujet"
                          name="sujet"
                          defaultValue={presetSujet ?? ""}
                          className="mt-1.5 w-full rounded-xl border border-black/10 bg-[#fafafa] px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black/25"
                        >
                          <option value="" disabled>
                            Choisissez un sujet…
                          </option>
                          {SUBJECTS.map((s) => (
                            <option key={s.v} value={s.v}>
                              {s.l}
                            </option>
                          ))}
                        </select>
                        {errors.sujet && <p className="mt-1 text-xs text-red-600">{errors.sujet}</p>}
                      </div>

                      <div className="mt-3">
                        <label htmlFor="message" className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-black/45">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Parlez-moi de votre projet…"
                          className="mt-1.5 w-full resize-none rounded-xl border border-black/10 bg-[#fafafa] px-3 py-2 text-sm text-black outline-none transition-colors focus:border-black/25"
                        />
                        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                      </div>

                      <div className="mt-3.5 flex items-center justify-between gap-3">
                        <label className="flex items-center gap-2 text-[0.7rem] text-black/60 md:text-xs">
                          <input type="checkbox" className="h-3.5 w-3.5 rounded border-black/20" />
                          J’accepte d’être recontacté
                        </label>
                        <button
                          type="submit"
                          disabled={status === "sending"}
                          className="inline-flex items-center gap-2 rounded-full bg-[#3f59e8] px-4 py-2 text-xs font-medium text-white shadow-[0_10px_20px_rgba(63,89,232,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#2f47d8] disabled:opacity-60 md:text-sm"
                        >
                          {status === "sending" ? "Envoi…" : "Envoyer le message"}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </Reveal>

              <Reveal delay={100} className="bg-[#f5f4f0] p-3.5 md:p-5 lg:p-6">
                <div className="relative overflow-hidden rounded-[1.65rem] border border-white/35 bg-[linear-gradient(135deg,rgba(255,255,255,0.38),rgba(255,255,255,0.12))] p-4 text-black shadow-[0_18px_50px_rgba(0,0,0,0.08)] backdrop-blur-2xl md:p-5">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#3f59e8]/20 blur-3xl" aria-hidden />
                  <div className="pointer-events-none absolute -bottom-14 left-10 h-36 w-36 rounded-full bg-[#f6c95d]/25 blur-3xl" aria-hidden />
                  <div className="relative">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[0.65rem] uppercase tracking-[0.32em] text-black/45">Animation / 3D</p>
                      <span className="rounded-full border border-black/8 bg-white/50 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.28em] text-black/55">
                        Glass
                      </span>
                    </div>
                    <h2 className="mt-3 font-display text-[1.4rem] leading-tight text-black md:text-[1.95rem]">
                      Donner du mouvement, du relief et du volume à vos idées.
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-6 text-black/60">
                      Des animations légères, des compositions 3D stylisées et une direction visuelle claire pour faire respirer votre projet sans le surcharger.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {INFO_CARDS.map((card) => {
                    const Icon = card.icon;
                    return (
                      <article key={card.title} className="rounded-[1rem] border border-black/8 bg-white/85 p-2.5 shadow-[0_8px_18px_rgba(0,0,0,0.035)] backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <div className="grid h-[2.125rem] w-[2.125rem] place-items-center rounded-full bg-[#eef0ff] text-[#3f59e8]">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-[0.65rem] uppercase tracking-[0.24em] text-black/40">{card.title}</p>
                            <p className="mt-0.5 font-display text-[0.95rem] text-black">{card.text}</p>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-8 border-t border-black/8 pt-6">
                  <p className="text-sm font-medium text-black">Réseaux sociaux :</p>
                  <div className="mt-3.5 flex flex-wrap gap-2.5">
                    {SOCIALS.map((s) => {
                      const Icon = SOCIAL_ICON[s.name] ?? ArrowUpRight;
                      return (
                        <a
                          key={s.name}
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                          className="grid h-10 w-10 place-items-center rounded-full border border-black/8 bg-white text-black shadow-[0_8px_18px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-black hover:text-white"
                          aria-label={s.name}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </a>
                      );
                    })}
                  </div>
                  <p className="mt-4 text-sm italic text-black/55">« Suivez mon quotidien sur TikTok, Instagram et LinkedIn »</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + FOOTER */}
      <section className="bg-[#06104a] px-5 py-14 text-white md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/80 backdrop-blur-md">
            <Clock3 className="h-3.5 w-3.5" />
            Réponse rapide
          </span>
          <h2 className="mt-5 font-display text-[clamp(2.1rem,4.8vw,3.8rem)] leading-[0.92] tracking-[-0.05em] text-white">
            Un projet en tête ? Parlons-en.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/65">
            Je travaille sur des animations, des productions, du contenu digital et des projets à impact. Le plus simple: m’écrire maintenant.
          </p>
          <a
            href="#formulaire"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#3f59e8] px-5 py-3 text-sm font-medium text-white shadow-[0_14px_28px_rgba(63,89,232,0.24)] transition hover:-translate-y-0.5 hover:bg-[#2f47d8]"
          >
            Aller au formulaire
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="mt-10 grid gap-8 text-left md:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Synnova</p>
              <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
                Animatrice, communicatrice, actrice et entrepreneuse éco-responsable au Bénin.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Liens utiles</p>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>Accueil</li>
                <li>À propos</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Réseaux</p>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {SOCIALS.map((s) => (
                  <li key={s.name}>{s.handle}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/45">Disponibilité</p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Grand-Popo, Bénin
                <br />
                Sur rendez-vous
                <br />
                Réponse sous 48 h
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium uppercase tracking-[0.2em] text-black/45">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl border border-black/10 bg-[#fafafa] px-3.5 py-2.5 text-sm text-black outline-none transition-colors focus:border-black/25 md:text-base"
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
