import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedIn = () => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to="/">New Project</NavLink></li>
                <li><NavLink to="/">Sign Out </NavLink></li>
                <li><NavLink to="/" className="btn btn-floating green lighten-1">TP</NavLink></li>
                
            </ul>
        </div>
    )
}

export default SignedIn
