import React from 'react'
import iphone from '../images/iphone.png'
import appstorebtn  from '../images/appstorebtn.svg'
import googleplaybtn from '../images/googleplaybtn.svg'
import clock from '../images/clock.svg'
import gift from '../images/gift.svg'
import box from '../images/box.svg'
import refresh from '../images/refresh.svg'


const FreshApp = () => {
  return (
    <div className="mb-5">
      <section>
        <div className="container mt-5 mb-4" >
            <hr className="my-lg-14 my-8"/>

            <div className="row align-items-center mt-lg-5 mb-5" >
            <div className=" offset-lg-2 col-lg-4 col-md-6">
          <div className="text-center">
            <img src={iphone} alt="" class=" img-fluid"/>
          </div>
             </div>

             <div className=" col-lg-6 col-md-6">
          <div className="mb-6">
            <div className="mb-7">
              <h2>Get the FreshCart app</h2>
              <p className="mb-0">We will send you a link, open it on your phone to download the app.</p>
            </div>
            <div className="mb-5 mt-3">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label" for="flexRadioDefault1">
                  Email
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked="" style={{color: "green"}}/>
                <label className="form-check-label" for="flexRadioDefault2">
                  Phone
                </label>
              </div>
              <form className="row g-3 mt-1">
                <div className="col-lg-6 col-7">
                  <input type="text" className="form-control" placeholder="Phone"/>
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-success mb-3" style={{backgroundColor: "#23A323"}}>Share app link</button>
                </div>
              </form>
            </div>
            <div>
              <small>Download app from</small>
              <ul className="list-inline mb-0 mt-3">
                <li className="list-inline-item">
                  <a href="#!"> <img src={appstorebtn} alt="" style={{width: "140px"}}/></a></li>
                <li className="list-inline-item">
                  <a href="#!"> <img src={googleplaybtn} alt="" style={{width: "140px"}}/></a></li>
              </ul>
            </div>

          </div>
        </div>
            </div>

            <hr class="my-lg-14 my-8"></hr>
        </div>
      </section>


      <section className="my-lg-14 my-8 mb-5" 
      >
    <div className="container">
      <div className="row" style={{marginTop: "80px"}}>
        <div className="col-md-6 col-lg-3">
          <div className="mb-8 mb-lg-0">
            <div className="mb-8">
                <img src={clock} alt="" />
                </div>
            <h3 className="h5 mb-2 mt-3">
              10 minute grocery now
            </h3>
            <p className="mb-0">Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near
              you.</p>
          </div>
        </div>
        <div className="col-md-6  col-lg-3">
          <div className="mb-8 mb-lg-0">
            <div className="mb-6">
                <img src={gift} alt=""/>
                </div>
            <h3 className="h5 mb-2 mt-3">Best Prices &amp; Offers</h3>
            <p className="mb-0">Cheaper prices than your local supermarket, great cashback offers to top it off. Get best
              pricess &amp;
              offers.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="mb-8 mb-lg-0">
            <div className="mb-6">
                <img src={box} alt=""/>
                </div>
            <h3 className="h5 mb-2 mt-3">Wide Assortment</h3>
            <p className="mb-0">Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg &amp;
              other
              categories.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="mb-8 mb-lg-0">
            <div className="mb-6"><img src={refresh} alt=""/></div>
            <h3 className="h5 mb-2 mt-3">Easy Returns</h3>
            <p className="mb-0">Not satisfied with a product? Return it at the doorstep &amp; get a refund within hours. No
              questions asked
              <a style={{color: "#23A323"}} className="ml-3" href="#!">policy</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default FreshApp
