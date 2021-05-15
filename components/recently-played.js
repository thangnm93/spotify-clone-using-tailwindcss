import { useState } from "react";
import faker from "faker";
const recentlyPlayed = [
  {
    image: faker.image.technics(),
    title: faker.commerce.department(),
    username: faker.name.firstName(),
  },
  {
    image: faker.image.animals(),
    title: faker.commerce.department(),
    username: faker.name.firstName(),
  },
  {
    image: faker.image.cats(),
    title: faker.commerce.department(),
    username: faker.name.firstName(),
  },
  {
    image: faker.image.fashion(),
    title: faker.commerce.department(),
    username: faker.name.firstName(),
  },
  {
    image: faker.image.sports(),
    title: faker.commerce.department(),
    username: faker.name.firstName(),
  },
  {
    image: faker.image.transport(),
    title: faker.commerce.department(),
    username: faker.name.firstName(),
  },
  {
    image: faker.image.city(),
    title: faker.commerce.department(),
    username: faker.name.firstName(),
  },
  {
    image: faker.image.nature(),
    title: faker.commerce.department(),
    username: faker.name.firstName(),
  },
  {
    image: faker.image.sports(),
    title: faker.commerce.department(),
    username: faker.name.firstName(),
  },
];
export default function RecentlyPlayed() {
  const [showPlay, setShowPlay] = useState(false);
  const [currentHover, setCurrentHover] = useState(0);
  return (
    <>
      <h1 className="text-xl font-semibold">Recently played</h1>
      <div className="grid grid-cols-9 gap-4 my-4">
        {recentlyPlayed.map((item, index) => {
          return (
            <div
              key={index}
              className="group bg-gray-800 p-3 pb-6 flex items-center rounded-md hover:bg-gray-700 relative"
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
                  <img className="w-full h-full rounded-md" src={item.image} />
                  <p className="mt-4 text-white">{item.title}</p>
                  <p className=" text-gray-400 text-sm">By {item.username}</p>
                </div>
              </a>
              <a
                href="#"
                className={
                  currentHover === index && showPlay
                    ? "w-10 h-10 transform hover:-translate-y-0 hover:scale-110 rounded-full border-gray-200 bg-green-500 flex justify-center items-center shadow-lg absolute right-0 mr-5"
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
    </>
  );
}
