import React from 'react'
import attaricedal from '../images/attaricedal.jpg'
import babycare from '../images/babycare.jpg'
import bakerybiscuits from '../images/bakerybiscuits.jpg'
import breadeggs from '../images/breadeggs.jpg'
import chickenmeatfish from '../images/chickenmeatfish.jpg'
import cleaningessentials from '../images/cleaningessentials.jpg'
import colddrinksjuices from '../images/colddrinksjuices.jpg'
import fruitsvegetables from '../images/fruitsvegetables.jpg'
import instantfood from '../images/instantfood.jpg'
import petcare from '../images/petcare.jpg'
import snackmunchies from '../images/snackmunchies.jpg'
import teacoffee from '../images/teacoffee.jpg'


const Card = () => {
  return (
    <div>
      <section class="my-lg-14 my-8 ggg"  style={{marginLeft: "80px" }}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="mb-8 shop-category">
                    <h3 className="mb-0">Shop by Category</h3>
                    </div>
                </div>
            </div>
            <div className="  row row-cols-2 row-cols-md-2 row-cols-lg-4 row-cols-xxl-6 g-6">
            <div className="col " > 
            <a href="shop-grid.html" class="text-decoration-none text-inherit">
            <div className="card card-product coll ">
              <div className="card-body text-center py-8  ">
                <img src={breadeggs} alt="Grocery Ecommerce Template" class="mb-3"/>
                <div className="text-truncate">Dairy, Bread &amp; Eggs</div>
              </div>
            </div>
          </a>
          </div>
          <div className="col" >
             <a href="shop-grid.html" className="text-decoration-none text-inherit">
            <div className="card card-product coll ">
              <div className="card-body text-center py-8">
                <img src={snackmunchies} alt="Grocery Ecommerce Template" class="mb-3"/>          
                <div className="text-truncate">Snack &amp; Munchies</div>
              </div>
            </div>
           </a>
          </div>
          <div className="col"> 
          <a href="shop-grid.html" className="text-decoration-none text-inherit">
            <div className="card card-product coll">
              <div className="card-body text-center py-8">
                <img src={bakerybiscuits} alt="Grocery Ecommerce Template" class="mb-3"/>          
                <div className="text-truncate">Bakery &amp; Biscuits</div>
              </div>
            </div>
           </a>
          </div>
          <div className="col"> 
          <a href="shop-grid.html" className="text-decoration-none text-inherit">
            <div className="card card-product coll">
              <div className="card-body text-center py-8">
                <img src={instantfood} alt="Grocery Ecommerce Template" className="mb-3"/>
                  <div className="text-truncate">Instant Food</div>
              </div>
            </div>
          </a>
          </div>
          <div className="col"> 
          <a href="shop-grid.html" className="text-decoration-none text-inherit">
            <div className="card card-product coll">
              <div className="card-body text-center py-8">
                <img src={teacoffee} alt="Grocery Ecommerce Template" className="mb-3"/>
                  <div classNameName="text-truncate">Tea, Coffee &amp; Drinks</div>
              </div>
            </div>
          </a>
          </div>
          <div className="col"> 
          <a href="shop-grid.html" className="text-decoration-none text-inherit">
            <div className="card card-product coll">
              <div className="card-body text-center py-8">
                <img src={fruitsvegetables} alt="Grocery Ecommerce Template" className="mb-3"/>
                  <div className="text-truncate">Fruits &amp; Vegetables</div>
              </div>
            </div>
          </a>
          </div>
          <div className="col mt-4"> 
          <a href="shop-grid.html" className="text-decoration-none text-inherit">
            <div className="card card-product coll">
              <div className="card-body text-center py-8">
                <img src={colddrinksjuices} alt="Grocery Ecommerce Template" className="mb-3"/>
                <div className="text-truncate">Cold Drinks &amp; Juices</div>
              </div>
            </div>
          </a>
          </div>
          <div className="col mt-4"> 
          <a href="shop-grid.html" className="text-decoration-none text-inherit">
            <div className="card card-product coll">
              <div className="card-body text-center py-8">
                <img src={chickenmeatfish} alt="Grocery Ecommerce Template" className="mb-3"/>
                <div className="text-truncate">Chicken, Meat &amp; Fish</div>
              </div>
            </div>
          </a>
          </div>
          <div className="col mt-4"> 
          <a href="shop-grid.html" className="text-decoration-none text-inherit">
            <div className="card card-product coll">
              <div className="card-body text-center py-8">
                <img src={babycare} alt="Grocery Ecommerce Template" className="mb-3"/>
                <div className="text-truncate">Baby Care</div>
              </div>
            </div>
          </a>
          </div>
          <div className="col mt-4"> 
          <a href="shop-grid.html" className="text-decoration-none text-inherit">
            <div className="card card-product coll">
              <div className="card-body text-center py-8">
                <img src={cleaningessentials} alt="Grocery Ecommerce Template" className="mb-3"/>
                <div className="text-truncate">Cleaning Essentials</div>
              </div>
            </div>
          </a>
          </div>
          <div className="col mt-4"> 
          <a href="shop-grid.html" className="text-decoration-none text-inherit">
            <div className="card card-product coll">
              <div className="card-body text-center py-8">
                <img src={petcare} alt="Grocery Ecommerce Template" className="mb-3"/>
                <div className="text-truncate">Pet Care</div>
              </div>
            </div>
          </a>
          </div>
          <div className="col mt-4"> 
          <a href="shop-grid.html" className="text-decoration-none text-inherit">
            <div className="card card-product coll">
              <div className="card-body text-center py-8">
                <img src={attaricedal} alt="Grocery Ecommerce Template" className="mb-3"/>
                <div className="text-truncate">Atta, Rice &amp; Dal</div>
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
