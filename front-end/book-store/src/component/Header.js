import React from 'react';
import '../css/header.css';
import logo from '../img/logo.webp';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { Link, NavLink } from 'react-router-dom';



export default function Header() {

    return (
        <div className='header-area'>
            <div className='header-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-12'>
                            <div className='d-flex justify-content-between align-items-center flex-sm'>
                                <div className='header-info-left d-flex align-items-center'>
                                    <div className='logo'>
                                        <nav><Link to='/'> <img src={logo} alt='logo' /></Link></nav>
                                    </div>
                                    <form className='form-box'>
                                        <input type="text" name="Search" placeholder="Search book by author or publisher" />
                                        <div className="search-icon">
                                            <i className="pi pi-search"></i>
                                        </div>
                                    </form>
                                </div>
                                <div className="header-info-right d-flex align-items-center">
                                    <nav>
                                        <ul>
                                            <li><Link to="/" className='favorite'><i className='pi pi-heart'></i></Link></li>
                                            <li>
                                                <Link to='/'> <Avatar className="p-overlay-badge" icon="pi pi-shopping-cart" size="large" shape="circle"><Badge value="4" /> </Avatar></Link>
                                            </li>
                                            <li><Link to="/login" className="btn header-btn">Sign in</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header-bottom header-stickey'>
                <div className='container'>
                    <div className="row align-items-center">
                        <div className='col-md-12'>
                            <div className="main-menu text-center d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/products">Category</NavLink></li>
                                        <li><NavLink to="/ad">About</NavLink></li>
                                        <li><NavLink to="/asd">Blog</NavLink></li>
                                        <li><NavLink to="/asda">Contect</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}