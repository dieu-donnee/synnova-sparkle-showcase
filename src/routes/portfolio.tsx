import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Instagram, Music2, Youtube, Facebook, Linkedin, ArrowUpRight } from "lucide-react";
import animation from "@/assets/synnova-animation.jpg";
import benin from "@/assets/synnova-benin.jpg";
import comm from "@/assets/synnova-comm.jpg";
import collecteKits from "@/assets/synnova-collecte-kits.webp";
import donVillage from "@/assets/synnova-don-village.webp";
import eco from "@/assets/synnova-eco.jpeg";
import festival from "@/assets/synnova-festival.jpg";
import unicef from "@/assets/synnova-unicef.jpg";
import unicefAeroport from "@/assets/synnova-unicef-aeroport.jpg";
import portrait from "@/assets/synnova-portrait-2.jpg";
import heroCutout from "@/assets/Ameliore_nettete_image_contraste__202605151140-removebg-preview.png";
import grandpopo from "@/assets/synnova-grandpopo.jpeg";
import event from "@/assets/synnova-event.jpg";
import studio from "@/assets/synnova-studio.jpg";
import jardin from "@/assets/synnova-jardin.jpg";
import paysage from "@/assets/synnova-paysage.jpg";
import portraitStudio from "@/assets/synnova-portrait-studio.jpg";
import noirBlanc from "@/assets/synnova-noir-blanc.jpg";
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

type GalleryCategory = "Tous" | "Événements" | "Cinéma" | "Communication" | "Entrepreneuriat";

const GALLERY_ITEMS: {
  category: Exclude<GalleryCategory, "Tous">;
  img: string;
  title: string;
  meta: string;
}[] = [
  { category: "Événements", img: festival, title: "Festival International des Arts du Bénin", meta: "Animation et présence scène" },
  { category: "Événements", img: event, title: "Soirée de gala", meta: "Cérémonie officielle" },
  { category: "Événements", img: grandpopo, title: "Journée citoyenne à Grand-Popo", meta: "Mobilisation locale" },
  { category: "Événements", img: animation, title: "Animation live", meta: "Spectacle et interaction" },
  { category: "Événements", img: collecteKits, title: "Collecte de kits scolaires", meta: "Action solidaire" },
  { category: "Événements", img: donVillage, title: "Distribution en village", meta: "Présence de terrain" },
  { category: "Cinéma", img: portraitStudio, title: "Portrait éditorial", meta: "Image de plateau" },
  { category: "Cinéma", img: noirBlanc, title: "Portrait noir & blanc", meta: "Esthétique cinéma" },
  { category: "Cinéma", img: studio, title: "Studio portrait", meta: "Direction artistique" },
  { category: "Cinéma", img: benin, title: "Costume traditionnel", meta: "Patrimoine visuel" },
  { category: "Communication", img: comm, title: "Prise de parole publique", meta: "Conférence et media" },
  { category: "Communication", img: portrait, title: "Image de marque", meta: "Contenu digital" },
  { category: "Communication", img: jardin, title: "Lifestyle éditorial", meta: "Contenu visuel" },
  { category: "Communication", img: unicef, title: "Journée mondiale de l’enfance", meta: "Partenariat média" },
  { category: "Communication", img: unicefAeroport, title: "UNICEF × Aéroport Cotonou", meta: "Visibilité institutionnelle" },
  { category: "Entrepreneuriat", img: eco, title: "Création éco-responsable", meta: "Impact et territoire" },
  { category: "Entrepreneuriat", img: paysage, title: "Nature & territoire", meta: "Ancrage béninois" },
];

const FEATURED_EVENTS = [
  {
    img: festival,
    title: "Festival International des Arts du Bénin",
    copy: "Moment clé du portfolio : présence, animation et énergie culturelle sur un événement d’envergure.",
  },
  {
    img: event,
    title: "Soirée de gala",
    copy: "Une réalisation qui montre la capacité à tenir une scène et à représenter une image premium.",
  },
  {
    img: grandpopo,
    title: "Grand-Popo",
    copy: "Ancrage local, actions citoyennes et productions visuelles au service du territoire.",
  },
  {
    img: collecteKits,
    title: "Collecte de kits scolaires",
    copy: "Un temps fort de terrain qui montre l’impact social du travail mené hors des plateaux.",
  },
];

