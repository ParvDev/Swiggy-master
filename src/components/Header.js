import { useState } from "react";
import {Link} from "react-router-dom";
const loggedInUser = () => {
    //API call to check authentication
    return true;
}


//Logo and Title


export const Title = () => (
    <a href="/">
        <img
        className="logo"
        alt="Swiggy" 
        src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"/>
    </a>
);

//Navigation Bar 
const Header = ()  => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link>Cart</Link>
                    </li>
                </ul>
            </div>
            {
                isLoggedIn ? ( 
                    <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button> 
                ):( 
                    <button onClick={()=>{setIsLoggedIn(true)}}>Login</button>
                )
            }
        </div>
    );
};

export default Header;