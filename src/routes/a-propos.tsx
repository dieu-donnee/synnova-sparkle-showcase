import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/synnova-portrait-2.jpg";
import heroPortrait from "@/assets/synnova-portrait-studio-removebg-preview.png";
import eco from "@/assets/synnova-eco.jpeg";
import cinema from "@/assets/synnova-cinema.jpeg";
import comm from "@/assets/synnova-comm.jpg";
import grandpopo from "@/assets/synnova-grandpopo.jpeg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Synnova Tocloe, son histoire" },
      { name: "description", content: "Le parcours de Synnova Belvine Kybarance Tocloe : formation en journalisme, engagement à Grand-Popo, cinéma, entrepreneuriat éco-responsable au Bénin." },
      { property: "og:title", content: "L'histoire de Synnova Tocloe" },
      { property: "og:description", content: "Formation, engagement, cinéma, entrepreneuriat — une femme en chemin." },
      { property: "og:image", content: heroPortrait },
      { property: "og:url", content: "https://synnova-sparkle-showcase.lovable.app/a-propos" },
    ],
    links: [
      { rel: "canonical", href: "https://synnova-sparkle-showcase.lovable.app/a-propos" },
    ],
  }),
  component: APropos,
});

const CHAPTERS = [
  {
    tag: "Formation",
    title: "Le journalisme comme première voix",
    text: "Titulaire d'une licence professionnelle en journalisme, formée à l'Union Culturelle et Artistique des Étudiants (UCAE). C'est là que tout commence : apprendre à écouter, à raconter, à transmettre.",
    img: portrait,
  },
  {
    tag: "Engagement",
    title: "Coordonnatrice à UReport Grand-Popo",
    text: "Ex-Chargée de Communication de la Mairie des Jeunes de Grand-Popo, aujourd'hui Coordonnatrice de UReport — donner la parole aux jeunes, faire bouger les lignes localement.",
    img: grandpopo,
  },
  {
    tag: "Cinéma & événements",
    title: "Du plateau aux festivals",
    text: "Actrice de cinéma, régisseuse plateau et animatrice live — notamment lors du Festival International des Arts du Bénin. Sur scène ou derrière la caméra, toujours en mouvement.",
    img: cinema,
  },
  {
    tag: "Entrepreneuriat",
    title: "Des emballages qui respectent la terre",
    text: "Créatrice et confectionneuse d'emballages biodégradables. Une démarche éco-responsable, ancrée dans le réel — parce que l'engagement ne se déclame pas, il se fabrique.",
    img: eco,
  },
];

const VALUES = [
  { t: "Création", d: "Imaginer, raconter, mettre au monde." },
  { t: "Engagement", d: "Servir une cause, pas seulement une image." },
  { t: "Authenticité", d: "Être soi, partout, sans masque." },
  { t: "Impact", d: "Laisser une trace utile et durable." },
];

function APropos() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_45%),linear-gradient(135deg,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_35%,color-mix(in_oklab,var(--gold)_10%,transparent))]" aria-hidden />
        <div className="absolute inset-0 bg-mesh-rose opacity-20" aria-hidden />
        <div className="absolute inset-0 grain opacity-25" aria-hidden />

        <div className="relative mx-auto min-h-[92svh] max-w-[1600px] px-5 pb-10 pt-24 md:px-10 md:pt-28">
          <div className="relative min-h-[calc(92svh-7rem)]">
            <p className="pointer-events-none absolute left-1/2 top-[-0.1rem] z-10 -translate-x-1/2 whitespace-nowrap text-[clamp(2.4rem,10vw,8.5rem)] font-display font-black uppercase leading-[0.85] tracking-[-0.08em] text-foreground/10 md:top-0">
              À PROPOS
            </p>

            <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-[54%] flex justify-center">
              <div className="relative w-[min(50vw,300px)] md:w-[min(29vw,300px)]">
                <img
                  src={heroPortrait}
                  alt="Synnova Tocloe"
                  className="w-full drop-shadow-[0_40px_90px_rgba(0,0,0,0.55)]"
                />
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-4 z-30 flex flex-wrap items-center justify-between gap-6 px-1 py-1 md:bottom-6 md:px-3">
              <div>
                <p className="whitespace-nowrap text-2xl font-semibold tracking-[0.06em] text-foreground md:text-3xl" style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", serif' }}>
                  Synnova Tocloe
                </p>
                <p className="mt-1 text-sm uppercase tracking-[0.24em] text-foreground/65">
                  Une femme en chemin
                </p>
              </div>
              <p className="max-w-xs text-right text-sm leading-6 text-foreground/70">
                Journalisme, engagement, cinéma et entrepreneuriat éco-responsable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ZIGZAG CHAPTERS */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl space-y-24 md:space-y-32">
          {CHAPTERS.map((c, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={c.title}>
                <article className={`grid items-center gap-10 md:grid-cols-12 md:gap-16 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className="md:col-span-6">
                    <div className="relative mx-auto overflow-hidden rounded-3xl max-w-[70%]">
                      <img src={c.img} alt={c.title} loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-105" />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">{c.tag} · 0{i + 1}</p>
                    <h2 className="mt-3 font-display text-3xl md:text-5xl">{c.title}</h2>
                    <p className="mt-5 text-foreground/75 md:text-lg">{c.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-accent/30 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">Mes valeurs</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">Quatre piliers, <span className="text-gradient-rose">un même cap</span>.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary">
                  <p className="font-script text-3xl text-[color:var(--gold)]">0{i + 1}</p>
                  <h3 className="mt-3 font-display text-2xl">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE + COMM */}
      <section className="relative px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div className="mx-auto overflow-hidden rounded-3xl max-w-[70%]">
              <img src={comm} alt="Synnova en communication digitale" loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-script text-3xl text-[color:var(--gold)]">Mon moteur</p>
            <blockquote className="mt-4 font-display text-3xl leading-tight md:text-5xl">
              « Militante pour des changements positifs <span className="text-[color:var(--gold)]">🌞</span> — je crois aux mots, aux gestes, aux femmes. »
            </blockquote>
            <Link to="/contact" search={{ sujet: undefined }} className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-sm text-background hover:bg-primary">
              Travaillons ensemble →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
