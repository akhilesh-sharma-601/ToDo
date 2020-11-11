import React, { Component } from "react";

import '../App.css'

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group"></div>
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-list"></i>
            </div>
            <input
              type="text"
              className="form-control text-capitalize "
              placeholder="List your work"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-block btn-primary text-uppercase mbtn1 ">
            add item
          </button>
        </form>
      </div>
    );
  }
}
