import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import { useState } from "react"
import { Products } from "../Products"


const Profile = () => {
  const items = [{
    image: "https://5.imimg.com/data5/WD/WP/MY-9953785/fancy-bracelet-500x500.jpg",
    name: "Fancy Product",
    price: "$40.00 - $80.00",
    rating: ""

  },
  {
    image: "https://5.imimg.com/data5/WD/WP/MY-9953785/fancy-bracelet-500x500.jpg",
    name: "Sale Item",
    price: "$18.00-$20.00 ",
    rating: ""

  },
  {
    image: "https://5.imimg.com/data5/WD/WP/MY-9953785/fancy-bracelet-500x500.jpg",
    name: "Sale Item",
    price: "$25.00-$50.00 ",
    rating: ""

  },
  {
    image: "https://5.imimg.com/data5/WD/WP/MY-9953785/fancy-bracelet-500x500.jpg",
    name: "Fancy Product",
    price: "$40.00",
    rating: ""

  },
  {
    image: "https://5.imimg.com/data5/WD/WP/MY-9953785/fancy-bracelet-500x500.jpg",
    name: "Special Item",
    price: "$25.00-$50.00 ",
    rating: "⭐⭐⭐⭐⭐"

  },
  {
    image: "https://5.imimg.com/data5/WD/WP/MY-9953785/fancy-bracelet-500x500.jpg",
    name: "Sale Item",
    price: "$120.00 - $280.00",
    rating: "⭐⭐⭐⭐⭐"

  },
  {
    image: "https://5.imimg.com/data5/WD/WP/MY-9953785/fancy-bracelet-500x500.jpg",
    name: "Popular Item",
    price: "$18.00-$20.00",
    rating: "⭐⭐⭐⭐⭐"

  },
  {
    image: "https://5.imimg.com/data5/WD/WP/MY-9953785/fancy-bracelet-500x500.jpg",
    name: "Popular Item",
    price: "$40.00",
    rating: "⭐⭐⭐⭐⭐"

  },]
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
     <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JSONPretty data={user} />
        

        <div className="App">


      <div className="container-nav">
        <div class="navbar">
        <a href="#Start BootStrap">Start BootStrap</a>
  <a href="#home">Home</a>
  <a href="#About">About</a>
  <div class="dropdown">
    <button class="dropbtn">Shop👇
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">All Products</a>
      <a href="#">New Arrivals</a>
      <a href="#">Popular Items</a>
      
    </div>
    
  </div>
  <div><button className="button">🛒Cart</button></div> 
  
</div>


      </div>
      <div className="container-big">
        <h1>Shop in Style</h1>
        <p>With This Shop Homepage Template</p>


      </div>


      {items.map((ele, index) => <Products key={index} image={ele.image} name={ele.name} price={ele.price} rating={ele.rating} />)}
      <div className="container-end">
        <div>
          <h1>  Copyright © Your Website 2022</h1>
        </div>
      </div>
    </div>
      </div>
    )
  )
}

export default Profile
