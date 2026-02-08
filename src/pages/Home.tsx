import { useEffect, useState } from "react";

const slides = [
  {
    title: "Proyecto Residencial",
    copy: "Estructura, acabados y entrega puntual con control de calidad.",
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Remodelacion Comercial",
    copy: "Optimización de espacios para operacion continua.",
    url: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Fachadas y Exteriores",
    copy: "Imagen corporativa moderna con acabados duraderos.",
    url: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=1400&q=80",
  },
];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="grid gap-12 py-12">
      <div className="tile fade-up relative rounded-3xl p-10 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-black/50">
          Construccion residencial y comercial
        </p>
        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          GL &amp; CO. Construcciones
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-black/70">
          Proyectos solidos, cronogramas claros y calidad que se nota. Somos un
          aliado estrategico en cada etapa de la obra.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/5215512345678"
            target="_blank"
            rel="noreferrer"
            className="btn-cta rounded-full px-7 py-3 text-xs font-semibold tracking-[0.28em] uppercase"
          >
            Cotizar proyecto
          </a>
        </div>
      </div>

      <div className="tile relative overflow-hidden rounded-3xl">
        <div className="carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.title} className="carousel-slide">
                <div
                  className="h-64 bg-cover bg-center md:h-72"
                  style={{ backgroundImage: `url(${slide.url})` }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{slide.title}</h3>
                  <p className="mt-2 text-sm text-black/70">{slide.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-5 right-5 flex gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setIndex(idx)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === idx ? "bg-black" : "bg-black/20"
              }`}
              aria-label={`Ir a ${slide.title}`}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Planeacion y control",
            copy: "Presupuestos claros, cronogramas reales y seguimiento constante.",
          },
          {
            title: "Equipo experto",
            copy: "Ingenieros, arquitectos y maestros de obra con experiencia comprobada.",
          },
          {
            title: "Calidad verificable",
            copy: "Materiales certificados y procesos estandarizados en cada entrega.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="tile relative rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-black/70">{item.copy}</p>
          </div>
        ))}
      </div>

      <div className="tile relative rounded-2xl p-6 text-sm text-black/70 md:p-8">
        <div className="text-xs uppercase tracking-[0.3em] text-black/50">
          Anuncio importante
        </div>
        <h3 className="mt-3 text-lg font-semibold text-black">
          Asociados con Osisg
        </h3>
        <p className="mt-2">
          Esta pagina esta asociada con Osisg, la aplicacion del futuro.
          Proximamente disponible para App Store y Android.
        </p>
        <a
          href="https://dev.osisg.com/"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex text-sm font-semibold text-black transition-colors hover:text-black/60"
        >
          Conoce Osisg
        </a>
        <div className="mt-4 flex flex-wrap gap-3">
          <img
            src="/appstore-badge.svg"
            alt="Disponible en App Store"
            className="h-12"
            loading="lazy"
          />
          <img
            src="/playstore-badge.svg"
            alt="Disponible en Google Play"
            className="h-12"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
