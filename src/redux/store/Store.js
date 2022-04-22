import { createStore } from "redux";

const initialState = {
  seconds: undefined,
  minutes: undefined,
  hours: undefined,
  currentTime: undefined
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TIME":
      return {
        ...state,
        currentTime: action.payload,
      };
    case "INCREMENT_SECONDS":
      return {
        ...state,
        seconds: action.payload,
      };
    case "INCREMENT_MINUTES":
      return {
        ...state,
        minutes: action.payload,
      };
    case "INCREMENT_HOURS":
      return {
        ...state,
        hours: action.payload,
      };
    default:
      return state;
  }
};
export default createStore(rootReducer);
