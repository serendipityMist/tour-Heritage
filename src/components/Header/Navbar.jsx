import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="shadow bg-transparent z-50 top-0 bg-gradient-to-r text-black w-11/12 bg-green-600">
      {" "}
      {/* Change z-99 to z-50 */}
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2">
        <div className="flex flex-wrap justify-between items-center gap-2 mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
          </Link>
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } lg:flex lg:w-auto justify-between items-center w-full`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                  ${
                    isActive ? "text-orange-600" : "text-gray-500"
                  } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                  ${
                    isActive ? "text-orange-600" : "text-gray-500"
                  } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/explore"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                  ${
                    isActive ? "text-orange-600" : "text-gray-500"
                  } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Explore
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/activites"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                  ${
                    isActive ? "text-orange-600" : "text-gray-500"
                  } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Activities
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/link4"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100
                  ${
                    isActive ? "text-orange-600" : "text-gray-500"
                  } hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
