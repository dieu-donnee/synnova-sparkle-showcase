import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import animation from "@/assets/synnova-animation.jpg";
import comm from "@/assets/synnova-comm.jpg";
import cinema from "@/assets/synnova-cinema.jpeg";
import eco from "@/assets/synnova-eco.jpeg";
import festival from "@/assets/synnova-festival.jpg";
import portrait from "@/assets/synnova-portrait-2.jpg";
import hero from "@/assets/synnova-hero.jpg";
import grandpopo from "@/assets/synnova-grandpopo.jpeg";
import event from "@/assets/synnova-event.jpg";
import benin from "@/assets/synnova-benin.jpg";
import unicef from "@/assets/synnova-unicef.jpg";
import studio from "@/assets/synnova-studio.jpg";
import studio2 from "@/assets/synnova-studio-2.jpg";
import donVillage from "@/assets/synnova-don-village.webp";
import jardin from "@/assets/synnova-jardin.jpg";
import unicefAeroport from "@/assets/synnova-unicef-aeroport.jpg";
import paysage from "@/assets/synnova-paysage.jpg";
import portraitStudio from "@/assets/synnova-portrait-studio.jpg";
import noirBlanc from "@/assets/synnova-noir-blanc.jpg";
import collecteKits from "@/assets/synnova-collecte-kits.webp";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Synnova Tocloe, événements, cinéma, projets" },
      { name: "description", content: "Galerie des réalisations de Synnova Tocloe : événements, cinéma, communication, entrepreneuriat éco. Festival des Arts du Bénin, UReport Grand-Popo et plus." },
      { property: "og:title", content: "Portfolio — Synnova Tocloe" },
      { property: "og:description", content: "Galerie de réalisations : événements, cinéma, communication digitale et entrepreneuriat éco-responsable au Bénin." },
      { property: "og:image", content: festival },
      { property: "og:url", content: "https://synnova-sparkle-showcase.lovable.app/portfolio" },
    ],
    links: [
      { rel: "canonical", href: "https://synnova-sparkle-showcase.lovable.app/portfolio" },
    ],
  }),
  component: Portfolio,
});

type Cat = "Tous" | "Événements" | "Cinéma" | "Communication" | "Entrepreneuriat";

const ITEMS: { img: string; cat: Exclude<Cat, "Tous">; title: string; meta: string; tall?: boolean }[] = [
  { img: festival, cat: "Événements", title: "Festival International des Arts du Bénin", meta: "Animatrice live · Régisseuse" },
  { img: animation, cat: "Événements", title: "Animation scène", meta: "Soirée culturelle · Grand-Popo", tall: true },
  { img: cinema, cat: "Cinéma", title: "Salle de projection", meta: "Festival · Spectatrice & jury" },
  { img: comm, cat: "Communication", title: "Prise de parole publique", meta: "Conférence institutionnelle", tall: true },
  { img: eco, cat: "Entrepreneuriat", title: "Tradition & nature", meta: "Identité visuelle éco-responsable", tall: true },
  { img: portrait, cat: "Communication", title: "Image de marque", meta: "Direction artistique perso" },
  { img: hero, cat: "Communication", title: "Portrait éditorial", meta: "Captation studio" },
  { img: grandpopo, cat: "Événements", title: "Journée de salubrité — UReport Grand-Popo", meta: "Mobilisation citoyenne" },
  { img: benin, cat: "Cinéma", title: "Costume traditionnel", meta: "Captation studio · Patrimoine" },
  { img: event, cat: "Événements", title: "Soirée de gala", meta: "Cérémonie officielle" },
  { img: benin, cat: "Événements", title: "Fierté nationale", meta: "Célébration Bénin", tall: true },
  { img: unicef, cat: "Communication", title: "Journée Mondiale de l'Enfance", meta: "UReport × UNICEF" },
  { img: studio, cat: "Communication", title: "Studio · Profil corporate", meta: "Portrait éditorial" },
  { img: studio2, cat: "Cinéma", title: "Studio · Pose éditoriale", meta: "Direction artistique" },
  { img: collecteKits, cat: "Événements", title: "Collecte de kits scolaires", meta: "Grand-Popo & Adjarra Honvié · 100 écoliers", tall: true },
  { img: donVillage, cat: "Événements", title: "Distribution aux familles", meta: "Action solidaire en village" },
  { img: unicefAeroport, cat: "Communication", title: "Journée Mondiale de l'Enfance", meta: "UNICEF × Aéroport de Cotonou" },
  { img: portraitStudio, cat: "Communication", title: "Portrait studio · Plumes", meta: "Direction artistique éditoriale", tall: true },
  { img: noirBlanc, cat: "Communication", title: "Portrait noir & blanc", meta: "Street style · Cotonou" },
  { img: jardin, cat: "Communication", title: "Au jardin", meta: "Captation lifestyle" },
  { img: paysage, cat: "Entrepreneuriat", title: "Nature & territoire", meta: "Inspiration éco-responsable" },
];

