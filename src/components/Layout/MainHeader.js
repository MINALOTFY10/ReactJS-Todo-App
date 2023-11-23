import classes from "./MainHeader.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { pageToggleActions } from "../../store";
import imgicon from "../../assets/check1.jpg"

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const pageIndex = useSelector((state) => state.pageToggle.pageIndex);

  const navButtonHanlder = (index) => {
    dispatch(pageToggleActions.changePage(index));
  };

  return (
    <header className={classes.header}>
      <img src={imgicon} alt="App Icon" className={classes["app-icon"]}/>
      <h1>To Do</h1>
      <nav>
        <ul>
          <button
            onClick={() => navButtonHanlder(1)}
            className={`${classes["header-button"]} ${
              pageIndex === 1 ? classes.active : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => navButtonHanlder(2)}
            className={`${classes["header-button"]} ${
              pageIndex === 2 ? classes.active : ""
            }`}
          >
            Active
          </button>
          <button
            onClick={() => navButtonHanlder(3)}
            className={`${classes["header-button"]} ${
              pageIndex === 3 ? classes.active : ""
            }`}
          >
            Completed
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
