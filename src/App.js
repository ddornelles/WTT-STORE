import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/templates/organisms/navbar';
import Login from './components/templates/login';
import Home from './components/templates/home';
import Books from './components/templates/books';
import Book from './components/templates/book';
import Cart from './components/templates/cart';
import Checkout from './components/templates/checkout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      isLogged: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleLogin(event) {
    event.preventDefault();
    this.setState({
      isLogged: true,
      username: event.target.value
    });
  }

  handleLogout(event) {
    this.setState(() => {
      return {
        isLogged: false
      }
    });
  }

  render() {
    const { isLogged, username } = this.state;

    if (isLogged === false) {
      return (
        <div className="App">
          <Navbar logged={isLogged} />
          <main role="main" className="flex-shrink-0">
            <div className="container">
              <div className="row mt-3 mb-3">
                <Login login={username} change={this.handleChange} submit={this.handleLogin} />
              </div>
            </div>
          </main>
        </div>
      )
    }
    return (
      <div className="App">
        <Navbar logged={isLogged} logout={this.handleLogout} />
        <main role="main" className="flex-shrink-0">
          <div className="container">
            <div className="row mt-3 mb-3">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/books" component={Books} />
                <Route path="/book/:url" component={Book} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
              </Switch>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
