import React, { useState } from "react";
import { Form, Input, InputGroup, Button } from "reactstrap";

import { v4 } from "uuid";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoForm = ({ addTodos }) => {
    const [todoString, setTodoString] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        if (todoString === "") {
            return toast("Empty", { type: "error" });
        } else if (todoString !== "") {
            toast("TODO Added", { type: "success" });
        }

        const todo = {
            todoString,
            id: v4(),
        };

        //TODO
        addTodos(todo);

        setTodoString("");
    };

    return (
        <Form className="my-5">
            <ToastContainer position="top-right" autoClose={1500} />
            <InputGroup>
                <Input
                    type="text"
                    name="Todo"
                    id="todo"
                    placeholder="Your Next Work/Todo"
                    value={todoString}
                    onChange={(e) => setTodoString(e.target.value)}
                />
                <Button className="addHover"  type="submit" color="warning" onClick={handleSubmit}>
                    ADD
                </Button>
            </InputGroup>
        </Form>
    );
};

export default TodoForm;
