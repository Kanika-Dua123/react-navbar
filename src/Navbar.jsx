import React from 'react'
import {Link} from 'react-router-dom'

const Navbar =() => {
  return (
    <header>
        <div className="logo">
        Company
      </div>
      <div classname="display-menu">
        <Link className='menu' to={"/Home"}>Home</Link>
          <Link className='menu' to={"/Portfolio"}>Portfolio</Link>
          <Link className='menu' to={"/Service"}>Service</Link>
          <Link className='menu' to={"/About"}>About</Link>
        </div>
    
</header>
  )
}

export default Navbar