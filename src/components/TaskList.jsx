import { useContext } from "react";
import { TareaContext } from "../context/TareaContext";
import TaskItem from "./TaskItem";

function TaskList() {

  const {tasks, handleDelete, setTaskEditing} = useContext(TareaContext);

  return (
    <>
      <div className="p-5 w-6/12">
        <h2 className="text-2xl font-semibold mx-3">Lista de tareas</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-12/12 mt-4">
          {tasks.map((task, key) => {
            return (
              <TaskItem
                key={key}
                task={task}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TaskList;
