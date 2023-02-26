import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
import { Button, Box, AppBar, Toolbar, Typography} from '@mui/material';

export default class Navbar extends Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
                        </Typography>
                        <Button color="inherit">
                            <Link to="/product" style={{ color: "white", textDecoration: "none" }}>Product</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>Cart</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/pay" style={{ color: "white", textDecoration: "none" }}>Pay</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
                <Outlet />
            </Box>
        )
    }
}
