import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
      <>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/w">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
        <Link className="nav-link text-light" aria-current="page" to="/blog">Blog</Link>
        {props.loggedIn ? 
        <>
        <Link className="nav-link text-light" to='/' onClick={props.logout}>Log Out</Link>
        <Link className="nav-link text-light" to='/create-post'>Create Post</Link>
        </>
         : 
        <>
        <Link className="nav-link text-light" to="/signup">Sign Up</Link>
        <Link className="nav-link text-light" to="/login">Login</Link>
        </>
        }
      </div>
    </div>
  </div>
</nav>
</>
 
  )
}
