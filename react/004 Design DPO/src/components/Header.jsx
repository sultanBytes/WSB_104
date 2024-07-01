import React from 'react';
import logo from './../assests/images/main-logo.svg';
import searchIcon from './../assests/images/search.svg';
import heartIcon from './../assests/images/heart.svg';
import shoppingIcon from './../assests/images/shopping-bag.svg';
import crownIcon from './../assests/images/header-crown.svg';


const Header = () => {
    return (
        <header className="header">
            <div className='container'>
                <div className='menu'>
                <figure className='logo'>
                    <img src={logo} />
                </figure>

                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Explore</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
                </div>

                <div className='user-header'>
                    <ul>
                        <li>
                            <img src={searchIcon}></img>
                        </li>
                        <li>
                            <img src={heartIcon}></img>
                        </li>
                        <li>
                        <img src={shoppingIcon}></img>
                        </li>
                        <li>
                            <button>
                                <img src={crownIcon}></img>
                                <span>Upgrade Pro </span>
                            </button>
                        </li>
                        <li>
                            <button>Sign In</button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;