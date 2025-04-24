"use client";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"; 
import { Sun, Moon, ChevronDown, Menu, X } from "lucide-react";
import LineMdMoonTwotoneAltLoop from "../../../public/icons/LineMdMoonTwotoneAltLoop";
import LineMdSunRisingTwotoneLoop from "../../../public/icons/LineMdSunRisingTwotoneLoop";
import UserMenu from "../UserMenu";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false); // Add new state

  // Add useEffect for entrance animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const menuItems = [
    { id: 1, name: "Home", href: "/", disabled: true },
    {
      id: 2,
      name: "Solar solutions",
      href: "/solar-solutions",
      disabled: false,
      submenu: [
        {
          id: 21,
          name: "About Solar",
          href: "/solar-solutions/about-solar",
          disabled: false,
        },
        {
          id: 22,
          name: "Solar energy calculator",
          href: "/solar-solutions/solar-energy-calculator",
          disabled: false,
        },
        {
          id: 23,
          name: "Complaints",
          href: "/solar-solutions/complaints",
          disabled: false,
        },
      ],
    },
    {
      id: 3,
      name: "EV-solutions",
      href: "/ev-solutions",
      disabled: false,
    },
    {
      id: 4,
      name: "Services",
      href: "/services",
      disabled: false,
      submenu: [
        {
          id: 41,
          name: "Commercial",
          href: "/services/commercial",
          disabled: false,
        },
        {
          id: 42,
          name: "Domestic",
          href: "/services/domestic",
          disabled: false,
        },
        {
          id: 43,
          name: "Inspection and Testing",
          href: "/services/inspection-and-testing",
          disabled: false,
        },
      ],
    },
    {
      id: 5,
      name: "About",
      href: "/about",
      disabled: false,
    },
    { id: 6, name: "Contact", href: "/contact", disabled: false },
    { id: 7, name: "Blog", href: "/blog", disabled: false },
  ];

  const handleSubmenuToggle = (id: number) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out transform ${
        isVisible ? 'translate-y-4' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 dark:border-gray-800/20">
          <div className="flex justify-between items-center w-full px-3 sm:px-6 md:px-10 h-14">
            <Link href="/" className="font-bold text-inherit">
              <Image
                className="w-16 sm:w-16 md:w-24 lg:w-24 xl:w-24 p-2"
                src="/logo.png"
                alt="apnelec"      
                width={80}
                height={80}
              />
            </Link>
            <div className="hidden md:flex">
              {menuItems.map((item) => (
                <div key={item.id} className="relative group p-3 px-3">
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white transition-colors flex items-center"
                  >
                    {item.name}
                    {item.submenu && (
                      <ChevronDown 
                        className="ml-1 w-4 h-4 transform transition-transform duration-300 ease-in-out group-hover:rotate-180" 
                      />
                    )}
                  </Link>
                  {item.submenu && (
                    <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white dark:bg-gray-900 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto border dark:border-gray-700">
                      {item.submenu.map((subItem) => (
                        <li
                          key={subItem.id}
                          className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200"
                        >
                          <Link href={subItem.href}>{subItem.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <UserMenu />
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Modified mobile menu with animation */}
          <div 
            className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              isMenuOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-t border-white/20 dark:border-gray-800/20">
              <ul className="space-y-2 p-4">
                {menuItems.map((item) => (
                  <li key={item.id} className="relative">
                    <div
                      className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors flex items-center cursor-pointer py-2"
                      onClick={() => handleSubmenuToggle(item.id)}
                    >
                      {item.name}
                      {item.submenu && (
                        <ChevronDown
                          className={`ml-1 w-4 h-4 transform transition-transform duration-300 ease-in-out ${
                            openSubmenu === item.id ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>
                    <div 
                      className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                        openSubmenu === item.id ? "max-h-[500px]" : "max-h-0"
                      }`}
                    >
                      {item.submenu && (
                        <ul className="mt-1 space-y-1 pl-4 border-l dark:border-gray-700">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.id} className="py-2">
                              <Link
                                href={subItem.href}
                                className="text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors block"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
