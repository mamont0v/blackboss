import React, {useEffect} from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router"; //add Link, NavLink


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component'
import Header from './components/header/header.component';
import SignUpAndSignIn from './pages/sighuppage/sign-up-and-sign-in.component';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.action';



const App = ({checkUserSession, currentUser}) => {
  useEffect(()=> {
    checkUserSession();
  }, [checkUserSession])
  
  // unsubscribeFromAuth = null;

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  //------------------------------

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/sign-up' render={() => currentUser ? <Redirect to="/" /> : (<SignUpAndSignIn />)} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
