import { createContext } from "react";
import { dataTasks } from "../data/tasks";
import { useState, useEffect } from "react";
import { createTask, deleteTask, editTask } from "../hooks/useTask";

export const TareaContext = createContext();

export function TareaContextProvider(props) {

    const [tasks, setTasks] = useState(dataTasks);
    const [taskEditing, setTaskEditing] = useState('');

    const handleCreate = (newtask) => createTask(newtask, setTasks, tasks);
    const handleDelete = (id) => deleteTask(tasks, setTasks, id);
    const handleEdit = (id, newdata) => editTask(tasks, setTasks, id, newdata);
    
    
    return (
        <TareaContext.Provider value={{
            handleCreate,
            handleDelete,
            handleEdit,
            taskEditing,
            setTaskEditing,
            tasks
        }}>
            {props.children}
        </TareaContext.Provider>
    )
}