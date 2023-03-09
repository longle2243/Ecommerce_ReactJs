import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Box, InputLabel, Button, TextField, Card, CardContent, CardActionArea, CardMedia, Typography, Select, FormControl, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../redux/cartSlice';

import './style.css';

const options = [
  { value: 'all', label: 'ALL' },
  { value: 'SmartPhone', label: 'PHONE' },
  { value: 'Tablet', label: 'TABLET' },
];


function Pagin() {
  const listProduct = useSelector(state => state.product)


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

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = listProduct
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((product) => {
      return (
        <Box flexBasis="25%" display="flex" alignItems="center" justifyContent="center" flexDirection="column" sx={{ maxWidth: 1000, m: "auto" }} key={product.id}>
          <Link style={{ color: "blue", textDecoration: "none", margin: "auto", marginTop: 30 }} >
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
      );
    });

  const pageCount = Math.ceil(listProduct.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row" flexWrap="wrap" sx={{ maxWidth: 1600, m: "auto" }}>

        {displayUsers}
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"pagination"}
          previousLinkClassName={"previous-page"}
          nextLinkClassName={"next-page"}
          disabledClassName={"pagination-disabled"}
          activeClassName={"pagination-active"}
        />
      </Box>

    </div>
  );
}

export default Pagin;
