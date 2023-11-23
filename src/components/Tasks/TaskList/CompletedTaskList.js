import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { tasksActions } from "../../../store";
import CompletedTaskItem from "../TaskItem/CompletedTaskItem";
import classes from "./CompletedTaskList.module.css";

let content = "";
const CompletedTaskList = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const completedTasks = tasks.filter((task) => task.completed);
  const completedTasksLength = completedTasks.length;

  let tasksContent = completedTasks.map((task) => (
    <CompletedTaskItem key={task.id} id={task.id} task={task}>
      {task.text}
    </CompletedTaskItem>
  ));

  let emptyContent = (
    <p style={{ textAlign: "center" }}> No Completed Tasks Yet. Maybe complete one? </p>
  );

  const deleteAllTasksHanlder = () => {
    dispatch(tasksActions.removeAllTask());
  };

  return (
    <Fragment>
      <ul className="goal-list">
        {completedTasksLength > 0 ? tasksContent : emptyContent}
      </ul>
      {completedTasksLength > 0 ? (
        <button
          className={classes["delete-all-button"]}
          onClick={deleteAllTasksHanlder}
        >
          <div className={classes["inside-button"]}>
            <FontAwesomeIcon
              className={classes["delete-icon"]}
              icon={faTrash}
            />
            <p>Delete All</p>
          </div>
        </button>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default CompletedTaskList;
