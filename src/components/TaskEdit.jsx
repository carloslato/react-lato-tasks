import { useState, useEffect } from "react";
import { useContext } from "react";
import { TareaContext } from "../context/TareaContext";

function TaskEdit() {
  const [newEditdata, setNewEditdata] = useState({});
  const {taskEditing, setTaskEditing, handleEdit, tasks} = useContext(TareaContext)

  useEffect(() => {

    const editingData = tasks.find((item) => item.id === taskEditing);
    if (editingData) {
      titleEdit.value = editingData.title;
      descriptionEdit.value = editingData.description;
    }
  }, [taskEditing]);

  const actionEdit = () => {
    handleEdit(taskEditing, newEditdata);
    titleEdit.value = "";
    descriptionEdit.value = "";
    setTaskEditing("");
    setNewEditdata({});
  };

  const titleChange = (target) => {
    setNewEditdata({
      title: target.value,
      description: newEditdata.description || "",
    });
  };

  const descriptionChange = (target) => {
    setNewEditdata({
      title: newEditdata.title || "",
      description: target.value,
    });
  };

  return (
    <>
      <div className="tasks-form">
        <input
        className="input input-bordered w-full max-w-xs"
        disabled
        type="text" value={taskEditing} readOnly />
        <input
        className="input input-bordered w-full max-w-xs"
          id="titleEdit"
          type="text"
          placeholder="Titulo de la tarea"
          onChange={(e) => titleChange(e.target)}
        />
        <input
        className="input input-bordered w-full max-w-xs"
          id="descriptionEdit"
          type="text"
          placeholder="Detalles de la tarea"
          onChange={(e) => descriptionChange(e.target)}
        />
        <button className="btn btn-success" onClick={actionEdit}>Actualizar</button>
      </div>
    </>
  );
}

export default TaskEdit;
