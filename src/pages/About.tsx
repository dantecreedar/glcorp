const gallery = [
  {
    label: "Obra gris y estructura",
    url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Acabados interiores",
    url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Remodelaciones",
    url: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Fachadas y exteriores",
    url: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&w=900&q=80",
  },
];

function About() {
  return (
    <section className="grid gap-12 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Nosotros</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-black/70">
          Somos una empresa de construccion con enfoque corporativo. Entregamos
          soluciones integrales: planeacion, ejecucion, supervision y cierre con
          un solo responsable.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          "Gestion integral de obra con reportes semanales.",
          "Cumplimiento de normativas, seguridad y calidad.",
          "Equipo humano con experiencia en proyectos complejos.",
        ].map((item) => (
          <div
            key={item}
            className="tile relative rounded-2xl p-6 text-sm text-black/70"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="tile relative flex flex-col gap-6 rounded-2xl p-6 text-sm text-black/70 md:flex-row md:items-center md:p-8">
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-black/10">
          <img
            src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=300&q=80"
            alt="Foco iluminado"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-black">
            Brian Alexis Galli
          </h3>
          <p className="mt-2">
            Contratista e ingeniero con mas de 5 anos de experiencia.
            Especializado en obra civil, residencial y remodelacion.
          </p>
          <div className="mt-4 border-l-4 border-black/20 pl-4 text-black/80">
            <p className="text-base italic">
              “Cada obra es una promesa: calidad, tiempo y confianza.”
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
              GL &amp; CO. Construcciones
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {gallery.map((item) => (
          <div
            key={item.label}
            className="tile relative overflow-hidden rounded-2xl"
          >
            <img
              src={item.url}
              alt={item.label}
              className="h-48 w-full object-cover"
              loading="lazy"
            />
            <div className="px-6 py-4 text-sm font-semibold text-black/70">
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            name: "Brian Alexis Galli",
            role: "Contratista e ingeniero",
          },
          {
            name: "Ricardo Raul Galli",
            role: "Maestro de obras",
          },
          {
            name: "Arquitecto por confirmar",
            role: "Arquitecto",
          },
        ].map((person) => (
          <div
            key={person.role}
            className="tile relative rounded-2xl p-6 text-sm text-black/70"
          >
            <div className="text-base font-semibold text-black">
              {person.name}
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-black/50">
              {person.role}
            </div>
          </div>
        ))}
      </div>

      <div className="tile relative rounded-2xl p-6 text-sm text-black/70 md:p-8">
        <div className="text-xs uppercase tracking-[0.3em] text-black/50">
          Cobertura nacional
        </div>
        <h3 className="mt-3 text-lg font-semibold text-black">
          Trabajamos en toda la Argentina
        </h3>
        <p className="mt-2">
          Operamos principalmente en Santa Fe, Posadas, Rosario y Buenos Aires,
          con disponibilidad para otros lugares del pais segun el proyecto.
        </p>
      </div>
    </section>
  );
}

export default About;
