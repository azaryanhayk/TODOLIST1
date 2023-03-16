const ToDoItem = (props) => {
  const { toDo, onDelClick, onEditBtn, onEditToDoNameChange } = props;
  return (
    <div>
      {toDo.editable == true ? (
        <input
          onChange={(e) => props.onEditToDoNameChange(toDo.id, e.target.value)}
          value={toDo.name}
        />
      ) : (
        <div>{toDo.name}</div>
      )}

      <button
        onClick={() => {
          onDelClick(toDo.id);
        }}
      >
        Del
      </button>
      <button
        onClick={() => {
          onEditBtn(toDo.id);
        }}
      >
        {toDo.editable ? "Save" : "Edit"}
      </button>
    </div>
  );
};
export default ToDoItem;
