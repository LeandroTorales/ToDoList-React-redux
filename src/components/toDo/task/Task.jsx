import React from "react";
import "./styles.css";
import TextTask from "./components/TextTask";
import ButtonDeleteTask from "./components/ButtonDeleteTask";

const Task = ({ inputValue, idTask }) => {
  return (
    <div className="task">
      <TextTask>{inputValue}</TextTask>
      <ButtonDeleteTask idTask={idTask} />
    </div>
  );
};

export default Task;
