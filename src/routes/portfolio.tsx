import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Instagram, Music2, Youtube, Facebook, Linkedin, Play, ArrowUpRight } from "lucide-react";
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
      { name: "description", content: "Portfolio créatrice de contenu : événements, cinéma, communication digitale et entrepreneuriat éco-responsable au Bénin." },
      { property: "og:title", content: "Portfolio — Synnova Tocloe" },
      { property: "og:description", content: "Portfolio créatrice de contenu : événements, cinéma, communication digitale et entrepreneuriat éco-responsable au Bénin." },
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
  { img: unicef, cat: "Communication", title: "Journée Mondiale de l'Enfance", meta: "UReport × UNICEF" },
  { img: studio, cat: "Communication", title: "Studio · Profil corporate", meta: "Portrait éditorial" },
  { img: studio2, cat: "Cinéma", title: "Studio · Pose éditoriale", meta: "Direction artistique" },
  { img: collecteKits, cat: "Événements", title: "Collecte de kits scolaires", meta: "Grand-Popo & Adjarra Honvié", tall: true },
  { img: donVillage, cat: "Événements", title: "Distribution aux familles", meta: "Action solidaire en village" },
  { img: unicefAeroport, cat: "Communication", title: "UNICEF × Aéroport Cotonou", meta: "Journée Mondiale de l'Enfance" },
  { img: portraitStudio, cat: "Communication", title: "Portrait studio · Plumes", meta: "Direction artistique éditoriale", tall: true },
  { img: noirBlanc, cat: "Communication", title: "Portrait noir & blanc", meta: "Street style · Cotonou" },
  { img: jardin, cat: "Communication", title: "Au jardin", meta: "Captation lifestyle" },
  { img: paysage, cat: "Entrepreneuriat", title: "Nature & territoire", meta: "Inspiration éco-responsable" },
];

const CATEGORIES: Cat[] = ["Tous", "Événements", "Cinéma", "Communication", "Entrepreneuriat"];

const SOCIAL_STATS = [
  { name: "TikTok", icon: Music2, followers: "5.4k", views: "3.1k", er: "8.2%" },
  { name: "Instagram", icon: Instagram, followers: "3.2k", views: "2.4k", er: "2.7%" },
  { name: "Youtube", icon: Youtube, followers: "1.5k", views: "700", er: "4.1%" },
];

const VIDEOGRAPHY = [animation, comm, festival, event];

const PHOTOGRAPHY_GRID = [
  { img: portraitStudio, span: "row-span-2" },
  { img: noirBlanc, span: "" },
  { img: studio, span: "" },
  { img: jardin, span: "" },
  { img: portrait, span: "" },
];

