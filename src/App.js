import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './component/Navbar';
import Home from './page/Home';
import Cart from './page/Cart';
import Pay from './page/Pay';
import Contact from './page/Contact';
import Product from './page/Product';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="product/" element={ <Product />} />
          <Route path="cart/" element={ <Cart />} />
          <Route path="pay/" element={ <Pay />} />
          <Route path="contact/" element={ <Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    )
  }
}

