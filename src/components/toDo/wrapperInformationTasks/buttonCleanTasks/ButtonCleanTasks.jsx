import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { tasksArrayCleanAction } from "../../../../redux/slices/tasksArraySlice";
import { resetRandoNumberArrayAction } from "../../../../redux/slices/randomNumberGeneratorSlice";

const ButtonCleanTasks = () => {
  const dispatch = useDispatch();

  const handleCleanTasks = () => {
    dispatch(tasksArrayCleanAction());
    dispatch(resetRandoNumberArrayAction());
  };

  return (
    <div className="clean--tasks" onClick={() => handleCleanTasks()}>
      Limpiar tareas
    </div>
  );
};

export default ButtonCleanTasks;
