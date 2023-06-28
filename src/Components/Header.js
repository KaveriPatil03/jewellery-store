import React from 'react';
import { Link } from "react-router-dom";
import Cart from './buttons/Cart';
import Login from './buttons/Login';
import SignUp from './buttons/SignUp';


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link">Products</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
            <Link to="/" className="navbar-brand fw-bold me-auto">JEWELLERY STORE</Link>
            <ul className='navbar-nav'>
              <li>
                <Login />
                <SignUp />
                <Cart />
              </li>
            </ul>
            {/* <ul className='navbar-nav pt-1'>
              <li>
              </li>
            </ul>
            <ul className='navbar-nav pt-1'>
              <li>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;