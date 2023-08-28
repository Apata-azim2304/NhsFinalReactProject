import React from 'react'

const Welcome = () => {
  return (
    <div>
      <section className="mt-8 welcome-freshcart">
        <div className="container">
            <div className="row">
                <div className="col-12">
                  <div className="bg-light d-lg-flex justify-content-between align-items-center py-6 py-lg-4 px-8 text-center text-lg-start rounded">
                     <div className="d-lg-flex align-items-center">
                     <img src="https://freshcart.codescandy.com/assets/images/about/about-icons-1.svg" alt="" class="img-fluid"/>
                       <div className="ms-lg-4">
                        <h1 className="fs-2 mb-1">Welcome to FreshCart</h1>
                        <span>Download the app get free food &amp; <span class="text-primary">$30</span> off on
                         your first
                        order.</span>
                        </div>
                        <div className="ms-lg-4">
                            <h1 className="fs-2 mb-1">Welcome to FreshCart</h1>
                            <span>Download the app get free food &amp; <span class="text-success">$30</span> off on your first
                            order.</span>
                        </div>
                     </div>
                     <div className="mt-2 mt-lg-0 mr-4">
                        <a href="#" className="btn btn-dark">Download FreshCart App</a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="container">
        <div className="table-responsive-xl pb-6 pb-xl-0">
               <div className="row flex-nowrap">
                  <div className="col-12 col-xl-4 col-lg-6 ml-5" style={{marginLeft: "100px" , marginTop: "60px"}}>
                      <div className="p-8 mb-3 rounded" >
                         <div>
                         <h3 className="mb-0 fw-bold">10% cashback on <br/>
                             personal care </h3>
                                     <div className="mt-4 mb-5 fs-5">
                                         <p className="mb-0">Max cashback: $12</p>
                                        <span>Code: <span className="fw-bold text-dark">CARE12</span></span>
                                         </div>
                                         <a href="#" className="btn btn-dark">Shop Now</a>
                         </div>
                      </div>
                  </div>
                  <div className="col-12 col-xl-4 col-lg-6" style={{ marginTop: "60px"}}>
                   <div className="p-8 mb-3 rounded" >
                   <div>
                        <h3 className=" fw-bold mb-3">Say yes to <br/>
                        season’s fresh </h3>
                        <div className="mt-4 mb-5 fs-5">
                        <p className="fs-5 mb-0">Refresh your day <br/>
                        the fruity way</p>
                        </div>
                        <a href="#" className="btn btn-dark">Shop Now</a>
                   </div>
                    </div>
                </div>
                  <div className="col-12 col-xl-4 col-lg-6" style={{ marginTop: "60px"}}>
                   <div className="p-8 mb-3 rounded" >
                   <div>
                     <h3 className=" fw-bold mb-3">When in doubt,<br/>
                         eat ice cream </h3>
                     <div className="mt-4 mb-5 fs-5">
                              <p className="fs-5 mb-0">Enjoy a scoop of<br/>
                            summer today</p>
                        </div>
                            <a href="#" className="btn btn-dark">Shop Now</a>

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

export default Welcome
