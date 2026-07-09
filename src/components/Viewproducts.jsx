import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Viewproducts = () => {
  return (
    <div>

         <Navbar/>

      <div className="container mt-3">
        <div className="row">

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 g-3">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600"
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
                alt="Toyota Fortuner"
              />

              <div className="card-body">
                <h5 className="card-title">Toyota Fortuner</h5>

                <p className="card-text">
                   <br />
                  Category : SUV <br />
                  Model : Fortuner <br />
                  Transmission : Automatic <br />
                  Fuel : Diesel <br />
                 
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 g-3">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600"
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
                alt="Honda City"
              />

              <div className="card-body">
                <h5 className="card-title">Honda City</h5>

                <p className="card-text">
                   <br />
                  Category : Sedan <br />
                  Model : Honda City <br />
                  Transmission : Manual <br />
                  Fuel : Petrol <br />
                  
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 g-3">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600"
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
                alt="BMW X5"
              />

              <div className="card-body">
                <h5 className="card-title">BMW X5</h5>

                <p className="card-text">
                  <br />
                  Category : Luxury <br />
                  Model : BMW X5 <br />
                  Transmission : Automatic <br />
                  Fuel : Petrol <br />
                  
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 g-3">
            <div className="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4s5raERycTaxvFWu0iMASFbswhpQUDkBEgRmpV1OB_g&s=10"
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
                alt="Hyundai Creta"
              />

              <div className="card-body">
                <h5 className="card-title">Hyundai Creta</h5>

                <p className="card-text">
                   <br />
                  Category : SUV <br />
                  Model : Creta <br />
                  Transmission : Manual <br />
                  Fuel : Diesel <br />
                  
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 g-3">
            <div className="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrbECtxzpWbMfFk9dR4q17utZR2MVo0UHfeEyAP2uJOA&s=10"
                className="card-img-top"
                style={{ height: "220px", objectFit: "fill" }}
                alt="Maruti Swift"
              />

              <div className="card-body">
                <h5 className="card-title">Maruti Swift</h5>

                <p className="card-text">
                 <br />
                  Category : Hatchback <br />
                  Model : Swift <br />
                  Transmission : Manual <br />
                  Fuel : Petrol <br />
                  
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 g-3">
            <div className="card h-100">
              <img
                src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600"
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
                alt="Mercedes Benz"
              />

              <div className="card-body">
                <h5 className="card-title">Mercedes Benz</h5>

                <p className="card-text">
                 <br />
                  Category : Luxury <br />
                  Model : Mercedes Benz <br />
                  Transmission : Automatic <br />
                  Fuel : Hybrid <br />
                
                </p>
              </div>
            </div>
          </div>

        </div>

      

      </div>
    </div>
  )
}

export default Viewproducts