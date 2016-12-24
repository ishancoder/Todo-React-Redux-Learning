import React from "react";
import "./TodoCard.css";

class TodoCard extends React.Component {
    render() {
        let todoContent = this.props.content;
        let todoCompleted = this.props.completed;
        return (<div className="todo-card-container">
                    <span>{todoContent}</span>
                    <input type="checkbox" defaultChecked={todoCompleted} />
                </div>);
    }
}

export default TodoCard;
