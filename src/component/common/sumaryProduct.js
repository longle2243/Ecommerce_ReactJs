import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Card, CardContent, CardActionArea, CardMedia, Typography, Checkbox, Table, TableCell, TableHead, TableRow } from '@mui/material';
import { delPay } from '../../redux/paySlice';

export default function SummaryProduct({ datatype }) {
  console.log(datatype);
  const listProduct = useSelector(state => state[datatype]);
  const dispatch = useDispatch();

  const handlePay = (id) => {
    listProduct.map((product => {
      dispatch(delPay(product.id))
    }))
  }

  return (
    <Table sx={{ minWidth: 650, maxWidth: 1000, m: "auto", mt: "50px" }}>
      <TableRow>
        <TableCell>TỔNG TIỀN</TableCell>
        <TableCell></TableCell>
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
  );
}
