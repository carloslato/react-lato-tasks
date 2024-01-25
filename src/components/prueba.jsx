import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

function TaskList({hook}) {
   

  useEffect(() => {
    const {tasks} = hook;
    console.log(tasks)
  }, []);

  return (
    <>
      <div>
          <h2>Lista de tareas</h2>
      </div>
    </>
  );
}

export default TaskList;
