import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddTodo = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', mb: 2 }}>
            <TextField
                label="Add a new task"
                value={text}
                onChange={(e) => setText(e.target.value)}
                fullWidth
                variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
                Add
            </Button>
        </Box>
    );
};

export default AddTodo;
