import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { tasksActions } from "../../../store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./TaskItem.module.css"

const TaskItem = (props) => {
  const dispatch = useDispatch();
  const [checked, setchecked] = useState(props.task.completed);
  const pageIndex = useSelector((state) => state.pageToggle.pageIndex);

  const handleCheckboxChange = () => {
    if (!props.task.completed) {
      dispatch(tasksActions.completeTask({ id: props.id }));
    } else {
      dispatch(tasksActions.reAddTask({ id: props.id }));
    }
    setchecked(!checked);
  };

  return (
    <Fragment>
      <li
        className={`${classes["goal-item"]} ${
          props.task.completed == true ? classes["completed"] : ""
        }`}
        onClick={handleCheckboxChange}
      >
        <label className={classes["checkbox-wrapper"]}>
          <input
            type="checkbox"
            id="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
          />
          {props.children}
          
        </label>
      </li>
    </Fragment>
  );
};

export default TaskItem;
