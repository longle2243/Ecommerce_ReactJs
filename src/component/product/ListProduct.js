import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, TextField, Card, CardContent, CardActionArea, CardMedia, Typography } from '@mui/material';
import SearchBar from '../sreachBar';


const options = [
  { value: 'smartphone', label: 'Smart Phone' },
  { value: 'laptop', label: 'Laptop' },
  { value: 'tablet', label: 'Tablet' },
];

export default function ListProduct() {
  const listProduct = useSelector(state => state.product);
  const listBrand = useSelector(state => state.brand);
  const dispatch = useDispatch();

  const [inputSearch, setInputSearch] = useState('');
  const [filterProduct, setFilterProduct] = useState('');

  function handleSearchName(e) {
    setInputSearch(e.target.value)
    searchName(e.target.value)
  }

  function searchName(e) {
    const filter = listProduct.filter((product) => { return product.data.nameProduct.toLowerCase().includes(e.toLowerCase()) })
    setFilterProduct(filter)
    console.log(filter);
  }

  return (
    <div style={{ marginTop: '50px' }}>
      {/* <SearchBar/> */}
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
          <TextField label="Search product" variant="outlined" size="small" value={inputSearch} onChange={handleSearchName} />
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row" flexWrap="wrap" sx={{ maxWidth: 1600, m: "auto" }}>
        {filterProduct.length > 0
          ? filterProduct.map((check) => {
            return listProduct.map((product) => {
              if (product.data == check.data) {
                return (
                  <Box flexBasis="25%" display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{ maxWidth: 1000, m: "auto" }} key={product.id}>
                    {console.log(check.data)}
                    <Link style={{ color: "blue", textDecoration: "none", margin: "auto", marginTop: 30 }}>
                      <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
                        <CardMedia sx={{ height: 300, width: 300 }} image={product.data.img} />
                        <CardActionArea>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{product.data.priceProduct}</Typography>
                            <Typography variant="body2" color="text.secondary">{product.data.nameProduct}</Typography>
                            <Typography variant="body2" color="text.secondary">{product.data.categoryProduct}</Typography>
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
                        <Typography gutterBottom variant="h5" component="div">{product.data.priceProduct}</Typography>
                        <Typography variant="body2" color="text.secondary">{product.data.nameProduct}</Typography>
                        <Typography variant="body2" color="text.secondary">{product.data.categoryProduct}</Typography>
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
