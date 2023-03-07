import React, { Component } from 'react'
import { Outlet, Link } from "react-router-dom";
import { Button, Box, AppBar, Toolbar, Typography} from '@mui/material';

export default class Navbar extends Component {
    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ flexGrow: 1,backgroundColor:"#1F2833" }}>
                    <Toolbar >
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/" style={{ color: "#66FCF1", fontWeight:"bold", textDecoration: "none" }}>Home</Link>
                        </Typography>
                        <Button color="inherit">
                            <Link to="/product" style={{ color: "#66FCF1", fontWeight:"bold", textDecoration: "none" }}>Product</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/cart" style={{ color: "#66FCF1", fontWeight:"bold", textDecoration: "none" }}>Cart</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/pay" style={{ color: "#66FCF1", fontWeight:"bold", textDecoration: "none" }}>Pay</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/contact" style={{ color: "#66FCF1", fontWeight:"bold", textDecoration: "none" }}>Contact</Link>
                        </Button>
                    </Toolbar>
                </AppBar>
                <Outlet />
            </Box>
        )
    }
}
