import React from 'react'
import { NavItems } from './MenuItems'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div>
            <span>Logo</span>
        </div>
        <nav>
            <li>
                {NavItems.map((currentItem)=>{
                    return(
                    <ul key={currentItem.id}>
                        <NavLink to={currentItem.link}>
                            {currentItem.name}
                        </NavLink>
                    </ul>)
                })}
            </li>
        </nav>
    </div>
  )
}

export default Navbar