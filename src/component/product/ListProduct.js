import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, InputLabel, Button, TextField, Select, FormControl, MenuItem } from '@mui/material';
import CartProduct from './CartProduct';


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

  return (
    <div style={{ marginTop: '50px' }}>
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
          {listBrand.map(brand=>(
          <Button variant="contained" color="success" size="small" sx={{ marginRight: "10px" }} onClick={() => searchBrand(brand.brand.namebrand)} >{brand.brand.namebrand}</Button>
          ))}
        </Box>

      </Box>

      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row" flexWrap="wrap" sx={{ maxWidth: 1600, m: "auto" }}>
        {filterProduct.length > 0
          ? filterProduct.map((check) => {
            return listProduct.map((product) => {
              if (product.data == check.data) {
                return (<CartProduct product={product} />)
              } 
            });
          })  : listProduct.map((product) => {
            return (<CartProduct product={product} />)
          })}
      </Box>
    </div>
  );
}
