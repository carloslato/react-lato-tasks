export const createTask = (newtask, setTasks, currentTasks) => {
  newtask.id = currentTasks.length + 1;
  setTasks([...currentTasks, newtask])
};

export const editTask = (tasks, setTasks, id, newData) => {
  setTasks(tasks.map(tar => {
        if (tar.id === id) {
            tar.title = newData.title || tar.title
            tar.description = newData.description || tar.description
            return tar
        } else {
            return tar
        }
    }));
};

export const deleteTask = (tasks, setTasks, id) => {
  setTasks(tasks.filter(tar => tar.id !== id));
};
