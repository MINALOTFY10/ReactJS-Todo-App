import React, { useState } from "react";

import Button from "../../UI/Button";
import styles from "./TaskInput.module.css";

const TaskInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue(" ");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <input
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
          placeholder="New Task..."
        />
      </div>
      <Button type="submit">ADD</Button>
    </form>
  );
};

export default TaskInput;
