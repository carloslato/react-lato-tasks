import { useState } from "react";
import { TareaContext } from "../context/TareaContext";
import { useContext } from "react";

function TaskForm() {
  const {handleCreate} = useContext(TareaContext);
  const [newdata, setNewdata] = useState({});
  const actionCreate = () => {
    handleCreate(newdata);
    title.value = "";
    description.value = "";
  };

  const titleChange = (target) => {
    setNewdata({
      title: target.value,
      description: newdata.description || "",
    });
  };

  const descriptionChange = (target) => {
    setNewdata({
      title: newdata.title || "",
      description: target.value,
    });
  };

  return (
    <>
      <div className="py-5 pl-5">
        <div className="tasks-form card shadow-md bg-gray-300">
          <div className="card-body p-5">
            <input
              className="input input-bordered w-full max-w-xs"
              id="title"
              type="text"
              placeholder="Titulo de la tarea"
              onChange={(e) => titleChange(e.target)}
            />
            <input
            className="input input-bordered w-full max-w-xs"
              id="description"
              type="text"
              placeholder="Detalles de la tarea"
              onChange={(e) => descriptionChange(e.target)}
            />
            <button className="btn btn-active btn-primary" onClick={actionCreate}>Crear tarea</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskForm;
