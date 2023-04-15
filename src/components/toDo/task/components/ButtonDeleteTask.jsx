import React from "react";
import "./styles.css";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskAction } from "../../../../redux/slices/tasksArraySlice";
import { deleteNumberGenerado } from "../../../../redux/slices/randomNumberGeneratorSlice";

const ButtonDeleteTask = ({ idTask }) => {
  const { tasks } = useSelector((state) => state.tasksArraySlice);
  const { numbers } = useSelector((state) => state.randomNumberGeneratorSlice);

  const index = tasks.findIndex((task) => task.payload === idTask);

  const deleteNumber = () => {
    const copyNumbers = [...numbers];
    copyNumbers.splice(index, 1);
    return copyNumbers;
  };

  const deleteTask = () => {
    const copyTasks = [...tasks];
    copyTasks.splice(index, 1);
    return copyTasks;
  };

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTaskAction(deleteTask()));
    dispatch(deleteNumberGenerado(deleteNumber()));
  };

  return (
    <button className="button--deleteTask btnDelete" onClick={() => handleDelete()}>
      <AiOutlineDelete className="btnDelete" />
    </button>
  );
};

export default ButtonDeleteTask;
