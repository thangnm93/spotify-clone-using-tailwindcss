export default function Navbar() {
  return (
    <nav className="text-white">
      <div className="p-6">
        <svg className="w-32 stroke-current" viewBox="0 0 1134 340">
          <title>Spotify</title>
          <path
            fill="currentColor"
            d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col px-1">
        <div className="mb-4">
          <div className="px-4 py-2 rounded-md m-1 bg-gray-800">
            <a
              href="#"
              className="flex flex-row font-medium text-sm items-center"
            >
              <svg
                className="w-6 h-6 stroke-current mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </a>
          </div>
          <div className="px-5 py-2 rounded-md m-1 text-gray-300 hover:text-white">
            <a
              href="#"
              className="flex flex-row font-medium text-sm items-center"
            >
              <svg
                className="w-6 h-6 stroke-current mr-3"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              Search
            </a>
          </div>
          <div className="px-5 py-2 rounded-md m-1 text-gray-300 hover:text-white">
            <a
              href="#"
              className="flex flex-row font-medium text-sm items-center"
            >
              <svg
                className="w-6 h-6 stroke-current mr-3"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                ></path>
              </svg>
              Your Library
            </a>
          </div>
        </div>
        <div>
          <div className="px-5 py-2 rounded-md m-1 text-gray-300 hover:text-white">
            <a
              href="#"
              className="flex flex-row font-medium text-sm items-center"
            >
              <svg
                className="w-6 h-6 p-1 stroke-current mr-3 border-gray-400 bg-gray-400 text-black"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Create Playlist
            </a>
          </div>
          <div className="px-5 py-2 rounded-md m-1 text-gray-300 hover:text-white">
            <a
              href="#"
              className="flex flex-row font-medium text-sm items-center"
            >
              <svg
                className="w-6 h-6 mr-3 p-2 stroke-current bg-gradient-to-br from-indigo-600 to-gray-300 text-gray-200"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  fillRule="evenodd"
                ></path>
              </svg>
              Liked songs
            </a>
          </div>
        </div>
        <div className="mx-5 my-4 border-t border-gray-700"></div>
        <div className="px-5 flex flex-col pb-4">
          <div className="w-full grid gap-2 overflow-hidden">
            <div className="flex flex-col overflow-y-auto h-32 2xl:h-96 scrollbar gap-2">
              <div className="flex justify-between text-sm text-gray-300 hover:text-white">
                <a href="#">House</a>
                <a href="#">
                  <svg
                    className="w-5 h-5 stroke-current"
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
              </div>
              <div className="flex justify-between text-sm text-gray-300 hover:text-white">
                <a href="#">Future House</a>
              </div>
              <div className="flex justify-between text-sm text-gray-300 hover:text-white">
                <a href="#">Love House</a>
              </div>
              <div className="flex justify-between text-sm text-gray-300 hover:text-white">
                <a href="#">Trance</a>
              </div>
              <div className="flex justify-between text-sm text-gray-300 hover:text-white">
                <a href="#">Vina House</a>
              </div>
              <div className="flex justify-between text-sm text-gray-300 hover:text-white">
                <a href="#">Big</a>
              </div>
              <div className="flex justify-between text-sm text-gray-300 hover:text-white">
                <a href="#">This Is Martin Garrix</a>
              </div>
              <div className="flex justify-between text-sm text-gray-300 hover:text-white">
                <a href="#">Motivation Mix</a>
              </div>
              <div className="flex justify-between text-sm text-gray-300 hover:text-white">
                <a href="#">Waiting</a>
              </div>
              <div className="flex justify-between text-sm text-gray-300 hover:text-white">
                <a href="#">Replay</a>
              </div>
              <div className="flex justify-between text-sm text-gray-300 hover:text-white">
                <a href="#">Thang NM</a>
              </div>
              <div className="flex justify-between text-sm text-gray-300 hover:text-white">
                <a href="#">Some House</a>
              </div>
            </div>
          </div>
          <div className="w-full mt-15 pt-1">
            <div className="flex items-center text-sm text-gray-300 hover:text-white">
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
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
              <a className="ml-1" href="#">
                Install App
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
