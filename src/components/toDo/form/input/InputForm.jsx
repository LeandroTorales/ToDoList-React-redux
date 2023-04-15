import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { handleInputAction } from "../../../../redux/slices/tasksArraySlice";

const InputForm = () => {
  const { inputValue } = useSelector((state) => state.tasksArraySlice);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const inputValue = e.target.value;
    return dispatch(handleInputAction(inputValue));
  };

  return (
    <input
      type="text"
      maxLength="60"
      minLength="1"
      placeholder="Escribe tu nueva tarea"
      required
      value={inputValue}
      id="input--putTask"
      onChange={handleInput}
    />
  );
};

export default InputForm;
