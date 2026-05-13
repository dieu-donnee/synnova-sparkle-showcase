import { createFileRoute, Link } from "@tanstack/react-router";
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
      { title: "Synnova Tocloe — Animatrice & Communicatrice à Grand-Popo, Bénin" },
      {
        name: "description",
        content:
          "Site officiel de Synnova Belvine Kybarance Tocloe — animatrice live, communicatrice digitale, actrice et entrepreneuse sociale au Bénin.",
      },
      { property: "og:title", content: "Synnova Tocloe — Une femme en chemin" },
      { property: "og:description", content: "Animatrice · Communicatrice · Actrice · Entrepreneuse sociale." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative h-[100svh] overflow-hidden bg-secondary text-secondary-foreground">
        <div className="absolute inset-0 bg-mesh-rose opacity-60" aria-hidden />
        <div className="absolute inset-0 grain" aria-hidden />

        <div className="relative mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-16 pt-24 md:grid-cols-12 md:gap-12 md:px-10 md:pt-28">
          <div className="md:col-span-7 animate-fade-up">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-[color:var(--gold)]">
              <span className="h-px w-10 bg-[color:var(--gold)]" />
              Grand-Popo · Bénin
            </p>
            <p className="mt-6 font-script text-4xl text-[color:var(--gold)] md:text-5xl">Bonjour, je suis</p>
            <h1 className="mt-2 font-hero text-[clamp(4rem,12vw,10rem)] font-medium italic leading-[0.88] tracking-tight text-balance">
              Synno<span className="not-italic text-[color:var(--gold)]">v</span>a<span className="not-italic text-primary">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-balance text-base text-secondary-foreground/80 md:text-lg">
              Animatrice · Communicatrice · Actrice · Entrepreneuse sociale.
              Une femme en chemin, portée par la création, la parole et l'engagement.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/univers"
                className="group relative overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_20px_50px_-20px_color-mix(in_oklab,var(--primary)_70%,transparent)] transition-transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">Découvrir mon univers →</span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary via-[color:var(--gold)] to-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-secondary-foreground/30 px-7 py-3.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              >
                Me contacter
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.25em] text-secondary-foreground/60">
              <span>Journalisme</span><span>·</span>
              <span>Animation live</span><span>·</span>
              <span>Cinéma</span><span>·</span>
              <span>Régie plateau</span><span>·</span>
              <span>Comm. digitale</span><span>·</span>
              <span>Éco-emballages</span>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl">
              <img
                src={heroImg}
                alt="Portrait de Synnova Tocloe"
                width={1080}
                height={1440}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-background/15 px-4 py-3 backdrop-blur-md ring-1 ring-white/20">
                <span className="font-display text-sm">Belvine K. Tocloe</span>
                <span className="text-xs text-[color:var(--gold)]">@_synnova</span>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 hidden h-32 w-32 animate-float rounded-full bg-[color:var(--gold)]/30 blur-2xl md:block" />
            <div className="pointer-events-none absolute -bottom-8 -left-6 hidden h-40 w-40 animate-float rounded-full bg-primary/40 blur-2xl md:block" />
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-t border-secondary-foreground/15 bg-secondary py-5">
          <div className="flex animate-marquee whitespace-nowrap gap-12 font-display text-2xl text-secondary-foreground/70 md:text-3xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-12">
                {[
                  "Animatrice",
                  "✦",
                  "Communicatrice",
                  "✦",
                  "Actrice",
                  "✦",
                  "Entrepreneuse sociale",
                  "✦",
                  "UReport Grand-Popo",
                  "✦",
                  "Festival des Arts du Bénin",
                  "✦",
                ].map((t, j) => (
                  <span key={`${i}-${j}`} className={t === "✦" ? "text-[color:var(--gold)]" : ""}>
                    {t}
                  </span>
                ))}
              </div>
            ))}
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
