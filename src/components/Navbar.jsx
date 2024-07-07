import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenu, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // setting the toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!setIsMenuOpen);
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
  });

  // navifems array

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Portfolio", path: "portfolio" },
    { link: "Contact", path: "contact" },
  ];
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            spa
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
