import React from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.toDoList.map((item) => {
          return (
            <ToDoItem
              key={item.id}
              toDo={item}
              onDelClick={this.props.onDelBtnClick}
              onEditBtn={this.props.onEditBtn}
              onEditToDoNameChange={this.props.onEditToDoNameChange}
            />
          );
        })}
      </>
    );
  }
}
