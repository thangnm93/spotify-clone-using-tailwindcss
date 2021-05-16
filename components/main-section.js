import { useState } from "react";
export default function MainSection({ title, description, url, data }) {
  const [showPlay, setShowPlay] = useState(false);
  const [currentHover, setCurrentHover] = useState(0);
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">{title}</h1>
          {description.length > 0 ? (
            <p className="text-xs text-gray-300">{description}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          {url ? (
            <a className="text-xs font-semibold" href={url.href}>
              {url.title}
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="grid grid-cols-5 overflow-x-auto scrollbar 2xl:grid-cols-9 gap-4 my-4">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={
                index > 4
                  ? "group bg-card p-3 pb-6 hidden 2xl:flex rounded-md hover:bg-card-hover relative"
                  : "group bg-card p-3 pb-6 flex rounded-md hover:bg-card-hover relative"
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
              <a href="#" className="text-md">
                <div className="flex flex-col">
                  <img
                    className="w-40 h-40 2xl:w-44 2xl:h-44 rounded-md"
                    src={item.image}
                  />
                  <p className="truncate mt-4 text-white text-sm 2xl:text-md w-36">
                    {item.title}
                  </p>
                  <p className="text-gray-400 text-xs 2xl:text-sm mt-2 overflow-ellipsis overflow-hidden h-8">
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
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                </svg>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
