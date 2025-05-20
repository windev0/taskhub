import { Outlet } from "react-router-dom";
import TaskList from "../features/TaskList";

const Task = () => {
  return (
    <div>
      <Outlet />
      <TaskList></TaskList>
    </div>
  );
};

export default Task;
