import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { useAuth } from "./AuthContext";
import logo from "../assets/travel-website-logo.png";

/*
  Self-contained: NavbarStyles.css and Font Awesome are not needed here.
  Needs react-router-dom v6 (NavLink with a className function).
*/

function Navbar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, userEmail, logout } = useAuth();
  const rootRef = useRef(null);

  const close = () => setOpen(false);

  // Close the mobile menu on Escape, on outside click, and when the screen grows
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    const onClick = (e) => rootRef.current && !rootRef.current.contains(e.target) && close();
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => window.innerWidth > 860 && close();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLogout = () => {
    logout();
    close();
  };

  return (
    <nav className="nx" ref={rootRef} aria-label="Main">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&display=swap');

        .nx { --ink:#0B2226; --foam:#F5F1E8; --sun:#FFC46B; --lagoon:#5ED1C0;
          position:sticky; top:0; z-index:50; width:100%; height:68px;
          display:flex; align-items:center; justify-content:space-between;
          padding:0 clamp(20px,5vw,56px); box-sizing:border-box;
          background:rgba(11,34,38,.92); backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px);
          border-bottom:1px solid rgba(245,241,232,.1);
          font-family:'Instrument Sans',system-ui,sans-serif; }
        .nx *, .nx *::before, .nx *::after { box-sizing:border-box; }
        .nx ul { margin:0; padding:0; list-style:none; }
        .nx a { text-decoration:none; }
        .nx button { font:inherit; cursor:pointer; margin:0; }

        .nx-logo { display:flex; align-items:center; height:100%; }
        .nx-logo img { height:40px; width:auto; display:block; }

        .nx-menu { display:flex; align-items:center; gap:6px; }
        .nx-link { display:inline-flex; align-items:center; height:40px; padding:0 16px; border-radius:999px;
          color:rgba(245,241,232,.78); font-size:16px; font-weight:500; transition:color .2s, background .2s; }
        .nx-link:hover { color:var(--foam); background:rgba(245,241,232,.1); }
        .nx-link.active { color:var(--foam); background:rgba(245,241,232,.16); }
        .nx-cta { background:var(--foam); color:var(--ink); font-weight:600; margin-left:6px; }
        .nx-cta:hover { background:var(--sun); color:var(--ink); }
        .nx-cta.active { background:var(--sun); color:var(--ink); }

        .nx-user { display:inline-flex; align-items:center; gap:8px; max-width:220px; padding:0 8px 0 16px;
          color:rgba(245,241,232,.78); font-size:15px; }
        .nx-user span { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
        .nx-logout { height:40px; padding:0 18px; border-radius:999px; background:transparent; color:var(--foam);
          border:1px solid rgba(245,241,232,.45); font-size:15px; font-weight:600; transition:background .2s, color .2s; }
        .nx-logout:hover { background:var(--foam); color:var(--ink); }

        .nx-toggle { display:none; width:44px; height:44px; padding:0; align-items:center; justify-content:center;
          border-radius:50%; background:transparent; color:var(--foam); border:1px solid rgba(245,241,232,.4); }

        .nx a:focus-visible, .nx button:focus-visible { outline:2px solid var(--lagoon); outline-offset:3px; }

        @media (max-width:860px) {
          .nx-toggle { display:inline-flex; }
          .nx-menu { display:none; position:absolute; top:68px; left:0; right:0; flex-direction:column; align-items:stretch;
            gap:4px; padding:16px clamp(20px,5vw,56px) 24px; background:#0B2226;
            border-bottom:1px solid rgba(245,241,232,.12); box-shadow:0 24px 40px -20px rgba(0,0,0,.6); }
          .nx-menu.open { display:flex; animation:nxDrop .2s ease-out both; }
          .nx-link { height:48px; font-size:17px; border-radius:12px; }
          .nx-cta { margin:8px 0 0; justify-content:center; border-radius:999px; }
          .nx-user { max-width:none; padding:12px 16px 4px; }
          .nx-logout { height:48px; width:100%; margin-top:8px; }
        }
        @keyframes nxDrop { from { opacity:0; transform:translateY(-8px) } to { opacity:1; transform:none } }
        @media (prefers-reduced-motion:reduce) { .nx-menu.open { animation:none; } }
      `}</style>

      <Link to="/" className="nx-logo" onClick={close}>
        <img src={logo} alt="Travel-To-World home" />
      </Link>

      <button
        type="button"
        className="nx-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="nx-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      <ul id="nx-menu" className={open ? "nx-menu open" : "nx-menu"}>
        {MenuItems.map((item, index) => {
          // Don't show Sign Up if already logged in
          if (isAuthenticated && item.title === "Sign Up") return null;

          const isCta = item.title === "Sign Up";
          return (
            <li key={index}>
              <NavLink
                to={item.url}
                end={item.url === "/"}
                onClick={close}
                className={({ isActive }) =>
                  ["nx-link", isCta ? "nx-cta" : "", isActive ? "active" : ""].filter(Boolean).join(" ")
                }
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}

        {isAuthenticated && (
          <>
            <li>
              <div className="nx-user" title={userEmail}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21a8 8 0 0 1 16 0" />
                </svg>
                <span>{userEmail}</span>
              </div>
            </li>
            <li>
              <button type="button" onClick={handleLogout} className="nx-logout">
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;