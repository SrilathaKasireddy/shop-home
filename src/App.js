import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from "react"
import { Products } from "./Products";



function App() {
  
  
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
       <LoginButton />
      <LogoutButton/>
      <Profile />
    </>
  );
}

export default App;
export function Counter() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
  const style = {
    display: count >= 1 ? "none" : "show"



  }
  const data = "Successfully Added to Cart!!😊"

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


