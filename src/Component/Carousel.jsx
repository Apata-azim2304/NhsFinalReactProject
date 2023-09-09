import React from 'react'
import Apple from '../images/Apple.jpg'

const Carousel = () => {
  return (
    <div>
      
      <section>
        <div className="container">
           <div className="row">
                 <div style={{marginLeft: "2.2rem"}} className="col-12 mb-6">
                     <h3  className="mb-1 mt-5 ml-5">Fruits &amp; vegetables</h3>
                      <p className="mb-0">eat fresh, stay healthy</p>
                     </div>
                 </div>

                 <div className="product-slider slick-initialized slick-slider">
                   {/* <span className="slick-prev slick-arrow" style="">
                      {/* <i className="feather-icon icon-chevron-left"></i> */}
                    {/* </span> */} */





                    <div className="slick-list draggable">
                         <div className="slick-track" style={{opacity: "1" , width: "6525px" , transform: "translate3d(-3393px, 0px, 0px)"}}>

                         </div>
                        </div>





           <div className="  item slick-slide slick-cloned "  data-slick-index="-5" id="" aria-hidden="true" tabindex="-1"  style={{width: "245px"}}>
       
       <div className="card card-product">
         <div className="card-body">

           <div className="text-center position-relative ">
         
             <div className=" position-absolute top-0 start-0">
               <span className="badge bg-danger">Sale</span>
             </div>

        
             <a href="#!" tabindex="-1"> <img src={Apple} alt="Grocery Ecommerce Template" className="mb-3 img-fluid"/></a>
           
             <div className="card-product-action">
               <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal" tabindex="-1"><i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View"></i></a>
               <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist" tabindex="-1"><i className="bi bi-heart"></i></a>
               <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare" data-bs-original-title="Compare" tabindex="-1"><i className="bi bi-arrow-left-right"></i></a>
             </div>
           </div>
           <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted" tabindex="-1"><small>Fruits &amp;
                 Vegetables</small></a></div>
           <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none" tabindex="-1">Fresh Apple</a></h2>
           <div>
             <small className="text-warning"> <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-fill"></i>
               <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5(149)</span>
           </div>
           <div className="d-flex justify-content-between align-items-center mt-3">
             <div><span className="text-dark">$18</span> <span className="text-decoration-line-through text-muted">$24</span>
             </div>
             <div><a href="#!" className="btn btn-primary btn-sm" tabindex="-1">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus">
                   <line x1="12" y1="5" x2="12" y2="19"></line>
                   <line x1="5" y1="12" x2="19" y2="12"></line>
                 </svg> Add</a></div>
           </div>
         </div>
       </div>
     </div>



     <div className="item slick-slide slick-cloned" data-slick-index="-4" id="" aria-hidden="true" tabindex="-1" style={{width: "245px"}}>

          <div className="card card-product">

            <div className="card-body">
              <div className="text-center position-relative">

                <div className=" position-absolute top-0 start-0">
                  <span className="badge bg-success">14%</span>
                </div>
                <a href="#!" tabindex="-1"><img src="../assets/images/products/product-img-16.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid"/></a>
                <div className="card-product-action">
                  <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal" tabindex="-1"><i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Quick View" data-bs-original-title="Quick View"></i></a>
                  <a href="../pages/shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Wishlist" data-bs-original-title="Wishlist" tabindex="-1"><i className="bi bi-heart"></i></a>
                  <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" aria-label="Compare" data-bs-original-title="Compare" tabindex="-1"><i className="bi bi-arrow-left-right"></i></a>
                </div>
              </div>
              <div className="text-small mb-1"><a href="#!" className="text-decoration-none text-muted" tabindex="-1"><small>Fruits &amp;
                    Vegetables</small></a></div>
              <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none" tabindex="-1">Golden Pineapple </a></h2>
              <div className="text-warning">
                <small> <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i></small> <span className="text-muted small">4.5 (25)</span>
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div><span className="text-dark">$24</span>
                </div>
                <div><a href="#!" className="btn btn-primary btn-sm" tabindex="-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg> Add</a></div>
              </div>
            </div>
          </div>
        </div>







































































































                </div>



              </div>
      </section>

    </div>
  )
}

export default Carousel
