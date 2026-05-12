import { createFileRoute, Link } from "@tanstack/react-router";
import animation from "@/assets/synnova-animation.jpg";
import comm from "@/assets/synnova-comm.jpg";
import cinema from "@/assets/synnova-cinema.jpg";
import eco from "@/assets/synnova-eco.jpg";
import festival from "@/assets/synnova-festival.jpg";
import portrait from "@/assets/synnova-portrait-2.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/univers")({
  head: () => ({
    meta: [
      { title: "Mes univers — Animation, Communication, Cinéma, Éco" },
      { name: "description", content: "Découvrez les univers de Synnova Tocloe : animation live, communication digitale, cinéma et régie plateau, entrepreneuriat éco-responsable au Bénin." },
      { property: "og:title", content: "Mes univers — Synnova Tocloe" },
      { property: "og:description", content: "Quatre mondes, une même énergie." },
      { property: "og:image", content: animation },
    ],
  }),
  component: Univers,
});

const UNIVERSES = [
  {
    id: "animation",
    n: "01",
    title: "Animation & Événements",
    sub: "Sur scène, le micro à la main.",
    desc: "Animatrice live d'événements culturels, institutionnels et festifs. Du Festival International des Arts du Bénin aux conférences de jeunesse — créer du lien, tenir une salle, faire vibrer un public.",
    bullets: ["Festivals & galas", "Conférences & forums", "Soirées culturelles", "Émissions live"],
    cta: "Me contacter pour un événement",
    img: animation,
    color: "primary",
  },
  {
    id: "communication",
    n: "02",
    title: "Communication Digitale",
    sub: "Des histoires qui voyagent.",
    desc: "Stratégie éditoriale, création de contenu, gestion de communautés et storytelling de marque. Formée au journalisme, j'écris pour que ça touche — et que ça reste.",
    bullets: ["Stratégie de contenu", "Community management", "Rédaction & storytelling", "Communication institutionnelle"],
    cta: "Collaborer en communication",
    img: comm,
    color: "ink",
  },
  {
    id: "cinema",
    n: "03",
    title: "Cinéma & Régie",
    sub: "Devant et derrière la caméra.",
    desc: "Actrice de cinéma et régisseuse plateau. Une connaissance fine des deux côtés du miroir, des productions du Festival International des Arts du Bénin aux projets indépendants.",
    bullets: ["Jeu d'actrice", "Régie plateau", "Productions audiovisuelles", "Direction artistique"],
    cta: "Discuter d'un projet cinéma",
    img: cinema,
    color: "gold",
  },
  {
    id: "entrepreneuriat",
    n: "04",
    title: "Entrepreneuriat Social",
    sub: "Penser durable, fabriquer local.",
    desc: "Créatrice et confectionneuse d'emballages biodégradables. Un projet né d'une conviction simple : on ne peut pas parler de futur sans s'occuper de la terre, ici, maintenant.",
    bullets: ["Emballages biodégradables", "Production artisanale", "Sensibilisation éco", "Économie circulaire"],
    cta: "Découvrir les emballages",
    img: eco,
    color: "eco",
  },
] as const;

function Univers() {
  return (
    <>
      {/* HERO */}
      <section className="relative px-5 pt-40 pb-16 md:px-10 md:pt-48 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-script text-3xl text-primary">Ce que je fais</p>
            <h1 className="mt-3 font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tighter">
              Quatre <em className="text-gradient-rose">univers</em>.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Chaque monde est un terrain de jeu et d'engagement. Choisissez celui qui vous parle — ou explorez-les tous.
            </p>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-3">
            {UNIVERSES.map((u) => (
              <a
                key={u.id}
                href={`#${u.id}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
              >
                {u.n} · {u.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* UNIVERSES */}
      <div className="space-y-0">
        {UNIVERSES.map((u, i) => {
          const reverse = i % 2 === 1;
          const accentVar =
            u.color === "primary" ? "var(--primary)"
            : u.color === "gold" ? "var(--gold)"
            : u.color === "eco" ? "var(--eco)"
            : "var(--ink)";
          return (
            <section
              key={u.id}
              id={u.id}
              className="relative scroll-mt-24 px-5 py-24 md:px-10 md:py-32"
              style={{ background: i % 2 === 0 ? "transparent" : "color-mix(in oklab, var(--accent) 25%, var(--background))" }}
            >
              <div className={`mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-12 md:gap-16 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
                <Reveal className="md:col-span-6">
                  <div className="relative">
                    <div className="overflow-hidden rounded-[2rem] shadow-xl">
                      <img src={u.img} alt={u.title} loading="lazy" width={1024} height={1280} className="aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-105" />
                    </div>
                    <span
                      className="absolute -top-6 left-6 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-background"
                      style={{ background: accentVar }}
                    >
                      Univers {u.n}
                    </span>
                  </div>
                </Reveal>

                <Reveal delay={120} className="md:col-span-6">
                  <p className="font-script text-3xl" style={{ color: accentVar }}>{u.sub}</p>
                  <h2 className="mt-2 font-display text-4xl md:text-6xl">{u.title}</h2>
                  <p className="mt-5 text-foreground/75 md:text-lg">{u.desc}</p>

                  <ul className="mt-6 grid grid-cols-2 gap-2">
                    {u.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full" style={{ background: accentVar }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    search={{ sujet: u.id }}
                    className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                    style={{ background: accentVar }}
                  >
                    {u.cta} →
                  </Link>
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      {/* GALLERY TEASER */}
      <section className="px-5 pb-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-3">
          {[festival, portrait, cinema].map((img, i) => (
            <Reveal key={i} delay={i * 100} className="overflow-hidden rounded-2xl">
              <img src={img} alt="" loading="lazy" width={1280} height={960} className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105" />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/portfolio" className="inline-flex rounded-full bg-foreground px-7 py-3.5 text-sm text-background hover:bg-primary">
            Voir tout le portfolio →
          </Link>
        </div>
      </section>
    </>
  );
}
