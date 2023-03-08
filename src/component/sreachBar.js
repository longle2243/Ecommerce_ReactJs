import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField } from '@mui/material';

export default function SearchBar() {
  const listProduct = useSelector(state => state);
  const dispatch = useDispatch();

  const [inputSearch, setInputSearch] = useState('');
  const [filterProduct, setFilterProduct] = useState('');

  function handleSearchName(e) {
    setInputSearch(e.target.value)
    searchName(e.target.value)
  }

  function searchName(e) {
    const filter = listProduct.filter((product) => { return product.name.nameProduct.toLowerCase().includes(e.toLowerCase()) })
    setFilterProduct(filter)
  }

  return (
    <div style={{ marginTop: '50px' }}>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
          <TextField label="Search product" variant="outlined" size="small" value={inputSearch} onChange={handleSearchName} />
        </Box>
      </Box>
    </div>
  );
}

