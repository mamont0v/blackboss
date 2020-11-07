import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router"; //add Link, NavLink


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component'
import Header from './components/header/header.component';
import SignUpAndSignIn from './pages/sighuppage/sign-up-and-sign-in.component';

import {createStructuredSelector} from 'reselect';
import { setCurrentUser } from "./redux/user/user.action";
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  //подписка
  //------------------------------
  unsubscribeFromAuth = null;


  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })

        // console.log(this.state)
      }

      setCurrentUser(userAuth) //this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  //------------------------------

  render() {
    return (
      <div className="App">
        <Header /> {/* currentUser={this.state.currentUser} */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/sign-up' render={()=>this.props.currentUser ? <Redirect to ="/"/> : (<SignUpAndSignIn/>)} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

//До внедрения reselect
// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state)
// })

//После
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
