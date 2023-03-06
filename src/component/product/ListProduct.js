import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Card, CardContent, CardActionArea, CardMedia, Typography } from '@mui/material';


const options = [
  { value: 'smartphone', label: 'Smart Phone' },
  { value: 'laptop', label: 'Laptop' },
  { value: 'tablet', label: 'Tablet' },
];

export default function ListProduct() {
  const listProduct = useSelector(state => state);
  const dispatch = useDispatch();

  const [inputSearch, setInputSearch] = useState('');
  const [filterProduct, setFilterProduct] = useState('');

  function searchName(e) {
    const filter = listProduct.filter((product) => { return product.name.nameProduct.toLowerCase().includes(e.toLowerCase()) })
    setFilterProduct(filter)
  }

  return (
    <div style={{ marginTop: '50px' }}>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row" flexWrap="wrap" sx={{ maxWidth: 1600, m: "auto" }}>
        {filterProduct.length > 0
          ? filterProduct.map((data) => {
            return listProduct.map((todo) => {
              if (todo.name == data.name) {
                return (
                  <h1>NO</h1>
                );
              } else {
                return null;
              }
            });
          })
          : listProduct.map((todo) => {
            console.log(todo.name);
            return (
              <Box flexBasis="25%" display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{ maxWidth: 1000, m: "auto" }}>

                <Link style={{ color: "blue", textDecoration: "none", margin: "auto", marginTop: 30 }} key={todo.id}>
                  <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
                    <CardMedia sx={{ height: 300, width: 300 }} image={todo.name.img} />
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{todo.name.priceProduct}</Typography>
                        <Typography variant="body2" color="text.secondary">{todo.name.nameProduct}</Typography>
                        <Typography variant="body2" color="text.secondary">{todo.name.categoryProduct}</Typography>
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
