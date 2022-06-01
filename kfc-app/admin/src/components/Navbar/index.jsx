import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/home">
              <span data-feather="home"></span>
              Dashboard
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/orders">
              <span data-feather="file"></span>
              Orders
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/products">
              <span data-feather="shopping-cart"></span>
              Products
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/customers">
              <span data-feather="users"></span>
              Customers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar