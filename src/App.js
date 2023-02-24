
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './component/Product';
import Home from './component/Home';
import FakeApi from './component/FakeApi';
import User from './component/User';
import Posts from './component/Posts';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<User />} />
          <Route path="post/*" element={ <Posts />} />
          <Route path="product/" element={ <Product />} />
          <Route path="fakeapi/" element={ <FakeApi />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
  }
}

