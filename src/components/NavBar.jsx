import { useState } from "react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-blue-500 shadow-md shadow-blue-500 border-b-2 border-b-white mb-4 ">
      {/* <img src="abc.jpeg" alt="logo" class="w-9 h-9" /> */}
      <div className="justify-between mx-1 md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-4 md:py-4 md:block">
            <a href="javascript:void(0)">
              <h2 className="text-2xl font-bold text-white font-serif ">
                ScholarSphere
              </h2>
            </a>
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
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
              }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-white font-semibold hover:text-blue-800">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li className="text-white font-semibold hover:text-blue-800">
                <a href="#opportunity">Opportunities</a>
              </li>
              <li className="text-white font-semibold hover:text-blue-800">
                <a href="javascript:void(0)">About Us</a>
              </li>
              <li className="text-white font-semibold hover:text-blue-800">
                <a href="javascript:void(0)">Contact Us</a>
              </li>
            </ul>
    {/* --------------- Sign in/up button for future use in medium devices ----------------  */}
            {/* <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-white font-semibold bg-blue-900 rounded-md shadow shadow-white hover:bg-blue-400"
              >
                Sign in
              </a>
              <a
                href="javascript:void(0)"
                className="inline-block w-full px-4 py-2 text-center text-blue-800 font-semibold bg-white rounded-md shadow shadow-blue-700 hover:bg-blue-200"
              >
                Sign up
              </a>
            </div> */}
          </div>
        </div>
    {/* --------------- Sign in/up button for future use in large devices -----------------  */}
        {/* <div className="hidden space-x-2 md:inline-block">
          <a
            href="javascript:void(0)"
            className="px-4 py-2 text-white font-semibold bg-blue-900 rounded-md shadow shadow-white hover:bg-blue-400"
          >
            Sign in
          </a>
          <a
            href="javascript:void(0)"
            className="px-4 py-2 text-blue-800 font-semibold bg-white rounded-md shadow shadow-blue-700 hover:bg-blue-200"
          >
            Sign up
          </a>
        </div> */}
      </div>
    </nav>
  );
}
