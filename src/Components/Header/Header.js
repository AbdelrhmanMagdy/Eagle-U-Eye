import React, { Component } from 'react';
import './Header.css';

class App extends Component {

  divs = () => {
    const arr = []
    for(let i =0; i<5;i++){
      arr.push(<div>hahaaaaaaa</div>)
    }
    return arr
  }

  render() {
    return(
      this.divs()
    )
  }
}

export default App;