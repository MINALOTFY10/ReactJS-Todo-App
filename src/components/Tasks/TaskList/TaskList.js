import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import classes from "./CompletedTaskList.module.css"

let content = "";
const TaskList = (props) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const pageIndex = useSelector((state) => state.pageToggle.pageIndex);

  return (
    <ul className={classes["goal-list"]}>
      {tasks.map((task) => (
        <TaskItem key={task.id} id={task.id} task={task}>
          {task.text}
        </TaskItem>
      ))}
    </ul>
  );
};

export default TaskList;
