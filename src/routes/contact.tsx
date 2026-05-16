import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SOCIALS } from "@/lib/synnova";
import { Reveal } from "@/components/Reveal";
import grandpopo from "@/assets/synnova-grandpopo.jpeg";

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
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
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
      <section className="relative overflow-hidden bg-secondary px-5 pt-40 pb-24 text-secondary-foreground md:px-10 md:pt-48 md:pb-32">
        <div className="absolute inset-0 bg-mesh-rose opacity-40" aria-hidden />
        <img src={grandpopo} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="font-script text-3xl text-[color:var(--gold)]">Travaillons ensemble</p>
            <h1 className="mt-3 font-display text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-tighter">
              Dites-moi<br />tout<span className="text-[color:var(--gold)]">.</span>
            </h1>
            <p className="mt-5 max-w-xl text-secondary-foreground/80">
              Un événement à animer, un film en préparation, une campagne à imaginer, ou une commande d'emballages biodégradables ? Je vous lis.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="sr-only">Formulaire de contact et coordonnées</h2>
          <div className="grid gap-12 md:grid-cols-5">
          {/* Form */}
          <Reveal className="md:col-span-3">
            {status === "ok" ? (
              <div className="rounded-3xl border border-eco/40 bg-card p-10 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[color:var(--eco)]/10 text-3xl">🌞</div>
                <h2 className="mt-5 font-display text-3xl">Message envoyé !</h2>
                <p className="mt-3 text-muted-foreground">
                  Merci pour votre message. Synnova vous répond dans les plus brefs délais.
                </p>
                <button onClick={() => setStatus("idle")} className="mt-6 rounded-full border border-border px-5 py-2 text-sm hover:border-primary hover:text-primary">
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl border border-border bg-card p-6 md:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field name="prenom" label="Prénom" error={errors.prenom} />
                  <Field name="nom" label="Nom" error={errors.nom} />
                </div>
                <Field name="email" type="email" label="Email" error={errors.email} />

                <div>
                  <label htmlFor="sujet" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Type de demande</label>
                  <select
                    id="sujet"
                    name="sujet"
                    defaultValue={presetSujet ?? ""}
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option value="" disabled>Choisissez un sujet…</option>
                    {SUBJECTS.map((s) => <option key={s.v} value={s.v}>{s.l}</option>)}
                  </select>
                  {errors.sujet && <p className="mt-1 text-xs text-destructive">{errors.sujet}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Votre message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Parlez-moi de votre projet…"
                    className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-20px_color-mix(in_oklab,var(--primary)_70%,transparent)] disabled:opacity-60"
                >
                  {status === "sending" ? "Envoi…" : "Envoyer mon message →"}
                </button>
              </form>
            )}
          </Reveal>

          {/* Infos */}
          <Reveal delay={100} className="md:col-span-2">
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Coordonnées</p>
              <h3 className="mt-2 font-display text-2xl">Où me trouver</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Grand-Popo, Bénin — disponible partout sur demande.
              </p>
            </div>

            <div className="mt-5 rounded-3xl border border-border bg-card p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Réseaux sociaux</p>
              <h3 className="mt-2 font-display text-2xl">Suivez mon quotidien</h3>
              <ul className="mt-5 space-y-3">
                {SOCIALS.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-xl border border-transparent bg-background px-4 py-3 transition-all hover:border-primary"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.name}</p>
                        <p className="font-display text-base">{s.handle}</p>
                      </div>
                      <span className="text-primary transition-transform group-hover:translate-x-1">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm italic text-muted-foreground">
                « Suivez mon quotidien sur TikTok & Instagram »
              </p>
            </div>
          </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