const CATEGORIES: Cat[] = ["Tous", "Événements", "Cinéma", "Communication", "Entrepreneuriat"];

const TESTIMONIALS = [
  { who: "Organisateur événementiel", quote: "Une animatrice qui prend la salle dès la première minute. Énergie, justesse, professionnalisme." },
  { who: "Réalisateur indépendant", quote: "Synnova apporte la même rigueur sur le plateau que devant la caméra. On signe pour le prochain projet." },
  { who: "Partenaire associatif", quote: "Son engagement à UReport Grand-Popo, c'est du concret. Les jeunes l'écoutent et la suivent." },
];

function Portfolio() {
  const [filter, setFilter] = useState<Cat>("Tous");
  const list = useMemo(() => ITEMS.filter((i) => filter === "Tous" || i.cat === filter), [filter]);

  return (
    <>
      {/* HERO */}
      <section className="relative px-5 pt-40 pb-12 md:px-10 md:pt-48">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="font-script text-3xl text-[color:var(--gold)]">Portfolio</p>
            <h1 className="mt-3 font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.95] tracking-tighter">
              Ce que j'ai <em className="text-gradient-rose">fait</em>.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Une sélection de moments, d'événements et de productions — un aperçu en images du chemin parcouru.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-16 z-30 border-y border-border/60 bg-background/80 px-5 py-4 backdrop-blur-md md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {CATEGORIES.map((c) => {
            const active = filter === c;
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-4 py-2 text-sm transition-all ${
                  active
                    ? "border-primary bg-primary text-[color:var(--gold)]-foreground"
                    : "border-border bg-card hover:border-primary hover:text-[color:var(--gold)]"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </section>

      {/* GRID */}
      <section className="px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="sr-only">Sélection de projets</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
            {list.map((item, i) => (
              <Reveal
                key={`${filter}-${item.title}-${i}`}
                delay={(i % 6) * 60}
                className={`group relative overflow-hidden rounded-2xl bg-card ${item.tall ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"}`}
              >
                <img src={item.img} alt={item.title} loading="lazy" width={1024} height={1280} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/30 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-secondary-foreground">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold)]">{item.cat}</p>
                  <h3 className="mt-1 font-display text-lg leading-tight">{item.title}</h3>
                  <p className="text-xs text-secondary-foreground/70">{item.meta}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {list.length === 0 && (
            <p className="py-20 text-center text-muted-foreground">Bientôt d'autres projets ici…</p>
          )}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-accent/30 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--gold)]">On en parle</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Quelques voix.</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.who} delay={i * 100}>
                <figure className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="font-display text-5xl leading-none text-[color:var(--gold)]">"</span>
                  <blockquote className="mt-2 text-foreground/80">{t.quote}</blockquote>
                  <figcaption className="mt-5 text-xs uppercase tracking-[0.25em] text-muted-foreground">— {t.who}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
