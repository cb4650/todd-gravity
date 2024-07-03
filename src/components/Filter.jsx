import React from 'react';
import { ButtonGroup, Button, Box } from '@mui/material';

const Filter = ({filter, setFilter }) => {
    return (
        <Box sx={{ mb: 2 }}>
            <ButtonGroup fullWidth>
                <Button variant={filter === "all" ? "contained": "outlined"} onClick={() => setFilter('all')}>All</Button>
                <Button variant={filter === "completed" ? "contained": "outlined"} onClick={() => setFilter('completed')}>Completed</Button>
                <Button variant={filter === "pending" ? "contained": "outlined"} onClick={() => setFilter('pending')}>Pending</Button>
            </ButtonGroup>
        </Box>
    );
};

export default Filter;
