import React from "react";
import TodoCard from "../TodoCard/TodoCard";
import "./TodoList.css";

class TodoList extends React.Component {
    render() {
        return (<TodoCard content="This is contentiano." completed="true"/>);
    }
}

export default TodoList;
