import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Card, CardContent, CardActionArea, CardMedia, Typography, Checkbox, Table, TableCell, TableHead, TableRow } from '@mui/material';
import SummaryProduct from './sumaryProduct';
// import { delPay } from '../redux/paySlice';
// import { delPay } from '../redux/productSlice';


export default function RowProduct({ datatype }) {
  console.log(datatype);
  const listProduct = useSelector(state => state[datatype]);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: '50px' }}>
      <Table sx={{ minWidth: 650, maxWidth: 1000, m: "auto", mt: "50px" }}>
        {(listProduct.length > 0)
          ? listProduct.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>
                  <Card sx={{ maxWidth: 100, boxShadow: 5 }}><CardMedia sx={{ height: 100, width: 100 }} image={product.data.img} /></Card>
                </TableCell>
                <TableCell>{product.data.nameProduct}</TableCell>
                <TableCell>{product.data.amountProduct}</TableCell>
              </TableRow>
            )
          }) :
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
            <Typography gutterBottom variant="h4" component="div">EMPTY . . .</Typography>
          </Box>
        }
      </Table>
    </div>
  );
}
