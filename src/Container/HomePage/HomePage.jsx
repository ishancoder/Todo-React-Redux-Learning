import React from "react";
import "./HomePage.css";
import TodoList from "../../Component/TodoList/TodoList";

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page-center-full-screen"><TodoList/></div>
        );
    }
}

export default HomePage;
