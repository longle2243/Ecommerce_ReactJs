import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Card, CardContent, CardActionArea, CardMedia, Typography, Checkbox, Table, TableCell, TableHead, TableRow } from '@mui/material';
import { delCart, updateCart } from '../../redux/cartSlice';
import { addPay } from '../../redux/paySlice';

export default function SummaryCart() {
  const listProduct = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');


  function handleAddPay() {
    console.log(name);
    console.log(phone);
    setName("")
    setPhone("")
    setIsFormOpen(false)
    listProduct.map((product) => {
      dispatch(addPay(product.data))
    })
    listProduct.map((product) => {
      dispatch(delCart(product.id))
    })
  }

  return (
    <div style={{ marginTop: '50px' }}>
      {isFormOpen && (
        <Card sx={{ maxWidth: 345, boxShadow: 5, position: 'absolute', m: "auto", ml:10 }}>
          <CardContent sx={{m:"auto"}}>
            <Typography><TextField label="Name" onChange={e => setName(e.target.value)} /></Typography>
            <Typography sx={{mt:2}}><TextField label="Phone" onChange={e => setPhone(e.target.value)} /></Typography>
            <Button variant="contained" color="success" size="small" sx={{ marginRight: "10px", mt: 5 }} onClick={() => handleAddPay()}>Đặt Hàng</Button>
            <Button variant="contained" color="error" size="small" sx={{ marginRight: "10px", mt: 5 }} onClick={() => setIsFormOpen(false)}>Hủy</Button>
          </CardContent>
        </Card>
      )}
      <Table sx={{ minWidth: 650, maxWidth: 1000, m: "auto", mt: "50px" }}>
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
            <Button variant="contained" color="success" size="small" sx={{ marginRight: "10px" }} onClick={() => setIsFormOpen(true)}>Đặt Hàng</Button>
          </TableCell>
        </TableRow>
      </Table>
    </div>
  );
}
