
import React, { useState, useEffect } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const data = window.localStorage.getItem("todos");
        console.log("local", data);

        if (data) {
            setTodos(JSON.parse(data));
        }
    }, []);


    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo("");
        }
    };

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="App">
            <header className="Header">Daily Habit</header>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
};

export default App;
