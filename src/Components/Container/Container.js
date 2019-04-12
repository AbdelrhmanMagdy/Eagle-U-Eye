import React, { Component } from 'react'
import './Container.css'
import Stream from './Stream';

 class Container extends Component {
  render() {
    return (
      <div className='container'>
        <div className='streams'>
          <Stream src ={require('../../images/1.png')} class = 'stream' />
          <Stream src ={require('../../images/2.png')}  class = 'stream' />
          <Stream src ={require('../../images/3.png')}  class = 'stream' />
          <Stream src ={require('../../images/4.png')}  class = 'stream' />

        </div>
      </div>
    )
  }
}


export default Container;
