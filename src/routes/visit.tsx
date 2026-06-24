import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import storefront from "@/assets/storefront.jpg";
import mapImg from "@/assets/map-bandra.jpg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Just Dollar Shop" },
      { name: "description", content: "Find us on Lane 7, Bandra West, Mumbai. Open Tuesday through Sunday." },
      { property: "og:title", content: "Visit Us — Just Dollar Shop" },
      { property: "og:description", content: "Find us on Lane 7, Bandra West, Mumbai." },
    ],
  }),
  component: Visit,
});

const hours = [
  { day: "Tuesday", time: "10:00 — 20:00" },
  { day: "Wednesday", time: "10:00 — 20:00" },
  { day: "Thursday", time: "10:00 — 20:00" },
  { day: "Friday", time: "10:00 — 21:00" },
  { day: "Saturday", time: "10:00 — 21:00" },
  { day: "Sunday", time: "11:00 — 19:00" },
  { day: "Monday", time: "Closed for naps" },
];

const tips = [
  { n: "01", title: "Take an auto", body: "Ask for the lane behind St. Andrew's Church. Everyone knows it." },
  { n: "02", title: "Come Sunday morning", body: "Quiet aisles, fresh coffee from next door, the best browsing window." },
  { n: "03", title: "Bring the kids", body: "There's a reading nook, a play rug and snacks. Always snacks." },
];

function Visit() {
  return (
    <>
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <span className="font-mono text-primary font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-5 block animate-slide-up">
            The Shopfront
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] max-w-4xl animate-slide-up [animation-delay:100ms]">
            COME SAY <span className="font-serif italic font-semibold text-primary lowercase tracking-normal">hello</span> IN PERSON.
          </h1>
        </div>
      </section>

      {/* Storefront image */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal>
            <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden">
              <img src={storefront} alt="Just Dollar Shop storefront in Bandra" width={1200} height={800} loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Address & Hours */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Where</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter leading-tight mb-8">
              Lane 7, Near St. Andrew's Church, Bandra West, Mumbai 400050.
            </h2>
            <div className="space-y-1 font-mono text-sm text-muted-foreground">
              <p>HELLO@JUSTDOLLARSHOP.IN</p>
              <p>+91 98200 12345</p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">When</p>
            <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between py-3.5 font-mono text-sm">
                  <span className="font-bold">{h.day.toUpperCase()}</span>
                  <span className="text-muted-foreground">{h.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal>
            <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-secondary/30">
              <img src={mapImg} alt="Map of Bandra West" width={1200} height={800} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 grid place-items-center pointer-events-none">
                <div className="bg-foreground text-background px-5 py-3 rounded-full font-bold text-sm uppercase tracking-wider shadow-2xl">
                  ✦ You are here
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 sm:py-24 bg-foreground text-background rounded-[40px] mx-3 sm:mx-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tighter mb-12">Visit Tips, From Us.</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {tips.map((t, i) => (
              <Reveal key={t.n} delay={i * 120}>
                <div className="border-t border-background/15 pt-6">
                  <span className="font-mono text-xs text-secondary">{t.n}</span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-3 mb-3">{t.title}</h3>
                  <p className="text-background/70">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}