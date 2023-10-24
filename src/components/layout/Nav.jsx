import { useState } from "react";
import { headerLogo } from "../../assets/images";
import { navLinks } from "../../constants";
import SideMenu from "./SideMenu";

const Nav = () => {
  const [scrollTop, setScrollTop] = useState(0);
  window.addEventListener("scroll", () => setScrollTop(window.scrollY));
  return (
    <header className="fixed padding-x py-8 z-20 w-full">
      <nav
        className={`flex justify-between items-center max-container ${
          scrollTop > 0
            ? "  bg-white/95 border-4 border-white  shadow-3xl lg:mx-3 transition-all px-8 py-7 rounded-full"
            : "bg-white/0 transition-all"
        }`}
      >
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center gap-16 items-center max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat hover:underline hovertext-gray-600 hover:p-3 transition-all leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>{" "}
        <div className="hidden lg:block mx-2">
          <button className="w-48 px-3 py-2 rounded-full bg-black text-white">
            Learn More
          </button>
        </div>
        <div className="hidden max-lg:block ">
          <SideMenu scrollTop={scrollTop} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
