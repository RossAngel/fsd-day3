import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Name = () => {
    var [text,settext]=useState();

    const first = () => {
        settext("React")
    }
    const angular = () => {
        settext("Angular")
    }
    const next = () => {
        settext("Express")
    }

    useEffect(()=>{
        angular()
    },[])

  return (
    <div>
    <Typography variant='h2'>Welcome to {text}</Typography>
    <br /><br />
    <Button variant="outlined" size='large' onClick={first}>React</Button> &nbsp;&nbsp;
    <Button variant="outlined" size='large' onClick={angular}>Angular</Button> &nbsp;&nbsp;
    <Button variant="outlined" size='large' onClick={next}>Express</Button> 
    </div>

  )
}
export default Name