import React from "react";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoList.css";

class TodoList extends React.Component {
    render() {
        return (<div className="todo-list-container"><TodoCard content="This is contentiano." completed="true"/></div>);
    }
}

export default TodoList;
