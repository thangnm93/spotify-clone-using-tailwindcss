import { useState } from "react";

export default function HeaderBar({ hoverColor }) {
  const [openProfile, setOpenProfile] = useState(false);
  const styles = {
    backgroundColor: hoverColor,
  };
  return (
    <div
      className="flex items-center justify-end md:justify-between h-14 2xl:h-16 bg-navbar md:fixed w-full md:w-4/5 z-20"
      style={styles}
    >
      <div className="hidden md:flex gap-4 ml-9">
        <a
          href="#"
          className="text-white rounded-full bg-gray-800 cursor-not-allowed p-1 w-10 flex items-center justify-center"
        >
          <svg
            className="w-7 h-7 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </a>
        <a
          href="#"
          className="text-white rounded-full bg-black p-1 w-10 flex items-center justify-center"
        >
          <svg
            className="w-7 h-7 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
        <div className="relative hidden 2xl:block">
          <div className="absolute text-black flex items-center px-4 h-full cursor-pointer">
            <svg
              className="w-6 h-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            className="text-gray-600 focus:outline-none focus:border-none bg-white font-normal w-96 h-10 flex items-center pl-12 text-sm rounded-full"
            placeholder="Artists, songs, or podcasts"
          />
        </div>
      </div>
      <div className="hidden md:block mr-9">
        <div className="h-8 bg-gray-900 rounded-full border border-gray-900 px-1 relative">
          <a
            href="#"
            onClick={() => {
              setOpenProfile(!openProfile);
            }}
            className="h-full flex items-center justify-between gap-1 relative text-white text-sm"
          >
            <img
              className="w-7 h-7 rounded-full border border-gray-700"
              src="https://images.unsplash.com/photo-1614548142166-160eed2f0777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=60&q=80"
            />
            <span>Spotify User</span>
            {!openProfile ? (
              <svg
                className="w-6 h-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M5 15l7-7 7 7"
                ></path>
              </svg>
            )}
          </a>
          {openProfile ? (
            <div className="transition duration-300 opacity-100 bg-gray-800 text-gray-300 shadow-2xl rounded-md absolute mt-2 p-4 right-0 w-48 h-auto z-10">
              <ul className="grid gap-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between hover:text-white"
                  >
                    <span>Account</span>
                    <svg
                      className="w-5 h-5 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between hover:text-white"
                  >
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-between hover:text-white"
                  >
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="block md:hidden mr-4">
        <a href="#">
          <svg
            className="w-8 h-8 stroke-current rounded-full"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
