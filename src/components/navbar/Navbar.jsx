import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  border-bottom z-3 position-absolute w-100">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
         <p className="h1 text-white">Salonlogo</p>
        </Link>

        <button
          className="navbar-toggler ms-auto"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white my-fontFamily2" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white my-fontFamily2" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white my-fontFamily2"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul className="dropdown-menu bg-dark">
                <li>
                  <Link
                    className="dropdown-item text-white my-fontFamily2"
                    to="/hair-salon"
                  >
                    HAIR SALON
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-white my-fontFamily2"
                    to="/keratin-treatment"
                  >
                    KERATIN TREATMENT
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-white my-fontFamily2"
                    to="/waxing-services"
                  >
                    WAXING SERVICES
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-white my-fontFamily2"
                    to="/hair-color"
                  >
                    HAIR COLOR
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-white my-fontFamily2"
                    to="/nanoplastia-hair-treatment"
                  >
                    NANOPLASTIA HAIR TREATMENT
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item text-white my-fontFamily2"
                    to="/facial-service"
                  >
                    FACIAL SERVICE
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white my-fontFamily2" to="/menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white my-fontFamily2"
                to="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white my-fontFamily2 "
                to="/contact"
              >
                Contact
              </Link>
            </li>

            <Button
              buttonText="Book an Appointment"
              navigateTo="/contact"
              className="my-fontFamily2"
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
