import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import React, { Component } from 'react'

export default class FakeApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: "",
      search: []
    };

    this.savevalue = this.savevalue.bind(this);
    this.searchname = this.searchname.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data });
        this.setState({ search: data });
      });
  }

  savevalue(e) {
    this.setState({ value: e.target.value })
    this.searchname(e.target.value)
  }

  searchname(e) {
    const filterdata = this.state.data.filter((user) => { return user.name.toLowerCase().includes(e.toLowerCase()) })
    this.setState({ search: filterdata })
  }

  removeItem(item){
    this.state.data.splice(this.state.data.indexOf(item.data),1)
    this.searchname("")
  }

  render() {
    return (
      <div>
          <Toolbar>
            <Typography><input type="text" placeholder="Search Name" value={this.state.value} onChange={this.savevalue} /></Typography>
          </Toolbar>
        <TableContainer component={Paper}>
          {
            this.state.data ?
              <Table sx={{ minWidth: 650, maxWidth: 1000, m: "auto" }} aria-label="simple table">
                <TableHead >
                  <TableRow>
                  <TableCell sx={{ color: "blue", fontWeight: "bold" }}>ID</TableCell>
                    <TableCell sx={{ color: "blue", fontWeight: "bold" }}>Name</TableCell>
                    <TableCell sx={{ color: "blue", fontWeight: "bold" }} align="right">Username</TableCell>
                    <TableCell sx={{ color: "blue", fontWeight: "bold" }} align="right">Email</TableCell>
                    <TableCell sx={{ color: "blue", fontWeight: "bold" }} align="right">Phone</TableCell>
                    <TableCell sx={{ color: "red", fontWeight: "bold" }} align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                {
                  this.state.search ?
                    <TableBody>
                      {this.state.search.map((data) => (
                        <TableRow
                          key={data.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component="th" scope="row">{this.state.search.indexOf(data)+1}</TableCell>
                          <TableCell component="th" scope="row">{data.name}</TableCell>
                          <TableCell align="right">{data.username}</TableCell>
                          <TableCell align="right">{data.email}</TableCell>
                          <TableCell align="right">{data.phone}</TableCell>
                          <TableCell align="right" ><Button color="inherit" onClick={()=>{this.removeItem({data})}}>DEL</Button></TableCell>
                        </TableRow>
                      ))}
                    </TableBody> :
                    <TableBody>
                      {this.state.data.map((data) => (
                        <TableRow
                          key={data.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component="th" scope="row">{data.name}</TableCell>
                          <TableCell align="right">{data.username}</TableCell>
                          <TableCell align="right">{data.email}</TableCell>
                          <TableCell align="right">{data.phone}</TableCell>
                          <TableCell align="right" ><Button color="inherit" onClick={()=>{this.removeItem({data})}}>DEL</Button></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                }
              </Table> : <p>Loading...</p>
          }
        </TableContainer>
      </div>
    )
  }
}
