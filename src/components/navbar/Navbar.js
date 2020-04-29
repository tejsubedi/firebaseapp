import React from 'react'
import {Link} from 'react-router-dom'
import SignedIn from './SignedIn'

const  Navbar= () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to='/' className="brand-logo">My Project </Link>
                <SignedIn/>
            </div>
        </nav>
    )
}

export default Navbar
