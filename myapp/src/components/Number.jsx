import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Number = () => {
    const [count, setcount] = useState(0);

    const addNum = () => {
        console.log("add btn clicked");
        setcount(prevCount => prevCount + 1);
    };

    const sub = () => {
        console.log("sub btn clicked");
        setcount(prevCount => prevCount - 1);
    };

    return (
        <div>
            <Typography variant='h3'>
                Increment and Decrement
            </Typography>
            <br /><br />
            <Typography variant='h5'>
                Count: {count}
            </Typography>
            <br />
            <TextField id="outlined-basic" label="Enter a number" variant="outlined" /> 
            <br /><br />
            <Button variant='contained' onClick={addNum}>1++</Button> &nbsp;&nbsp;
            <Button variant='contained' onClick={sub}>--1</Button>
        </div>
    );
};

export default Number;
