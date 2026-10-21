/*
  Self-contained: FooterStyle.css and Font Awesome are no longer needed
  (the social icons are inline SVGs).
*/

const socials = [
  {
    label: "Facebook",
    href: "/",
    path: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  },
  {
    label: "Instagram",
    href: "/",
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    label: "Twitter",
    href: "/",
    path: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />,
  },
];

const columns = [
  {
    title: "About",
    links: [
      { text: "Privacy Policy", href: "/" },
      { text: "Terms of Service", href: "/" },
    ],
  },
  {
    title: "Support",
    links: [{ text: "Contact Us", href: "/Contact" }],
  },
  {
    title: "Community",
    links: [
      { text: "GitHub", href: "https://github.com/shabareeshabv?tab=repositories", external: true },
      { text: "Twitter", href: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="fx">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Instrument+Sans:wght@400;500;600&display=swap');

        .fx { --foam:#F5F1E8; --sun:#FFC46B; --lagoon:#5ED1C0;
          background:#071A1D; color:var(--foam); font-family:'Instrument Sans',system-ui,sans-serif;
          border-top:1px solid rgba(245,241,232,.12);
          padding:clamp(56px,8vw,96px) clamp(24px,5vw,56px) 32px; box-sizing:border-box; }
        .fx *, .fx *::before, .fx *::after { box-sizing:border-box; }
        .fx p, .fx h4, .fx ul { margin:0; padding:0; }
        .fx a { text-decoration:none; }

        .fx-inner { max-width:1240px; margin:0 auto; }

        .fx-main { display:grid; grid-template-columns:1.5fr repeat(3, 1fr); gap:48px; }

        .fx-brand { display:inline-block; font-family:'Fraunces',Georgia,serif; font-variation-settings:"opsz" 144;
          font-weight:700; font-size:clamp(28px,3vw,36px); letter-spacing:-.01em; color:var(--foam); line-height:1.1; }
        .fx-tag { margin-top:12px; max-width:320px; font-size:16px; line-height:1.6; color:rgba(245,241,232,.7); }

        .fx-social { display:flex; gap:10px; margin-top:28px; }
        .fx-social a { width:44px; height:44px; display:inline-flex; align-items:center; justify-content:center;
          border-radius:50%; border:1px solid rgba(245,241,232,.3); color:var(--foam);
          transition:background .2s, color .2s, border-color .2s; }
        .fx-social a:hover { background:var(--sun); border-color:var(--sun); color:#0B2226; }

        .fx-col h4 { font-size:15px; font-weight:600; color:var(--sun); }
        .fx-col ul { list-style:none; margin-top:16px; display:flex; flex-direction:column; gap:12px; }
        .fx-col a { color:rgba(245,241,232,.78); font-size:16px; transition:color .2s; }
        .fx-col a:hover { color:var(--foam); text-decoration:underline; text-underline-offset:4px; text-decoration-color:var(--sun); }

        .fx-bar { margin-top:clamp(40px,6vw,72px); padding-top:24px; border-top:1px solid rgba(245,241,232,.12);
          font-size:14px; color:rgba(245,241,232,.55); }

        .fx a:focus-visible { outline:2px solid var(--lagoon); outline-offset:3px; border-radius:4px; }

        @media (max-width:860px) {
          .fx-main { grid-template-columns:1fr 1fr; gap:40px 24px; }
          .fx-brandcol { grid-column:1 / -1; }
        }
        @media (max-width:420px) {
          .fx-main { grid-template-columns:1fr; }
        }
      `}</style>

      <div className="fx-inner">
        <div className="fx-main">
          <div className="fx-brandcol">
            <a href="/" className="fx-brand">Travel-To-World</a>
            <p className="fx-tag">Explore your favorite destinations.</p>

            <div className="fx-social">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {s.path}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <nav className="fx-col" key={col.title} aria-label={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.text}>
                    <a
                      href={l.href}
                      {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {l.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="fx-bar">© {new Date().getFullYear()} Travel-To-World. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;