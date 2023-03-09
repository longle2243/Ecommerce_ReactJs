import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Card, CardContent, CardActionArea, CardMedia, Typography, Checkbox, Table, TableCell, TableHead, TableRow } from '@mui/material';
import { delPay } from '../redux/paySlice';

export default function Pay() {
  const listProduct = useSelector(state => state.pay);
  const dispatch = useDispatch();

  const handlePay = (id) => {
    listProduct.map((product => {
      dispatch(delPay(product.id))
    }))
  }



  return (
    <div style={{ marginTop: '50px' }}>
      <Table sx={{ minWidth: 650, maxWidth: 1000, m: "auto", mt: "50px" }}>
        {(listProduct.length > 0) ? listProduct.map((product) => {
          return (
            <TableRow key={product.id}>
              <TableCell>
                <Card sx={{ maxWidth: 100, boxShadow: 5 }}><CardMedia sx={{ height: 100, width: 100 }} image={product.data.img} /></Card>
              </TableCell>
              <TableCell>{product.data.nameProduct}</TableCell>
              <TableCell>{product.data.amountProduct}</TableCell>
              <TableCell>{(parseInt(product.data.priceProduct) * product.data.amountProduct * 1000000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</TableCell>
            </TableRow>
          );
        }

        ) :
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
            <Typography gutterBottom variant="h4" component="div">EMPTY . . .</Typography>
          </Box>}
        <TableRow>
          <TableCell></TableCell>
          <TableCell>TỔNG TIỀN</TableCell>
          <TableCell></TableCell>
          <TableCell>
            {listProduct.length > 0
              ? listProduct.reduce((total, product) => {
                const cost = parseInt(product.data.priceProduct) * product.data.amountProduct * 1000000;
                return total + cost;
              }, 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
              : 0}
          </TableCell>
          <TableCell align="right">
            <Button variant="contained" color="success" size="small" sx={{ marginRight: "10px" }} onClick={() => handlePay()} >Thanh Toán</Button>
          </TableCell>
        </TableRow>
      </Table>
    </div>
  );
}
