import { useDispatch, useSelector } from "react-redux";
import { useState, Fragment } from "react";
import { tasksActions } from "../../../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./CompletedTaskItem.module.css";

const CompletedTaskItem = (props) => {
  const dispatch = useDispatch();
  const [checked, setchecked] = useState(props.task.completed);
  const pageIndex = useSelector((state) => state.pageToggle.pageIndex);

  const deleteTaskHanlder = () => {
    dispatch(tasksActions.removeTask({ id: props.id }));
  };

  return (
    <Fragment>
      <li
        className={`${classes["goal-item"]} ${
          props.task.completed == true ? classes["completed"] : ""
        }`}
      >
        <label className={classes["checkbox-wrapper"]}>
          <input type="checkbox" id={classes["checkbox"]} checked={checked} />
          {props.children}

          <FontAwesomeIcon
            className={classes["delete-icon"]}
            onClick={deleteTaskHanlder}
            icon={faTrash}
          />
        </label>
      </li>
    </Fragment>
  );
};

export default CompletedTaskItem;
