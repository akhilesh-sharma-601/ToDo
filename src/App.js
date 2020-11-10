import React, { Component } from 'react';
import TodoInput from './component/TodoInput'
import TodoItem from './component/TodoItem'
import TodoList from './component/TodoList'

export default class App extends Component {
    render() {
        return (
            <article>
                <div className="container">
                <h1 style={{textAlign:"center"}}><u>ToDo App in React</u></h1>
                <div className="row">
                    <div className="col-4 bg-warning"><TodoInput/></div>
                    <div className="col-4 bg-primary"><TodoItem/></div>
                    <div className="col-4 bg-danger"><TodoList/></div>
                </div>
                </div>
            </article>
        )
    }
}
