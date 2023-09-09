import React from 'react'
import freshcartlogo from '../images/freshcartlogo.svg'
import scss from '../Style/scss/footer.scss'
import style from '../Style/style.css'
import Apple2 from '../images/Apple2.jpg'
import banana from '../images/banana.jpg'
import pear from '../images/pear.jpg'
import onion from '../images/onion.jpg'
import pineapple from '../images/pineapple.jpg'
import paypal from '../images/paypal.svg'
import amazonpay from '../images/amazonpay.svg'
import mastercard from '../images/mastercard.svg'
import americanexpress from '../images/americanexpress.svg'
import visa from '../images/visa.svg'
import appstorebtn  from '../images/appstorebtn.svg'
import googleplaybtn from '../images/googleplaybtn.svg'


const ShopCart = () => {
  return (
    <div>
      <div className="">
        <div className="py-4">
            <div className="container">
                <div className="row align-items-center w-100 gx-lg-2 gx-0">
                <div className="col-xxl-2 col-lg-3">
            <a className="navbar-brand d-none d-lg-block" href="../index.html">
              <img src={freshcartlogo} alt="eCommerce HTML Template"/>

            </a>
            <div className="d-flex justify-content-between w-100 d-lg-none">
              <a className="navbar-brand" href="../index.html">Name
                <img src={freshcartlogo} alt="eCommerce HTML Template"/>

              </a>

              <div className="d-flex align-items-center lh-1">

                <div className="list-inline me-4">
                  <div className="list-inline-item">

                    <a href="#!" className="text-muted" data-bs-toggle="modal" data-bs-target="#userModal">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </a>
                  </div>
                  <div className="list-inline-item">

                    <a className="text-muted position-relative " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#offcanvasExample" role="button" aria-controls="offcanvasRight">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                        1
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </a>
                  </div>

                </div>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbar-default" aria-controls="navbar-default" aria-label="Toggle navigation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                    <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
                </button>

              </div>
            </div>

                 </div>
               <div className="col-xxl-5 col-lg-5 d-none d-lg-block">

            <form action="#">
              <div className="input-group ">
                <input className="form-control rounded" type="search" placeholder="Search for products"/>
                <span className="input-group-append">
                  <button className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>
                </span>
              </div>

            </form>
                </div>
                <div className="col-md-2 col-xxl-3 d-none d-lg-block">
            <button type="button" class="btn  btn-outline-gray-400 text-muted" data-bs-toggle="modal" data-bs-target="#locationModal">
              <i className="feather-icon icon-map-pin me-2"></i>Location
            </button>
               </div>
               <div className="col-md-2 col-xxl-2 text-end d-none d-lg-block">

            <div className="list-inline">
              <div className="list-inline-item me-5">

                <a href="../pages/shop-wishlist.html" class="text-muted position-relative">

                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
                    </path>
                  </svg>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    5
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </a></div>
              <div className="list-inline-item me-5">

                <a href="#!" className="text-muted" data-bs-toggle="modal" data-bs-target="#userModal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </a></div>
              <div class="list-inline-item">

                <a className="text-muted position-relative " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#offcanvasExample" role="button" aria-controls="offcanvasRight">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    1
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </a>

              </div>
            </div>
          </div>
                </div>
            </div>
         <nav className="navbar navbar-expand-lg navbar-light navbar-default py-0 pb-lg-4 mt-4" aria-label="Offcanvas navbar large">
    <div className="container">


      <div className="offcanvas offcanvas-start" tabindex="-1" id="navbar-default" aria-labelledby="navbar-defaultLabel">
        <div className="offcanvas-header pb-1">
          <a href="./index.html"><img src="../assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template"/></a>
          <button   style={{background: "#23A323"}} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <div className="d-block d-lg-none mb-4">
            <form action="#">
              <div className="input-group ">
                <input className="form-control rounded" type="search" placeholder="Search for products"/>
                <span className="input-group-append">
                  <button className="btn bg-white border border-start-0 ms-n10 rounded-0 rounded-end" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>
                </span>
              </div>
            </form>
            <div className="mt-2">
              <button  type="button" className="btn  btn-outline-gray-400 text-muted w-100 " data-bs-toggle="modal" data-bs-target="#locationModal">
                <i className="feather-icon icon-map-pin me-2"></i>Pick Location
              </button>
            </div>
          </div>
          <div className="d-block d-lg-none mb-4">
            <a  className="btn btn-danger w-100 d-flex justify-content-center align-items-center" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              <span className="me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="feather feather-grid">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg></span> 
            </a>
            <div className="collapse mt-2" id="collapseExample">
              <div className="card card-body">
                <ul className="mb-0 list-unstyled">
                  <li><a className="dropdown-item" href="../pages/shop-grid.html">Dairy, Bread &amp; Eggs</a></li>
                  <li><a className="dropdown-item" href="../pages/shop-grid.html">Snacks &amp; Munchies</a></li>
                  <li><a className="dropdown-item" href="../pages/shop-grid.html">Fruits &amp; Vegetables</a></li>
                  <li><a className="dropdown-item" href="../pages/shop-grid.html">Cold Drinks &amp; Juices</a></li>
                  <li><a className="dropdown-item" href="../pages/shop-grid.html">Breakfast &amp; Instant Food</a></li>
                  <li><a className="dropdown-item" href="../pages/shop-grid.html">Bakery &amp; Biscuits</a></li>
                  <li><a className="dropdown-item" href="../pages/shop-grid.html">Chicken, Meat &amp; Fish</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="dropdown me-3 d-none d-lg-block">
            <button style={{backgroundColor: "#23A323"}} className="btn  px-6 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="me-1" style={{color: "white"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-grid">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg></span>
                 <span style={{color: "#fff"}}>All Departments</span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="../pages/shop-grid.html">Dairy, Bread &amp; Eggs</a></li>
              <li><a className="dropdown-item" href="../pages/shop-grid.html">Snacks &amp; Munchies</a></li>
              <li><a className="dropdown-item" href="../pages/shop-grid.html">Fruits &amp; Vegetables</a></li>
              <li><a className="dropdown-item" href="../pages/shop-grid.html">Cold Drinks &amp; Juices</a></li>
              <li><a className="dropdown-item" href="../pages/shop-grid.html">Breakfast &amp; Instant Food</a></li>
              <li><a className="dropdown-item" href="../pages/shop-grid.html">Bakery &amp; Biscuits</a></li>
              <li><a className="dropdown-item" href="../pages/shop-grid.html">Chicken, Meat &amp; Fish</a></li>
            </ul>
          </div>
          <div className="">
            <ul className="navbar-nav align-items-center ">
              <li className="nav-item dropdown w-100 w-lg-auto">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Home
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="../index.html">Home 1</a></li>
                  <li><a className="dropdown-item" href="../pages/index-2.html">Home 2</a></li>
                  <li><a className="dropdown-item" href="../pages/index-3.html">Home 3</a></li>
                  <li><a className="dropdown-item" href="../pages/index-4.html">Home 4</a></li>
                  <li><a className="dropdown-item" href="../pages/index-5.html">Home 5 <span className="badge bg-light-info text-dark-info ms-1">New</span></a></li>
                </ul>
              </li>
              <li className="nav-item dropdown w-100 w-lg-auto">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="../pages/shop-grid.html">Shop Grid - Filter</a></li>
                  <li><a className="dropdown-item" href="../pages/shop-grid-3-column.html">Shop Grid - 3 column</a>
                  </li>
                  <li><a className="dropdown-item" href="../pages/shop-list.html">Shop List - Filter</a></li>
                  <li><a className="dropdown-item" href="../pages/shop-filter.html">Shop - Filter</a></li>
                  <li><a className="dropdown-item" href="../pages/shop-fullwidth.html">Shop Wide</a></li>
                  <li><a className="dropdown-item" href="../pages/shop-single.html">Shop Single</a></li>
                  <li><a className="dropdown-item" href="../pages/shop-single-2.html">Shop Single v2</a></li>
                  <li><a className="dropdown-item" href="../pages/shop-wishlist.html">Shop Wishlist</a></li>
                  <li><a className="dropdown-item" href="../pages/shop-cart.html">Shop Cart</a></li>
                  <li><a className="dropdown-item" href="../pages/shop-checkout.html">Shop Checkout</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown w-100 w-lg-auto">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Stores
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="../pages/store-list.html">Store List</a></li>
                  <li><a className="dropdown-item" href="../pages/store-grid.html">Store Grid</a></li>
                  <li><a className="dropdown-item" href="../pages/store-single.html">Store Single</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown w-100 w-lg-auto dropdown-fullwidth">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                  Mega menu
                </a>
                <div className="dropdown-menu pb-0 show" data-bs-popper="static">
                    <div className="row p-2 p-lg-4">
                      <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                        <h6 className="text-primary ps-3">Dairy, Bread &amp; Eggs</h6>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Butter</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Milk Drinks</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Curd &amp; Yogurt</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Eggs</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Buns &amp; Bakery</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Cheese</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Condensed Milk</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Dairy Products</a>
                      </div>
                      <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                        <h6 className="text-primary ps-3">Breakfast &amp; Instant Food</h6>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Breakfast Cereal</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html"> Noodles, Pasta &amp; Soup</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Frozen Veg Snacks</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html"> Frozen Non-Veg Snacks</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html"> Vermicelli</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html"> Instant Mixes</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html"> Batter</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html"> Fruit and Juices</a>
                      </div>
                      <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                        <h6 className="text-primary ps-3">Cold Drinks &amp; Juices</h6>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Soft Drinks</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Fruit Juices</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Coldpress</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Water &amp; Ice Cubes</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Soda &amp; Mixers</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Health Drinks</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Herbal Drinks</a>
                        <a className="dropdown-item" href="../pages/shop-grid.html">Milk Drinks</a>
                      </div>
                      <div className="col-lg-3 col-12 mb-4 mb-lg-0">
                        <div className="card border-0">
                          <img src="../assets/images/banner/menu-banner.jpg" alt="eCommerce HTML Template" class="img-fluid"/>
                          <div className="position-absolute ps-6 mt-8">
                            <h5 className=" mb-0 ">Dont miss this <br/>offer today.</h5>
                            <a href="#" class="btn btn-primary btn-sm mt-3">Shop Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </li>
              <li className="nav-item dropdown w-100 w-lg-auto">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="../pages/blog.html">Blog</a></li>
                  <li><a className="dropdown-item" href="../pages/blog-single.html">Blog Single</a></li>
                  <li><a className="dropdown-item" href="../pages/blog-category.html">Blog Category</a></li>
                  <li><a className="dropdown-item" href="../pages/about.html">About us</a></li>
                  <li><a className="dropdown-item" href="../pages/404error.html">404 Error</a></li>
                  <li><a className="dropdown-item" href="../pages/contact.html">Contact</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown w-100 w-lg-auto">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="../pages/signin.html">Sign in</a></li>
                  <li><a className="dropdown-item" href="../pages/signup.html">Signup</a></li>
                  <li><a className="dropdown-item" href="../pages/forgot-password.html">Forgot Password</a></li>
                  <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">
                      My Account
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="../pages/account-orders.html">Orders</a></li>
                      <li><a className="dropdown-item" href="../pages/account-settings.html">Settings</a></li>
                      <li><a className="dropdown-item" href="../pages/account-address.html">Address</a></li>
                      <li><a className="dropdown-item" href="../pages/account-payment-method.html">Payment Method</a>
                      </li>
                      <li><a className="dropdown-item" href="../pages/account-notification.html">Notification</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item w-100 w-lg-auto">
                <a className="nav-link" href="../dashboard/index.html">
                  Dashboard
                </a>
              </li>
              <li className="nav-item dropdown w-100 w-lg-auto dropdown-flyout">
                <a className="nav-link" href="#" id="navbarDropdownDocs" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Docs
                </a>
                <div className="dropdown-menu dropdown-menu-lg" aria-labelledby="navbarDropdownDocs">
                  <a className="dropdown-item align-items-start" href="../docs/index.html">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-text text-primary" viewBox="0 0 16 16">
                        <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"></path>
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"></path>
                      </svg>
                    </div>
                    <div className="ms-3 lh-1">
                      <h6 className="mb-1">Documentations</h6>
                      <p className="mb-0 small">
                        Browse the all documentation
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item align-items-start" href="../docs/changelog.html">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-layers text-primary" viewBox="0 0 16 16">
                        <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z"></path>
                      </svg>
                    </div>
                    <div className="ms-3 lh-1">
                      <h6 className="mb-1">
                        Changelog <span className="text-primary ms-1">v1.2.0</span>
                      </h6>
                      <p className="mb-0 small">See what's new</p>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <hr />
        </div>


      </div>


      <div className="">
  <div className="container">
     <div className="row">
      <div className="col-12">
      <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0 list-unstyled">
              <li className="breadcrumb-item"><a href="#!" className="text-decoration-none" style={{color: "#23A323"}}>Home</a></li>
              <li className="breadcrumb-item list-unstyled text-decoration-none"><a href="#!"  className="text-decoration-none" style={{color: "#23A323"}}>Shop</a></li>
              <li className="breadcrumb-item active" aria-current="page">My Wishlist</li>
            </ol>
          </nav>
      </div>
     </div>
  </div>
</div>





<section className="mt-8 mb-14 cart">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-8">
                <h1 className="mb-1 mt-5">My Wishlist</h1>
                <p>There are 5 products in this wishlist.</p>
              </div>
              <div>
                <div className="table-responsive mt-5">
                  <table className="table text-nowrap table-with-checkbox">
                    <thead className="table-light">
                      <tr style={{fontSize: "13px"}}>
                        <th>
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="checkAll"/>
                            <label className="form-check-label" for="checkAll">
    
                            </label>
                          </div>
                        </th>
                        <th></th>
                        <th >Product</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Actions</th>
                        <th>Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
    
                        <td className="align-middle">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="chechboxTwo"/>
                            <label className="form-check-label" for="chechboxTwo">
    
                            </label>
                          </div>
    
                        </td>
                        <td className="align-middle">
                          <a href="#"><img src={banana} width={"60"} className="icon-shape icon-xxl" alt=""/></a>
    
                        </td>
                        <td className="align-middle">
                          <div>
                            <h5 className=" fs-6 mb-0"><a href="#" className="text-inherit text-decoration-none" style={{fontSize: "14px" , color: "black"}}>Organic banana</a></h5>
                            <small>$.98 / lb</small>
                          </div>
                        </td>
                        <td className="align-middle"  style={{fontSize: "14px"}}>$35.00</td>
                        <td className="align-middle"><span className="badge bg-success" style={{fontSize: "11px"}}>In Stock</span></td>
                        <td className="align-middle">
                          <div className="btn  btn-sm text-white" style={{backgroundColor: "#23A323", fontSize: "11px"}}>Add to Cart</div>
                        </td>
                        <td className="align-middle "><a href="#" className="text-muted" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z"/><path fill="currentColor" d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"/></svg>
                          </a></td>
                      </tr>
                      <tr>
    
                        <td className="align-middle">
                     
                          <div className="form-check">
                           <input className="form-check-input" type="checkbox" value="" id="chechboxThree"/>
                            <label className="form-check-label" for="chechboxThree">
    
                            </label>
                          </div>
    
                        </td>
                        <td className="align-middle">
                          <a href="#"><img src={pear} width={"60"} className="icon-shape icon-xxl" alt=""/></a>
    
                        </td>
                        <td className="align-middle">
                          <div>
                            <h5 className="fs-6 mb-0"><a href="#" className="text-inherit text-decoration-none"  style={{fontSize: "14px" , color: "black"}}>Fresh Kiwi</a></h5>
                            <small>4 no</small>
                          </div>
                        </td>
                        <td className="align-middle"  style={{fontSize: "14px"}}>$20.97</td>
                        <td className="align-middle"><span className="badge bg-danger" style={{fontSize: "11px"}}>Out of Stock</span></td>
                        <td className="align-middle">
                          <div className="btn btn-dark btn-sm-2"style={{fontSize: "11px"}} >Contact us</div>
                        </td>
                        <td className="align-middle "><a href="#" className="text-muted" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z"/><path fill="currentColor" d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"/></svg>
                          </a></td>
                      </tr>
                      <tr>
    
                        <td className="align-middle">
                          <div className="form-check">
                           <input className="form-check-input" type="checkbox" value="" id="chechboxFour"/>
                           <label className="form-check-label" for="chechboxFour">
    
                            </label>
                          </div>
    
                        </td>
                        <td className="align-middle">
                          <a href="#"><img src={pineapple} width={"60"} className="icon-shape icon-xxl" alt=""/></a>
    
                        </td>
                        <td className="align-middle">
                          <div>
                            <h5 className="fs-6 mb-0"><a href="#" className="text-inherit text-decoration-none"  style={{fontSize: "14px" , color: "black"}}>Golden Pineapple</a></h5>
                            <small>2 no</small>
                          </div>
                        </td>
                        <td className="align-middle"  style={{fontSize: "14px"}}>$35.00</td>
                        <td className="align-middle"><span className="badge bg-success " style={{fontSize: "11px"}}>In Stock</span></td>
                        <td className="align-middle">
                          <div className="btn  btn-sm text-white" style={{backgroundColor: "#23A323" , fontSize: "11px"}}>Add to Cart</div>
                        </td>
                        <td className="align-middle "><a href="#" className="text-muted" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z"/><path fill="currentColor" d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"/></svg>
                          </a></td>
                      </tr>
                      <tr>
    
                        <td className="align-middle">
                          <div className="form-check">
                       <input className="form-check-input" type="checkbox" value="" id="chechboxFive"/>
                          <label className="form-check-label" for="chechboxFive">
    
                            </label>
                          </div>
    
                        </td>
                        <td className="align-middle">
                          <a href="#"><img src={onion} width={"60"} className="icon-shape icon-xxl" alt=""/></a>
    
                        </td>
                        <td className="align-middle">
                          <div>
                            <h5 className="fs-6 mb-0"><a href="#" className="text-inherit text-decoration-none"  style={{fontSize: "14px" , color: "black"}}>BeatRoot</a></h5>
                            <small>1 kg</small>
                          </div>
                        </td>
                        <td className="align-middle"  style={{fontSize: "14px"}}>$29.00</td>
                        <td className="align-middle"><span className="badge bg-success" style={{fontSize: "11px"}}>In Stock</span></td>
                        <td className="align-middle">
                          <div className="btn  btn-sm text-white" style={{backgroundColor: "#23A323", fontSize: "11px" }}>Add to Cart</div>
                        </td>
                        <td className="align-middle "><a href="#" className="text-muted" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z"/><path fill="currentColor" d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"/></svg>
                          </a></td>
                      </tr>
                      <tr>
    
                        <td className="align-middle">
                          <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="chechboxSix"/>
                          <label className="form-check-label" for="chechboxSix">
    
                            </label>
                          </div>
    
                        </td>
                        <td className="align-middle">
                          <a href="#"><img src={Apple2} width={"60"} className="icon-shape " alt=""/></a>
    
                        </td>
                        <td className="align-middle">
                          <div>
                            <h5 className="fs-6 mb-0"><a href="#" className="text-inherit text-decoration-none"  style={{fontSize: "14px" , color: "black"}}>Fresh Apple</a></h5>
                            <small>2 kg</small>
                          </div>
                        </td>
                        <td className="align-middle"  style={{fontSize: "14px"}}>$70.00</td>
                        <td className="align-middle"><span className="badge bg-success" style={{fontSize: "11px"}}>In Stock</span></td>
                        <td className="align-middle">
                          <div className="btn  btn-sm text-white" style={{backgroundColor: "#23A323", fontSize: "11px"}}>Add to Cart</div>
                        </td>
                        <td className="align-middle "><a href="#" className="text-muted" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Delete" data-bs-original-title="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z"/><path fill="currentColor" d="M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"/></svg>
                          </a></td>
                      </tr>
    
                    </tbody>
                  </table>
                </div>
    
              </div>
            </div>
    
          </div>
    
    
    
        </div>
    
      </section>

{/* section  */}













    </div>
  )
}

export default ShopCart
