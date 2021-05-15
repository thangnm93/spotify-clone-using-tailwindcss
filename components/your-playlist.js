import { useState } from "react";
import faker from "faker";
const yourPlaylist = [
  {
    image: faker.image.technics(),
    title: faker.commerce.department(),
  },
  {
    image: faker.image.animals(),
    title: faker.commerce.department(),
  },
  {
    image: faker.image.cats(),
    title: faker.commerce.department(),
  },
  {
    image: faker.image.fashion(),
    title: faker.commerce.department(),
  },
  {
    image: faker.image.sports(),
    title: faker.commerce.department(),
  },
  {
    image: faker.image.transport(),
    title: faker.commerce.department(),
  },
  {
    image: faker.image.city(),
    title: faker.commerce.department(),
  },
  {
    image: faker.image.nature(),
    title: faker.commerce.department(),
  },
  {
    image: faker.image.avatar(),
    title: faker.commerce.department(),
  },
];
export default function YourPlaylist() {
  const [showPlay, setShowPlay] = useState(false);
  const [currentHover, setCurrentHover] = useState(0);
  return (
    <div className="grid grid-cols-5 gap-4 my-4 mb-9">
      {yourPlaylist.map((item, index) => {
        return (
          <div
            key={index}
            className="group flex items-center justify-between bg-gray-800 rounded-md hover:bg-gray-700"
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
              <div className="flex items-center ">
                <img className="w-20 h-20 rounded-md" src={item.image} />
                <span className="ml-4">{item.title}</span>
              </div>
            </a>
            <a
              href="#"
              className={
                currentHover === index && showPlay
                  ? "mr-9 w-10 h-10 transform hover:-translate-y-0 hover:scale-110 rounded-full border-gray-200 bg-green-500 flex justify-center items-center shadow-lg"
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
