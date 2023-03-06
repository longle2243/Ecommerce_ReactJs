import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createProduct, softDeleteProduct, deleteProduct } from '../redux/store';
import { Button, Checkbox, Box, Table, TableCell, TableHead, TableRow, TextField, Select, MenuItem, FormControl, Card, CardContent, CardActionArea, CardMedia, Typography } from '@mui/material';


const options = [
  { value: 'smartphone', label: 'Smart Phone' },
  { value: 'laptop', label: 'Laptop' },
  { value: 'tablet', label: 'Tablet' },
];

export default function Product() {
  const listProduct = useSelector(state => state);
  const dispatch = useDispatch();

  const [nameProduct, setNameProduct] = useState('');
  const [priceProduct, setPriceProduct] = useState('');
  const [amountProduct, setAmountProduct] = useState('');
  const [categoryProduct, setCategoryProduct] = useState('');

  const [inputSearch, setInputSearch] = useState('');
  const [filterProduct, setFilterProduct] = useState('');

  const handleCreateProduct = () => {
    if (nameProduct) {
      dispatch(createProduct({ nameProduct: nameProduct, priceProduct: priceProduct, amountProduct: amountProduct, categoryProduct: categoryProduct }));
      setNameProduct('')
      setPriceProduct('')
      setAmountProduct('')
      setCategoryProduct('')
    }
  };

  const handleSoftDeleteProduct = (id) => {
    dispatch(softDeleteProduct(id));
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id))
  }

  function handleSearchName(e) {
    setInputSearch(e.target.value)
    searchName(e.target.value)
  }

  function handleSelect(e) {
    setCategoryProduct(e.target.value)
  }

  function searchName(e) {
    const filter = listProduct.filter((product) => { return product.name.nameProduct.toLowerCase().includes(e.toLowerCase()) })
    setFilterProduct(filter)
  }

  function handleFileInputChange(event) {
    const file = event.target.files[0];
    console.log(file);
  }
  return (
    <div style={{ marginTop: '50px' }}>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">

        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
            <TextField label="Name product" variant="outlined" size="small" value={nameProduct} onChange={e => setNameProduct(e.target.value)} sx={{ marginRight: "5px" }} />
            <TextField label="Price product" variant="outlined" size="small" value={priceProduct} onChange={e => setPriceProduct(e.target.value)} sx={{ marginRight: "5px" }} />
          </Box>

          <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row" sx={{ mt: 0.5 }}>
            <TextField label="Amount product" variant="outlined" size="small" value={amountProduct} onChange={e => setAmountProduct(e.target.value)} sx={{ marginRight: "5px" }} />
            <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
              <Select value={categoryProduct} onChange={handleSelect} label="Category product">
                {options.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <input type="file" onChange={handleFileInputChange} />
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
          <Button variant="contained" color="success" size="small" onClick={handleCreateProduct} sx={{ marginRight: "100px" }} >Create</Button>
          <TextField label="Search product" variant="outlined" size="small" value={inputSearch} onChange={handleSearchName} />
        </Box>
      </Box>


      <Table sx={{ minWidth: 650, maxWidth: 1000, m: "auto", mt: "50px" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "blue", fontWeight: "bold" }}>ID</TableCell>
            <TableCell sx={{ color: "blue", fontWeight: "bold" }}>Name</TableCell>
            <TableCell sx={{ color: "blue", fontWeight: "bold" }}>Price</TableCell>
            <TableCell sx={{ color: "blue", fontWeight: "bold" }}>Amount</TableCell>
            <TableCell sx={{ color: "blue", fontWeight: "bold" }}>Category</TableCell>
            <TableCell sx={{ color: "red", fontWeight: "bold" }} align="right">Soft-delete</TableCell>
            <TableCell sx={{ color: "grey", fontWeight: "bold" }} align="right">---</TableCell>
          </TableRow>
        </TableHead>

        {filterProduct.length > 0
          ? filterProduct.map((data) => {
            return listProduct.map((todo) => {
              if (todo.name == data.name) {
                return (
                  <TableRow key={todo.id}>
                    <TableCell component="th" scope="row">{todo.id}</TableCell>
                    <TableCell style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.name.nameProduct}</TableCell>
                    <TableCell style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.name.priceProduct}</TableCell>
                    <TableCell style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.name.amountProduct}</TableCell>
                    <TableCell style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.name.categoryProduct}</TableCell>
                    <TableCell align="right"><Checkbox checked={todo.completed} onChange={() => handleSoftDeleteProduct(todo.id)} /></TableCell>
                    <TableCell align="right">
                      <Button variant="contained" color="inherit" sx={{ marginRight: "5px" }} >Update</Button>
                      <Button variant="contained" color="error" onClick={() => handleDeleteProduct(todo.id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                );
              } else {
                return null;
              }
            });
          })
          : listProduct.map((todo) => {
            console.log(todo.name);
            return (
              <TableRow key={todo.id}>
                <TableCell component="th" scope="row">{todo.id}</TableCell>
                <TableCell style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.name.nameProduct}</TableCell>
                <TableCell style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.name.priceProduct}</TableCell>
                <TableCell style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.name.amountProduct}</TableCell>
                <TableCell style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.name.categoryProduct}</TableCell>
                <TableCell align="right"><Checkbox checked={todo.completed} onChange={() => handleSoftDeleteProduct(todo.id)} /></TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="inherit" sx={{ marginRight: "5px" }} >Update</Button>
                  <Button variant="contained" color="error" onClick={() => handleDeleteProduct(todo.id)}>Delete</Button>
                </TableCell>

                <TableCell>
                  <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
                    <CardMedia sx={{ height: 240, width: 300 }} image={todo.name.img} />
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{todo.name.nameProduct}</Typography>
                        <Typography variant="body2" color="text.secondary">{todo.name.priceProduct}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </TableCell>

              </TableRow>
            );
          })}

      </Table>

    </div>
  );
}

// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { updateTodo } from './store/todos'

// function TodoItem({ todo }) {
//   const [text, setText] = useState(todo.text)
//   const [completed, setCompleted] = useState(todo.completed)
//   const dispatch = useDispatch()

//   const handleSave = () => {
//     dispatch(updateTodo({
//       id: todo.id,
//       text,
//       completed
//     }))
//   }

//   return (
//     <li>
//       <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
//       <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
//       <button onClick={handleSave}>Save</button>
//     </li>
//   )
// }

// export default TodoItem
