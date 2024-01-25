import { useContext } from "react";
import { TareaContext } from "../context/TareaContext";

function TaskItem({ task }) {

  const {handleDelete, setTaskEditing} = useContext(TareaContext);

  const actionDelete = (id) => {
    handleDelete(id);
  };

  return (
    <>
      <div className="card bg-slate-200 shadow-xl">
        <div className="card-body p-5">
          <h3 className="text-xl font-semibold">{task.title}</h3>
          <span className="text-md">{task.description}</span>
          <button className="btn btn-active btn-info" onClick={e => setTaskEditing(task.id)}>editar</button>
          <button className="btn btn-active btn-warning" onClick={(e) => actionDelete(task.id)}>eliminar</button>
          
        </div>
      </div>
    </>
  );
}

export default TaskItem;
