import React, { Component } from 'react'
import { Box, Typography } from '@mui/material';
import Pagin from '../component/Pagin';

export default class Contact extends Component {
  render() {
    return (
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row" sx={{mt:"10%"}}>
        <Typography gutterBottom variant="h4" component="div">PHONE: 0923487654</Typography>
        {/* <Pagin/> */}
      </Box>
    )
  }
}
