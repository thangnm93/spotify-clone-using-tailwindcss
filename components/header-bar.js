import { useState } from "react";
export default function HeaderBar() {
  const [openProfile, setOpenProfile] = useState(false);
  return (
    <div className="flex items-center justify-between h-14 2xl:h-16 bg-gradient-to-b from-yellow-900 to-yellow-700 sticky top-0">
      <div className="flex gap-4 ml-9">
        <a href="#" className="text-white rounded-full bg-gray-800 p-1">
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
        <a href="#" className="text-white rounded-full bg-black p-1">
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
      </div>
      <div className="mr-9">
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
    </div>
  );
}
