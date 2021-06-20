import { INCREASE, DECREASE } from "./types";

export const increaseCount = () => ({
  type: INCREASE,
});

export const decreaseCount = () => ({
  type: DECREASE,
});
