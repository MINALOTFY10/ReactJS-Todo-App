import { toggleActions } from ".";
import { tasksActions } from ".";

export const fetchTasksData = () => {
  return async (dispatch) => {

    const fetchData = async () => {
      const response = await fetch(
        "https://todo-app-reactjs-f6b53-default-rtdb.firebaseio.com/tasksData.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await response.json();

      return data;
    };

    try {
      let tasksData = [];
      tasksData = await fetchData();

      dispatch(
        tasksActions.replaceTasks({
          tasks: tasksData.tasks || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const sendTasksData = (tasks) => {
  return async (dispatch) => {

    const sendRequest = async () => {
      const response = await fetch(
        "https://todo-app-reactjs-f6b53-default-rtdb.firebaseio.com/tasksData.json",
        {
          method: "PUT",
          body: JSON.stringify({
            tasks: tasks,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
