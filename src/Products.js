import { Counter } from "./App";

export function Products({ image, name, price, rating }) {

 return (

  <div className="container">
   <button className="sup"><sup>Sale</sup></button>
   <img className="image" alt={name} src={image}></img>

   <div className="name">{name}</div>
   <br></br>
   <div className="price">{price}</div>
   <br></br>
   <div className="rating">{rating}</div><br></br>

   <Counter />
  </div>


 );
}
