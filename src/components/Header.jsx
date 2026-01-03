import DarkMode from "./DarkMode.jsx";
import MobileNavLink from "./MobileNavLink.jsx";

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

  return (
    <header
      className="header
      sticky top-0
    flex w-full
    h-14
    md:h-16
    border-b border-amber-200 px-4
    bg-linear-to-tr 
    dark:from-slate-500 dark:via-slate-950
    from-blue-100 to-blue-500
    dark:text-slate-100  text-blue-700
    shadow-[0_4px_12px_-4px_#dbeafe]"
    >
      <div
        className="header-container m-auto
      flex justify-between items-center w-full max-w-4xl"
      >
        {/*Brand Name*/}
        <div className="brand">
          {/* Logo */}

          <h1
            className="text-2xl font-bold text-blue-600 dark:text-amber-300
          transition-colors duration-200 hover:text-blue-700 dark:hover:text-amber-400"
          >
            <a href="#">Portfolio</a>
          </h1>
        </div>

        {/* Navbar */}

        <nav
          className="header-content
      flex flex-row gap-2 md:justify-between"
        >
          {/* Desktop Nav Link */}
          <ul className="hidden md:flex flex-row gap-6">
            {pages.map((page) => {
              const { name, link } = page;
              return (
                <li key={name} className="">
                  <a
                    className="font-medium
                    hover:text-blue-950 dark:hover:text-amber-300 hover:border-b
                  transition-colors duration-200"
                    href={link}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Dark Mode */}

          <DarkMode />

          {/* mobile Nav Link */}

          <MobileNavLink navLinks={pages} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
