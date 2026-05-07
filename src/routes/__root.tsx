import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { ChatBot } from "@/components/rentkart/AIChat/ChatBot";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Error 404</p>
        <h1 className="mt-3 font-display text-6xl font-semibold text-foreground">Page not found</h1>
        <p className="mt-3 text-base text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Back to The RentVerse
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { name: "theme-color", content: "#FF6B1A" },
      { title: "The RentVerse — India's Premier Rental Marketplace" },
      {
        name: "description",
        content:
          "Rent premium fashion, lehengas, sherwanis, accessories and more from verified Indian sellers. Refundable hold, transparent pricing, doorstep delivery.",
      },
      { name: "author", content: "The RentVerse" },
      { property: "og:title", content: "The RentVerse — India's Premier Rental Marketplace" },
      {
        property: "og:description",
        content: "Premium fashion rentals across India with refundable hold and verified sellers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The RentVerse — India's Premier Rental Marketplace" },
      { name: "description", content: "RentVerse is a premium Indian rental marketplace for fashion and more, connecting renters and listers." },
      { property: "og:description", content: "RentVerse is a premium Indian rental marketplace for fashion and more, connecting renters and listers." },
      { name: "twitter:description", content: "RentVerse is a premium Indian rental marketplace for fashion and more, connecting renters and listers." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b7dcb433-40ea-406b-af16-9eb9f7fb899a/id-preview-b8bd195a--d4e3da9f-6483-4f08-8338-b570a9b26e7d.lovable.app-1777805301726.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b7dcb433-40ea-406b-af16-9eb9f7fb899a/id-preview-b8bd195a--d4e3da9f-6483-4f08-8338-b570a9b26e7d.lovable.app-1777805301726.png" },
    ],
    links: [
      { rel: "stylesheet", href: "/src/styles.css" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
  return (
    <>
      <Outlet />
      <ChatBot />
    </>
  );
}
