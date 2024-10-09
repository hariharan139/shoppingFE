import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
      <div className="navbar">
  <h1>Shop Online</h1>
  
  <div className="dropdown-center-container">
    <div className="dropdown-center">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Men
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Clothing</a></li>
        <li><a className="dropdown-item" href="#">Footwear</a></li>
        <li><a className="dropdown-item" href="#">Accessories</a></li>
      </ul>
    </div>

    <div className="dropdown-center">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Women
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Clothing</a></li>
        <li><a className="dropdown-item" href="#">Footwear</a></li>
        <li><a className="dropdown-item" href="#">Accessories</a></li>
      </ul>
    </div>

    <div className="dropdown-center">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Children
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Clothing</a></li>
        <li><a className="dropdown-item" href="#">Footwear</a></li>
        <li><a className="dropdown-item" href="#">Accessories</a></li>
      </ul>
    </div>

    {/* Search Bar */}
    <div className="searchbar">
      <input type="text" placeholder="Search Items" />
    </div>

    {/* Other buttons */}
    <button>Sign in/ Sign up</button>
    <button>
      <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
    </button>
  </div>
</div>

    )
}

export default Header
