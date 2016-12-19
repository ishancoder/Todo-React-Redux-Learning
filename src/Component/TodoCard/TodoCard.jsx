import React from "react";
import "./TodoCard.css";

class TodoCard extends React.Component {
    render() {
        let todoContent = this.props.content;
        //eslint-disable-next-line
        let todoCompleted = this.props.completed;
        return (<h1>{todoContent}</h1>);
    }
}

export default TodoCard;
