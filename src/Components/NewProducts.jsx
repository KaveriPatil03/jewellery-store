import React from 'react'
import Data from '../Data';
import { Link } from 'react-router-dom';
import Home from './Home';

const NewProducts = () => {

    const cardItem = (item) => {
        return (
         <div className="col-lg-4 col-md-6 col-sm-12 products-card">
           <div className="card my-5" key={item.id} style={{ width: "18rem" }}>
           <div className="card-img-top item-product">
           <img src={item.img} className="card-img-top" alt={item.title} />
           </div>
            <div className="card-body">
              <div className='d-flex justify-content-between'>
              <h5 className="card-title">{item.title}</h5>
              <Link to={`/products/${item.id}`} className="btn btn-outline-dark">Buy Now</Link>
              </div>
              <p className="lead">${item.price}</p>
            </div>
          </div>
         </div>
        )
      }

  return (
    <>
     <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {Data.map(cardItem)}
          {/* <Home prod={Data.map(cardItem)}></Home> */}
        </div>
      </div>
    
    </>
  )
}

export default NewProducts