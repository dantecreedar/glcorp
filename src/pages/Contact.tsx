import { FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section className="grid gap-12 py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Contacto</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-black/70">
          Cuentanos tu proyecto y te respondemos con una propuesta clara y
          detallada.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="tile relative rounded-2xl p-6">
          <h3 className="text-lg font-semibold">Informacion directa</h3>
          <div className="mt-4 space-y-3 text-sm text-black/70">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-black/60" />
              <a href="mailto:contacto@glconstrucciones.com">
                contacto@glconstrucciones.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaWhatsapp className="text-black/60" />
              <a href="https://wa.me/5215512345678" target="_blank">
                +52 1 55 1234 5678
              </a>
            </div>
          </div>
        </div>

        <div className="tile relative rounded-2xl p-6">
          <h3 className="text-lg font-semibold">Redes sociales</h3>
          <div className="mt-4 flex gap-4">
            <a
              className="grid h-12 w-12 place-items-center rounded-full bg-black text-white transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-black hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className="grid h-12 w-12 place-items-center rounded-full bg-black text-white transition-transform duration-200 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:text-black hover:shadow-[0_10px_24px_rgba(0,0,0,0.18)]"
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-[#1d1d1f] px-8 py-10 text-white">
        <h3 className="text-2xl font-semibold">Por que elegirnos</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "Supervision en sitio y reportes digitales.",
            "Cumplimiento de tiempos y presupuesto acordado.",
            "Garantia escrita en cada entrega.",
          ].map((item) => (
            <div key={item} className="text-sm text-white/80">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
