import { Link } from "@tanstack/react-router";
import { SOCIALS } from "@/lib/synnova";

export function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 bg-mesh-rose opacity-30" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-script text-3xl text-[color:var(--gold)]">Synnova</p>
          <h3 className="mt-1 font-display text-3xl">Belvine Kybarance Tocloe</h3>
          <p className="mt-4 max-w-sm text-sm text-secondary-foreground/70">
            Animatrice · Communicatrice · Actrice · Entrepreneuse sociale.
            Basée à Grand-Popo, Bénin 🇧🇯.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-secondary-foreground/60">Naviguer</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[color:var(--gold)]">Accueil</Link></li>
            <li><Link to="/a-propos" className="hover:text-[color:var(--gold)]">À propos</Link></li>
            <li><Link to="/univers" className="hover:text-[color:var(--gold)]">Mes univers</Link></li>
            <li><Link to="/portfolio" className="hover:text-[color:var(--gold)]">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-[color:var(--gold)]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-secondary-foreground/60">Me suivre</p>
          <ul className="mt-4 space-y-2 text-sm">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[color:var(--gold)]"
                >
                  <span>{s.name}</span>
                  <span className="text-secondary-foreground/50">→</span>
                  <span className="text-secondary-foreground/50">{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-secondary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-secondary-foreground/60 md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Synnova Belvine Kybarance Tocloe — Tous droits réservés.</p>
          <p className="font-script text-base text-[color:var(--gold)]">Une femme en chemin.</p>
        </div>
      </div>
    </footer>
  );
}
