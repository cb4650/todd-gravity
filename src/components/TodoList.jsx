import React from 'react';
import TodoItem from './TodoItem';
import { List } from '@mui/material';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <List>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </List>
    );
};

export default TodoList;
