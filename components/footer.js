export default function Footer() {
  return (
    <footer className="fixed bottom-0 right-0 left-0 bg-card border-t border-gray-800 shadow-2xl h-26 2xl:h-26">
      <div className="hidden lg:flex p-2 2xl:p-4 justify-between">
        <div className="flex items-center text-gray-300 hover:text-white">
          <a href="#">
            <img
              className="w-12 h-12 2xl:w-16 2xl:h-16 border-gray-300 rounded-sm"
              src="https://images.unsplash.com/photo-1536849249744-44e01e7a089d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
              alt="You & I"
            />
          </a>
          <div className="ml-4">
            <a href="#">
              <p className="text-sm">You & I</p>
              <p className="text-xs">Mike Williams, Dastic</p>
            </a>
          </div>
          <div className="ml-4">
            <a href="#" className="text-gray-300 hover:text-white">
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
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </a>
          </div>
          <div className="ml-2">
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                className="w-5 h-5 stroke-current"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-white w-1/3">
          <div className="flex justify-center items-center gap-6 mb-3">
            <a
              href="#"
              className="flex items-center justify-center text-green-500 hover:text-green-500 relative"
            >
              <svg
                className="w-4 h-4 2xl:w-6 2xl:h-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
              <span className="absolute w-1 h-1 -bottom-1 rounded-full focus:rounded-full text-green-500 bg-green-500"></span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                className="w-4 h-4 2xl:w-6 2xl:h-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 2xl:w-8 2xl:h-8 transform hover:-translate-y-0 hover:scale-110 border rounded-full bg-white text-black"
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
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                className="w-4 h-4 2xl:w-6 2xl:h-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                className="w-4 h-4 2xl:w-6 2xl:h-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span>00:00</span>
            <a href="#" className="w-full relative">
              <div className="group">
                <div className="border-t-4 w-full"></div>
                <div className="absolute border-t-4 border-green-500 top-0 w-32"></div>
                <span className="absolute w-3 h-3 rounded-full inline-block bg-gray-300 text-gray-300 left-32 -top-1"></span>
              </div>
            </a>
            <span>04:00</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-gray-300 hover:text-white">
            <svg
              className="w-4 h-4 2xl:w-6 2xl:h-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <svg
              className="w-4 h-4 2xl:w-6 2xl:h-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <svg
              className="w-4 h-4 2xl:w-6 2xl:h-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-300 w-20 relative">
            <div className="group">
              <div className="border-t-4 group-hover:border-green-500"></div>
              <span className="absolute group-hover:bg-green-500 w-3 h-3 rounded-full inline-block bg-gray-300 text-gray-300 -right-1 -top-1"></span>
            </div>
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <svg
              className="w-4 h-4 2xl:w-6 2xl:h-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="lg:hidden text-white border-b border-gray-800">
        <div className="px-4 py-2 flex items-center justify-between">
          <a href="#">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </a>
          <span className="font-extrabold">You & I</span>
          <a href="#">
            <svg
              className="w-7 h-7 stroke-current"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4.018 14L14.41 8 4.018 2z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="lg:hidden text-white">
        <div className="px-4 py-2 flex items-center justify-between text-xs">
          <a href="#" className="flex flex-col items-center">
            <svg
              className="w-6 h-6 stroke-current"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Home</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-300">
            <svg
              className="w-6 h-6 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>Search</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-300">
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
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
            <span>Your Library</span>
          </a>
          <a href="#" className="flex flex-col items-center text-gray-300">
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
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            <span>Get App</span>
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end h-6 2xl:h-7 bg-green-400">
        <p className="flex items-center mr-4 text-sm font-light">
          <svg
            className="w-4 h-4 2xl:w-6 2xl:h-6 stroke-current mr-2"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
          <span>You're listening on </span>
          <span className="ml-1 font-bold">ThangNM iPhone</span>
        </p>
      </div>
    </footer>
  );
}
