import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTask } from "../redux/store/slice/todoSlice";

function AddTodo() {
  const [todo, setTodo] = useState({
    id: "",
    productName: "",
    productPrice: "",
  });

  const [error, setError] = useState("");

  // Redux dispatch function
  const dispatch = useDispatch();

  // Function to handle changes in form inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  }

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    const id =
      Date.now().toString(36) + Math.random().toString(36).substring(2);

    if (!todo.productName || !todo.productPrice) {
      setError("please fill in all fields");
      return;
    }

    const todoObj = {
      ...todo,
      id: id,
    };

    dispatch(addTask(todoObj));
    setTodo({
      id: "",
      productName: "",
      productPrice: "",
    });

    setError("");
  }

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <h2 className="text-center">Add Task</h2>

        <div className="mb-3">
          <label className="form-label" htmlFor="productName">
            {" "}
            Product Name{" "}
          </label>

          <div>
            <input
              id="productName"
              type="text"
              name="productName"
              value={todo.productName}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="productPrice">
            {" "}
            Product Price{" "}
          </label>

          <div>
            <input
              id="productPrice"
              type="number"
              name="productPrice"
              value={todo.productPrice}
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>

        {error && (
          <div className="alert alert-danger text-capitalize">{error}</div>
        )}

        <div>
          <button className="btn btn-primary"> Add Task </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
