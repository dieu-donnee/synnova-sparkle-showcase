import { createFileRoute, Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Music2, Youtube } from "lucide-react";
import animation from "@/assets/synnova-animation.jpg";
import cinema from "@/assets/synnova-cinema.jpeg";
import comm from "@/assets/synnova-comm.jpg";
import eco from "@/assets/synnova-eco.jpeg";
import festival from "@/assets/synnova-festival.jpg";
import portrait from "@/assets/synnova-portrait-2.jpg";
import heroPerson from "@/assets/b.png";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/univers")({
  head: () => ({
    meta: [
      { title: "Mes univers — Animation, Communication, Cinéma, Éco" },
      { name: "description", content: "Découvrez les univers de Synnova Tocloe : animation live, communication digitale, cinéma et régie plateau, entrepreneuriat éco-responsable au Bénin." },
      { property: "og:title", content: "Mes univers — Synnova Tocloe" },
      { property: "og:description", content: "Quatre mondes, une même énergie." },
      { property: "og:image", content: heroPerson },
      { property: "og:url", content: "https://synnova-sparkle-showcase.lovable.app/univers" },
    ],
    links: [
      { rel: "canonical", href: "https://synnova-sparkle-showcase.lovable.app/univers" },
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
      <section className="relative overflow-hidden bg-ink text-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_45%),linear-gradient(135deg,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_35%,color-mix(in_oklab,var(--gold)_10%,transparent))]" aria-hidden />
        <div className="absolute inset-0 bg-mesh-rose opacity-20" aria-hidden />
        <div className="absolute inset-0 grain opacity-25" aria-hidden />

        <div className="relative mx-auto min-h-[92svh] max-w-[1600px] px-5 pb-10 pt-24 md:px-10 md:pt-28">
          <div className="relative min-h-[calc(92svh-7rem)]">
            <p className="pointer-events-none absolute left-1/2 top-[-0.1rem] z-10 -translate-x-1/2 text-[clamp(2.4rem,10vw,8.5rem)] font-display font-black uppercase leading-[0.85] tracking-[-0.08em] text-foreground/10 md:top-0">
              MES UNIVERS
            </p>

            <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-[54%] flex justify-center">
              <div className="relative w-[min(72vw,420px)] md:w-[min(42vw,420px)]">
                <img
                  src={heroPerson}
                  alt="Synnova Tocloe"
                  className="w-full drop-shadow-[0_40px_90px_rgba(0,0,0,0.55)]"
                />
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-4 z-30 flex flex-wrap items-center justify-between gap-6 px-1 py-1 md:bottom-6 md:px-3">
              <div>
                <p className="text-2xl font-semibold tracking-[0.06em] text-foreground md:text-3xl" style={{ fontFamily: '"Cormorant Garamond", "Playfair Display", serif' }}>
                  Synnova Tocloe
                </p>
              </div>
              <div className="flex items-center gap-2">
                {[
                  { Icon: Instagram, url: "https://instagram.com/_synnova" },
                  { Icon: Music2, url: "https://tiktok.com/@_synnova" },
                  { Icon: Youtube, url: "#" },
                  { Icon: Facebook, url: "https://facebook.com/synnovalumiere" },
                  { Icon: Linkedin, url: "https://bj.linkedin.com/in/synnova-belvine-kybarance-tocloe-3882a9232" },
                ].map(({ Icon, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-foreground transition-transform duration-500 hover:scale-110 hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
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
              className="relative scroll-mt-24 overflow-hidden px-5 py-24 md:px-10 md:py-32"
              style={{
                background:
                  u.color === "eco"
                    ? "linear-gradient(135deg, color-mix(in oklab, var(--eco) 12%, var(--background)) 0%, color-mix(in oklab, var(--eco) 22%, var(--background)) 100%)"
                    : i % 2 === 0
                    ? "transparent"
                    : "color-mix(in oklab, var(--accent) 25%, var(--background))",
              }}
            >
              {u.color === "eco" && (
                <>
                  <div
                    className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-40 blur-3xl"
                    style={{ background: "color-mix(in oklab, var(--eco) 60%, transparent)" }}
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
                    style={{ background: "color-mix(in oklab, var(--gold) 50%, transparent)" }}
                    aria-hidden
                  />
                  <span className="pointer-events-none absolute right-8 top-10 select-none font-script text-7xl text-[color:var(--eco)]/25 md:text-8xl" aria-hidden>
                    🌿
                  </span>
                </>
              )}
              <div className={`relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-12 md:gap-16 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}>
                <Reveal className="md:col-span-6">
                  <div className="relative">
                    <div
                      className="mx-auto max-w-[70%] overflow-hidden rounded-[2rem] shadow-xl"
                      style={u.color === "eco" ? { boxShadow: "0 30px 60px -20px color-mix(in oklab, var(--eco) 45%, transparent)" } : undefined}
                    >
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
            <Reveal key={i} delay={i * 100} className="mx-auto max-w-[70%] overflow-hidden rounded-2xl">
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
