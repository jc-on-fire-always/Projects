import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./todoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.duedate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default TodoItems;
