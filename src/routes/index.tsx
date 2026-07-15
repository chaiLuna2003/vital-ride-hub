import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  ShieldCheck,
  QrCode,
  HeartPulse,
  Lock,
  Clock,
  MapPin,
  Phone,
  Check,
  Bike,
  Stethoscope,
  ArrowRight,
  Star,
  Menu,
  X,
} from "lucide-react";
import heroRider from "@/assets/HeroIMMG.png";
import ctaImage from "@/assets/HeroImg.png"
import heroVideoDesktop from "@/assets/hero-rider-desktop.mp4.asset.json";
import heroVideoMobile from "@/assets/hero-rider-mobile.mp4.asset.json";
import qrTag from "@/assets/riderQR.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VitalID Riders | Tu identidad vital siempre contigo" },
      {
        name: "description",
        content:
          "Identidad médica para motociclistas. Acceso inmediato a tu información vital en caso de emergencia y control total sobre tus datos. Escanea, salva, protege.",
      },
      { property: "og:title", content: "VitalID Riders | Tu identidad vital siempre contigo" },
      {
        property: "og:description",
        content:
          "Acceso médico inmediato y control total sobre tu información personal para motociclistas.",
      },
      { property: "og:image", content: heroRider },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preload", as: "image", href: heroRider, fetchpriority: "high" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Product />
      {/* <Pricing />  */}
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { href: "#como", label: "Cómo funciona" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#precios", label: "Precios" },
    { href: "#testimonios", label: "Testimonios" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-3 sm:px-4">
      <nav
        className={`
          pointer-events-auto mx-auto grid max-w-5xl 
          grid-cols-[minmax(0,1fr)_auto] items-center gap-3 
          rounded-3xl px-4 py-2.5 transition-all duration-500
          md:flex md:items-center md:justify-between 
          md:gap-4 md:rounded-full md:px-6

          ${
            scrolled
              ? "border border-black/10 bg-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-3xl"
              : "border border-white/20 bg-white/[0.06] shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur-3xl"
          }
        `}
      >
        {/* Logo */}
        <a
          href="#"
          className={`flex min-w-0 items-center font-display text-2xl font-extrabold tracking-tight transition-colors duration-500 ${
            scrolled ? "text-[#0F172A]" : "text-white"
          }`}
        >
          <span className="truncate">
            Q<span className="text-gradient">ride</span>
          </span>
        </a>


        {/* Links Desktop */}
        <div
          className={`
            hidden items-center gap-1 rounded-full px-2 py-1 
            text-sm backdrop-blur-xl md:flex transition-all duration-500

            ${
              scrolled
                ? "border border-black/10 bg-black/[0.03]"
                : "border border-white/10 bg-white/[0.05]"
            }
          `}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`
                rounded-full px-4 py-1.5 transition-all duration-300

                ${
                  scrolled
                    ? "text-[#334155] hover:bg-black/5 hover:text-black"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {l.label}
            </a>
          ))}
        </div>


        {/* Botón */}
        <a
          href="https://qride1.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold text-[#000]  transition-all duration-300 hover:scale-105 hover:bg-[var(--hover)] md:inline-flex"
        >
          Iniciar Sesión
        </a>


        {/* Menú móvil */}
        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`
            grid h-10 w-10 place-items-center rounded-full 
            backdrop-blur-xl transition-all duration-500 md:hidden

            ${
              scrolled
                ? "border border-black/10 bg-black/5 text-black"
                : "border border-white/15 bg-white/[0.05] text-white"
            }
          `}
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>


        {/* Menú móvil abierto */}
        {open && (
          <div
            className={`
              col-span-2 mt-2 flex flex-col gap-2 rounded-2xl 
              p-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)]
              backdrop-blur-3xl md:hidden

              ${
                scrolled
                  ? "border border-black/10 bg-white/90"
                  : "border border-white/15 bg-white/[0.06]"
              }
            `}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`
                  rounded-xl px-4 py-3 transition-all

                  ${
                    scrolled
                      ? "text-[#334155] hover:bg-black/5 hover:text-black"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                {l.label}
              </a>
            ))}

            <a
              href="https://qride1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl px-4 py-3 text-center font-semibold text-[#000] transition-all hover:bg-[var(--hover)]"
            >
              Iniciar Sesión
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src={heroRider}
        alt="Motociclista utilizando el sistema"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
        <div className="max-w-2xl">
          

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.03] md:text-7xl">
            Tu identidad vital{" "}
            <span className="text-gradient">
              siempre contigo
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-white/95 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Acceso médico inmediato y control total sobre tu información
            personal. Si ocurre lo inesperado, cada segundo cuenta.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#precios"
              className="group inline-flex items-center gap-2 rounded-full  px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-[var(--hover)]"
            >
              Proteger mi vida
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#como"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-foreground backdrop-blur-md transition-colors hover:bg-white/10"
            >
              Ver cómo funciona
            </a>
          </div>

          <div className="mt-10 inline-flex flex-wrap items-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-muted-foreground backdrop-blur-md">
            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-success" />
              Sin batería
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-success" />
              Resistente al agua
            </span>

            <span className="flex items-center gap-2">
              <Check className="h-4 w-4 text-success" />
              Datos cifrados
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "<60s", label: "Acceso a tu info vital" },
    { value: "24/7", label: "Disponible siempre" },
    { value: "100%", label: "Control de tus datos" },
    { value: "+8.000", label: "Riders protegidos" },
  ];

  return (
    <section className="border-y border-border bg-[#F7F7F7]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-extrabold text-gradient md:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: QrCode,
      number: "01",
      title: "Activa tu calcomanía",
      desc: "Recibe tu calcomanía QR y vincúlala a tu perfil médico en minutos.",
    },
    {
      icon: Bike,
      number: "02",
      title: "Llévala en tu casco",
      desc: "Adhiérela a tu casco o moto. Sin batería, resistente a golpes y agua.",
    },
    {
      icon: Stethoscope,
      number: "03",
      title: "Salva tu vida",
      desc: "En una emergencia, los rescatistas escanean y acceden a tu información vital.",
    },
  ];

  return (
    <section id="como" className="bg-[#F7F7F7] py-24">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#0D3B7F]/10 bg-[#0D3B7F]/5 px-4 py-1.5 text-sm font-semibold text-[#0D3B7F]">
            Cómo funciona
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-[#0F172A] md:text-5xl">
            Tres pasos entre tú y la tranquilidad
          </h2>

          <p className="mt-4 text-lg text-[#64748B]">
            Pensado para que actúe cuando tú no puedas hacerlo.
          </p>
        </div>


        {/* Tarjetas */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border border-[#0D3B7F]/10
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                {/* Número */}
                <span className="absolute right-6 top-5 text-6xl font-black text-[#0D3B7F]/10">
                  {step.number}
                </span>

                {/* Icono */}
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#0B4F8A] to-[#3FA9F5] shadow-lg">
                  <Icon className="h-7 w-7 text-white" />
                </div>


                {/* Contenido */}
                <h3 className="mt-6 text-xl font-bold text-[#0F172A]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-relaxed text-[#64748B]">
                  {step.desc}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function Features() {
  const feats = [
    {
      icon: Clock,
      title: "Acceso inmediato",
      desc: "Tu grupo sanguíneo, alergias y contactos en segundos.",
    },
    {
      icon: Lock,
      title: "Control total",
      desc: "Tú decides qué información es visible. Cifrado de extremo a extremo.",
    },
    {
      icon: Phone,
      title: "Aviso a familiares",
      desc: "Notificación automática a tus contactos de emergencia.",
    },
    {
      icon: HeartPulse,
      title: "Ficha médica",
      desc: "Condiciones, medicación y seguro siempre actualizados.",
    },
    {
      icon: ShieldCheck,
      title: "Privacidad real",
      desc: "Tus datos nunca se venden. Tú eres el único dueño.",
    },
  ];

  return (
    <section id="beneficios" className="bg-[#F7F7F7] py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#0D3B7F]/10 bg-[#0D3B7F]/5 px-4 py-1.5 text-sm font-semibold text-[#0D3B7F]">
            Beneficios
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-[#0F172A] md:text-5xl">
            Más que una calcomanía. Tu escudo vital.
          </h2>

          <p className="mt-4 text-lg text-[#64748B]">
            Tecnología que protege lo más importante: tú.
          </p>
        </div>


        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {feats.map((f, index) => {
            const Icon = f.icon;
            const isLastTwo = index >= feats.length - 2;

            return (
              <article
                key={f.title}
                className={`
                  rounded-3xl
                  border border-[#0D3B7F]/10
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl

                  col-span-1
                  sm:col-span-1

                  ${isLastTwo ? "lg:col-span-3" : "lg:col-span-2"}
                `}
              >

                {/* Icono */}
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[#0D3B7F]/10">
                  <Icon className="h-6 w-6 text-[#0D3B7F]" />
                </div>


                {/* Texto */}
                <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
                  {f.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                  {f.desc}
                </p>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="bg-[#F7F7F7] py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">

        {/* Imagen */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-accent)] opacity-20 blur-2xl" />

          <img
            src={qrTag}
            alt="Placa metálica QR VitalID sujeta a la correa de un casco"
            width={1024}
            height={1024}
            loading="lazy"
            className="relative w-full rounded-3xl border border-[#0D3B7F]/10 bg-white object-cover shadow-lg"
          />
        </div>


        {/* Contenido */}
        <div>

          <span className="inline-flex rounded-full border border-[#0D3B7F]/10 bg-[#0D3B7F]/5 px-4 py-1.5 text-sm font-semibold text-[#0D3B7F]">
            QR VitalID
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">
            QR{" "}
            <span className="text-gradient">
              Sin batería. Para siempre.
            </span>
          </h2>


          <p className="mt-4 leading-relaxed text-[#64748B]">
            Sticker QR resistente y diseñado para durar. Con grabado permanente
            de alta precisión, tu información importante permanece accesible en
            cualquier momento, incluso cuando tu teléfono no está disponible.
          </p>


          <ul className="mt-6 space-y-3">
            {[
              "Compatible con cualquier smartphone (sin app)",
              "Tu perfil editable en cualquier momento",
            ].map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 text-sm text-[#0F172A]"
              >
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#0D3B7F]/10">
                  <Check className="h-3.5 w-3.5 text-[#0D3B7F]" />
                </span>

                {t}
              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Esencial",
      monthly: 4,
      annualPrice: 39,
      desc: "Protección básica para empezar.",
      features: [
        "1 calcomanía QR",
        "Ficha médica vital",
        "Contactos de emergencia",
        "Datos cifrados",
      ],
    },
    {
      name: "Rider Pro",
      monthly: 8,
      annualPrice: 79,
      desc: "La elección de los motociclistas serios.",
      features: [
        "2 calcomanías QR",
        "Geolocalización en escaneo",
        "Aviso automático a familiares",
        "Perfil médico avanzado",
        "Soporte prioritario 24/7",
      ],
      featured: true,
    },
    {
      name: "Familia",
      monthly: 15,
      annualPrice: 149,
      desc: "Protege a todo tu grupo de ruta.",
      features: [
        "Hasta 5 calcomanías QR",
        "Todo lo de Rider Pro",
      ],
    },
  ];

  return(
    <section id="precios" className="bg-[#F7F7F7] py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#0D3B7F]/10 bg-[#0D3B7F]/5 px-4 py-1.5 text-sm font-semibold text-[#0D3B7F]">
            Precios
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-[#0F172A] md:text-5xl">
            Elige tu nivel de protección
          </h2>

          <p className="mt-4 text-lg text-[#64748B]">
            Cancela cuando quieras. Tu seguridad no caduca.
          </p>
        </div>


        {/* Switch */}
        <div className="mt-8 flex items-center justify-center gap-4 text-sm">

          <span className={annual ? "text-[#64748B]" : "font-semibold text-[#0F172A]"}>
            Mensual
          </span>

          <button
            onClick={() => setAnnual((a) => !a)}
            className="relative h-7 w-14 rounded-full bg-[#0D3B7F] transition-colors"
            aria-label="Cambiar facturación"
          >
            <span
              className={`
                absolute top-1 h-5 w-5 rounded-full bg-white
                transition-all duration-300
                ${annual ? "left-8" : "left-1"}
              `}
            />
          </button>

          <span className={!annual ? "text-[#64748B]" : "font-semibold text-[#0F172A]"}>
            Anual{" "}
            <span className="text-[#16A34A]">
              -20%
            </span>
          </span>

        </div>


        {/* Plans */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`
                relative flex flex-col rounded-3xl p-8
                transition-all duration-300 hover:-translate-y-2

                ${
                  p.featured
                    ? "border border-[#0D3B7F] bg-gradient-to-br from-[#0B4F8A] to-[#3FA9F5] text-white shadow-xl"
                    : "border border-[#0D3B7F]/10 bg-white text-[#0F172A] shadow-sm hover:shadow-lg"
                }
              `}
            >

              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold text-[#0D3B7F] shadow">
                  Más popular
                </span>
              )}


              <h3 className="text-xl font-bold">
                {p.name}
              </h3>


              <p
                className={`mt-2 text-sm ${
                  p.featured
                    ? "text-white/80"
                    : "text-[#64748B]"
                }`}
              >
                {p.desc}
              </p>


              <p className="mt-6 font-display text-4xl font-extrabold">
                ${annual ? p.annualPrice : p.monthly}

                <span
                  className={`
                    text-base font-normal
                    ${
                      p.featured
                        ? "text-white/70"
                        : "text-[#64748B]"
                    }
                  `}
                >
                  /{annual ? "año" : "mes"}
                </span>
              </p>


              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3"
                  >
                    <Check
                      className={`
                        h-4 w-4 shrink-0
                        ${
                          p.featured
                            ? "text-white"
                            : "text-[#0D3B7F]"
                        }
                      `}
                    />

                    {f}
                  </li>
                ))}
              </ul>


              <a
                href="#"
                className={`
                  mt-8 inline-flex items-center justify-center
                  rounded-full px-6 py-3 font-semibold
                  transition-all duration-300

                  ${
                    p.featured
                      ? "bg-white text-[#0D3B7F] hover:bg-white/90"
                      : "border border-[#0D3B7F]/20 text-[#0D3B7F] hover:bg-[#0D3B7F]/5"
                  }
                `}
              >
                Elegir {p.name}
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
} 

function Testimonials() {
  const items = [
    {
      quote:
        "Tuve una caída en carretera. Los paramédicos escanearon mi calcomanía y supieron de mi alergia a un medicamento. Me salvó.",
      name: "Daniel R.",
      role: "Rider desde 2019",
    },
    {
      quote:
        "Por fin algo pensado para nosotros. Llevo mi vida en el casco y mi familia tiene tranquilidad cada vez que salgo.",
      name: "Carla M.",
      role: "Touring & aventura",
    },
    {
      quote:
        "Simple, elegante y funciona sin batería ni app. Lo recomendé a todo mi grupo de ruta.",
      name: "Andrés P.",
      role: "Líder de motoclub",
    },
  ];

  return (
    <section id="testimonios" className="bg-[#F7F7F7] py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#0D3B7F]/10 bg-[#0D3B7F]/5 px-4 py-1.5 text-sm font-semibold text-[#0D3B7F]">
            Testimonios
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-[#0F172A] md:text-5xl">
            Riders que ya viajan protegidos
          </h2>

          <p className="mt-4 text-lg text-[#64748B]">
            Historias reales de la carretera.
          </p>
        </div>


        {/* Testimonios */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="
                flex flex-col
                rounded-3xl
                border border-[#0D3B7F]/10
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-lg
              "
            >

              {/* Estrellas */}
              <div className="flex gap-1 text-[#0D3B7F]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                  />
                ))}
              </div>


              {/* Cita */}
              <blockquote className="mt-4 flex-1 leading-relaxed text-[#64748B]">
                “{t.quote}”
              </blockquote>


              {/* Usuario */}
              <figcaption className="mt-6">
                <p className="font-semibold text-[#0F172A]">
                  {t.name}
                </p>

                <p className="text-sm text-[#64748B]">
                  {t.role}
                </p>
              </figcaption>

            </figure>
          ))}
        </div>

      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      className="
        relative
        min-h-[650px]
        overflow-hidden
        bg-cover
        bg-center
      "
      style={{
        backgroundImage: `url(${ctaImage})`,
      }}
    >

      {/* Overlay para que el texto sea legible */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-black/10" />


      {/* Contenido */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[650px]
          max-w-7xl
          items-center
          justify-end
          px-6
          md:px-12
        "
      >

        <div className="max-w-xl text-right">

          <h2 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Cada ruta merece{" "}
            <span className="text-gradient">
              un regreso a casa
            </span>
          </h2>


          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Lleva tu identidad vital siempre contigo. Activa tu calcomanía
            hoy y rueda con la tranquilidad de estar protegido.
          </p>


          <div className="mt-8 flex justify-end">
            <a
              href="https://qride1.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-8
                py-4
                font-semibold
                text-[#0D3B7F]
                shadow-lg
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Iniciar Sesión
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#0D3B7F]/10 bg-[#F7F7F7]">
      <div
        className="
          mx-auto
          flex
          max-w-6xl
          flex-col
          items-center
          justify-between
          gap-6
          px-6
          py-10
          md:flex-row
        "
      >

        {/* Navegación */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="#como"
            className="text-[#64748B] transition-colors hover:text-[#0D3B7F]"
          >
            Cómo funciona
          </a>

          <a
            href="#beneficios"
            className="text-[#64748B] transition-colors hover:text-[#0D3B7F]"
          >
            Beneficios
          </a>

          <a
            href="https://qride1.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748B] font-bold transition-colors hover:text-[#0D3B7F]"
          >
            Inicia Sesion
          </a>

          <a
            href="#testimonios"
            className="text-[#64748B] transition-colors hover:text-[#0D3B7F]"
          >
            Testimonios
          </a>
        </div>


        {/* Copyright */}
        <p className="text-sm text-[#64748B]">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[#0D3B7F]">
            QRide
          </span>
          . Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}

function Header({ tag, title, subtitle }: { tag: string; title: string; subtitle: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
        {tag}
      </span>
      <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">{title}</h2>
      <p className="mt-3 text-muted-foreground">{subtitle}</p>
    </div>
  );
}
