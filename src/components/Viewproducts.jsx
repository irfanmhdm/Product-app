import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewbooks = () => {

  const [data, changeData] = useState(

    [
      {
        "name": "Cricket Bat", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQte0da0g1196rM6RpemyhtuTyrOmfUqhHORK_kncjpBw&s=10",
        "price": 5500
      },
      {
        "name": "Leather Ball", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTF_C6xv8QwQDrod6M3F9mc_mVAm62kelAYuY79IeTPA&s=10",
        "price": 600
      },
      {
        "name": "Football", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnzWcXScoUxeK0eC1iIltTtHpx-xlZf1m6FI_dvHfMQ&s=10",
        "price": 2000
      },
      {
        "name": "Badminton Racket", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqLcVEdHV5_i5Eu4xrCrOkXlMKj1TXpU7BYoNHtZD70A&s=10",
        "price": 2500
      },
      {
        "name": "Basketball", "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2OdBamw1KH4rX0fhAdvFtP7eDMx73E16HsLIFRFcFg&s=10",
        "price": 3000
      },

    ]

  )

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">

          {data.map(
            (value, index) => {

              return (

                <div className="col-12 col-sm-6 col-md-4 col-lg-4 g-3">
                  <div className="card h-100">
                    <img
                      src={value.avatar}
                      className="card-img-top"
                      style={{ height: "300px", width : "350px", objectFit: "fill",padding:"10px" , marginLeft:"20px" }}
                      alt="Items"
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{value.name}</h5>
                      <p className="card-text">
                         <br />
                        {value.price}
                      </p>
                      <button className="btn btn-primary">Add to Cart</button>
                    </div>
                  </div>
                </div>
              )
            }
          )}


        </div>
      </div>

    </div>

  )
}

export default Viewbooks