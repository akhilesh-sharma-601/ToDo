import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit} = this.props;
   
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        
        <span className="mx-2 text-secondary" >
            <i className="fas fa-dot-circle"></i>
          </span>

        <h6 >{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-primary" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2 text-success" onClick={handleDelete}>
            <i className="fas fa-check-circle"></i>
          </span>
        </div>
      </li>
    );
  }
}
