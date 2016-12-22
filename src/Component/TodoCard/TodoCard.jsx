import React from "react";
import "./TodoCard.css";

class TodoCard extends React.Component {
    render() {
        let todoContent = this.props.content;
        //eslint-disable-next-line
        let todoCompleted = this.props.completed;
        return (<div className="todo-card-container"><span>{todoContent}</span><input type="checkbox" /></div>);
    }
}

export default TodoCard;
