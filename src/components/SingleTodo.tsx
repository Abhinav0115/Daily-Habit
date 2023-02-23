import React, { useState, useEffect, useRef } from "react";
import { Todo } from "./model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";

const SingleTodo: React.FC<{
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, todo: editTodo } : todo
            )
        );
        setEdit(false);
    };

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <form
            className="todosSingle d-flex ps-2 flex-wrap text-break pe-2 py-2 rounded-3 mt-4 text-white"
            onSubmit={(e) => handleEdit(e, todo.id)}
        >
            {edit ? (
                <input
                    minLength={1}
                    ref={inputRef}
                    placeholder={todo.todo}
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="flex-grow-1 todosSingle_Text p-1 px-3 fs-5 rounded-5 me-1 text-capitalize"
                />
            ) : todo.isDone ? (
                <s className="flex-grow-1 todosSingle_Text p-1 fs-5 text-secondary text-capitalize">
                    {todo.todo}
                </s>
            ) : (
                <span className="flex-grow-1 todosSingle_Text p-1 ps-2 fs-5 text-capitalize">
                    {todo.todo}
                </span>
            )}

            <div className="me-0 ">
                {edit ? (
                    <button
                        disabled={editTodo.length < 1}
                        type="submit"
                        className="fs-4 bg-transparent text-info border-0 px-1 icon"
                    >
                        <AiFillEdit />
                    </button>
                ) : (
                    <span
                        className="fs-4 text-info py-2 px-1 icon"
                        onClick={() => {
                            if (!edit && !todo.isDone) {
                                setEdit(!edit);
                            }
                        }}
                    >
                        <AiFillEdit />
                    </span>
                )}
                <span
                    className=" fs-4 text-danger py-2 px-1 icon"
                    onClick={() => handleDelete(todo.id)}
                >
                    <AiFillDelete />
                </span>
                <span
                    className="fs-4 text-warning py-2 px-1 icon"
                    onClick={() => handleDone(todo.id)}
                >
                    <MdDone />
                </span>
            </div>
        </form>
    );
};

export default SingleTodo;
