import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const { isDark, toggleTheme } = useTheme();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background */}
      <div
        className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] ${
          isDark ? "hidden" : ""
        }`}
      >
        <Image
          src={assets.header_bg_color}
          alt="Header"
          width={1200}
          height={200}
          className="w-full"
        />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg shadow-sm"
            : ""
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={isDark ? assets.logo_dark : assets.logo}
            alt="Logo"
            width={112}
            height={32}
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        {/* Desktop menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white dark:bg-gray-800 shadow-sm bg-opacity-50 dark:bg-opacity-50"
          }`}
        >
          <li>
            <a
              href="#top"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Contact me
            </a>
          </li>
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="transition-transform hover:scale-110"
          >
            <Image
              src={isDark ? assets.sun_icon : assets.moon_icon}
              alt="Theme toggle"
              width={24}
              height={24}
              className="w-6"
            />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 dark:border-gray-400 rounded-full ml-4"
          >
            Contact
            <Image
              src={isDark ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="Arrow"
              width={12}
              height={12}
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDark ? assets.menu_white : assets.menu_black}
              alt="Menu"
              width={24}
              height={24}
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-28 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-gray-800 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDark ? assets.close_white : assets.close_black}
              alt="Close menu"
              width={20}
              height={20}
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a
              href="#top"
              onClick={closeMenu}
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={closeMenu}
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={closeMenu}
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              onClick={closeMenu}
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
