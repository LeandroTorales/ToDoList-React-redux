import React from "react";
import "./styles.css";
import WrapperTodo from "./wrapper/WrapperTodo";
import TitleApp from "./title/TitleApp";
import WrapperTasksYForm from "./wrapperTasksYForm/WrapperTasksYForm";
import ContainerInputTask from "./components/ContainerInputTask";
import Form from "./form/Form";
import ButtonForm from "./form/button/ButtonForm";
import InputForm from "./form/input/InputForm";
import WrapperTasks from "./wrapperTasks/WrapperTasks";
import WrapperCountTotalYCleanTasks from "./wrapperInformationTasks/WrapperCountTotalYCleanTasks";
import TotalTasks from "./wrapperInformationTasks/totalTasksP/TotalTasks";
import ButtonCleanTasks from "./wrapperInformationTasks/buttonCleanTasks/ButtonCleanTasks";
import Task from "./task/Task";
import { useSelector } from "react-redux";

const ToDo = () => {
  const { tasks } = useSelector((state) => state.tasksArraySlice);

  return (
    <div className="container--main__toDo">
      <WrapperTodo>
        <TitleApp />
        <WrapperTasksYForm>
          <ContainerInputTask>
            <Form>
              <InputForm />
              <ButtonForm />
            </Form>
          </ContainerInputTask>
          <WrapperTasks>
            {tasks.map(({ inputValue, payload }) => (
              <Task inputValue={inputValue} key={payload} idTask={payload} />
            ))}
          </WrapperTasks>
        </WrapperTasksYForm>
        <WrapperCountTotalYCleanTasks>
          <TotalTasks />
          <ButtonCleanTasks />
        </WrapperCountTotalYCleanTasks>
      </WrapperTodo>
    </div>
  );
};

export default ToDo;
