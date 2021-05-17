import * as Constants from "./constants";

export const setHoverColor = (color) => {
  return (dispatch) => {
    dispatch({
      type: Constants.HOVER_CHANGE_BG_COLOR,
      payload: { color: color },
    });
  };
};
