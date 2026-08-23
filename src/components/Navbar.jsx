import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Experiences", path: "/experiences" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto mt-4 max-w-7xl px-4">
        <div className="bg-white/95 backdrop-blur-xl shadow-lg rounded-2xl border border-gray-100 px-5 py-3">

          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white text-xl shadow-md">
                ✈️
              </div>

              <div className="leading-tight">
                <h1 className="text-xl font-bold text-gray-900">
                  Travel<span className="text-blue-600">Go</span>
                </h1>
                <p className="text-[10px] tracking-[3px] text-gray-400 uppercase">
                  Explore More
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-7">

              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}

                      <span
                        className={`absolute -bottom-2 left-0 h-[2px] bg-blue-600 rounded-full transition-all duration-300 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}

            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-3">

              {/* Search */}
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center
                text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>

              {/* Login */}
              <Link
                to="/login"
                className="px-4 py-2 text-sm font-semibold text-gray-700
                hover:text-blue-600 transition"
              >
                Login
              </Link>

              {/* CTA */}
              <Link
                to="/book-now"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r
                from-blue-600 to-cyan-500 text-white text-sm font-semibold
                shadow-md shadow-blue-200 hover:shadow-lg
                hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Trips
              </Link>

            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden w-10 h-10 rounded-lg bg-gray-100
              flex items-center justify-center text-gray-700"
            >
              {mobileMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenu && (
            <div className="lg:hidden mt-4 pt-4 border-t border-gray-100">

              <div className="flex flex-col gap-1">

                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenu(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-medium transition ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

              </div>

              <div className="flex gap-3 mt-4">

                <Link
                  to="/login"
                  onClick={() => setMobileMenu(false)}
                  className="flex-1 text-center py-3 rounded-xl
                  border border-gray-200 text-gray-700 font-semibold text-sm"
                >
                  Login
                </Link>

                <Link
                  to="/book-now"
                  onClick={() => setMobileMenu(false)}
                  className="flex-1 text-center py-3 rounded-xl
                  bg-blue-600 text-white font-semibold text-sm"
                >
                  Explore Trips
                </Link>

              </div>

            </div>
          )}

        </div>
      </nav>
    </header>
  );
}

export default Navbar;