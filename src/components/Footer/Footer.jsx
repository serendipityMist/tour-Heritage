import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0f2310] text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">GPT</h2>
          <p className="text-sm md:text-base">
            Experience the rich cultural heritage and breathtaking landscapes of
            Nepal.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">
            IMPORTANT LINKS
          </h3>
          <ul className="space-y-1">
            <li>
              <Link
                to="/about"
                className="hover:text-white text-sm md:text-base"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/link4"
                className="hover:text-white text-sm md:text-base"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white text-sm md:text-base">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white text-sm md:text-base">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">CONTACT US</h3>
          <ul className="space-y-1">
            <li className="text-sm md:text-base">GPT Ltd.</li>
            <li className="text-sm md:text-base">Gyaneshwor, Kathmandu</li>
            <li className="text-sm md:text-base">
              Phone:{" "}
              <a href="tel:+11234567890" className="hover:text-white">
                98232457XX
              </a>
            </li>
            <li className="text-sm md:text-base">
              Email:{" "}
              <a
                href="mailto:xyz@example.com"
                className="hover:text-white underline"
              >
                gpt@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-white">Newsletter</h3>
          <form className="flex flex-col md:flex-row md:flex-wrap gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-lg w-full md:w-3/4 text-black"
            />
            <button
              type="submit"
              className="p-2 bg-[#ff5722] text-white rounded-lg font-bold w-full md:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © Copyright 2024 | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
