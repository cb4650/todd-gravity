import React from 'react';
import { ListItem, ListItemText, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" onClick={() => deleteTodo(index)}>
                    <DeleteIcon />
                </IconButton>
            }
        >
            <Checkbox
                checked={todo.completed}
                onClick={() => toggleTodo(index)}
            />
            <ListItemText
                primary={todo.text}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
        </ListItem>
    );
};

export default TodoItem;
