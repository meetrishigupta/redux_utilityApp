import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementTimer } from "../redux/actions/timerActions";

export const Time = () => {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.timerReducer.isRunning);
  const elapsedTime = useSelector((state) => state.timerReducer.elapsedTime);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        dispatch(incrementTimer());
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning, dispatch]);

  return <b>{elapsedTime}</b>;
};
