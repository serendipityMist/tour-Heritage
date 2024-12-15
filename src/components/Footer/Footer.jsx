import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
function Footer() {
  return (
    <footer className="text-white bg-black w-full flex p-2">
      <aside>
        <Link to="/" className="flex items-center">
          <img src={logo} className="mr-3 h-40 w-40" alt="Logo" />
        </Link>
      </aside>
      <section className="p-2 m-2 border border-white">
        <h1>Resources</h1>
        <div className="text-white font-bold">
          <Link
            to="/"
            className=" hover:bg-gray-50 focus:ring-4  font-medium rounded-lg text-sm block px-4 lg:px-5 py-2 lg:py-2.5 mr-2 "
          >
            Home
          </Link>
          <Link
            to="about"
            className=" hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          >
            About US
          </Link>
        </div>
      </section>
      <section>
        <h1>Follow US</h1>
        <div>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={logo} alt="" width={40} height={40} />
            Instagram
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
