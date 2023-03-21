import React from 'react'
import Link from 'next/link'

const Herobanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p classname="beats-solo">SMALL TEXT</p>
        <h3>MID TEXT</h3>
        <img src="" alt="headphones" className="hero-banner-image" />

       <div>
        <Link href="/Product/ID">
        <button type='button'>Button Text</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>DESCRIPTIONS</p>

        </div>
       </div>
      </div>
      
      </div>
  )
}

export default Herobanner