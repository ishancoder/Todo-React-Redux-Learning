import React from "react";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoList.css";

class TodoList extends React.Component {
    render() {
        let data = [
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
        ];

        let elements = [];
        for(let e of data) {
            elements.push(<TodoCard content={e.content} completed={e.completed} />);
        }

        return (
            <div className="todo-list-container">
                <h1>Your TODO!!</h1>
                <input type="text" placeholder="Enter your Todo !" />
                {elements}
            </div>
        );
    }
}

export default TodoList;
