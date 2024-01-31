import React from "react";
import { FaAlignLeft, IoMoon, IoSunnySharp } from "react-icons/fa";
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className="nav-main">
      <div className="container">
        <div className="toggle">
          <FaAlignLeft />
        </div>

        <div>
          <h4>Dashbord</h4>
        </div>
        <div>
          <div>
            <IoMoon />
            <IoSunnySharp />
          </div>
          <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
