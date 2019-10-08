import React, { Component } from "react";
import Card from "./organisms/molecules/card";

import { BookConsumer } from '../../api/context';

export default class Books extends Component {
  render() {
    // const { url, imageLink, title } = this.props.book;
    return (
      <div className="d-flex flex-row flex-wrap">
        <div className="col-12">
          <h4 className="border-bottom text-uppercase">Books</h4>
        </div>
        <BookConsumer>
          {value => {
            return value.books.map((book, index) => (
              <Card book={book} key={index} />
            ))}
          }
        </BookConsumer>
      </div>
    );
  }
}
