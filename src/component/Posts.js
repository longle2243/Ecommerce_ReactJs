import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia, Box } from '@mui/material';

const postshardcode = [{ id: 1001, title: 'Loading...', body: 'Description 123 ' }];
var datapost = [];

const PostsList = ({ posts }) => {
  const [isHidden, setIsHidden] = useState(false);
  const hiddendiv = () => {
    setIsHidden(!isHidden);
  };
  posts = posts.products
  console.log("list", posts);
  return (
    <div>
      <TableContainer component={Paper}>
        {
          posts ?
            <div style={{ display: isHidden ? 'none' : 'block' }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "red", fontWeight: "bold" }}>NEW POST</TableCell>
                  </TableRow>
                </TableHead>

                {posts.map((todo) => (
                  <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row" sx={{ maxWidth: 1000, m: "auto" }}>

                    <Link style={{ color: "blue", textDecoration: "none", margin: "auto", marginTop: 30 }} to={{ pathname: `/post/${todo.id}`, state: { todo } }} onClick={hiddendiv}>
                      <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
                        <CardMedia sx={{ height: 240, width: 300 }} image={todo.thumbnail} />
                        <CardActionArea>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{todo.id}</Typography>
                            <Typography variant="body2" color="text.secondary">{todo.title}</Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>

                    <Link style={{ color: "blue", textDecoration: "none", margin: "auto", marginTop: 30 }} to={{ pathname: `/post/${todo.id}`, state: { todo } }} onClick={hiddendiv}>
                      <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
                        <CardMedia sx={{ height: 240, width: 300 }} image={todo.thumbnail} />
                        <CardActionArea>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{todo.id}</Typography>
                            <Typography variant="body2" color="text.secondary">{todo.title}</Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>
                    
                    <Link style={{ color: "blue", textDecoration: "none", margin: "auto", marginTop: 30 }} to={{ pathname: `/post/${todo.id}`, state: { todo } }} onClick={hiddendiv}>
                      <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
                        <CardMedia sx={{ height: 240, width: 300 }} image={todo.thumbnail} />
                        <CardActionArea>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{todo.id}</Typography>
                            <Typography variant="body2" color="text.secondary">{todo.title}</Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>
                  </Box>
                ))}
              </Table>
            </div> : <p>Loading...</p>
        }
      </TableContainer>
    </div>
  );
};

const PostsDetail = () => {
  const routeParams = useParams();
  var post

  if (datapost.length > 0) {
    post = datapost.find(p => p.id === parseInt(routeParams.id));

  }
  console.log("detail", post);
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row" sx={{ maxWidth: 1000, m: "auto" }}>

        <Card sx={{ maxWidth: 345, m: "auto", mt: 5, boxShadow: 5 }}>
          <CardMedia sx={{ height: 240, width: 300 }} image={post.thumbnail} />
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">{post.price}</Typography>
              <Typography variant="body2" color="text.secondary">{post.rating}</Typography>
              <Typography variant="body2" color="text.secondary">{post.title}</Typography>
              <Typography variant="body2" color="text.secondary">{post.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>

      </Box>
    </div>

  );
};

export default function Posts() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://dummyjson.com/products/category/smartphones')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  if (data) {
    datapost = data.products
  }
  // datapost = data.products
  console.log("fetch data", data);
  return (
    <div className="admin-panel-container">
      <hr />
      {data ? <PostsList posts={data} /> : <PostsList posts={postshardcode} />}
      <Routes>
        <Route path="/:id" element={<PostsDetail />} />
      </Routes>
    </div>
  );
};

