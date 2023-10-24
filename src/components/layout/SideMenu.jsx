import { useState } from "react";
import { headerLogo } from "../../assets/images";
import { hamburger } from "../../assets/icons";
import { navLinks } from "../../constants";
const SideMenu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <button onClick={handleOpen}>
        {" "}
        <img src={hamburger} alt="hamburger" width={25} height={25} />
      </button>
      {open && (
        <div
          onClick={handleOpen}
          className="bg-black/30 fixed w-full h-screen z-10 top-0 left-0 flex justify-end "
        >
          <div className="bg-white/95 border-4 border-white  w-96  rounded-3xl transition-all shadow-3xl  mt-5 mr-5 mb-5 p-5">
            <div className="flex flex-col h-full justify-between  items-center">
              <div className="w-full flex  items-center justify-between">
                <img src={headerLogo} alt="logo" width={130} height={29} />
                <button onClick={handleOpen} className="  p-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className=" mt-10 flex-1 flex flex-col justify-center gap-16 items-center ">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      onClick={handleOpen}
                      href={link.href}
                      className="font-montserrat p-3 hover:bg-gray-100 transition-all hover:p-5 rounded-2xl hover:text-gray-400 leading-normal text-lg text-black"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="w-full text-center flex flex-col gap-3 items-center justify-center p-2">
                <button className="w-full px-3 py-2 rounded-xl bg-black text-white">
                  Learn More
                </button>
                <p className="text-center text-sm text-gray-900 font-normal">
                  2023 | All Copyrights Resrved{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideMenu;
