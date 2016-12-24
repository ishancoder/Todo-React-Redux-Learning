import React from "react";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoList.css";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    content: "YOYO",
                    completed: "true"
                }, {
                    content: "YOYO",
                    completed: "true"
                }, {
                    content: "YOYO",
                    completed: "true"
                }, {
                    content: "YOYO",
                    completed: "true"
                }, {
                    content: "YOYO",
                    completed: "true"
                }
            ]
        };
    }

    addTodo(todo) {
        if(!todo) return false;
        let s = this.state;
        s.data.push({
            content: todo,
            completed: "false"
        });
        this.setState(s);
        return true;
    }

    handleChange(e) {
        const ip = document.getElementById("todoInput");
        const todo = ip.value;
        const resp = this.addTodo(todo);
        if(resp) ip.value = "";
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
                    <button onClick={this.handleChange.bind(this)}>Add</button>
                </div>
                {elements}
            </div>
        );
    }
}

export default TodoList;
