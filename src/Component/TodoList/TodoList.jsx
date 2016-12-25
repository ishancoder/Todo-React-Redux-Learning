import React from "react";
import TodoCard from "../TodoCard/TodoCard";
import * as TodoAction from "../../actions/TodoAction";
import todoStore from "../../stores/TodoStore";
import "./TodoList.css";

class TodoList extends React.Component {
    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            data: todoStore.getAll()
        };
    }

    componentWillMount() {
        todoStore.on("change", this.getTodos);
    }

    componentWillUnmount() {
        todoStore.removeListener("change", this.getTodos);
    }

    getTodos() {
        this.setState({
            data: todoStore.getAll()
        });
    }

    createTodo() {
        const todoTextBox = document.getElementById("todoInput");
        if(todoTextBox.value) {
            TodoAction.createTodo(todoTextBox.value);
        }
        todoTextBox.value = "";
    }

    render() {
        let elements = [];
        let i = 0;
        for (let e of this.state.data) {
            elements.push(<TodoCard content={e.content} completed={e.completed} key={i}/>);
            i++;
        }

        return (
            <div className="todo-list-container">
                <h1>Your TODO!!</h1>
                <div>
                    <input type="text" id="todoInput" placeholder="Enter your Todo !"/>
                    <button onClick={this.createTodo.bind(this)}>Add</button>
                </div>
                {elements}
            </div>
        );
    }
}

export default TodoList;
