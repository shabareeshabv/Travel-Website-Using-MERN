import { useState, useEffect } from "react";

function Hero({ slides, interval = 5000 }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;
  const go = (i) => setCurrent((i + total) % total);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(current + 1), interval);
    return () => clearTimeout(t);
  }, [current, paused, interval]);

  const s = slides[current];

  return (
    <section
      className="relative h-[90vh] min-h-[560px] w-full overflow-hidden bg-slate-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform: translateY(30px) } to { opacity:1; transform:none } }
        @keyframes heroBar { from { transform: scaleX(0) } to { transform: scaleX(1) } }
      `}</style>

      {/* background images: crossfade + slow zoom */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.img}
          alt={slide.title}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
            i === current ? "scale-110 opacity-100" : "scale-100 opacity-0"
          }`}
        />
      ))}

      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      {/* centered content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          key={current}
          className="flex w-[90%] max-w-3xl flex-col items-center gap-6 text-center"
          style={{ animation: "fadeUp 0.9s ease-out both" }}
        >
          <div className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span>{s.tag || "Discover"}</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-7xl">
            {s.title}
          </h1>

          <div className="h-1 w-20 rounded-full bg-amber-400" />

          <div className="max-w-xl text-lg text-white/85 md:text-xl">{s.text}</div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={s.url}
              className="flex h-12 w-44 items-center justify-center gap-2 rounded-full bg-amber-400 font-semibold text-slate-900 shadow-xl shadow-amber-400/30 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              {s.buttonText} <span>→</span>
            </a>
            <a
              href="#destinations"
              className="flex h-12 w-44 items-center justify-center rounded-full border border-white/50 font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      {/* arrows */}
      <button
        aria-label="Previous slide"
        onClick={() => go(current - 1)}
        className="absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black md:flex md:left-8"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(current + 1)}
        className="absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-md transition hover:bg-white hover:text-black md:flex md:right-8"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
      </button>

      {/* dots */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex items-center justify-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              i === current ? "w-10 bg-amber-400" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* progress line */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-white/15">
        <div
          key={current}
          className="h-full origin-left bg-amber-400"
          style={{
            animation: `heroBar ${interval}ms linear forwards`,
            animationPlayState: paused ? "paused" : "running",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;