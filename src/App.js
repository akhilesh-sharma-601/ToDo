import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import TodoInput from "./component/TodoInput";
import TodoItem from "./component/TodoItem";
import TodoList from "./component/TodoList";
import './App.css'

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wkake up" },
      { id: 2, title: "go gym" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };
  //events for todo
  handleChange = (e) => {};
  handleSubmit = (e) => {
    console.log("change event");
  };
  handleDelete = (id) => {
    console.log(`handle delete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  };
  clearList = () => {
    console.log("clearing the list");
  };

  render() {
    //console.log(this.state);
    return (
      <article>
        <div className="container mt25">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt20 my5">
              <h2 className="text-capitalize text-center">ToDo App</h2>
              <TodoInput
                item={this.state.item}
                handleChange={this.state.handleChange}
                handleSubmit={this.state.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList  items={this.state.items}
                clearList={this.state.clearList}
                handleDelete={this.state.handleDelete}
                handleEdit={this.state.handleEdit} />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

export default App;
