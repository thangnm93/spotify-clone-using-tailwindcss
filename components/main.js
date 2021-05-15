import HeaderBar from "./header-bar";
import YourPlaylist from "../components/your-playlist";
import RecentlyPlayed from "../components/recently-played";

export default function Main() {
  return (
    <>
      <div className="overflow-y-auto scrollbar h-screen text-gray-200">
        <HeaderBar />
        <div className="bg-gradient-to-b from-yellow-700 to-gray-900">
          <div className="flex flex-col py-6 px-9">
            <h1 className="text-3xl font-semibold">Good evening</h1>
            <YourPlaylist />
            <RecentlyPlayed />
          </div>
        </div>
      </div>
    </>
  );
}
