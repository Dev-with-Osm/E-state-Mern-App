import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t-2 border-slate-800 text-black py-2 ">
      <div className="container mx-auto flex flex-col gap-4 sm:flex-row justify-between items-center max-w-6xl">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-2">Osm Estate</h2>
          <p className="text-sm">
            Your trusted partner in real estate excellence
          </p>
        </div>

        <div className="flex space-x-4">
          <Link
            to={"/"}
            className="text-black hover:text-gray-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-black hover:text-gray-500 transition duration-300"
          >
            About Us
          </Link>
        </div>

        <div className="flex space-x-4">
          <Link
            target="_blank"
            to={"https://twitter.com/999Osm"}
            className="text-black hover:text-gray-500 transition duration-300"
          >
            <FaTwitter />
          </Link>
          <Link
            target="_blank"
            to={"https://www.instagram.com/osm.developer?igsh=enQzY2p0cG9rZTQ0"}
            className="text-black hover:text-gray-500 transition duration-300"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
