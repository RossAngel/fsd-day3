import { AppBar, Button, IconButton, Menu, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Link to='/num'><Button color="inherit">Count</Button></Link>
          <Link to='/state'><Button color="inherit">State</Button></Link>
          <Link to ='/name'><Button color="inherit">Name</Button></Link>
            </Toolbar>
        </AppBar>
        <br /> <br /> <br />
    </div>
  )
}

export default Navbar