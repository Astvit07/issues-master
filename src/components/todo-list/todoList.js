import React from "react";
import './todo-list.css';
import TodoListItem from "../todo-list-item/todoListItem";

const TodoList = () =>{
    return (
        <div className="todo-list-wrapper">
            <TodoListItem />
        </div>
    );
}

export default TodoList;