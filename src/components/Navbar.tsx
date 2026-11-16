const NAV_ITEMS = [
  { id: "meals", label: "Meals", href: "#meals" },
  { id: "calculator", label: "Calorie Calculator", href: "#calculator" },
  { id: "workouts", label: "Workouts", href: "#workouts" },
] as const;

export type TabId = (typeof NAV_ITEMS)[number]["id"];

interface NavbarProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
}

export function Navbar({ activeTab, onSelectTab }: NavbarProps) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white border-bottom py-3">
      <div className="container">
        {/* Brand */}
        <a
          className="navbar-brand fw-bold fs-4 text-dark"
          href="#meals"
          onClick={(e) => {
            e.preventDefault();
            onSelectTab("meals");
          }}
        >
          Learning<span className="text-primary">Project</span>
        </a>

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
            {NAV_ITEMS.map(({ id, label, href }) => {
              const isActive = activeTab === id;

              return (
                <li className="nav-item" key={id}>
                  <a
                    href={href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectTab(id);
                    }}
                    className={`nav-link px-3 py-2 rounded-pill ${
                      isActive
                        ? "bg-primary-subtle text-primary-emphasis fw-semibold"
                        : "fw-medium text-secondary"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
