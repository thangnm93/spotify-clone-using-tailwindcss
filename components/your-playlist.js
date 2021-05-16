import { useState } from "react";
export default function YourPlaylist({ data }) {
  const [showPlay, setShowPlay] = useState(false);
  const [currentHover, setCurrentHover] = useState(0);
  return (
    <div className="grid grid-cols-3 2xl:grid-cols-5 gap-5 my-4 mb-9">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={
              index > 5
                ? "group hidden 2xl:flex items-center justify-between bg-card rounded-md hover:bg-card-hover"
                : "group flex items-center justify-between bg-card rounded-md hover:bg-card-hover"
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
              <div className="flex items-center">
                <img className="w-20 h-20 rounded-l-md" src={item.image} />
                <span className="ml-4 truncate w-32">{item.title}</span>
              </div>
            </a>
            <a
              href="#"
              className={
                currentHover === index && showPlay
                  ? "w-10 h-10 transform hover:-translate-y-0 hover:scale-110 rounded-full border-gray-200 bg-green-500 flex justify-center items-center shadow-lg mr-4"
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
  );
}
