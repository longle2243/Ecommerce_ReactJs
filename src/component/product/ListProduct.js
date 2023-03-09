import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, InputLabel, Button, TextField, Card, CardContent, CardActionArea, CardMedia, Typography, Select, FormControl, MenuItem } from '@mui/material';
import SearchBar from '../sreachBar';
import { addCart } from '../../redux/cartSlice';


const options = [
  { value: 'all', label: 'ALL' },
  { value: 'SmartPhone', label: 'PHONE' },
  { value: 'Tablet', label: 'TABLET' },
];

export default function ListProduct() {
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
    const filter = listProduct.filter((product) => { return product.data.brand == e })
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
    <div style={{ marginTop: '50px' }}>
      {/* <SearchBar/> */}
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">

        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{ mt: 0.5 }}>
          <TextField label="Search ..." variant="outlined" size="small" value={inputSearch} onChange={handleSearchName} />

          <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
            <InputLabel id="demo-simple-select-label">TYPE</InputLabel>
            <Select value={categoryProduct} onChange={handleSelect} label="Category product">
              {options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
          <Button variant="contained" color="success" size="small" sx={{ marginRight: "10px" }} onClick={() => searchBrand("Apple")} >Apple</Button>
          <Button variant="contained" color="success" size="small" sx={{ marginRight: "10px" }} onClick={() => searchBrand("Samsung")} >Samsung</Button>
          <Button variant="contained" color="success" size="small" sx={{ marginRight: "10px" }} onClick={() => searchBrand("Xiaomi")} >Xiaomi</Button>

        </Box>

      </Box>

      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row" flexWrap="wrap" sx={{ maxWidth: 1600, m: "auto" }}>
        {filterProduct.length > 0
          ? filterProduct.map((check) => {
            return listProduct.map((product) => {
              if (product.data == check.data) {
                return (
                  <Box flexBasis="25%" display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{ maxWidth: 1000, m: "auto" }} key={product.id}>
                    {/* {console.log(check.data)} */}
                    <Link style={{ color: "blue", textDecoration: "none", margin: "auto", marginTop: 30 }}>
                      <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
                        <CardMedia sx={{ height: 300, width: 300 }} image={product.data.img} />
                        <CardActionArea>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{product.data.priceProduct}tr VND</Typography>
                            <Typography variant="body2" color="text.secondary">{product.data.nameProduct}</Typography>
                            <Button variant="contained" color="success" size="small" sx={{ marginRight: "100px" }} onClick={() => handleAddCart(product.id)}>Add Cart</Button>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>
                  </Box>
                );
              } else {
                return null;
              }
            });
          })
          : listProduct.map((product) => {
            return (
              <Box flexBasis="25%" display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{ maxWidth: 1000, m: "auto" }} key={product.id}>
                <Link style={{ color: "blue", textDecoration: "none", margin: "auto", marginTop: 30 }} >
                  <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
                    <CardMedia sx={{ height: 300, width: 300 }} image={product.data.img} />
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{product.data.priceProduct}tr VND</Typography>
                        <Typography variant="body2" color="text.secondary">{product.data.nameProduct}</Typography>
                        <Button variant="contained" color="success" size="small" sx={{ marginRight: "100px" }} onClick={() => handleAddCart(product.id)}>Add Cart</Button>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Box>
            );
          })}
      </Box>
    </div>
  );
}
