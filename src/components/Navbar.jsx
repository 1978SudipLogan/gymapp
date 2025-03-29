import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import gym_logo from "../assets/logo/gym_logo.jpg";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = () => {
  //Array for displaying links
  const menu = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Membership", path: "membership" },
    { name: "Classes", path: "classes" },
    { name: "Gallery", path: "gallery" },
    { name: "Contacts", path: "contacts" },
    { name: "Join Us", path: "joinus" },
  ];
  
  //useState for toggling menu
  const [nav, setNav] = useState(true);

  //function for toggling menu
  const handleMenu = () => {
    setNav(!nav);
  };

  return (
    <header className={`h-20 bg-gradient-to-r from-neutral-900 to-neutral-900    ${nav?"":"bg-black"}`}>
      <div className=" flex justify-between mx-5 items-center h-full">
        {/* logo for gym */}
        <div className=" ">
          <img
            src={gym_logo}
            alt=""
            className={`h-12 w-12 rounded-3xl ${nav ? "display" : "hidden"}`}
          />
        </div>

        {/* map function for displaying menu array */}
        <ul className="lg:flex sm:grid sm:grid-cols-4 space-x-3 md:space-x-6 hidden text-xl text-slate-400 font-bold ">
          {menu.map((element, index) => (
            <li key={index} className="">
              <NavLink to={element.path}>{element.name}</NavLink>
            </li>
          ))}
        </ul>

        {/* map function for toggling menu */}
        <ul
          className={`sm:hidden absolute top-0 h-screen w-3/5 bg-gradient-to-r from-green-950 to-green-950  text-white rounded-tr-2xl rounded-br-2xl ${
            nav ? "hidden" : "left-0"
          }`}
        >
          {/* showing logo inside toggling menu card */}
          <img
            src={gym_logo}
            alt="gymLogo"
            className={`h-12 w-12 rounded-3xl mx-auto mt-2 `}
          />

          {/* showing loginicon inside toggling menu card */}
          <div className="text-center mt-2">
            <LoginIcon className="" style={{ fontSize: "30px" }} />
          </div>

          {menu.map((element, index) => (
            <li
              key={index}
              className=" relative top-12 p-3 text-lg  w-full text-center pointer hover:bg-gradient-to-r from-slate-950 to-blue-950 hover:text-2xl font-bold italic"
            >
              <NavLink to={element.path} className="">
                {element.name}
              </NavLink>
              
            </li>
          ))}
        </ul>
        {/* showing logoicon for big screen */}
        <div className="  hidden sm:block ">
          <LoginIcon className="" style={{color:"white"}}/>
        </div>

        {/* hamburger and cancelicon for opening and closing toggling menu*/}
        <div className="sm:hidden absolute right-4" onClick={handleMenu}>
          {nav ? (
            <MenuIcon style={{ fontSize: "35px", color:"white"}} />
          ) : (
            <CloseIcon style={{ fontSize: "35px", color:"white"}} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
