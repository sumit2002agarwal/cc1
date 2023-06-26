import React from "react";
import { useRef } from "react";
import { Link as scrollLink } from "react-scroll";
import TrackLogo from "../images/cclogo.png";
function Navbar(props) {
  const aboutRef = props.aboutRef;
  const contactRef = props.contactRef;

  const gotoServices = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="p-2 bg-gray-800 shadow md:flex md:items-center md:justify-between fixed top-0 w-full">
      <div className="flex justify-between items-center hover:scale-110 transition-transform duration-300">
        <span className=" cursor-pointer">
          <img
            src={TrackLogo}
            alt=""
            width="60px"
            height="60px"
            style={{
              borderRadius: "30px",
            }}
          />
        </span>

        <span className="text-3xl cursor-pointer mx-2 md:hidden block">
          <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
        </span>
      </div>
      <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
        <li className="mx-4 my-6 md:my-0">
          <button
            href="/#"
            style={{
              fontSize: "25px",
            }}
            onclick={gotoServices}
            className="text-xl hover:text-cyan-500 hover:scale-110 transition-transform duration-300 text-extrabold font-extrabold text-white inline-block"
          >
            HOME
          </button>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a
            href="/#"
            style={{
              fontSize: "25px",
            }}
            className="text-xl hover:text-cyan-500 hover:scale-110 transition-transform duration-300 text-extrabold font-extrabold text-white inline-block"
          >
            ABOUT
          </a>
        </li>

        <li className="mx-4 my-6 md:my-0">
          <a
            href="/#"
            style={{
              fontSize: "25px",
            }}
            className="text-xl hover:text-cyan-500 hover:scale-110 transition-transform duration-300 text-extrabold font-extrabold text-white inline-block"
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
