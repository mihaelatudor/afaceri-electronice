import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
       
            <nav className="nav-wrapper teal darken-4">
            
                <div className="container">
                     <a href="#!" class="brand-logo"><i class="material-icons">cloud</i>NoPlaceLikeHome</a>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
  
        
    )
}

export default Navbar;