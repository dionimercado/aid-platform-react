import React, { useContext, useState } from "react";
import Context from "../../context";

function Header() {
  const { dispatch } = useContext(Context);

  const logout = () => dispatch({ type: "LOGOUT" });

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-info fixed-top"
      aria-label="Fourth navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Aid Platform
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown bg-white ms-5">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="dropdown04"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdown04"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="dropdown-item text-danger"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
