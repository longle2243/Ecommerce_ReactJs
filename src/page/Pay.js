import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Card, CardContent, CardActionArea, CardMedia, Typography, Checkbox, Table, TableCell, TableHead, TableRow } from '@mui/material';
import { delPay } from '../redux/paySlice';
import SummaryProduct from '../component/common/sumaryProduct';
import RowProduct from '../component/common/rowProduct';

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
      <RowProduct datatype={"pay"} />
      <SummaryProduct datatype={"pay"} />
    </div>
  );
}
