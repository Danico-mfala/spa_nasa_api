import React, { useEffect, useState } from "react";
import logo from "../assets/image/logo.png";

// react icons
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navigation items array
  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Portfolio", path: "portfolio" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <header
      className={`w-full ${
        isSticky ? "bg-white" : "md:bg-transparent"
      } fixed top-0 left-0 right-0`}
    >
      {" "}
      <div className="flex justify-between bg-white items-center text-base gap-8">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <a
            className="text-2xl font-semibold flex items-center space-x-3"
            href="#"
          >
            <img src={logo} alt="logo" className="w-10 inline-block" />
            <span className="text-[#263238]">Nasa Space</span>
          </a>
          {/* Navigation items for large devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <a
                href={`#${path}`}
                key={path}
                className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium"
              >
                {link}
              </a>
            ))}
          </ul>
          {/* Menu button for small devices */}
          {/* menu button for only mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutralDGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-neutralDGrey" />
              ) : (
                <FaBars className="h-6 w-6 " />
              )}
            </button>
          </div>

          {/* buttton for large screen */}
          <div className="space-x-12 hidden lg:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center text-brandPrimary hover:text-gray900"
            >
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
              Sign up
            </button>
          </div>
        </nav>
      </div>
      {/* Navigation items for small devices */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 p-4">
          <div className={`space-y-4 px-4 mt-10 py-7 bg-brandPrimary `}>
            {navItems.map(({ link, path }) => (
              <a
                href={`#${path}`}
                key={path}
                className="block text-base text-white hover:text-brandPrimary first:font-medium"
                onClick={toggleMenu}
              >
                {link}
              </a>
            ))}
          </div>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
