import HeaderBar from "./header-bar";
import YourPlaylist from "./your-playlist";
import { useRecoilValue } from "recoil";
import { headerColorHoverSelector } from "../recoil-state";

export default function Header({ data }) {
  const hoverColor = useRecoilValue(headerColorHoverSelector);
  const styles = {
    backgroundImage: `linear-gradient(to bottom, ${hoverColor}, var(--tw-gradient-to))`,
  };
  return (
    <>
      <HeaderBar hoverColor={hoverColor} />
      <div
        className="flex flex-col py-2 md:py-6 px-4 md:px-9 from-navbar to-bg-main md:mt-14 2xl:mt-16"
        style={styles}
      >
        <h1 className="text-md md:text-3xl font-semibold">Good evening</h1>
        <YourPlaylist data={data} />
      </div>
    </>
  );
}
