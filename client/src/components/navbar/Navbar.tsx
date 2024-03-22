import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "./Button";
import NavLinks from "./NavLinks";
import { useAppContext } from "../../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useAppContext();

  return (
    <nav className="bg-blue-800">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to="/">
            <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          {isLoggedIn ? (
            <>
              <Link
                to="/my-bookings"
                className="py-7 px-3 inline-block text-white"
              >
                My Bookings
              </Link>
              <Link
                to="/my-hotels"
                className="py-7 px-3 inline-block text-white"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Button />
          )}
        </ul>

        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
