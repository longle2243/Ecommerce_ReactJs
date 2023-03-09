import React, { Component } from 'react'
import Banner from '../component/banner'
import Pagin from '../component/Pagin'
export default class Home extends Component {
  render() {
    return (
      <div style={{marginTop:10}}>
        <Banner/>
        <Pagin/>
      </div>
    )
  }
}
