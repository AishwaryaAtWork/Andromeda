import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

export default function Footer() {
  return (
    <div id="subscribe">
      {/* add some break */}
      <div className="h-10"></div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
          <h1
            className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
          >
            Subscribe to our newsletter
          </h1>
          <div>
            <input
              type="text"
              placeholder="Enter mail id"
              className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
            />
            <button
              className="bg-teal-400 font-semibold hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white text-lg md:w-auto w-full"
            >
              Subscribe
            </button>
          </div>
        </div>
        <ItemsContainer />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
        >
          <span>© 2023 ScholarSphere. All rights reserved.</span>
          <span>Terms · Privacy Policy</span>
          <SocialIcons Icons={Icons} />
        </div>
      </footer>
    </div>
  );
}
