import React from "react";
import { IoIosSearch } from "react-icons/io";
import image1 from "../assets/logo.png";
import image2 from "../assets/Polygon.png";
import image3 from "../assets/profile.png";
import image4 from "../assets/Hobby.png";

import { MdExplore } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { FaBookmark, FaBell, FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    navigate("/SignIn");
  };

  const isProfilePage = location.pathname === "/Profile";

  return (
    <nav className="w-full h-[3rem] md:[4rem] lg:h-20 flex items-center justify-between shadow-sm duration-1000 ">
      <div className="w-full lg:w-auto flex items-center lg:h-20 justify-between gap-1 lg:justify-start">
        {isProfilePage ? (
          <Link to="/">
            <img
              src={image4}
              className="w-[2.75rem] md:w-[3.75rem] mr-8 my-2 lg:my-2.5 ml-[1.37rem] lg:ml-20 cursor-pointer"
              alt=""
            />
          </Link>
        ) : (
          <Link to="/">
            <img
              src={image1}
              className="w-[9.75rem] md:w-[12.5rem] lg:w-72 my-2 lg:my-2.5 ml-[1.37rem] lg:ml-20 cursor-pointer"
              alt=""
            />
          </Link>
        )}

        <div className="d-flex items-center gap-6 d-block d-lg-none">
          <a
            className="text-2xl md:text-4xl text-[#8064A2] font-semibold"
            href=""
          >
            {" "}
            <IoIosSearch />
          </a>
          <a
            className="text-2xl md:text-3xl text-[#8064A2] font-semibold"
            href=""
          >
            {" "}
            <FaBell />
          </a>
          <IoMenu
            className="text-2xl md:text-4xl text-[#8064A2] font-semibold"
            href=""
         onClick={handleLogin} />
        </div>
        <div className="my-5 ml- h-10 hidden lg:block w-60 lg:w-72 ">
          <form className=" flex ">
            <input
              className="border-[#EBEDF0] bg-[#F8F9FA] border before:  text-[#939CA3] rounded form-control "
              type="search"
              name=""
              id=""
              placeholder="Search here"
            />
            <button className="w-10 h-10 bg-[#8064A2] rounded text-white text-center flex justify-center items-center">
              <IoIosSearch />
            </button>
          </form>
        </div>
      </div>

      <div className="w-[25rem] lg:w-[32.813rem] ml-[5.625rem] mr-36 my-5 h-10 font-semibold  hidden lg:block">
        <ul className="d-flex gap-10 align-items-center  ">
          <li className=" dropdown lg:w-28 md:w-20 h-6 md: mr-2 lg:mr-6">
            <a
              className="nav-link "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="flex items-center gap-1">
                <p>
                  <MdExplore className="text-[#8064A2] w-5" />
                </p>{" "}
                <p>Explore</p>
                <p>
                  <IoIosArrowDown className="ml-1 text-gray-500" />
                </p>
              </div>
            </a>
            <ul className="dropdown-menu mt-2">
              <li>
                <a className="dropdown-item" href="#">
                  People - Community
                </a>
              </li>
              <hr />
              <li>
                <a className="dropdown-item" href="#">
                  Places - Venus
                </a>
              </li>
              <hr />
              <li>
                <a className="dropdown-item" href="#">
                  Programs - Events
                </a>
              </li>
              <hr />
              <li>
                <a className="dropdown-item" href="#">
                  Products - Store
                </a>
              </li>
              <hr />
              <li>
                <a className="dropdown-item" href="#">
                  Blogs
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown w-28 h-6 mr-6">
            <a
              className="nav-link "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="flex items-center gap-1 ">
                <p className="flex items-center gap-1 mr-3">
                  {" "}
                  <img className="w-5 h-4 relative" src={image2} alt="" />
                  Hobbies
                </p>
                <p>
                  <IoIosArrowDown className="ml-1 text-gray-500" />
                </p>
              </div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li>
            <FaBookmark className="text-center text-[#8064A2] h-6 w-6 cursor-pointer" />
          </li>
          <li>
            <FaBell className="text-center text-[#8064A2] h-6 w-6 cursor-pointer" />
          </li>
          <li>
            <FaShoppingCart className="text-center text-[#8064A2] h-6 w-6 cursor-pointer" />
          </li>
          {isProfilePage ? (
            <li className="w-16 h-16">
              <button className="flex w-20 gap-1 items-center">
                <img src={image3} className="w-12 h-12 rounded-full" alt="" />
                <IoIosArrowDown />
              </button>
            </li>
          ) : (
            <li>
              <button
                className="btn btn-primary md:w-20 lg:w-28 h-10 bg-white text-black "
                onClick={handleLogin}
              >
                Sign In
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
