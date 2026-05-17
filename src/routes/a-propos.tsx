import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/synnova-portrait-2.jpg";
import hero from "@/assets/synnova-hero.jpg";
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
      { property: "og:image", content: portrait },
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
      <section className="relative overflow-hidden bg-secondary px-5 pt-40 pb-24 text-secondary-foreground md:px-10 md:pt-48 md:pb-32">
        <div className="absolute inset-0 bg-mesh-rose opacity-50" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7 animate-fade-up">
            <p className="font-script text-3xl text-[color:var(--gold)]">Mon histoire</p>
            <h1 className="mt-3 font-display text-[clamp(2.8rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
              Une femme<br />en <em className="text-[color:var(--gold)]">chemin</em>.
            </h1>
            <p className="mt-6 max-w-xl text-secondary-foreground/80">
              Je ne suis pas un CV. Je suis un parcours, fait de rencontres, de plateaux, de micros, d'ateliers et de convictions. Voici comment tout s'enchaîne — et pourquoi.
            </p>
          </div>
          <div className="md:col-span-5 flex md:justify-end">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm md:max-w-none md:w-full md:h-[min(72vh,620px)] overflow-hidden rounded-3xl shadow-2xl">
              <img src={hero} alt="Synnova Tocloe" width={1080} height={1440} className="h-full w-full object-cover" />
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
                    <div className="relative overflow-hidden rounded-3xl">
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
            <div className="overflow-hidden rounded-3xl">
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
