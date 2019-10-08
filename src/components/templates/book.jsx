import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { BookConsumer } from '../../api/context';


export default class Book extends Component {
  render() {
    return (
      <BookConsumer>
        {value => {
          const { url, author, country, imageLink, language, link, pages, title, year, price } = value.bookDetails;
          return (
            <Fragment>
            <div className="col-12">
              <h4 className="border-bottom text-uppercase">{title}</h4>
            </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 text-right">
                <img src={`../${imageLink}`} className="img-fluid" alt={title} />
              </div>
              <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h5 className="text-uppercase">Details</h5>
                <p>
                  <span className="text-uppercase font-weight-bold">Author</span>: {author}<br />
                  <span className="text-uppercase font-weight-bold">Country</span>: {country}<br />
                  <span className="text-uppercase font-weight-bold">Language</span>: {language}<br />
                  <span className="text-uppercase font-weight-bold">Pages</span>: {pages}<br />
                  <span className="text-uppercase font-weight-bold">Year</span>: {year}<br />
                  <span className="text-uppercase font-weight-bold">Price</span>: {price}<br />
                  <span className="text-uppercase font-weight-bold">Link</span>: <a href={link}>{link}</a>
                </p>
                <Link to="/books" className="btn btn-sm btn-outline-primary">Back to Books</Link> <Link to="/cart" onClick={() => value.addToCart(url)} className="btn btn-sm btn-outline-success">Add to Cart</Link>
              </div>
            </Fragment>
          )
        }}
      </BookConsumer>
    )
  }
}
