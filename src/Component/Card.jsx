import React from 'react'

const Card = () => {
  return (
    <div>
      <section class="my-lg-14 my-8"  style={{marginLeft: "80px" }}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="mb-8 shop-category">
                    <h3 className="mb-0">Shop by Category</h3>
                    </div>
                </div>
            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
            <div className="col"> 
            <a href="shop-grid.html" class="text-decoration-none text-inherit">
            <div className="card card-product">
              <div className="card-body text-center py-8">
                <img src="https://freshcart.codescandy.com/assets/images/category/category-dairy-bread-eggs.jpg" alt="Grocery Ecommerce Template" class="mb-3"/>
                <div className="text-truncate">Dairy, Bread &amp; Eggs</div>
              </div>
            </div>
          </a>
          </div>
          <div class="col"> <a href="shop-grid.html" class="text-decoration-none text-inherit">
            
            <div class="card card-product">
              <div class="card-body text-center py-8">
                <img src="https://freshcart.codescandy.com/assets/images/category/category-snack-munchies.jpg" alt="Grocery Ecommerce Template" class="mb-3"/>          
                <div class="text-truncate">Snack &amp; Munchies</div>
              </div>
            </div>
           </a>
          </div>
          <div class="col"> <a href="shop-grid.html" class="text-decoration-none text-inherit">
            
            <div class="card card-product">
              <div class="card-body text-center py-8">
                <img src="https://freshcart.codescandy.com/assets/images/category/category-bakery-biscuits.jpg" alt="Grocery Ecommerce Template" class="mb-3"/>          
                <div class="text-truncate">Bakery &amp; Biscuits</div>
              </div>
            </div>
           </a>
          </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Card
