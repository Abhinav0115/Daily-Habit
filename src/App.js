import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const data = window.localStorage.getItem("todos");
        console.log("local", localStorage);
        if (data) {
            setTodos(JSON.parse(data));
        }
    }, []);

    const addTodos = async (todo) => {
        setTodos([...todos, todo]);
    };

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const completed = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <Container fluid>
            <h1 className="mb-3 text-uppercase">Todo App</h1>
            <Todos todos={todos} completed={completed} />
            <TodoForm addTodos={addTodos} />
        </Container>
    );
};

export default App;
