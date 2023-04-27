import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-nav-link nav-link" : "nav-link"
        }
        to="/"
      >
        Inbox
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-nav-link nav-link" : "nav-link"
        }
        to="/spam"
      >
        Spam
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "active-nav-link nav-link" : "nav-link"
        }
        to="/trash"
      >
        Trash
      </NavLink>
    </nav>
  );
};
