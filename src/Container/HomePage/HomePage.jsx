import React  from "react";
import "./HomePage.css";
import TodoList from "../../Component/TodoList/TodoList";

class HomePage extends React.Component {
    render() {
        return (<TodoList />);
    }
}

export default HomePage;
