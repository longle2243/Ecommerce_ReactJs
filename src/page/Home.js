import React, { Component } from 'react'
import Banner from '../component/banner'
import Banner2 from '../component/banner2'
import Banner3 from '../component/banner3'
import Pagin from '../component/Pagin'
export default class Home extends Component {
  render() {
    return (
      <div style={{marginTop:10}}>
        <Banner/>
        <Pagin/>
        <Banner2/>
        <Banner3/>
      </div>
    )
  }
}
