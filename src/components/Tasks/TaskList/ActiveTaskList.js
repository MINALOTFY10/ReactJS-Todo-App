import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import classes from "./TaskList.module.css"

let content = "";
const ActiveTaskList = (props) => {
  const tasks = useSelector((state) => state.tasks.tasks);

  const activeTasks = tasks.filter((task) => !task.completed);
  const activeTasksLength = activeTasks.length;

  let tasksContent = activeTasks.map((task) => (
    <TaskItem key={task.id} id={task.id} task={task}>
      {task.text}
    </TaskItem>
  ));

  let emptyContent = (
    <p style={{ textAlign: "center" }}> No Active Tasks now. Maybe Add one? </p>
  );

  return (
    <ul className={classes["goal-list"]}>
      {activeTasksLength > 0 ? tasksContent : emptyContent}
    </ul>
  );
};

export default ActiveTaskList;