const PRESS_MENTIONS = [
  {
    title: "Miss photogénique 2022",
    source: "Triomphe Mag",
    href: "https://triomphemag.com/benin-synnova-belvine-tocloe-couronnee-miss-photogenique-2022/",
    img: portraitStudio,
    copy: "Article sur la couronne Miss photogénique 2022 et la reconnaissance de son image publique.",
  },
  {
    title: "Concours Je suis Photogénique",
    source: "Kpakpato Medias",
    href: "https://kpakpatomedias.bj/2022/03/23/deuxieme-edition-du-concours-de-beaute-feminine-en-ligne-synnova-belvine-tocloe-elue-miss/",
    img: festival,
    copy: "Retombée média retraçant le concours, la victoire et le profil de Synnova Belvine Tocloé.",
  },
  {
    title: "Profil public LinkedIn",
    source: "France Volontaires",
    href: "https://fr.linkedin.com/in/synnova-belvine-kybarance-tocloe-3882a9232",
    img: comm,
    copy: "Profil public présentant ses compétences en animation, vidéo, marketing digital et événementiel.",
  },
  {
    title: "Présentation Grand-Popo",
    source: "Mairie des Jeunes",
    href: "https://fr.linkedin.com/posts/mairie-des-jeunes-grand-popo-1a7047221_ucae-uac-grand-activity-6846416210012307456-iBLo",
    img: grandpopo,
    copy: "Mention publique de son rôle dans la communication locale et les activités associatives.",
  },
];

const TESTIMONIALS = [
  { who: "Organisateur événementiel", quote: "Une animatrice qui prend la salle dès la première minute. Énergie, justesse, professionnalisme." },
  { who: "Réalisateur indépendant", quote: "Synnova apporte la même rigueur sur le plateau que devant la caméra. On signe pour le prochain projet." },
  { who: "Partenaire associatif", quote: "Son engagement à UReport Grand-Popo, c'est du concret. Les jeunes l'écoutent et la suivent." },
];

