import { combineReducers } from "redux";
import ColorHoverBG from "../reducers/color-hover-bg";

const MyReducers = combineReducers({
    colorHoverBG: ColorHoverBG,
});

export default MyReducers;
