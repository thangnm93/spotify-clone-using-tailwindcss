import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import * as Actions from "../redux/actions";
import { getColorHoverBG } from "../redux/selectors";

const YourPlaylist = ({ data }) => {
  const dispatch = useDispatch();
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
              dispatch(Actions.setHoverColor(item.color));
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
}
const mapStateToProps = (state) => {
  const colorHoverBG = getColorHoverBG(state);
  return { colorHoverBG };
};
export default connect(mapStateToProps)(YourPlaylist);
