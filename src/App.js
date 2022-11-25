import { useState } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import ToDoSearch from "./components/ToDoSearch";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Привет реакт я люблю тебя" },
    { id: 2, text: "О да как же я люблю тебя" },
  ]);

  const [search, setSearch] = useState({ query: "" });

  function createTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(task) {
    setTasks(tasks.filter((item) => item.id !== task.id));
  }
  const searchTask = tasks.filter((task) => {
    return task.text
      .toLocaleLowerCase()
      .includes(search.query.toLocaleLowerCase());
  });

  return (
    <div className="App">
      <ToDoForm create={createTask} />
      <ToDoSearch search={search} setSearch={setSearch} />
      <ToDoList deleteTask={deleteTask} tasks={searchTask} />
    </div>
  );
}

export default App;
