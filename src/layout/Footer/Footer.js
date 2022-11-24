import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/logo/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 shadow-xl rounded-lg md:px-6 md:py-8 bg-slate-50 ">
        <div className="sm:flex sm:items-center sm:justify-between w-8/12 m-auto ">
          <Link className="flex items-center mb-4 sm:mb-0">
            <img src={logo} className="mr-3 h-8" alt="Flowbite Logo" />
          </Link>
          <ul className="flex flex-col md:flex-row justify-center flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-black">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-8 w-8/12" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-black">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Wishdeals™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
