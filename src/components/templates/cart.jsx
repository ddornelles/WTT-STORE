import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { BookConsumer } from '../../api/context';
import Item from './organisms/item';

export default function Cart() {
  return (
    <Fragment>
      <div className="col-12">
        <h4 className="border-bottom text-uppercase">Cart</h4>
      </div>
      <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Product</th>
              <th className="text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            <BookConsumer>
              { value => {
                const { cart } = value;
                return cart.map((item, index) => (
                  <Item key={index} item={item} value={value} />
                  ))
              } }
            </BookConsumer>
          </tbody>
          <tfoot className="thead-dark">
            <BookConsumer>
              { value => {
                const { cartTotal } = value;
                return (
                  <tr>
                    <th>Total Value</th>
                    <th className="text-right">R$ {cartTotal}</th>
                  </tr>
                )
              } }
            </BookConsumer>
          </tfoot>
        </table>
      </div>
      <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 text-center">
        <Link to="/books" className="btn btn-sm btn-outline-primary">Back to Books</Link> <Link to="/checkout" className="btn btn-sm btn-outline-success">Go to Checkout</Link>
      </div>
    </Fragment>
  )
}
