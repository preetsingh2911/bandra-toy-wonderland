import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-foreground pt-20 pb-10 rounded-t-[40px] sm:rounded-t-[60px] mt-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tighter leading-none mb-6">
              COME SAY <br />
              <span className="font-serif italic font-semibold text-primary lowercase tracking-normal">hello.</span>
            </h3>
            <p className="text-foreground/70 max-w-sm">
              We're open six days a week and Sundays for browsing — sometimes with chai.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-3">Find Us</p>
            <p className="font-bold leading-snug">
              Lane 7, Near St. Andrew's Church,<br />Bandra West, Mumbai 400050
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-3">Hours</p>
            <p className="font-mono text-sm leading-relaxed">
              TUE — SUN<br />
              10:00 — 20:00<br />
              <span className="text-foreground/50">MON — Closed</span>
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-3">Elsewhere</p>
            <ul className="space-y-2 font-bold text-sm">
              <li>Instagram</li>
              <li>WhatsApp</li>
              <li>Journal</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-foreground/10 pt-10">
          <div className="max-w-xs">
            <Link to="/" className="font-extrabold text-xl tracking-tighter uppercase block mb-2">
              Just Dollar Shop
            </Link>
            <p className="text-xs text-foreground/60">
              The world of play, curated in Bandra. No batteries required for the heart.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60">
            <span>© {new Date().getFullYear()} JDS Bandra</span>
            <span>Made with chai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}