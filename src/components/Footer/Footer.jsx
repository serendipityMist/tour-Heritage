import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">GPT</h2>
          <p>
            Experience the rich cultural heritage and breathtaking landscapes of
            Nepal. From ancient temples and vibrant festivals to the majestic
            Himalayas, we bring you unforgettable journeys into the heart of
            Nepal's traditions and natural beauty.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">IMPORTANT LINKS</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/about-us" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-white">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-2">CONTACT US</h3>
          <ul>
            <li>GPT Ltd.</li>
            <li>Gyaneshwor,Kathmandu</li>
            {/* <li>Jacksonville, Fl 32256</li> */}
            <li>
              Phone:{" "}
              <a href="tel:+11234567890" className="hover:text-white">
                98232457XX
              </a>
            </li>
            <li>
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
        {/* Top Tour Locations */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
          <form>
            <input
              type="email"
              placeholder="Your email address"
              className="p-1 rounded-lg"
            />
            <button className="border  border-black p-1 ml-1 bg-white text-gray-400 rounded-lg font-bold">
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © Copyright 2024 | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
