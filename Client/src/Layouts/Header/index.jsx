import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { GiShoppingCart } from "react-icons/gi";
import { NavLink } from 'react-router-dom';
import "./index.scss"
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
    return (
        <header id='coloshop'>
           <div className="container">
            <div className="coloshop">
               <h2>COLO<span>SHOP</span></h2>
            
            <div className="coloshop-nav">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink>Promotion</NavLink>
                        </li>
                        <li>
                            <NavLink>Pages</NavLink>
                        </li>
                        <li>
                            <NavLink>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
                

            </div>
            <div className="colo-icons">
            <CiSearch className='icons'/>
            <CgProfile  className='icons'/>
            <NavLink to="/favorite-page"><GiShoppingCart  /></NavLink>
            <MdOutlineMenu className='menu-bar'/>
            </div>
            </div>
           </div>
        </header>
    )
}

export default Header