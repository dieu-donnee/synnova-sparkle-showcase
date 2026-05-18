import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/univers", label: "Mes univers" },
  { to: "/portfolio", label: "Portfolio" },
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5">
      <div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto] items-center gap-3 md:grid-cols-[auto_1fr_auto]">
        <div className="hidden md:flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f6efe5]/95 px-4 py-2 text-sm text-black shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            Disponible pour projets
          </span>
        </div>

        <div className="flex justify-start md:justify-center">
          <div className={`flex items-center gap-2 rounded-full border border-black/10 bg-[#f6efe5]/95 px-3 py-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] backdrop-blur-xl ${scrolled ? "scale-[0.99]" : ""}`}>
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-black text-white font-display text-lg"
            >
              S
            </Link>
            <nav className="hidden items-center gap-5 md:flex">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-black" }}
                  className="text-sm font-medium text-black/75 transition-colors hover:text-black"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="hidden md:flex justify-end">
          <Link
            to="/contact"
            search={{ sujet: undefined }}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f6efe5]/95 px-4 py-2 text-sm font-medium text-black shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all hover:-translate-y-0.5 hover:bg-[#fbf5ee]"
          >
            <span className="h-2.5 w-2.5 rounded-sm bg-black" />
            Contact
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-[#f6efe5]/95 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-black transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 bottom-0 h-0.5 w-5 bg-black transition ${open ? "-translate-y-1 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } mt-3 rounded-3xl border border-black/10 bg-[#f6efe5]/95 px-2 shadow-[0_14px_36px_rgba(0,0,0,0.08)] backdrop-blur-xl`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-black bg-black/5" }}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 font-medium text-black/75"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
