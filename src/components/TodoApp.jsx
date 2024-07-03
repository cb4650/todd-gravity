import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Filter from './Filter';
import { Container, Typography, Paper } from '@mui/material';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);
    const updateTodo = (todos) => {
        setTodos(todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const addTodo = (text) => {
        updateTodo([...todos, { text, completed: false }])
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        updateTodo(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        updateTodo(newTodos);
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;
        return true;
    });

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Todo List
            </Typography>
            <Paper style={{ padding: '1rem' }}>
                <AddTodo addTodo={addTodo} />
                <Filter filter={filter} setFilter={setFilter} />
                <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            </Paper>
        </Container>
    );
};

export default TodoApp;
