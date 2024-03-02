import { useState, useRef } from "react";
import { MdOutlineAddBox } from "react-icons/md";

function AddTODO({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [DueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const DueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const DueDate = DueDateElement.current.value;
    onNewItem(todoName, DueDate);
    todoNameElement.current.value = "";
    DueDateElement.current.value = "";
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row jc-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            // value={todoName}
            placeholder="Enter Task Here"
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={DueDateElement}
            // value={DueDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success jc-button">
            <MdOutlineAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTODO;
