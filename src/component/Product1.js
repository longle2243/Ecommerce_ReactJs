import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActionArea, CardMedia, Box, Typography } from '@mui/material';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://dummyjson.com/products/category/smartphones")
      .then(res => res.json())
      .then(data => {
        console.log("API response:", data);
        this.setState({ data: data.products });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    console.log("Render data:", this.state.data);
    return (
      <div>
        <h1>trang sản phẩm</h1>
        {this.state.data.length > 0 ?
          <div>
            {this.state.data.map((item) => (
              <Box display="flex" alignItems="center" justifyContent="center" flexDirection="row" sx={{ maxWidth: 1000, m: "auto" }}>
                <Link style={{ color: "blue", textDecoration: "none", margin: "auto", marginTop: 30 }} key={item.id}>
                  <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
                    <CardMedia sx={{ height: 240, width: 300 }} image={item.thumbnail} />
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{item.id}</Typography>
                        <Typography variant="body2" color="text.secondary">{item.title}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>

                <Link style={{ color: "blue", textDecoration: "none", margin: "auto", marginTop: 30 }} key={item.id}>
                  <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
                    <CardMedia sx={{ height: 240, width: 300 }} image={item.thumbnail} />
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{item.id}</Typography>
                        <Typography variant="body2" color="text.secondary">{item.title}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>

                <Link style={{ color: "blue", textDecoration: "none", margin: "auto", marginTop: 30 }} key={item.id}>
                  <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
                    <CardMedia sx={{ height: 240, width: 300 }} image={item.thumbnail} />
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{item.id}</Typography>
                        <Typography variant="body2" color="text.secondary">{item.title}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Box>
            ))}
          </div>
          : <p>Loading...</p>
        }
      </div>
    );
  }
}
