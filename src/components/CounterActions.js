import { useDispatch, useSelector } from "react-redux";
// add action creators imports here
import { increamentCounter, decreamentCounter, resetCounter } from "../redux/actions/counterActions";


export const CounterActions = () => {
  const count  = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch()
  return (
    <div className="actions">
      {/* disptach action to decrease count here */}
      <button disabled={count <= 0} onClick={() => dispatch(decreamentCounter())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          alt="dec"
        />
      </button>
      {/* disptach action to increase count here */}
      <button disabled={count >= 10} onClick={() => dispatch(increamentCounter())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="inc"
        />
      </button>
      {/* disptach action to reset count here */}
      <button onClick={() => dispatch(resetCounter())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
