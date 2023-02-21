import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo  } from '../redux/store';
import { Button, Checkbox, Box, Table, TableBody, TableCell, TableHead, TableRow, TextField, Toolbar, Typography } from '@mui/material';

export default function Product() {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const [value, setValue] = useState('');
  const [filterdata, setFilterdata] = useState('');

  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  function savevalue(e) {
    setValue(e.target.value)
    searchname(e.target.value)
  }

  function searchname(e) {
    const filter = todos.filter((user) => { return user.text.toLowerCase().includes(e.toLowerCase()) })
    setFilterdata(filter)
    console.log(filter);
  }

  const handleDelete = (id) => {
    dispatch(removeTodo(id))
  }

  return (
    <div style={{ marginTop: '50px' }}>
      <h1>Product Manager</h1>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row">
        <TextField label="create product" variant="outlined" size="small" value={newTodo} onChange={e => setNewTodo(e.target.value)} sx={{ marginRight: "5px" }} />
        <Button variant="contained" color="success" size="small" onClick={handleAddTodo} sx={{ marginRight: "200px" }} >Create</Button>
        <TextField label="Search product" variant="outlined" size="small" value={value} onChange={savevalue} />
      </Box>

      <Table sx={{ minWidth: 650, maxWidth: 1000, m: "auto", mt: "50px" }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "blue", fontWeight: "bold" }}>ID</TableCell>
            <TableCell sx={{ color: "blue", fontWeight: "bold" }}>Product</TableCell>
            <TableCell sx={{ color: "red", fontWeight: "bold" }} align="right">Soft-delete</TableCell>
            <TableCell sx={{ color: "grey", fontWeight: "bold" }} align="right"></TableCell>
          </TableRow>
        </TableHead>

        {filterdata.length > 0
          ? filterdata.map((data) => {
            return todos.map((todo) => {
              if (todo.text == data.text) {
                return (
                  <TableRow key={todo.id}>
                    <TableCell component="th" scope="row">{todo.id}</TableCell>
                    <TableCell style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</TableCell>
                    <TableCell align="right"><Checkbox checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} /></TableCell>
                    <TableCell align="right"><Button variant="contained" color="inherit" sx={{ marginRight: "5px" }} >Update</Button><Button variant="contained" color="error" onClick={() => handleDelete(todo.id)}>Delete</Button></TableCell>
                  </TableRow>
                );
              } else {
                return null;
              }
            });
          })
          : todos.map((todo) => {
            return (
              <TableRow key={todo.id}>
                <TableCell component="th" scope="row">{todo.id}</TableCell>
                <TableCell style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</TableCell>
                <TableCell align="right"><Checkbox checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} /></TableCell>
                <TableCell align="right"><Button variant="contained" color="inherit" sx={{ marginRight: "5px" }} >Update</Button><Button variant="contained" color="error" onClick={() => handleDelete(todo.id)}>Delete</Button></TableCell>
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
