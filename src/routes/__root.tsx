import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-script text-3xl text-primary">Oups…</p>
        <h1 className="mt-2 font-display text-7xl">404</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm text-background hover:bg-primary">
          Revenir à l'accueil
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Cette page n'a pas pu se charger</h1>
        <p className="mt-2 text-sm text-muted-foreground">Réessayez ou revenez à l'accueil.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
          >
            Réessayer
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm">Accueil</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Synnova Tocloe — Animatrice & Communicatrice au Bénin" },
      {
        name: "description",
        content:
          "Synnova Belvine Kybarance Tocloe — animatrice, communicatrice, actrice et entrepreneuse sociale à Grand-Popo, Bénin. Découvrez son univers.",
      },
      { name: "author", content: "Synnova Tocloe" },
      { name: "theme-color", content: "#C2185B" },
      { property: "og:title", content: "Synnova Tocloe — Animatrice & Communicatrice au Bénin" },
      { property: "og:description", content: "Synnova's Vibrant Sphere is a personal branding website showcasing a public figure's diverse talents and social impact." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Synnova Tocloe — Animatrice & Communicatrice au Bénin" },
      { name: "twitter:description", content: "Synnova's Vibrant Sphere is a personal branding website showcasing a public figure's diverse talents and social impact." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d3a5d4e5-278d-4e4c-bbbf-8e288b5c51e9/id-preview-e5bf50eb--3befa3ee-63fd-439f-b2e3-dd761a1f7915.lovable.app-1778544945298.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d3a5d4e5-278d-4e4c-bbbf-8e288b5c51e9/id-preview-e5bf50eb--3befa3ee-63fd-439f-b2e3-dd761a1f7915.lovable.app-1778544945298.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700&family=Kaushan+Script&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
