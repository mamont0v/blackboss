import React from 'react';
import './App.css';
import { Route, Switch } from "react-router"; //add Link, NavLink
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component'
import Header from './components/header/header.component';
import SignUpAndSignIn from './pages/sighuppage/sign-up.component'
import { auth } from './firebase/firebase.utils';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
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

  //подписка
  //------------------------------
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  //------------------------------

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/sign-up' component={SignUpAndSignIn} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
