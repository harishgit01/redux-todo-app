import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./slices/counterSlice";
import { add, remove } from "./slices/todoSlice";

const App = () => {
  const [addTodo, setAddTodo] = React.useState();
  const [isActive, setisActive] = React.useState("");
  const counts = useSelector((state) => state.Counter.value);
  const todo = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add(addTodo));
    setAddTodo("");
  };

  const Remove = (i) => {
    dispatch(remove(i));
  };

  return (
    <div className="app">
      <div className="main-div">
        <h3>{isActive === "todo" ? "Todo App" : "Counter App"}</h3>
        <div className="align-sub-header">
          <button
            onClick={() => setisActive("counter")}
            className={`${
              isActive === "counter" ? "bg-success" : "bg-primary"
            }`}
          >
            Launch counter app
          </button>
          <button
            className={`${isActive === "todo" ? "bg-success" : "bg-primary"}`}
            onClick={() => setisActive("todo")}
          >
            Launch todo app
          </button>
        </div>
        <div className="align-items">
          {isActive === "todo" ? (
            <div>
              <div className="align-input-field">
                <input
                  placeholder="Write something..."
                  onChange={(e) => setAddTodo(e.target.value)}
                  value={addTodo}
                />
              </div>
              <div className="align-item">
                <div className="add-button" onClick={handleAdd}>
                  Add
                </div>
              </div>
              <table>
                <tr>
                  <th>Data</th>
                  <th>Action</th>
                </tr>
                {todo.map((item, i) => (
                  <tr key={item}>
                    <td>{item}</td>
                    <td className="align-action-button">
                      <div className="remove-button" onClick={() => Remove(i)}>
                        X
                      </div>
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          ) : isActive === "counter" ? (
            <div className="buttons">
              <button
                className="counter-button"
                onClick={() => dispatch(decrement())}
              >
                -
              </button>
              <div className="return-counts">{counts}</div>
              <button
                className="counter-button"
                onClick={() => dispatch(increment())}
              >
                +
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
