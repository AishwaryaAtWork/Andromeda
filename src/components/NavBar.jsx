import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full max-h-[10vh] bg-[#1F2833]  ">
      {/* <img src="abc.jpeg" alt="logo" class="w-9 h-9" /> */}
      <div className="justify-between mx-1 md:items-center md:flex md:px-8">
        <div>
          {/* ----------------- Navbar title ------------- */}
          <div className="flex items-center justify-between py-4 md:py-4 md:block">
            <Link to="/">
              <h2 className="text-2xl font-bold text-teal-300 font-serif ">
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
        <div>
          <div
            className={`flex-1 justify-self-center text-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white font-semibold hover:text-teal-300 text-xl">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white font-semibold hover:text-teal-300 text-xl">
                <Link to="about">About</Link>
              </li>
              <li className="text-white font-semibold hover:text-teal-300 text-xl">
                <Link to="features">Features</Link>
              </li>
              <li className="text-white font-semibold hover:text-teal-300 text-xl">
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Add working search bar */}
        <div className="flex items-center justify-center w-full md:w-1/2">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-white">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 100-20 10 10 0 000 20z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              className="w-full py-2 pl-8 pr-2 text-black bg-slate-100 rounded-full focus:outline-none focus:bg-white focus:text-gray-900"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>

        {/* ---------------Subscribe button -----------------  */}
        <div className="hidden space-x-2 md:inline-block">
          <Link
            to="javascript:void(0)"
            className="px-4 py-2 text-black hover:text-white font-semibold bg-teal-300 hover:bg-teal-500 rounded-full  border-indigo-50 duration-200 text-base"
          >
            Subscribe
          </Link>
          {/* make dropdown menu */}
          <Link
            to="javascript:void(0)"
            className="px-4 py-2 text-black hover:text-white font-semibold bg-teal-300 hover:bg-teal-500 rounded-full  border-indigo-50 duration-200 text-base"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
