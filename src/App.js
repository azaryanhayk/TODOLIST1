import React from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import { v4 as uuidv4 } from "uuid";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoName: "",
      todoList: [
        {
          name: "Kirgiz",
          id: uuidv4(),
        },
        {
          name: "Margar",
          id: uuidv4(),
        },
      ],
    };
  }
  onToDoChange = (e) => {
    this.setState({
      toDoName: e.target.value,
    });
  };

  btnClicked = () => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        { name: this.state.toDoName, id: uuidv4() },
      ],
      toDoName: "",
    });
  };

  btnDel = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((item) => id != item.id),
    });
  };

  btnEdit = (id) => {
    const clickedItem = this.state.todoList.find((item) => {
      return item.id == id;
    });
    this.setState({
      todoList: this.state.todoList.map((item) => {
        if (id == item.id) {
          return {
            ...item,
            editable: !clickedItem.editable,
          };
        }
        return item;
      }),
    });
  };

  onEditToDoNameChange = (id, newValue) => {
    this.setState({
      todoList: this.state.todoList.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            name: newValue,
          };
        }
        return item;
      }),
    });
  };
  render() {
    return (
      <div>
        <Header
          toDoName={this.state.toDoName}
          onToDoChange={this.onToDoChange}
          onAddBtnClick={this.btnClicked}
        />
        <ToDoList
          toDoList={this.state.todoList}
          onDelBtnClick={this.btnDel}
          onEditBtn={this.btnEdit}
          onEditToDoNameChange={this.onEditToDoNameChange}
        />
      </div>
    );
  }
}
