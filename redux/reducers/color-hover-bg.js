import * as Constants from "../constants";
const initialState = {
    color: "#634023",
};

const ColorHoverBG = (state = initialState, action) => {
    return {
      ...state,
      color: action.payload ? action.payload.color : initialState.color,
    };
};

export default ColorHoverBG;