import { Fragment, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { tasksActions } from "./store";
import TaskList from "./components/Tasks/TaskList/TaskList";
import TaskInput from "./components/Tasks/TaskInput/TaskInput";
import CompletedTaskList from "./components/Tasks/TaskList/CompletedTaskList";
import ActiveTaskList from "./components/Tasks/TaskList/ActiveTaskList";
import { fetchTasksData } from "./store/TasksHttpActions";
import { sendTasksData } from "./store/TasksHttpActions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const isChanged = useSelector((state) => state.tasks.changed);
  const pageIndex = useSelector((state) => state.pageToggle.pageIndex);

  useEffect(() => {
    dispatch(fetchTasksData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (isChanged) {
      dispatch(sendTasksData(tasks));
    }
  }, [tasks, dispatch]);

  const addGoalHandler = (enteredText) => {
    dispatch(tasksActions.addTask({ id: Math.random(), text: enteredText }));
  };

  let content = (
    <p style={{ textAlign: "center" }}>No Tasks found. Maybe add one?</p>
  );

  if (tasks.length > 0) {
    if (pageIndex == 1) {
      content = <TaskList />;
    } else if (pageIndex == 2) {
      content = <ActiveTaskList />;
    } else {
      content = <CompletedTaskList />;
    }
  }

  return (
    <Fragment>
      <Layout>
        {pageIndex != 3 ? (
          <section id="goal-form">
            <TaskInput onAddGoal={addGoalHandler} />
          </section>
        ) : (
          ""
        )}
        <section id="goals">{content}</section>
      </Layout>
    </Fragment>
  );
}

export default App;
