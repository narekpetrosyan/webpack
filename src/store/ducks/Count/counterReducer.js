import { INCREASE, DECREASE } from "./types";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      while (state.counter > 0) {
        return {
          ...state,
          counter: state.counter - 1,
        };
      }
    default:
      return state;
  }
};

export default counterReducer;
