import React from 'react'
import { Box, InputLabel, Button, TextField, Card, CardContent, CardActionArea, CardMedia, Typography, Select, FormControl, MenuItem } from '@mui/material';
import { addCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


export default function CartProduct({product}) {
  const listProduct = useSelector(state => state.product);

  const dispatch = useDispatch();
  const handleAddCart = (e) => {
    // console.log(e);
    const cart = listProduct.filter((product) => { return product.id == e })
    // console.log(cart[0].data);
    dispatch(addCart(cart[0].data));
  };

  return (
    <Box flexBasis="25%" display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{ maxWidth: 1000, m: "auto" }} key={product.id}>
      <Link style={{ color: "blue", textDecoration: "none", margin: "auto", marginTop: 30 }}>
        <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
          <CardMedia sx={{ height: 300, width: 300 }} image={product.data.img} />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">{product.data.priceProduct}tr VND</Typography>
              <Typography variant="body2" color="text.secondary">{product.data.nameProduct}</Typography>
              <Button variant="contained" color="success" size="small" sx={{ marginRight: "100px", mt:5 }} onClick={() => handleAddCart(product.id)}>Add Cart</Button>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Box>
  )
}
