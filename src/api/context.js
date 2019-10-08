import React, { Component } from 'react';
import { storeBooks, bookDetails } from './books';
const BookContext = React.createContext();

class BookProvider extends Component {
  state = {
    books: [],
    bookDetails: bookDetails,
    cart: [],
    cartTotal: 0,
    isSubmitted: false
  };

  componentDidMount() {
    this.setBooks();
  }

  clearSubmitted = () => {
    this.setState(() => {
      return {
        isSubmitted: false,
      }
    })
  }

  setBooks = () => {
    let tempBooks = [];
    storeBooks.forEach(item => {
      const singleBook = {...item};
      tempBooks = [...tempBooks, singleBook];
    });
    this.setState(() => {
      return { books: tempBooks };
    });
  };

  getBook = (url) => {
    const book = this.state.books.find(item => item.url === url);
    return book;
  }

  handleDetail = (url) => {
    const book = this.getBook(url);
    this.setState(() => {
      return {bookDetails: book}
    })
  }

  addToCart = (url) => {
    let tempBooks = [...this.state.books];
    const index = tempBooks.indexOf(this.getBook(url));
    const book = tempBooks[index];
    this.setState(() => {
      return {
        books: tempBooks,
        cart: [...this.state.cart, book]
      }
    },
    () => this.sumCart()
    )
  }

  removeItem = (url) => {
    let tempBooks = [...this.state.books];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.url !== url);
    this.setState(() => {
      return {
        cart: [...tempCart],
        books: [...tempBooks]
      }
    },
    () => this.sumCart()
    )
  }

  clearCat = () => {
    this.setState(() => {
      return {
        cart: []
      }
    });
  }

  sumCart = () => {
    let cartSum = 0;
    this.state.cart.map(item => cartSum += item.price);
    this.setState(() => {
      return {
        cartTotal: cartSum
      };
    })
  }

  checkoutSubmit = (event) => {
    this.setState(() => {
      return {
        cart: [],
        isSubmitted: true
      }
    });
  }

  render() {
    return (
      <BookContext.Provider value={{
        ...this.state, handleDetail: this.handleDetail, addToCart: this.addToCart, removeItem: this.removeItem, clearCart:this.clearCart, submit: this.checkoutSubmit, clear: this.clearSubmitted
      }}>
        {this.props.children}
      </BookContext.Provider>
    )
  }
}

const BookConsumer = BookContext.Consumer;

export { BookProvider, BookConsumer };