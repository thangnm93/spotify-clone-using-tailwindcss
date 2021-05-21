import { useState } from "react";
export default function MainSection({ title, description, url, data }) {
  const [showPlay, setShowPlay] = useState(false);
  const [currentHover, setCurrentHover] = useState(0);
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-sm md:text-xl font-semibold">{title}</h1>
          {description.length > 0 ? (
            <p className="hidden md:block text-xs text-gray-300">
              {description}
            </p>
          ) : (
            ""
          )}
        </div>
        <div>
          {url ? (
            <a
              className="hidden md:block text-xs font-semibold"
              href={url.href}
            >
              {url.title}
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex flex-row space-x-2 md:grid scrollbar-transparent grid-cols-4 overflow-x-auto md:scrollbar md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 5xl:grid-cols-8 md:gap-4 my-4">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index > 4
                  ? "group md:bg-card md:p-3 md:pb-6 hidden 2xl:flex rounded-md md:hover:bg-card-hover relative"
                  : "group md:bg-card md:p-3 md:pb-6 flex rounded-md md:hover:bg-card-hover relative"
              }
              onMouseOver={() => {
                setShowPlay(!showPlay);
                setCurrentHover(index);
              }}
              onMouseOut={() => {
                setShowPlay(false);
                setCurrentHover(0);
              }}
            >
              <a href="#">
                <div className="flex flex-col">
                  <div className="md:flex md:justify-center">
                    <img
                      className="w-28 h-28 md:w-40 md:h-40 2xl:w-44 2xl:h-44 rounded-sm md:rounded-md"
                      src={item.image}
                    />
                  </div>
                  <p className="truncate text-center mt-2 md:mt-4 text-white text-xs md:text-sm 2xl:text-md w-28 md:w-36">
                    {item.title}
                  </p>
                  <p className="hidden md:block text-gray-400 text-xs 2xl:text-sm mt-2 overflow-ellipsis overflow-hidden h-9">
                    {item.description}
                  </p>
                </div>
              </a>
              <a
                href="#"
                className={
                  currentHover === index && showPlay
                    ? "w-10 h-10 transform group-hover:transition-all group-hover:duration-500 group-hover:ease group-hover:translate-y-2 hover:-translate-y-0 hover:scale-110 rounded-full border-gray-200 bg-green-500 flex justify-center items-center shadow-lg absolute -mt-1 2xl:mt-3 top-32 right-0 mr-5"
                    : "hidden"
                }
              >
                <svg
                  className="w-4 h-4 stroke-current"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.018 14L14.41 8 4.018 2z"
                  ></path>
                </svg>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
