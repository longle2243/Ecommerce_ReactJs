import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, InputLabel, Button, TextField, Card, CardContent, CardActionArea, CardMedia, Typography, Select, FormControl, MenuItem } from '@mui/material';
import { addCart } from '../redux/cartSlice';
import CartProduct from './product/CartProduct';



export default function Banner3() {
  const listProduct = useSelector(state => state.product);
  const listBrand = useSelector(state => state.brand);

  const dispatch = useDispatch();

  const [inputSearch, setInputSearch] = useState('');
  const [filterProduct, setFilterProduct] = useState('');

  const [categoryProduct, setCategoryProduct] = useState('');

  function handleSelect(e) {
    if (e.target.value == "all") {
      const filter = listProduct
      setFilterProduct(filter)
    } else {
      const filter = listProduct.filter((product) => { return product.data.categoryProduct == e.target.value })
      setFilterProduct(filter)
    }

  }

  function handleSearchName(e) {
    setInputSearch(e.target.value)
    searchName(e.target.value)
  }

  function searchName(e) {
    const filter = listProduct.filter((product) => { return product.data.nameProduct.toLowerCase().includes(e.toLowerCase()) })
    setFilterProduct(filter)
    // console.log(filter);
  }

  function searchBrand(e) {
    console.log(e);
    const filter = listProduct.filter((product) => { return product.data.categoryProduct == e })
    setFilterProduct(filter)
    // console.log(filter);
  }

  const handleAddCart = (e) => {
    // console.log(e);
    const cart = listProduct.filter((product) => { return product.id == e })
    // console.log(cart[0].data);
    dispatch(addCart(cart[0].data));
  };

  return (
    <div style={{ marginTop: '150px' }}>
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">

          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
            <Button variant="contained" color="success" size="small" sx={{ marginRight: "10px" }} onClick={() => searchBrand("SmartPhone")} >SmartPhone</Button>
            <Button variant="contained" color="success" size="small" sx={{ marginRight: "10px" }} onClick={() => searchBrand("Tablet")} >Tablet</Button>
          </Box>

        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row" flexWrap="wrap" sx={{ maxWidth: 1600, m: "auto" }}>
          {filterProduct.length > 0
            ? filterProduct.map((check) => {
              return listProduct.map((product) => {
                if (product.data == check.data) {
                  return (
                    <CartProduct product={product} />

                  );
                } else {
                  return null;
                }
              });
            })
            : listProduct.map((product) => {
              return (
                <CartProduct product={product} />

              );
            })}
        </Box>
    </div>
  );
}
