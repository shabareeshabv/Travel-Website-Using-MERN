import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { useAuth } from "./AuthContext";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const { isAuthenticated, userEmail, logout } = useAuth();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="NavbarItems">
      <Link to="/">
        <h1 className="navbar-logo">Travel-To-World</h1>
      </Link>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          // Don't show SignUp if already logged in
          if (isAuthenticated && item.title === "Sign Up") return null;

          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i> {item.title}
              </Link>
            </li>
          );
        })}

        {isAuthenticated && (
          <>
            <li>
              <span className="nav-username">👤 {userEmail}</span>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-btn">
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
