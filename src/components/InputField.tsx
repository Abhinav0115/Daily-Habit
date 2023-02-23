import React, { useRef } from "react";
import "./style.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className="input d-flex position-relative align-items-center"
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}
        >
            <input
                ref={inputRef}
                placeholder="Enter a task/habit"
                type="input"
                className="inputBox rounded-5 py-2 px-4 fs-4 border-0"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="inputSubmit position-absolute m-2 text-white rounded-5 fs-5 border-0 text-uppercase fw-bold" type="submit">
                Go
            </button>
        </form>
    );
};

export default InputField;
