import { Link } from "react-scroll";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const links = [
    { name: "Services", href: "services", key: "#services" },
    { name: "Tools", href: "tools", key: "#tools" },
    { name: "Contact Us", href: "contact-us", key: "#contact-us" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="nav--bar py-4 px-6 md:flex items-center z-[2] md:justify-between mx-auto relative rounded-xl bg-slate-100 shadow-md">
      <div className="flex items-center justify-between">
        <img
          className="img max-w-[3rem]"
          src="assets/kibuti.png"
          alt="kibuti"
        />
        <FontAwesomeIcon
          icon={open ? faClose : faBars}
          className="text-2xl cursor-pointer md:hidden text-blue-900 transition ease-linear duration-100"
          onClick={() => setOpen(!open)}
        />
      </div>
      <ul
        className={`nav--links md:flex z-[1] pl-6 md:z-auto md:static md:rounded-none absolute w-full md:w-auto left-0 gap-4 bg-slate-100 transition-all ease-linear duration-300 top-16 shadow-xl md:shadow-none ${
          open ? "top-16" : "left-[-800px]"
        }`}
      >
        {links.map((link) => (
          <li
            className="my-6 md:my-0 md:mx-4 text-blue-900 hover:text-blue-600 transition ease-in duration-200"
            key={link.key}
          >
            <Link
              className="text-blue-950 hover:text-blue-800 cursor-pointer"
              to={link.href}
              spy={true}
              smooth={true}
              offset={-50}
              duration={100}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
