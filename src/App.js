import React from 'react';
import './App.css';
import ShoesCart from './components/shoes-cart/shoes-cart.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      shop: [
        {
          id: 1,
          name: 'addidas',
          img: null
        },
        {
          id: 2,
          name: 'nike',
          img: null
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <ShoesCart />
      </div>
    );
  }
}

export default App;
