import React from 'react';

const Login = (props) => {
  const { login, change, submit } = props;

  return (
    <div className="col-12 col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3">
      <form className="form-signin" onSubmit={submit}>
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">Email Address</label>
        <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Email Address" value={login} onChange={change} autoFocus required />
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control mb-3" placeholder="Password" />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default Login;