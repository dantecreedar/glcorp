import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const smoothScrollToId = (id: string) => {
  const target = document.getElementById(id);
  if (!target) return;

  const start = window.scrollY;
  const end = target.getBoundingClientRect().top + window.scrollY - 80;
  const distance = end - start;
  const duration = 700;
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, start + distance * eased);
    if (elapsed < duration) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

function App() {
  return (
    <div className="relative min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 left-10 h-40 w-40 rounded-full bg-black/5 float-slow" />
        <div className="absolute top-32 right-16 h-56 w-56 rounded-full bg-black/10 float-fast" />
        <div className="absolute bottom-24 left-1/4 h-48 w-48 rounded-full bg-black/5 float-slow" />
        <div className="absolute bottom-12 right-10 h-32 w-32 rounded-full bg-black/10 float-fast" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-24 w-72 -translate-x-1/2 border-t border-black/10" />
        <div className="absolute left-16 bottom-20 h-2 w-80 border-t border-black/10" />
        <div className="absolute right-8 bottom-32 h-28 w-28 rounded-full border border-black/10" />
        <div className="absolute right-1/3 top-40 h-16 w-64 border-t border-black/8" />
      </div>
      <header className="fixed left-0 right-0 top-0 z-20 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-4">
          <div className="text-sm font-semibold tracking-[0.18em]">
            GL &amp; CO. Construcciones
          </div>
          <div className="flex flex-wrap gap-3 font-semibold">
            {[
              { id: "inicio", label: "Inicio" },
              { id: "nosotros", label: "Nosotros" },
              { id: "contacto", label: "Contacto" },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => smoothScrollToId(item.id)}
                className="btn-nav rounded-full px-4 py-2 text-[11px] tracking-[0.22em] transition-all hover:border-black/20 hover:bg-black hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-16 pt-24">
        <section id="inicio" className="scroll-mt-28">
          <Home />
        </section>
      </main>

      <section className="relative overflow-hidden bg-[#1d1d1f] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full border border-white/15" />
          <div className="absolute right-10 top-6 h-24 w-64 border-t border-white/10" />
          <div className="absolute -right-20 bottom-10 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute left-1/3 bottom-4 h-2 w-72 border-t border-white/10" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
          {[
            "Planeacion detallada y control de avance.",
            "Materiales certificados y mano de obra calificada.",
            "Transparencia total en costos y tiempos.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        <section id="nosotros" className="scroll-mt-28">
          <About />
        </section>
      </main>

      <section className="relative overflow-hidden bg-[#1d1d1f] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-8 top-6 h-32 w-72 border-t border-white/10" />
          <div className="absolute right-12 top-20 h-52 w-52 rounded-full border border-white/10" />
          <div className="absolute -left-10 bottom-8 h-40 w-40 rounded-full border border-white/15" />
          <div className="absolute right-1/4 bottom-6 h-2 w-60 border-t border-white/10" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
          {[
            "Ejecucion precisa con supervision continua.",
            "Protocolos de seguridad y calidad en cada fase.",
            "Entregas puntuales con control de costos.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-16">
        <section id="contacto" className="scroll-mt-28">
          <Contact />
        </section>
      </main>

      <footer className="bg-white text-[#1d1d1f]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-8 text-center text-sm font-semibold">
          <span>GL &amp; CO. Construcciones</span>
          <span className="text-black/70">
            Construccion corporativa, residencial y comercial
          </span>
          <span className="text-xs text-black/50">
            Compromiso, seguridad y calidad en cada etapa
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
