import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { SOCIALS } from "@/lib/synnova";

export function Footer() {
  const year = new Date().getFullYear();
  const scrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative mt-32 overflow-hidden bg-ink text-foreground">
      {/* Massive headline */}
      <div className="mx-auto max-w-[1600px] px-5 pt-20 md:px-10 md:pt-28">
        <div className="flex items-start justify-between gap-6">
          <p className="font-script text-2xl text-[color:var(--gold)] md:text-3xl">
            Travaillons ensemble
          </p>
          <button
            onClick={scrollTop}
            aria-label="Retour en haut"
            className="group hidden items-center gap-2 text-xs uppercase tracking-[0.3em] text-foreground/60 transition-colors hover:text-[color:var(--gold)] md:inline-flex"
          >
            <span>Go back to top</span>
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        <h2 className="mt-6 font-display font-black uppercase leading-[0.82] tracking-[-0.04em] text-foreground text-[clamp(4.5rem,18vw,18rem)]">
          Restons<br />
          <span className="italic font-normal">en contact</span>
        </h2>

        <Link
          to="/contact"
          search={{ sujet: undefined }}
          className="group mt-10 inline-flex items-center gap-3 border-b border-foreground/30 pb-2 text-sm uppercase tracking-[0.3em] text-foreground transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
        >
          <span>Démarrer une conversation</span>
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>

      {/* Divider */}
      <div className="mt-20 h-px w-full bg-foreground/15" />

      {/* Columns */}
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-14 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <p className="font-script text-3xl text-[color:var(--gold)]">Synnova</p>
          <p className="mt-3 font-display text-2xl">Belvine Kybarance Tocloe</p>
          <p className="mt-4 max-w-sm text-sm text-foreground/60">
            Animatrice · Communicatrice · Actrice · Entrepreneuse sociale. Basée à Grand-Popo, Bénin 🇧🇯.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40">Naviguer</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/" className="hover:text-[color:var(--gold)]">Accueil</Link></li>
            <li><Link to="/a-propos" className="hover:text-[color:var(--gold)]">À propos</Link></li>
            <li><Link to="/univers" className="hover:text-[color:var(--gold)]">Mes univers</Link></li>
            <li><Link to="/portfolio" className="hover:text-[color:var(--gold)]">Portfolio</Link></li>
            <li><Link to="/contact" search={{ sujet: undefined }} className="hover:text-[color:var(--gold)]">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40">Follow</p>
          <ul className="mt-5 space-y-3 text-sm">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 uppercase tracking-[0.2em] hover:text-[color:var(--gold)]"
                >
                  <span>{s.name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40">Contact</p>
          <p className="mt-5 text-sm text-foreground/80">Grand-Popo, Bénin</p>
          <p className="mt-2 text-sm text-foreground/60">Disponible partout sur demande.</p>
          <Link
            to="/contact"
            search={{ sujet: undefined }}
          className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-[color:var(--gold)] hover:underline"
        >
          Écrire un message <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-foreground/15">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 px-5 py-6 text-xs uppercase tracking-[0.25em] text-foreground/50 md:flex-row md:px-10">
          <p>© {year} Synnova Tocloe — Tous droits réservés</p>
          <p className="font-script text-base normal-case tracking-normal text-[color:var(--gold)]">
            Une femme en chemin.
          </p>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 hover:text-[color:var(--gold)] md:hidden"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
