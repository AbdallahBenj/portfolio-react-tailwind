import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const pages = [
    {
      name: "About",
      link: "#",
    },
    {
      name: "Work",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];

  const [isOpen, setOpen] = useState(false);

  return (
    <header className="header-container flex h-14 w-full items-center bg-linear-to-r from-sky-700 to-sky-950 px-4 text-sky-100 shadow-[0_4px_12px_-4px_#dbeafe] md:h-16">
      {/* Navbar */}

      <nav className="header-content mx-auto flex h-full w-full max-w-4xl flex-row items-center gap-2 md:justify-between">
        {/* Mobile Toggle Button */}

        <button
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className={`cursor-pointer md:hidden ${
            isOpen ? "ring-1" : ""
          } rounded-sm p-1 text-2xl`}
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? <IoCloseSharp /> : <IoMenu />}
        </button>

        {/* Logo */}

        <h1 className="text-2xl font-bold transition-colors duration-200 hover:text-sky-100">
          <a href="#">Portfolio</a>
        </h1>

        {/* Desktop Nav Link */}

        <ul className="hidden flex-row gap-6 md:flex">
          {pages.map((page) => {
            const { name, link } = page;
            return (
              <li
                key={name}
                className="font-medium transition-colors duration-200 hover:border-b hover:text-sky-300"
              >
                <a href={link}>{name}</a>
              </li>
            );
          })}
        </ul>

        {/* mobile Nav Link */}

        {
          <ul
            className={`fixed top-14 left-0 h-screen w-full transform bg-sky-100 p-5 font-bold text-sky-950 p-5transition-all duration-300 ease-in-out md:hidden ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "pointer-events-none -translate-x-full opacity-0"
            } `}
          >
            {pages.map((page) => {
              const { name, link } = page;
              return (
                <li key={name} className="border-b pt-4 pb-2 font-medium">
                  <a href={link} onClick={() => setOpen(false)}>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        }
      </nav>
    </header>
  );
};

export default Header;
