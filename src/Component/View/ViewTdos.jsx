import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/store/slice/todoSlice";

function ViewTodos() {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="mt-2 mx-2">
      <p className="h2 text-center">Todo List</p>
      {todos?.map((todo, index) => {
        return (
          <ul key={todo} className="d-flex gap-4 list-unstyled list-group ">
            <li>
              <div className="d-flex justify-content-between align-items-center flex-wrap gap-4 mb-3 shadow-sm p-2">
                <div>{index + 1}</div>
                <div> {todo.productName} </div>
                <div> ₹ {todo.productPrice} Rs /- </div>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteTask(todo.id))}
                  >
                    Delete{" "}
                  </button>{" "}
                </div>
              </div>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default ViewTodos;
