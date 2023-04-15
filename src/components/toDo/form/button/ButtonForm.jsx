import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { handleInputAction, putTasksInArrayAction } from "../../../../redux/slices/tasksArraySlice";
import { randomNumberGeneratorAction } from "../../../../redux/slices/randomNumberGeneratorSlice";
import { generateRandomNumber } from "../../../../utils/randomNumberGenerator";

const ButtonForm = () => {
  const { inputValue } = useSelector((state) => state.tasksArraySlice);
  const { numbers } = useSelector((state) => state.randomNumberGeneratorSlice);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    const { payload } = dispatch(
      randomNumberGeneratorAction(generateRandomNumber(1, 100, numbers))
    );
    const objectTask = { inputValue, payload };
    dispatch(putTasksInArrayAction(objectTask));
    dispatch(handleInputAction(""));
  };

  return (
    <button type="submit" className="add--task" onClick={handleSubmit}>
      +
    </button>
  );
};

export default ButtonForm;
