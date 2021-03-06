import { useState } from "react";
import { useRecoilState } from "recoil";
import { headerColorHoverAtom } from "../recoil-state";

const YourPlaylist = ({ data }) => {
  const [showPlay, setShowPlay] = useState(false);
  const [currentHover, setCurrentHover] = useState(0);
  const [hoverColor, setHoverColor] = useRecoilState(headerColorHoverAtom);
  return (
    <div className="flex flex-row space-x-2 overflow-x-auto scrollbar-transparent lg:grid lg:grid-cols-3 2xl:grid-cols-5 lg:gap-5 my-4 lg:mb-9">
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className={
              index > 5
                ? "group hidden 2xl:flex items-center justify-between md:bg-card rounded-md md:hover:bg-card-hover"
                : "group flex items-center justify-between md:bg-card rounded-md md:hover:bg-card-hover"
            }
            onMouseOver={() => {
              setShowPlay(!showPlay);
              setCurrentHover(index);
              setHoverColor(item.color);
            }}
            onMouseOut={() => {
              setShowPlay(false);
              setCurrentHover(0);
            }}
          >
            <a href="#">
              <div className="flex flex-col md:flex-row md:items-center">
                <img
                  className="w-28 h-28 md:w-20 md:h-20 rounded-sm md:rounded-l-md"
                  src={item.image}
                />
                <span className="text-xs text-center mt-2 md:mt-0 md:ml-4 md:text-base md:text-left truncate w-28 md:w-32">
                  {item.title}
                </span>
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
  );
};
export default YourPlaylist;
