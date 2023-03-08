import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Card, CardContent, CardActionArea, CardMedia, Typography, Checkbox, Table, TableCell, TableHead, TableRow } from '@mui/material';
import { delCart, updateCart } from '../redux/cartSlice';
import { addPay } from '../redux/paySlice';

export default function Cart() {
  const listProduct = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveCart = (id) => {
    dispatch(delCart(id))
  }

  function updateAmount(iditem, cal) {
    const data = listProduct.filter((product) => { return product.id == iditem })
    const getAmount = data[0].data.amountProduct
    let updatedData = {
      ...data[0].data,
      amountProduct: parseInt(data[0].data.amountProduct) + 1
    }
    if (cal === "+") {
      let updatedData = {
        ...data[0].data,
        amountProduct: parseInt(data[0].data.amountProduct) + 1
      }
      dispatch(updateCart({ id: iditem, data: updatedData }))
    } else if (cal === "-") {
      let updatedData = {
        ...data[0].data,
        amountProduct: parseInt(data[0].data.amountProduct) - 1
      }
      dispatch(updateCart({ id: iditem, data: updatedData }))
    } else {
      console.log("Update amount fail!");
    }
  }

  function handleAddPay() {
    listProduct.map((product)=>{
      console.log(product.data);
      dispatch(addPay(product.data))
    })
    listProduct.map((product)=>{
      console.log(product.data);
      dispatch(delCart(product.id))
    })
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
              <TableCell>
                <div class="buttons_added">
                  <input class="minus is-form" type="button" value="-" onClick={() => updateAmount(product.id, "-")} />
                  <input aria-label="quantity" class="input-qty" max="Số tối đa" min="Số tối thiểu" name="" type="tel" value={product.data.amountProduct} />
                  <input class="plus is-form" type="button" value="+" onClick={() => updateAmount(product.id, "+")} />
                </div>
              </TableCell>
              <TableCell>{(parseInt(product.data.priceProduct) * product.data.amountProduct * 1000000).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</TableCell>
              <TableCell align="right"><Button variant="contained" color="error" onClick={() => handleRemoveCart(product.id)} >REMOVE</Button></TableCell>
            </TableRow>
          );
        }

        ) :
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
            <Typography gutterBottom variant="h4" component="div">CART IS EMPTY . . .</Typography>
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
            <Button variant="contained" color="success" size="small" sx={{ marginRight: "10px" }} onClick={() => handleAddPay()}>Thanh toán</Button>
          </TableCell>
        </TableRow>
      </Table>
    </div>
  );
}
