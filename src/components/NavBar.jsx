import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [searchbox, setsearchbox] = useState(false);

  return (
    <div className="">
      <nav className="max-w-[1620px] mx-auto">
        {/* <img src="abc.jpeg" alt="logo" class="w-9 h-9" /> */}
        <div className="mx-1 md:items-center md:flex md:px-8">
          <div>
            {/* ----------------- Navbar title ------------- */}
            <div className="flex items-center py-4 md:py-4 md:block">
              <Link to="/">
                <h2 className="text-2xl font-bold text-black-300 font-serif ">
                  ScholarSphere
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* --------  Link text in navbar -------- */}
          <div className={"ml-[50px]"}>
            <ul className=" space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-1xl text-gray-400 font-semibold hover:text-black">
                <Link to="/">Home</Link>
              </li>
              <li className="text-1xl text-gray-400 font-semibold hover:text-black">
                <Link to="about">About</Link>
              </li>
              <li className="text-1xl text-gray-400 font-semibold hover:text-black">
                <div class="dropdown">
                  <button
                    class="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Opportunities
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Internships
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Apprenticeships
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Fellowships
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Scholarships
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Student Offering
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="text-1xl text-gray-400 font-semibold hover:text-black">
                <Link to="features">Features</Link>
              </li>
              <li className="text-1xl text-gray-400 font-semibold hover:text-black">
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
          {/* ---------------Subscribe button -----------------  */}
          <div className="flex space-x-2 ml-auto items-center">
            {searchbox ? (
              <div className="flex items-center mx-3">
                <input
                  placeholder="search here"
                  type="text"
                  className="border-2 p-1.5 rounded-md"
                />
                <button
                  className="text-2xl"
                  onClick={() => setsearchbox(false)}
                >
                  <Icon icon="material-symbols:close" />
                </button>
              </div>
            ) : (
              <button
                className="text-2xl mx-3"
                onClick={() => setsearchbox(true)}
              >
                <Icon icon="ic:baseline-search" />
              </button>
            )}
            <Link
              to="javascript:void(0)"
              className="px-4 py-2 text-black hover:text-white font-semibold bg-teal-300 hover:bg-teal-500 rounded-full  border-indigo-50 duration-200"
            >
              Subscribe
            </Link>
            {/* make dropdown menu */}
            <Link
              to="javascript:void(0)"
              className="px-4 py-2 text-black hover:text-white font-semibold bg-teal-300 hover:bg-teal-500 rounded-full  border-indigo-50 duration-200"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
