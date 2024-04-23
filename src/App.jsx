import AddTodo from "./Component/Add/AddTodo";
import ViewTodos from "./Component/View/ViewTdos";

function App() {
  return (
    <div className="w-75 m-auto mt-5">
      <AddTodo />
      <ViewTodos />
    </div>
  );
}

export default App;
