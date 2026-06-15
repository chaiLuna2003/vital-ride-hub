import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
} from "lucide-react";
import heroRider from "@/assets/hero-rider.jpg";
import heroVideo from "@/assets/hero-rider.mp4.asset.json";
import qrTag from "@/assets/qr-tag.jpg";

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
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4">
      <nav className="pointer-events-auto mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-white/10 bg-background/40 px-4 py-2.5 shadow-[var(--shadow-soft)] backdrop-blur-xl md:px-6">
        <a href="#" className="flex items-center gap-2 font-display text-base font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-accent)]">
            <HeartPulse className="h-4 w-4 text-primary-foreground" />
          </span>
          VitalID<span className="text-accent">Riders</span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-sm text-muted-foreground md:flex">
          {[
            { href: "#como", label: "Cómo funciona" },
            { href: "#beneficios", label: "Beneficios" },
            { href: "#precios", label: "Precios" },
            { href: "#testimonios", label: "Testimonios" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 transition-colors hover:bg-white/10 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#precios"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--hover)]"
        >
          Conseguir el mío
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo.url}
        poster={heroRider}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
      <div className="absolute inset-0 bg-hero-glow opacity-70" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-md">
            <ShieldCheck className="h-4 w-4" /> Diseñado para motociclistas
          </span>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.03] md:text-7xl">
            Tu identidad vital <span className="text-gradient">siempre contigo</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Acceso médico inmediato y control total sobre tu información personal.
            Si ocurre lo inesperado, cada segundo cuenta.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#precios"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-[var(--hover)]"
            >
              Proteger mi vida
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#como"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-3.5 font-semibold text-foreground backdrop-blur-md transition-colors hover:bg-white/20"
            >
              Ver cómo funciona
            </a>
          </div>

          <div className="mt-10 inline-flex flex-wrap items-center gap-6 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm text-muted-foreground backdrop-blur-md">
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Sin batería</span>
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Resistente al agua</span>
            <span className="flex items-center gap-2"><Check className="h-4 w-4 text-success" /> Datos cifrados</span>
          </div>
        </div>

        <div className="animate-float mt-12 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-card/60 p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl md:absolute md:bottom-12 md:right-6 md:mt-0">
          <span className="animate-pulse-ring grid h-11 w-11 place-items-center rounded-full bg-success/20">
            <HeartPulse className="h-5 w-5 text-success" />
          </span>
          <div>
            <p className="text-sm font-semibold">Perfil médico activo</p>
            <p className="text-xs text-muted-foreground">Listo para emergencias</p>
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
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-extrabold text-gradient md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: QrCode, title: "Activa tu placa", desc: "Recibe tu placa QR y vincúlala a tu perfil médico en minutos." },
    { icon: Bike, title: "Llévala en tu casco", desc: "Adhiérela a tu casco o moto. Sin batería, resistente a golpes y agua." },
    { icon: Stethoscope, title: "Salva tu vida", desc: "En una emergencia, los rescatistas escanean y acceden a tu info vital." },
  ];
  return (
    <section id="como" className="mx-auto max-w-6xl px-6 py-24">
      <Header
        tag="Cómo funciona"
        title="Tres pasos entre tú y la tranquilidad"
        subtitle="Pensado para que actúe cuando tú no puedas hacerlo."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.title} className="group relative rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/60">
            <span className="absolute right-6 top-6 font-display text-5xl font-extrabold text-secondary">{`0${i + 1}`}</span>
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-accent)]">
              <s.icon className="h-6 w-6 text-primary-foreground" />
            </span>
            <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const feats = [
    { icon: Clock, title: "Acceso inmediato", desc: "Tu grupo sanguíneo, alergias y contactos en segundos." },
    { icon: Lock, title: "Control total", desc: "Tú decides qué información es visible. Cifrado de extremo a extremo." },
    { icon: Phone, title: "Aviso a familiares", desc: "Notificación automática a tus contactos de emergencia." },
    { icon: MapPin, title: "Geolocalización", desc: "Comparte la ubicación del incidente al escanear la placa." },
    { icon: HeartPulse, title: "Ficha médica", desc: "Condiciones, medicación y seguro siempre actualizados." },
    { icon: ShieldCheck, title: "Privacidad real", desc: "Tus datos nunca se venden. Tú eres el único dueño." },
  ];
  return (
    <section id="beneficios" className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Header
          tag="Beneficios"
          title="Más que una placa. Tu escudo vital."
          subtitle="Tecnología que protege lo más importante: tú."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {feats.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-7 transition-transform hover:-translate-y-1">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent/15">
                <f.icon className="h-5 w-5 text-accent" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Product() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-accent)] opacity-20 blur-2xl" />
        <img
          src={qrTag}
          alt="Placa metálica QR VitalID sujeta a la correa de un casco"
          width={1024}
          height={1024}
          loading="lazy"
          className="relative w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-soft)]"
        />
      </div>
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
          <QrCode className="h-4 w-4" /> La placa VitalID
        </span>
        <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">
          Acero grabado. <span className="text-gradient">Sin batería. Para siempre.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Fabricada en acero inoxidable con grabado láser indeleble. Resistente al agua,
          al sol y a los impactos. Tu información vital permanece accesible incluso cuando
          tu teléfono no.
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Compatible con cualquier smartphone (sin app)",
            "Tu perfil editable en cualquier momento",
            "Garantía de por vida contra defectos",
          ].map((t) => (
            <li key={t} className="flex items-center gap-3 text-sm">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-success/20">
                <Check className="h-3.5 w-3.5 text-success" />
              </span>
              {t}
            </li>
          ))}
        </ul>
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
      features: ["1 placa QR de acero", "Ficha médica vital", "Contactos de emergencia", "Datos cifrados"],
    },
    {
      name: "Rider Pro",
      monthly: 8,
      annualPrice: 79,
      desc: "La elección de los motociclistas serios.",
      features: [
        "2 placas QR de acero",
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
      features: ["5 placas QR de acero", "Todo lo de Rider Pro", "Panel familiar", "Gestión multiusuario"],
    },
  ];
  return (
    <section id="precios" className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Header tag="Precios" title="Elige tu nivel de protección" subtitle="Cancela cuando quieras. Tu seguridad no caduca." />
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className={annual ? "text-muted-foreground" : "font-semibold"}>Mensual</span>
          <button
            onClick={() => setAnnual((a) => !a)}
            className="relative h-7 w-14 rounded-full bg-primary transition-colors"
            aria-label="Cambiar facturación"
          >
            <span className={`absolute top-1 h-5 w-5 rounded-full bg-primary-foreground transition-all ${annual ? "left-8" : "left-1"}`} />
          </button>
          <span className={!annual ? "text-muted-foreground" : "font-semibold"}>
            Anual <span className="text-success">-20%</span>
          </span>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                p.featured
                  ? "border-accent bg-[image:var(--gradient-hero)] bg-card shadow-[var(--shadow-glow)]"
                  : "border-border bg-card"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground">
                  Más popular
                </span>
              )}
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <p className="mt-6 font-display text-4xl font-extrabold">
                ${annual ? p.annualPrice : p.monthly}
                <span className="text-base font-normal text-muted-foreground">/{annual ? "año" : "mes"}</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-success" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold transition-colors ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:bg-[var(--hover)]"
                    : "border border-border text-foreground hover:bg-secondary"
                }`}
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
      quote: "Tuve una caída en carretera. Los paramédicos escanearon mi placa y supieron de mi alergia a un medicamento. Me salvó.",
      name: "Daniel R.",
      role: "Rider desde 2019",
    },
    {
      quote: "Por fin algo pensado para nosotros. Llevo mi vida en el casco y mi familia tiene tranquilidad cada vez que salgo.",
      name: "Carla M.",
      role: "Touring & aventura",
    },
    {
      quote: "Simple, elegante y funciona sin batería ni app. Lo recomendé a todo mi grupo de ruta.",
      name: "Andrés P.",
      role: "Líder de motoclub",
    },
  ];
  return (
    <section id="testimonios" className="mx-auto max-w-6xl px-6 py-24">
      <Header tag="Testimonios" title="Riders que ya viajan protegidos" subtitle="Historias reales de la carretera." />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-7">
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-muted-foreground">“{t.quote}”</blockquote>
            <figcaption className="mt-6">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-[image:var(--gradient-hero)] bg-card p-10 text-center md:p-16">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
        <h2 className="text-3xl font-extrabold md:text-5xl">
          Cada ruta merece <span className="text-gradient">un regreso a casa</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Lleva tu identidad vital siempre contigo. Activa tu placa hoy y rueda con la
          tranquilidad de estar protegido.
        </p>
        <a
          href="#precios"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-colors hover:bg-[var(--hover)]"
        >
          Conseguir mi placa VitalID <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <a href="#" className="flex items-center gap-2 font-display font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-accent)]">
            <HeartPulse className="h-4 w-4 text-primary-foreground" />
          </span>
          VitalID<span className="text-accent">Riders</span>
        </a>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#como" className="hover:text-foreground">Cómo funciona</a>
          <a href="#beneficios" className="hover:text-foreground">Beneficios</a>
          <a href="#precios" className="hover:text-foreground">Precios</a>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} VitalID Riders</p>
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
