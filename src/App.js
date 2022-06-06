import { useState } from "react"
import './App.css';
import { Products } from "./Products";

function App() {



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
  

  return (

    <div className="App">


      <div className="container-nav">
        <div class="navbar">
        <a href="#Start BootStrap">Start BootStrap</a>
  <a href="#home">Home</a>
  <a href="#About">About</a>
  <div class="dropdown">
    <button class="dropbtn">Shop
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
  );
}

export default App;


export function Counter() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
  const style = {
    display: count >= 1 ? "none" : "show"



  }
  const data = "Successfully Added to Cart"

  const click = () => {
    setCount(count + 1)
    setShow(false)

  }


  return (
    <div>


      {show && <button className="show" style={style} onClick={click} >Add To Cart </button>}


      {!show && <p>{data}</p>}



    </div>


  )
}


