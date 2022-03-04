import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shops.component';
import SignInandSignUpComponent from './components/signin-and-signup/sign-in-and-signup.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {doc, onSnapshot} from 'firebase/firestore' 

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        
        onSnapshot(userRef, (snapshot) => {
          this.setState({ 
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInandSignUpComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
