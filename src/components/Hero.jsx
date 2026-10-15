import { useState, useEffect } from "react";

function Hero({ cName = "", slides, btnClass = "", interval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval, paused, current]);

  return (
    <section
      className={`relative w-full overflow-hidden bg-black ${cName}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* sliding track */}
      <div
        className="flex transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative min-w-full h-[80vh] md:h-screen overflow-hidden">
            {/* image with slow zoom */}
            <img
              alt={slide.title}
              src={slide.img}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
                i === current ? "scale-100" : "scale-110"
              }`}
            />

            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

            {/* text */}
            <div className="absolute inset-0 flex items-center">
              <div
                className={`mx-auto w-full max-w-6xl px-6 md:px-10 transition-all duration-700 delay-300 ${
                  i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="max-w-2xl text-center md:text-left">
                  <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-base md:text-xl text-white/85">
                    {slide.text}
                  </p>
                  <a
                    href={slide.url}
                    className={`group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-gray-900 shadow-lg transition hover:bg-gray-100 hover:scale-105 ${btnClass}`}
                  >
                    {slide.buttonText}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* dots */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* counter */}
      <div className="absolute bottom-8 right-6 md:right-10 z-10 hidden sm:block text-sm font-medium tracking-widest text-white/80">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}

export default Hero;