import { useState, useEffect } from "react";

/*
  Hero carousel (self-contained styling: no Tailwind needed, so global
  resets or button styles in your project can't break the spacing).
  slides: [{ img, title, text, tag, url, buttonText }]
*/
function Hero({ slides, interval = 6000 }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;
  const go = (i) => setCurrent((i + total) % total);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(current + 1), interval);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, paused, interval]);

  const s = slides[current];
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section
      className="hx"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Instrument+Sans:wght@400;500;600&display=swap');

        .hx { --ink:#0B2226; --foam:#F5F1E8; --sun:#FFC46B; --lagoon:#5ED1C0;
          position:relative; width:100%; height:92vh; min-height:600px; overflow:hidden;
          background:var(--ink); font-family:'Instrument Sans',system-ui,sans-serif; box-sizing:border-box; }
        .hx *, .hx *::before, .hx *::after { box-sizing:border-box; }
        .hx button { font:inherit; cursor:pointer; margin:0; }
        .hx a { text-decoration:none; }

        .hx .photo { position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
          transition:opacity 1200ms ease-out, transform 14000ms ease-out; }
        .hx .shade { position:absolute; inset:0;
          background:linear-gradient(to top right, rgba(11,34,38,.92) 0%, rgba(11,34,38,.55) 38%, rgba(11,34,38,0) 70%); }

        .hx .content { position:absolute; left:0; right:0; bottom:0; max-width:1280px; margin:0 auto;
          padding:0 clamp(24px,5vw,56px) clamp(96px,12vh,120px); }
        .hx .copy { max-width:680px; animation:hxRise .8s cubic-bezier(.2,.7,.2,1) both; }

        .hx .tag { display:inline-flex; align-items:center; gap:8px; padding:7px 16px; border-radius:999px;
          background:rgba(245,241,232,.16); color:var(--foam); font-size:14px; font-weight:500;
          backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); }
        .hx .tag i { width:6px; height:6px; border-radius:50%; background:var(--sun); display:block; }

        .hx h1 { margin:20px 0 0; padding:0; color:var(--foam); font-family:'Fraunces',Georgia,serif;
          font-variation-settings:"opsz" 144; font-weight:700; letter-spacing:-.02em; line-height:1.02;
          font-size:clamp(40px,7vw,84px); }
        .hx .lede { margin:20px 0 0; max-width:540px; color:rgba(245,241,232,.85);
          font-size:clamp(17px,1.6vw,21px); line-height:1.55; }

        .hx .actions { display:flex; flex-wrap:wrap; align-items:center; gap:16px 32px; margin-top:32px; }
        .hx .primary { display:inline-flex; align-items:center; justify-content:center; height:52px; padding:0 34px;
          border-radius:999px; background:var(--foam); color:var(--ink); font-weight:600; font-size:16px;
          white-space:nowrap; transition:filter .2s, transform .2s; }
        .hx .primary:hover { filter:brightness(1.08); transform:translateY(-1px); }
        .hx .link { color:var(--foam); font-weight:500; padding:4px 0; border-bottom:2px solid rgba(245,241,232,.4);
          transition:border-color .2s; }
        .hx .link:hover { border-color:var(--sun); }

        .hx .top { position:absolute; top:32px; right:clamp(24px,5vw,56px); z-index:10; display:flex; align-items:center;
          gap:16px; color:var(--foam); }
        .hx .count { font-family:'Fraunces',Georgia,serif; font-size:18px; font-variant-numeric:tabular-nums; }
        .hx .count span { opacity:.5; }
        .hx .arrow { width:42px; height:42px; padding:0; display:inline-flex; align-items:center; justify-content:center;
          border-radius:50%; background:rgba(11,34,38,.35); color:var(--foam); border:1px solid rgba(245,241,232,.45);
          backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); transition:background .2s, color .2s; }
        .hx .arrow:hover { background:var(--foam); color:var(--ink); }
        .hx .arrows { display:flex; gap:8px; }

        .hx .thumbs { position:absolute; right:clamp(24px,5vw,56px); bottom:32px; z-index:10; display:flex; align-items:flex-end; gap:12px; }
        .hx .thumb { position:relative; height:104px; padding:0; overflow:hidden; border:0; border-radius:14px;
          background:var(--ink); text-align:left; color:var(--foam);
          transition:width .5s, opacity .5s, box-shadow .5s; }
        .hx .thumb img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; transition:transform .4s; }
        .hx .thumb:hover img { transform:scale(1.06); }
        .hx .thumb .fade { position:absolute; inset:0; background:linear-gradient(to top, rgba(11,34,38,.85), rgba(11,34,38,.05) 70%); }
        .hx .thumb .name { position:absolute; left:12px; right:12px; bottom:14px; font-size:14px; font-weight:600;
          white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .hx .track { position:absolute; left:0; right:0; bottom:0; height:4px; background:rgba(245,241,232,.25); }

        .hx .bar { display:block; width:100%; height:100%; background:var(--sun); transform-origin:left;
          animation-name:hxBar; animation-timing-function:linear; animation-fill-mode:forwards; }

        .hx .segments { display:none; position:absolute; left:clamp(24px,5vw,56px); right:clamp(24px,5vw,56px); bottom:32px;
          z-index:10; gap:8px; }
        .hx .seg { position:relative; flex:1; height:4px; padding:0; border:0; border-radius:99px; overflow:hidden;
          background:rgba(245,241,232,.3); }
        .hx .seg .done { position:absolute; inset:0; background:var(--foam); }

        .hx a:focus-visible, .hx button:focus-visible { outline:2px solid var(--lagoon); outline-offset:3px; }

        @keyframes hxRise { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:none } }
        @keyframes hxBar  { from { transform:scaleX(0) } to { transform:scaleX(1) } }

        @media (max-width:767px) {
          .hx .thumbs { display:none; }
          .hx .segments { display:flex; }
          .hx .content { padding-bottom:72px; }
        }
        @media (prefers-reduced-motion:reduce) {
          .hx .copy { animation:none; }
          .hx .photo { transition:opacity 300ms; transform:none !important; }
        }
      `}</style>

      {slides.map((slide, i) => (
        <img
          key={i}
          className="photo"
          src={slide.img}
          alt={i === current ? slide.title : ""}
          aria-hidden={i !== current}
          style={{ opacity: i === current ? 1 : 0, transform: i === current ? "scale(1.08)" : "scale(1)" }}
        />
      ))}
      <div className="shade" />

      <div className="content">
        <div key={current} className="copy">
          <span className="tag"><i />{s.tag || "Discover"}</span>
          <h1>{s.title}</h1>
          <p className="lede">{s.text}</p>
          <div className="actions">
            <a className="primary" href={s.url}>{s.buttonText}</a>
            <a className="link" href="#destinations">Learn more</a>
          </div>
        </div>
      </div>

      <div className="top">
        <span className="count">{pad(current + 1)}<span> / {pad(total)}</span></span>
        <div className="arrows">
          <button className="arrow" aria-label="Previous slide" onClick={() => go(current - 1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button className="arrow" aria-label="Next slide" onClick={() => go(current + 1)}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      <div className="thumbs">
        {slides.map((slide, i) => {
          const active = i === current;
          return (
            <button
              key={i}
              className="thumb"
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}: ${slide.title}`}
              aria-current={active}
              style={{
                width: active ? 176 : 88,
                opacity: active ? 1 : 0.7,
                boxShadow: active ? "0 0 0 2px #F5F1E8" : "0 0 0 1px rgba(245,241,232,.25)",
              }}
            >
              <img src={slide.img} alt="" />
              <span className="fade" />
              {active && <span className="name">{slide.title}</span>}
              {active && (
                <span className="track">
                  <span
                    key={current}
                    className="bar"
                    style={{ animationDuration: `${interval}ms`, animationPlayState: paused ? "paused" : "running" }}
                  />
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="segments">
        {slides.map((_, i) => (
          <button key={i} className="seg" aria-label={`Go to slide ${i + 1}`} onClick={() => setCurrent(i)}>
            {i < current && <span className="done" />}
            {i === current && (
              <span
                key={current}
                className="bar"
                style={{ position: "absolute", inset: 0, animationDuration: `${interval}ms`, animationPlayState: paused ? "paused" : "running" }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Hero;