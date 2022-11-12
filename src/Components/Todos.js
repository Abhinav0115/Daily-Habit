import React from "react";

import { ListGroup, ListGroupItem, List } from "reactstrap";

// import "reactstrap";
// import "bootstrap";

// import { FaRegCheckCircle /* , FaPen, FaCheckCircle*/ } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Todos = ({ todos, completed }) => {
    return (
        <List className="mt-3">
            <ListGroup className="mt-3 mb-2 items">
                {todos.map((todo) => (
                    <ListGroupItem
                        key={todo.id}
                        style={{
                            wordWrap: "break-word",
                        }}
                    >
                        {todo.todoString}
                        {}
                        <span
                            className="float-end completeHover"
                            onClick={() => {
                                completed(todo.id);
                            }}
                        >
                            <BsFillPatchCheckFill />
                        </span>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </List>
    );
};

export default Todos;
