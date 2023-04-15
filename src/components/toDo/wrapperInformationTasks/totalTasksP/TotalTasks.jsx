import React, { useEffect } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { tasksCountTotalAction } from "../../../../redux/slices/tasksArraySlice";

const TotalTasks = () => {
  const { countTotalTasks, tasks } = useSelector((state) => state.tasksArraySlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tasksCountTotalAction());
  }, [tasks]);

  return <p className="total--tasks">Tienes {countTotalTasks} tareas en total</p>;
};

export default TotalTasks;
