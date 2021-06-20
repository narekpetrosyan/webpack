import { useSelector, useDispatch } from "react-redux";
import {
  decreaseCount,
  increaseCount,
} from "../store/ducks/Count/countActions";

export const PageRedux = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  return (
    <div>
      <button onClick={() => dispatch(increaseCount())}>Increase</button>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(decreaseCount())}>Decrease</button>
    </div>
  );
};
