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
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink to="/contact" exact>
                    Get in Contact with us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/audit" exact>
                    Audit
                  </NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headqueters</li>
                <li>At-Bijay RamChandra Pur</li>
                <li>Ward No-21, Mayurbhanj</li>
                <li>Odisha, India</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+917978599147</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy and Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
