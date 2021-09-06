import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">
              <ul className="nav-links">
                <li>
                  <NavLink to="/case-studies" exact>
                    Case Studies
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/approach" exact>
                    Approach
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services" exact>
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us" exact>
                    About Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">ul</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
