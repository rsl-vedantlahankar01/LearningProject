import { NavLink } from "react-router-dom";
import { PATHS } from "../routes/paths";

const NAV_ITEMS = [
  { path: PATHS.MEALS, label: "Meals" },
  { path: PATHS.CALCULATOR, label: "Calorie Calculator" },
  { path: PATHS.WORKOUTS, label: "Workouts" },
] as const;

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white border-bottom py-3">
      <div className="container">
        {/* Brand */}
        <NavLink
          className="navbar-brand fw-bold fs-4 text-dark"
          to={PATHS.MEALS}
        >
          Learning<span className="text-primary">Project</span>
        </NavLink>

        {/* Mobile Hamburger Toggle */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto gap-1 gap-lg-2 my-3 my-lg-0">
            {NAV_ITEMS.map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `nav-link px-3 py-2 rounded-pill ${
                      isActive
                        ? "bg-primary-subtle text-primary-emphasis fw-semibold"
                        : "fw-medium text-secondary"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
