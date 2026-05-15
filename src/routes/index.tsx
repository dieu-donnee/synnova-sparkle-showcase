import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Sparks, Flash, Heart, Microphone, Camera } from "iconoir-react";
import { GranimCanvas } from "@/components/GranimCanvas";
import heroImg from "@/assets/synnova-hero.jpg";
import portrait2 from "@/assets/synnova-portrait-2.jpg";
import animationImg from "@/assets/synnova-animation.jpg";
import cinemaImg from "@/assets/synnova-cinema.jpg";
import ecoImg from "@/assets/synnova-eco.jpg";
import grandpopoImg from "@/assets/synnova-grandpopo.jpg";
import { Reveal } from "@/components/Reveal";
import { FACETS, SOCIALS } from "@/lib/synnova";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Synnova Tocloe — Animatrice & Communicatrice au Bénin" },
      {
        name: "description",
        content:
          "Site officiel de Synnova Belvine Kybarance Tocloe — animatrice live, communicatrice digitale, actrice et entrepreneuse sociale au Bénin.",
      },
      { property: "og:title", content: "Synnova Tocloe — Une femme en chemin" },
      { property: "og:description", content: "Animatrice · Communicatrice · Actrice · Entrepreneuse sociale." },
      { property: "og:image", content: heroImg },
      { property: "og:url", content: "https://synnova-sparkle-showcase.lovable.app/" },
    ],
    links: [
      { rel: "canonical", href: "https://synnova-sparkle-showcase.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Synnova Belvine Kybarance Tocloe",
          alternateName: "Synnova Tocloe",
          jobTitle: "Animatrice, Communicatrice, Actrice, Entrepreneuse sociale",
          url: "https://synnova-sparkle-showcase.lovable.app/",
          image: "https://synnova-sparkle-showcase.lovable.app" + heroImg,
          address: { "@type": "PostalAddress", addressLocality: "Grand-Popo", addressCountry: "BJ" },
          sameAs: [
            "https://facebook.com/synnovalumiere",
            "https://tiktok.com/@_synnova",
            "https://instagram.com/_synnova",
            "https://bj.linkedin.com/in/synnova-belvine-kybarance-tocloe-3882a9232",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ============== HERO — Architect editorial ============== */}
      <section className="relative h-[100svh] min-h-[680px] overflow-hidden bg-ink text-secondary-foreground">
        {/* Full-bleed professional photo as background */}
        <img
          src={heroImg}
          alt="Portrait de Synnova Tocloe"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%] scale-105 animate-fade-in"
        />
        {/* Layered overlays for editorial depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" aria-hidden />
        <div className="absolute inset-0 grain opacity-60" aria-hidden />

        {/* Vertical side label — left */}
        <div className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 md:block">
          <p className="origin-left -rotate-90 whitespace-nowrap text-[10px] uppercase tracking-[0.5em] text-[color:var(--gold)]/80">
            Portfolio · 2024 — 2026
          </p>
        </div>
        {/* Vertical side label — right */}
        <div className="pointer-events-none absolute right-5 top-1/2 hidden -translate-y-1/2 md:block">
          <p className="origin-right rotate-90 whitespace-nowrap text-[10px] uppercase tracking-[0.5em] text-secondary-foreground/60">
            Grand-Popo · Bénin · 06°16′N
          </p>
        </div>

        {/* Top meta bar */}
        <div className="absolute inset-x-0 top-24 z-10 px-5 md:px-16">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between text-[10px] uppercase tracking-[0.4em] text-secondary-foreground/70">
            <span className="flex items-center gap-3">
              <span className="h-px w-8 bg-[color:var(--gold)]" />
              <span className="text-[color:var(--gold)]">N° 001</span>
              <span>—</span>
              <span>Une femme en chemin</span>
            </span>
            <span className="hidden md:inline">EST. 1998 · BJ</span>
          </div>
        </div>

        {/* Main editorial composition */}
        <div className="relative mx-auto grid h-full max-w-[1400px] grid-cols-12 grid-rows-6 gap-x-6 px-5 pb-32 pt-40 md:px-16 md:pt-48">
          {/* Massive name — bottom-left, architect style */}
          <div className="col-span-12 row-start-4 row-span-3 self-end animate-fade-up md:col-span-9">
            <p className="font-script text-3xl text-[color:var(--gold)] md:text-4xl">Bonjour, je suis</p>
            <h1 className="mt-1 font-hero text-[clamp(4.5rem,14vw,13rem)] font-medium leading-[0.82] tracking-[-0.04em] text-balance text-white">
              <span className="block italic">Synnova</span>
              <span className="block not-italic">
                Tocloe<span className="text-[color:var(--gold)]">.</span>
              </span>
              <span className="sr-only"> — Animatrice & Communicatrice au Bénin</span>
            </h1>
          </div>

          {/* Right-side editorial paragraph + actions */}
          <div className="col-span-12 row-start-3 row-span-2 self-end md:col-span-4 md:col-start-9 md:row-start-3 md:row-span-3 animate-fade-up">
            <div className="border-l border-[color:var(--gold)]/50 pl-5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[color:var(--gold)]">À propos</p>
              <p className="mt-4 max-w-md text-balance text-sm text-secondary-foreground/85 md:text-base">
                Animatrice · Communicatrice · Actrice · Entrepreneuse sociale.
                Portée par la création, la parole et l'engagement.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/univers"
                  className="group inline-flex items-center gap-2 rounded-none border border-[color:var(--gold)] bg-[color:var(--gold)] px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-ink transition-all hover:bg-transparent hover:text-[color:var(--gold)]"
                >
                  Mon univers
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-secondary-foreground/30 px-6 py-3 text-xs font-medium uppercase tracking-[0.25em] text-secondary-foreground transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom corner index — architect signature */}
        <div className="pointer-events-none absolute bottom-24 right-5 hidden text-right md:block md:right-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-secondary-foreground/50">Index</p>
          <p className="mt-1 font-display text-3xl text-white">
            04 <span className="text-[color:var(--gold)]/60">/</span> <span className="text-secondary-foreground/50">04</span>
          </p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-secondary-foreground/50">Disciplines</p>
        </div>

        {/* Marquee — full-width bottom band, hero stays exactly 100vh */}
        <div className="absolute inset-x-0 bottom-0 overflow-hidden rounded-[5px] border border-[color:var(--gold)]/30 bg-black py-4 shadow-[0_0_40px_-8px_color-mix(in_oklab,var(--gold)_60%,transparent),0_0_80px_-20px_color-mix(in_oklab,var(--primary)_50%,transparent)] ring-1 ring-[color:var(--gold)]/20">
          <GranimCanvas className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_70%)]" aria-hidden />
          <div className="relative flex animate-marquee whitespace-nowrap gap-10 font-blackops text-lg uppercase text-white md:text-xl">
            {Array.from({ length: 2 }).map((_, i) => {
              const items: Array<{ type: "text"; value: string } | { type: "icon"; Icon: typeof Star }> = [
                { type: "text", value: "Animatrice" },
                { type: "icon", Icon: Microphone },
                { type: "text", value: "Communicatrice" },
                { type: "icon", Icon: Sparks },
                { type: "text", value: "Actrice" },
                { type: "icon", Icon: Camera },
                { type: "text", value: "Entrepreneuse sociale" },
                { type: "icon", Icon: Heart },
                { type: "text", value: "UReport Grand-Popo" },
                { type: "icon", Icon: Flash },
                { type: "text", value: "Festival des Arts du Bénin" },
                { type: "icon", Icon: Star },
              ];
              return (
                <div key={i} className="flex items-center gap-10">
                  {items.map((it, j) =>
                    it.type === "icon" ? (
                      <it.Icon
                        key={`${i}-${j}`}
                        className="h-5 w-5 shrink-0 text-[color:var(--gold)] drop-shadow-[0_0_8px_color-mix(in_oklab,var(--gold)_70%,transparent)]"
                        aria-hidden
                      />
                    ) : (
                      <span
                        key={`${i}-${j}`}
                        className="text-white drop-shadow-[0_0_10px_color-mix(in_oklab,var(--gold)_45%,transparent)]"
                      >
                        {it.value}
                      </span>
                    )
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== SIGNATURE QUOTE ============== */}
      <section className="relative px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="font-script text-2xl text-primary">Ma signature</p>
            <blockquote className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight text-balance">
              « Je suis une femme en chemin,
              <span className="block italic text-gradient-rose"> portée par la création, la parole </span>
              et l'engagement. »
            </blockquote>
            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Synnova B. K. Tocloe
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============== FACETS ============== */}
      <section className="bg-accent/30 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Quatre facettes</p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl">Une femme, plusieurs <em className="text-primary">vies</em>.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              De la scène au plateau, du micro à l'atelier — chaque univers est un terrain d'expression et d'engagement.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FACETS.map((f, i) => (
              <Reveal key={f.slug} delay={i * 100}>
                <Link
                  to="/univers"
                  hash={f.slug}
                  className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_24px_60px_-24px_color-mix(in_oklab,var(--primary)_50%,transparent)]"
                >
                  <span className="font-script text-3xl text-primary">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-2xl">{f.title}</h3>
                  <p className="mt-1 text-sm italic text-muted-foreground">{f.tagline}</p>
                  <p className="mt-4 text-sm text-foreground/70">{f.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm text-primary transition-transform group-hover:translate-x-1">
                    Explorer →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== MOMENTS / STATS ============== */}
      <section className="relative overflow-hidden px-5 py-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Moments forts</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Des scènes, des plateaux, <span className="text-gradient-rose">une voix</span>.</h2>
              <p className="mt-5 max-w-lg text-muted-foreground">
                Des projets concrets, des engagements durables. Voici quelques jalons qui racontent où je suis passée — et où je vais.
              </p>

              <dl className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { k: "Festival", v: "Arts du Bénin", sub: "Animatrice · actrice · régie" },
                  { k: "UReport", v: "Grand-Popo", sub: "Coordonnatrice" },
                  { k: "Formation", v: "UCAE", sub: "Licence pro Journalisme" },
                  { k: "Éco-projet", v: "Emballages bio", sub: "Créatrice & confectionneuse" },
                ].map((s) => (
                  <div key={s.k} className="rounded-xl border border-border bg-card p-5">
                    <dt className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{s.k}</dt>
                    <dd className="mt-2 font-display text-xl">{s.v}</dd>
                    <p className="mt-1 text-xs text-muted-foreground">{s.sub}</p>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative grid grid-cols-6 grid-rows-6 gap-3 [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
                <div className="col-span-4 row-span-4 overflow-hidden rounded-2xl">
                  <img src={portrait2} alt="Synnova rayonnante" loading="lazy" width={1024} height={1280} />
                </div>
                <div className="col-span-2 row-span-3 overflow-hidden rounded-2xl">
                  <img src={animationImg} alt="Synnova animatrice live" loading="lazy" width={1024} height={1280} />
                </div>
                <div className="col-span-2 row-span-3 overflow-hidden rounded-2xl">
                  <img src={ecoImg} alt="Emballages biodégradables" loading="lazy" width={1024} height={1280} />
                </div>
                <div className="col-span-6 row-span-2 overflow-hidden rounded-2xl">
                  <img src={grandpopoImg} alt="Grand-Popo, Bénin" loading="lazy" width={1600} height={900} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== CTA SOCIAL ============== */}
      <section className="relative mx-5 mb-10 overflow-hidden rounded-[2.5rem] bg-secondary px-5 py-20 text-secondary-foreground md:mx-10 md:px-16 md:py-28">
        <div className="absolute inset-0 bg-mesh-rose opacity-40" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="font-script text-3xl text-[color:var(--gold)]">Restons connecté·e·s</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">Suivez mon quotidien.</h2>
            <p className="mt-4 max-w-md text-secondary-foreground/75">
              Coulisses d'événements, projets en cours, engagements et inspirations — tout se passe ici.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 self-end">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-secondary-foreground/20 bg-secondary-foreground/5 px-5 py-4 transition-colors hover:border-[color:var(--gold)] hover:bg-secondary-foreground/10"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-secondary-foreground/60">{s.name}</p>
                    <p className="font-display text-lg">{s.handle}</p>
                  </div>
                  <span className="text-[color:var(--gold)] transition-transform group-hover:translate-x-1">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cinema strip */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={cinemaImg}
          alt="Synnova sur un plateau de cinéma"
          loading="lazy"
          width={1024}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/40 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 md:px-10">
          <Reveal className="max-w-xl text-secondary-foreground">
            <p className="font-script text-2xl text-[color:var(--gold)]">Cinéma</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Devant et derrière la caméra.</h2>
            <p className="mt-4 text-secondary-foreground/80">
              Actrice, régisseuse plateau et animatrice live — un même goût de raconter, de mettre en lumière, de fédérer.
            </p>
            <Link
              to="/portfolio"
              className="mt-6 inline-flex rounded-full border border-[color:var(--gold)] px-6 py-3 text-sm text-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-secondary"
            >
              Voir le portfolio →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
