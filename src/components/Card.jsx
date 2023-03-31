import React from "react";

export default function Card({ t }) {
  return (
    <>
      <div
        className="rounded-lg border border-gray-200 overflow-hidden shadow-md  shadow-zinc-350
            max-w-[390px] my-5 transform transition-all hover:scale-105 duration-300 "
      >
        {/* Card images here  */}
        <img
          src={t.image}
          className=" rounded-t-lg w-full h-[180px] object-fill bg-white shadow-sm shadow-zinc-300"
        />
        {/* Card textual data + button  */}
        <div className=" px-4  h-[330px] relative">
          <div className="py-1 font-semibold text-lg text-blue-700 line-clamp-1 tracking-tight">
            {t.title}
          </div>
          <p className="dark:text-gray-500 text-gray-700 font-normal text-xs text-justify line-clamp-4">
            {t.description}
          </p>
          <div className="text-xs text-gray-700 font-semibold py-2 text-justify ">
            <p className="leading-loose">Company : {t.company}</p>
            <p className="leading-loose line-clamp-1">Stipend : {t.stipend}</p>
            <p className="leading-loose line-clamp-1">
              Duration : {t.duration}
            </p>
            <p className="leading-loose line-clamp-1">
              Location : {t.location}
            </p>
            <p className="leading-loose line-clamp-1">
              Apply By : {t.apply_by}
            </p>
            <p className="leading-loose line-clamp-1">Start : {t.start_date}</p>
            <p className="leading-loose line-clamp-1">End : {t.end_date}</p>
            {/* Add break */}
            <div className="mb-3"></div>
          </div>
          <a
            href={t.link}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