function Portfolio() {
  const [filter, setFilter] = useState<GalleryCategory>("Tous");
  const filteredGallery = useMemo(
    () => GALLERY_ITEMS.filter((item) => filter === "Tous" || item.category === filter),
    [filter],
  );

  return (
    <>
      {/* HERO — Front-plan cutout over editorial typography */}
      <section className="relative overflow-hidden bg-ink text-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_45%),linear-gradient(135deg,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_35%,color-mix(in_oklab,var(--gold)_10%,transparent))]" aria-hidden />
        <div className="absolute inset-0 bg-mesh-rose opacity-20" aria-hidden />
        <div className="absolute inset-0 grain opacity-25" aria-hidden />

        <div className="relative mx-auto min-h-[92svh] max-w-[1600px] px-5 pb-10 pt-24 md:px-10 md:pt-28">
          <div className="relative min-h-[calc(92svh-7rem)]">
            <p className="pointer-events-none absolute left-1/2 top-[-0.1rem] z-10 -translate-x-1/2 text-[clamp(2.4rem,10vw,8.5rem)] font-display font-black uppercase leading-[0.85] tracking-[-0.08em] text-foreground/10 md:top-0">
              Portfolio
            </p>

            <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-[54%] flex justify-center">
              <div className="relative w-[min(72vw,420px)] md:w-[min(42vw,420px)]">
                <img
                  src={heroCutout}
                  alt="Synnova Tocloe — portrait"
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
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-foreground transition-transform hover:scale-110 hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO & GALLERY */}
      <section className="bg-[#f3f3f3] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1600px] rounded-[2.25rem] border border-white/35 bg-white/10 px-5 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl md:px-8 md:py-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full border border-black/10 bg-white/20 px-4 py-2 text-xs text-black/70 backdrop-blur-md">
                Portfolio & Galerie
              </span>
              <h2 className="mt-5 font-body text-[clamp(3rem,7vw,6.8rem)] font-medium leading-[0.92] tracking-[-0.06em] text-black">
                Ses réalisations concrètes.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-black/60 md:text-base">
                Photos, événements, productions et contenus créés autour de son univers public et créatif.
              </p>
            </div>
            <p className="max-w-xs text-sm leading-6 text-black/60">
              Galerie filtrable, images du Drive en grille propre et sélection pensée pour les faits marquants.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {(["Tous", "Événements", "Cinéma", "Communication", "Entrepreneuriat"] as GalleryCategory[]).map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                    active
                      ? "border-black/30 bg-black text-white"
                      : "border-black/10 bg-white/20 text-black/70 hover:border-black/20 hover:bg-white/30"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-black/10 pt-4 text-[11px] uppercase tracking-[0.24em] text-black/40">
            <span>{filteredGallery.length} éléments affichés</span>
            <span>Images du Drive et réalisations triées par thème</span>
          </div>

          <div className="mt-8 columns-2 gap-3 md:columns-3 xl:columns-5 2xl:columns-6">
            {filteredGallery.map((item) => (
              <article
                key={`${item.title}-${item.img}`}
                className="mb-3 break-inside-avoid overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/12 p-1.5 shadow-[0_10px_24px_rgba(0,0,0,0.05)] backdrop-blur-md"
              >
                <div className="overflow-hidden rounded-[1.2rem]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
                <div className="px-2 pb-1 pt-2">
                  <p className="text-xs font-semibold text-black">{item.title}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-black/40">{item.category}</p>
                  <p className="mt-1 text-[11px] leading-5 text-black/55">{item.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ÉVÉNEMENTS MARQUANTS */}
      <section className="px-5 py-6 md:px-10">
        <div className="mx-auto max-w-[1450px]">
          <Reveal>
            <div className="rounded-3xl bg-card p-8 md:p-10">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-script text-2xl text-[color:var(--gold)]">Événements marquants</p>
                  <h2 className="mt-2 font-display text-3xl font-black uppercase tracking-tight md:text-5xl">
                    Des moments qui comptent.
                  </h2>
                </div>
                <p className="max-w-xs text-sm leading-6 text-foreground/65">
                  Festival International des Arts du Bénin et autres temps forts qui structurent le portfolio.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-[1.3fr_1fr_1fr]">
                <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)] backdrop-blur-2xl md:col-span-1">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,120,0.72),transparent_35%),radial-gradient(circle_at_78%_72%,rgba(255,196,52,0.40),transparent_42%),radial-gradient(circle_at_50%_50%,rgba(255,223,114,0.18),transparent_55%)] blur-3xl opacity-95" aria-hidden />
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={FEATURED_EVENTS[0].img} alt={FEATURED_EVENTS[0].title} className="h-full w-full object-cover" />
                  </div>
                  <div className="relative p-5">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/70">Festival</p>
                    <h3 className="mt-2 font-display text-2xl text-white">{FEATURED_EVENTS[0].title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/80">{FEATURED_EVENTS[0].copy}</p>
                  </div>
                </article>

                {FEATURED_EVENTS.slice(1).map((eventItem) => (
                  <article key={eventItem.title} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 text-white shadow-[0_20px_50px_rgba(0,0,0,0.14)] backdrop-blur-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_18%,rgba(255,215,120,0.62),transparent_38%),radial-gradient(circle_at_75%_80%,rgba(255,196,52,0.34),transparent_44%),radial-gradient(circle_at_50%_50%,rgba(255,223,114,0.14),transparent_58%)] blur-3xl opacity-95" aria-hidden />
                    <div className="relative overflow-hidden rounded-[1.25rem]">
                      <img src={eventItem.img} alt={eventItem.title} className="aspect-[4/5] h-full w-full object-cover" />
                    </div>
                    <div className="relative p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/65">Événement</p>
                      <h3 className="mt-2 font-display text-xl text-white">{eventItem.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-white/78">{eventItem.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRESSE & MENTIONS */}
      <section className="px-5 py-3 md:px-10 md:py-4">
        <div className="mx-auto max-w-[1600px]">
          <Reveal delay={100}>
            <div className="rounded-3xl bg-accent p-4 text-accent-foreground md:p-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="font-script text-lg text-white md:text-xl">Presse & Mentions</p>
                  <h2 className="mt-1.5 font-display text-xl font-black uppercase tracking-tight md:text-3xl">
                    Résonance média.
                  </h2>
                </div>
              </div>

              <div className="mt-4 grid gap-x-1.5 gap-y-2 sm:grid-cols-2">
                {PRESS_MENTIONS.map((item) => (
                  <article key={item.title} className="w-full overflow-hidden rounded-[1rem] border border-white/10 bg-black/18 p-[4px] shadow-[0_10px_20px_rgba(0,0,0,0.1)] backdrop-blur-xl">
                    <div className="flex h-[min(80vh,420px)] items-center justify-center overflow-hidden rounded-[0.8rem] bg-black/10">
                      <img
                        src={item.img}
                        alt={item.title}
                        className={`h-full w-full ${item.title === "Miss photogénique 2022" ? "object-cover" : "object-contain p-2"}`}
                      />
                    </div>
                    <div className="p-[5px]">
                      <p className="text-[8px] uppercase tracking-[0.28em] text-white/45">{item.source}</p>
                      <h3 className="mt-1 font-display text-sm text-white md:text-base">{item.title}</h3>
                      <p className="mt-1 text-[10px] leading-4 text-white/70">{item.copy}</p>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-2 rounded-full bg-black px-3 py-1.5 text-[9px] uppercase tracking-[0.22em] text-white transition hover:translate-y-[-1px] hover:bg-black/85"
                      >
                        Voir la source
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
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
