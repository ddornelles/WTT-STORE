import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BookConsumer } from '../../../../api/context';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { url, imageLink, title } = this.props.book;
    return (
      <BookConsumer>
        {value => {
          const { handleDetail } = value;
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
              <div className="card mb-3">
                <img src={imageLink} className="card-img-top" alt={title} />
                <div className="card-body bg-light border-top">
                  <h5 className="card-title">{title}</h5>
                  <Link to={`/book/${url}`} onClick={() => handleDetail(url)} className="btn btn-sm btn-primary details">Details</Link>
                </div>
              </div>
            </div>
          )
        }}
      </BookConsumer>
    )
  }
}

Card.propTypes = {
  book:PropTypes.shape({
    author:PropTypes.string,
    country:PropTypes.string,
    imageLink:PropTypes.string,
    language:PropTypes.string,
    link:PropTypes.string,
    pages:PropTypes.number,
    title:PropTypes.string,
    year:PropTypes.number,
    price:PropTypes.number,
    url:PropTypes.string
  }).isRequired
};
