import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    // var a = 'Leo'                                                        (Welcome {a})
    var [name,setname]=useState("") 
    var [messege,setmessege]=useState("")                                   

    const handleInput = (e) =>{
        console.log(e.target.value)
        setname(e.target.value)
    }

const youClicked =() =>{
    setmessege(name);
}

  return (
    <div>
        <Typography variant='h6'>
            Welcome {messege}
        </Typography>
        <br />
        <TextField  variant = 'outlined' label='Enter Your Name' onChange={handleInput}></TextField>
        <br /><br />
        <Button variant='contained' onClick={youClicked}> submit</Button>
        
    </div>
  )
}

export default StateBasics