const SERVICES = [
  { img: animation, title: "Animation live", desc: "Animation de soirées, festivals et conférences institutionnelles." },
  { img: comm, title: "Communication digitale", desc: "Stratégie de contenu, prises de parole et storytelling de marque." },
  { img: eco, title: "Emballages biodégradables", desc: "Confection artisanale d'emballages éco-responsables." },
];

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
      {/* HERO — Massive title over portrait */}
      <section className="relative overflow-hidden bg-accent text-accent-foreground">
        <div className="relative mx-auto max-w-[1600px] px-5 pt-32 pb-12 md:px-10 md:pt-40 md:pb-16">
          <div className="relative">
            {/* Big title */}
            <h1 className="relative z-10 font-display font-black uppercase leading-[0.8] tracking-[-0.05em] text-accent-foreground/95 text-[clamp(5rem,22vw,22rem)]">
              Portfolio
            </h1>
            {/* Script overlay */}
            <p className="pointer-events-none absolute left-1/2 top-[58%] z-20 -translate-x-1/2 whitespace-nowrap font-script text-[clamp(2.5rem,10vw,10rem)] leading-none text-[color:var(--gold)] opacity-80 md:top-[60%]">
              Synnova
            </p>
            {/* Portrait, centered behind */}
            <div className="absolute left-1/2 top-0 z-[5] h-[60%] -translate-x-1/2 md:h-[78%]">
              <img
                src={hero}
                alt="Synnova Tocloe — portrait"
                className="h-full w-auto object-contain object-bottom"
              />
            </div>
            {/* Top-right script tag */}
            <p className="absolute right-0 top-0 z-20 hidden font-script text-2xl text-accent-foreground/70 md:block md:text-3xl">
              creative woman
            </p>
          </div>

          {/* Bottom row: name + socials */}
          <div className="relative z-20 mt-8 flex flex-wrap items-end justify-between gap-6 md:mt-12">
            <p className="font-display text-2xl uppercase tracking-[0.15em] md:text-3xl">
              Synnova Tocloe
            </p>
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
                  className="grid h-10 w-10 place-items-center rounded-full bg-accent-foreground text-accent transition-transform hover:scale-110"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TWO COLUMNS: Social Media Stats + Videography */}
      <section className="px-5 py-6 md:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-6 md:grid-cols-2">
          {/* Social stats */}
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-accent p-8 text-accent-foreground md:p-10">
              <h2 className="font-display text-3xl font-black uppercase tracking-tight md:text-5xl">
                Social media stats
              </h2>
              <div className="mt-8 grid grid-cols-[1fr_auto_auto_auto] items-center gap-x-6 gap-y-4 text-sm">
                <span />
                <span className="text-xs uppercase tracking-wider text-accent-foreground/60">Followers</span>
                <span className="text-xs uppercase tracking-wider text-accent-foreground/60">Avg. views</span>
                <span className="text-xs uppercase tracking-wider text-accent-foreground/60">ER</span>
                {SOCIAL_STATS.map(({ name, icon: Icon, followers, views, er }) => (
                  <div key={name} className="contents">
                    <div className="flex items-center gap-2 font-medium uppercase tracking-[0.15em]">
                      <Icon className="h-4 w-4" /> {name}
                    </div>
                    <span>{followers}</span>
                    <span>{views}</span>
                    <span>{er}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[10px] italic text-accent-foreground/50">* Stats arrondies — Mai 2026</p>
            </div>
          </Reveal>

          {/* Videography */}
          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-3xl bg-card p-8 md:p-10">
              <div className="flex items-end justify-between">
                <h2 className="font-display text-3xl font-black uppercase tracking-tight md:text-5xl">
                  Videography
                </h2>
                <p className="font-script text-xl text-[color:var(--gold)] md:text-2xl">content creator</p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {VIDEOGRAPHY.map((src, i) => (
                  <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-xl">
                    <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 grid place-items-center bg-black/20 transition-colors group-hover:bg-black/40">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground/90 text-background">
                        <Play className="h-4 w-4 translate-x-0.5 fill-current" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT ME + PHOTOGRAPHY */}
      <section className="px-5 py-6 md:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-6 md:grid-cols-2">
          {/* About me */}
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-card p-8 md:p-10">
              <h2 className="font-display text-3xl font-black uppercase tracking-tight md:text-5xl">
                About me
              </h2>
              <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-center">
                <div className="overflow-hidden rounded-2xl">
                  <img src={portrait} alt="Synnova portrait" className="aspect-[3/4] h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-script text-2xl text-[color:var(--gold)]">animatrice & créatrice</p>
                  <h3 className="mt-1 font-display text-3xl font-black uppercase md:text-4xl">Synnova T.</h3>
                  <p className="mt-4 text-sm text-foreground/80">
                    Animatrice, communicatrice et actrice basée à Grand-Popo. Je façonne des contenus
                    qui racontent — à travers la vidéo, la photo et la prise de parole.
                  </p>
                  <p className="mt-3 text-sm text-foreground/70">
                    Une démarche cohérente, ancrée dans le territoire béninois, et tournée vers l'éco-responsabilité.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Photography */}
          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-3xl bg-card p-8 md:p-10">
              <h2 className="font-display text-3xl font-black uppercase tracking-tight md:text-5xl">
                Photography
              </h2>
              <div className="mt-6 grid grid-cols-3 gap-3" style={{ gridAutoRows: "100px" }}>
                {PHOTOGRAPHY_GRID.map((p, i) => (
                  <div key={i} className={`group relative overflow-hidden rounded-xl ${p.span || "row-span-1"}`}>
                    <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-foreground/70">
                Un style minimal, émotionnel — pensé pour durer.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-5 py-6 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-accent p-8 text-accent-foreground md:p-12">
              <div className="flex items-end justify-between">
                <h2 className="font-display text-3xl font-black uppercase tracking-tight md:text-5xl">
                  Services
                </h2>
                <p className="font-script text-xl text-[color:var(--gold)] md:text-2xl">ce que je propose</p>
              </div>
              <div className="mt-8 divide-y divide-accent-foreground/15">
                {SERVICES.map((s) => (
                  <div key={s.title} className="grid grid-cols-[80px_1fr_1.5fr] items-center gap-6 py-4 md:grid-cols-[120px_1fr_2fr] md:py-6">
                    <div className="aspect-square overflow-hidden rounded-xl">
                      <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
                    </div>
                    <p className="font-display text-sm font-bold uppercase tracking-[0.15em] md:text-base">{s.title}</p>
                    <p className="text-sm text-accent-foreground/80">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TOP-PERFORMING / GALLERY FILTER */}
      <section className="px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-script text-2xl text-[color:var(--gold)]">galerie complète</p>
                <h2 className="mt-1 font-display text-3xl font-black uppercase tracking-tight md:text-5xl">
                  Tous les projets
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((c) => {
                  const active = filter === c;
                  return (
                    <button
                      key={c}
                      onClick={() => setFilter(c)}
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all ${
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
                      }`}
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4">
            {list.map((item, i) => (
              <Reveal
                key={`${filter}-${item.title}-${i}`}
                delay={(i % 6) * 60}
                className={`group relative overflow-hidden rounded-2xl bg-card ${item.tall ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"}`}
              >
                <img src={item.img} alt={item.title} loading="lazy" width={1024} height={1280} className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/30 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-foreground">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[color:var(--gold)]">{item.cat}</p>
                  <h3 className="mt-1 font-display text-lg leading-tight">{item.title}</h3>
                  <p className="text-xs text-foreground/70">{item.meta}</p>
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
      <section className="px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <div className="rounded-3xl bg-accent p-8 text-accent-foreground md:p-12">
              <div className="flex items-end justify-between">
                <h2 className="font-display text-3xl font-black uppercase tracking-tight md:text-5xl">
                  Testimonials
                </h2>
                <p className="font-script text-xl text-[color:var(--gold)] md:text-2xl">on en parle</p>
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {TESTIMONIALS.map((t, i) => (
                  <Reveal key={t.who} delay={i * 100}>
                    <figure className="h-full rounded-2xl bg-accent-foreground/5 p-6 backdrop-blur-sm">
                      <span className="font-display text-5xl leading-none text-[color:var(--gold)]">"</span>
                      <blockquote className="mt-2 text-accent-foreground/90">{t.quote}</blockquote>
                      <figcaption className="mt-5 text-xs uppercase tracking-[0.25em] text-accent-foreground/60">— {t.who}</figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
              <div className="mt-10 flex justify-center">
                <Link
                  to="/contact"
                  search={{ sujet: undefined }}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent-foreground px-6 py-3 text-xs uppercase tracking-[0.25em] text-accent transition-transform hover:-translate-y-0.5"
                >
                  Travailler ensemble
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
