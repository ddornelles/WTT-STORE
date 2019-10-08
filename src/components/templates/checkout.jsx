import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { BookConsumer } from '../../api/context';

export default function checkout(props) {
  return (
  <BookConsumer>
    { value => {
      const { isSubmitted, submit, clear } = value;
      if (isSubmitted === false) {
        return (
          <Fragment>
            <div className="col-12">
              <h4 className="border-bottom text-uppercase">Purchased</h4>
            </div>
            <div className="col-12 col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3">
              <form className="form-checkout">
                <h1 className="h3 mb-3 font-weight-normal">Please fill in the form</h1>
                <label htmlFor="inputName">Your Name</label>
                <input type="text" id="inputName" className="form-control mb-3" autoFocus required />
                <label htmlFor="inputBirthday">Your Birthday</label>
                <input type="date" id="inputBirthday" className="form-control mb-3" required />
                <label htmlFor="inputEmail">Your Email</label>
                <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Email Address" required />
                <Link to="/checkout" className="btn btn-primary" onClick={submit}>Submit</Link>
              </form>
            </div>
          </Fragment>
        )
      } else {
        return (
          <Fragment>
            <div className="col-12">
              <h4 className="border-bottom text-uppercase">Purchased</h4>
            </div>
            <div className="col-12 col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3 mt-3">
              <div className="alert alert-info text-center" role="alert">
                <p>Your order has been successfully completed.</p>
                <p>Thank you for purchasing the book.</p>
              </div>
            </div>
          <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 text-center">
            <Link to="/books" className="btn btn-sm btn-outline-primary" onClick={clear}>Back to Books</Link>
          </div>
          </Fragment>
        )
      }
    } }
  </BookConsumer>
  )
}
