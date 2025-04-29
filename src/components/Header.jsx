import React from "react";
import { useNavigate } from "react-router";

const links = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Services", link: "/services" },
  { label: "Pricing", link: "/pricing" },
];
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="w-full fixed z-50 top-0 left-0 flex items-center py-4 bg-gray-900 text-white justify-between px-20">
      <h1 className="text-3xl">Logo</h1>
      <nav className="flex flex-row items-center gap-x-8 text-base text">
        {links.map((item, index) => {
          return (
            <a
              key={index}
              onClick={() => navigate(item.link)}
              className="cursor-pointer hover:opacity-40"
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
