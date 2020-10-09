import React from 'react';
import './App.css';
import { Route, Switch } from "react-router";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      shop: [
        {
          id: 1,
          title: 'addidas',
          img: null
        },
        {
          id: 2,
          title: 'nike',
          img: null
        },
        {
          id: 3,
          title: 'nike',
          img: null
        },
        {
          id: 4,
          title: 'nike',
          img: null
        },
        {
          id: 5,
          title: 'nike',
          img: null
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
