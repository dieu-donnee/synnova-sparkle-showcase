import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/univers", label: "Mes univers" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <Link to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-[color:var(--gold)]-foreground font-display text-lg shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--primary)_60%,transparent)]">
            S
          </span>
          <span className="font-display text-xl tracking-tight">
            Synnova<span className="text-[color:var(--gold)]">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-[color:var(--gold)]" }}
              className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-[color:var(--gold)]
                         after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary
                         after:transition-all hover:after:w-full data-[status=active]:after:w-full"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            search={{ sujet: undefined }}
            className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-all hover:bg-primary hover:shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
          >
            Me contacter
          </Link>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/70 backdrop-blur md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 bottom-0 h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-background/95 backdrop-blur-xl border-b border-border`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              {...(l.to === "/contact" ? { search: { sujet: undefined } } : {})}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-[color:var(--gold)] bg-accent/40" }}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-medium text-foreground/80"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
