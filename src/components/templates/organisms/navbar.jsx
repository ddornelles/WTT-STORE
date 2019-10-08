import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BookConsumer } from '../../../api/context'

const Navbar = (props) => {
  const { logged, logout } = props;
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">WTT</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav w-100 d-flex justify-content-between align-items-center">
            { logged === false
              ? <Fragment>
                <li className="nav-item">
                  <span className="nav-link">&nbsp;</span>
                </li>
                <li className="nav-item">
                  <Link to="/" className="btn btn-sm btn-outline-light">Login</Link>
                </li>
              </Fragment>
              : <Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/books">Books</NavLink>
                  </li>
                  <BookConsumer>
                    { value => {
                      const { cart } = value;
                      if (cart.length > 0) {
                        return (
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/cart">Cart</NavLink>
                          </li>
                        )
                      }
                    }}
                  </BookConsumer>
                  <li className="nav-item">
                    <Link to="/" className="btn btn-sm btn-outline-light" onClick={logout}>Logout</Link>
                  </li>
                </Fragment>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
