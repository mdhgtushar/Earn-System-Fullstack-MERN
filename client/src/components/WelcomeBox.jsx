import React from 'react'
import goldcoin_image from "../assets/goldcoin.png";
const WelcomeBox = () => {
  return (
    <div className="flex items-center justify-center h-screen" >
        <div className="text-center">
          <img className="h-44 m-auto" src={goldcoin_image} />
          <h2 className="text-xl font-bold">Earn System Client Panel</h2>
          <small>Developed by, HOBAYER GOLONDAZ</small>
          <div className="mt-5">
            <button class="btn-primary mr-2">Sign in</button>
            <button class="btn-primary">Register</button>
          </div>

        </div>
      </div >
  )
}

export default WelcomeBox