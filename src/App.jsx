import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskEdit from "./components/TaskEdit";

function App() {
  
  return (
    <>
      <h1 className="text-3xl m-3 font-bold">Lato Tasks</h1>
      <hr />
      <div className="tasks-main">
        <TaskForm />
        <TaskList />
        <TaskEdit />
      </div>
    </>
  );
}

export default App;
