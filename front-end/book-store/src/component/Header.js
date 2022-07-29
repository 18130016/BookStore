import React from 'react';
import '../css/header.css';
import logo from '../img/logo.webp';
import { Avatar } from 'primereact/avatar';
import { Link, NavLink } from 'react-router-dom';
import UserService from '../service/UserService';
import { useSelector, useDispatch } from 'react-redux'
import { notAdmin, logout } from '../app/isLogin'
import jwt_decode from "jwt-decode";
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const userservice = new UserService();
    const navigate = new useNavigate()
    const count = useSelector(state => state.isLogin.value)
    const admin = useSelector(state => state.isLogin.admin)
    const dispatch = useDispatch()


    function clicklogOut() {
        userservice.logOut()
        dispatch(logout())
        dispatch(notAdmin())
        navigate("/login", { replace: true });
    }


    function Display() {

        const [anchorEl, setAnchorEl] = React.useState(null);

        const handleClick = (event) => {
            setAnchorEl(anchorEl ? null : event.currentTarget);
        };

        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
        const styleIcon = { fontSize: "27px" };

        if (count === true) {
            const token = userservice.getToken();
            const user = jwt_decode(token).fullName
            if (admin === true) {
                return (

                    <div className='flex items-center w-full relative'>
                        <div>
                            <Popper id={id} open={open} anchorEl={anchorEl}>
                                <Box sx={{ p: 1, bgcolor: 'background.paper', marginTop: 1, borderRadius: "8px" }}>
                                    <div className='w-44 pl-2'>
                                        <Link className='inline-block p-2 hover:text-[#ff1616]' to= "/account">Tài khoản của tôi</Link>
                                        <Link className='inline-block p-2 hover:text-[#ff1616]' to = "/">Đơn hàng của tôi</Link>
                                        <p onClick={() => clicklogOut()} className='p-2 cursor-pointer hover:text-[#ff1616]'>Thoát tài khoản</p>
                                    </div>
                                </Box>
                            </Popper>
                        </div>
                        <div className='flex items-center justify-around w-2/5'>
                            <Link className='hover:text-[#ff1616] rounded-xl bg-white px-3 drop-shadow-lg pt-2 pb-2 flex items-center justify-center' to="/farvorite"><i className='pi pi-heart' style={styleIcon}></i></Link>

                            <Link className='hover:text-[#ff1616] rounded-xl bg-white px-3 drop-shadow-lg pt-2 pb-2 flex items-center justify-center' to='/cart'> <i className="pi pi-shopping-cart" style={styleIcon}> </i></Link>

                            <button
                                onClick={handleClick}
                                className='hover:text-[#ff1616] rounded-xl bg-white px-3 drop-shadow-lg pt-2 pb-2 flex items-center justify-center'>
                                <i className='pi pi-user' style={styleIcon}></i>
                            </button>

                        </div>

                        <div className='flex items-center absolute right-0'>
                            <Link to="/shop" className='font-medium text-black'>
                                <button className='hover:text-[#ff1616] bg-[#fff] px-6 pt-[10px] pb-[10px] drop-shadow-lg rounded-md'>Bán hàng cùng ABC</button>
                            </Link>
                        </div>
                    </div>
                )
            } else
                return (
                    <nav>
                        <ul>
                            <li><Link to="/farvorite" className='favorite'><i className='pi pi-heart'></i></Link></li>
                            <li>
                                <Link to='/cart'> <Avatar className="p-overlay-badge" icon="pi pi-shopping-cart" size="large" shape="circle"> </Avatar></Link>
                            </li>
                            <li><Link to="/account" className=""><i className='pi pi-user'></i> {user}</Link></li>
                            <li ><a onClick={() => clicklogOut()} className=""><i className='pi pi-sign-out'></i> </a></li>
                        </ul>
                    </nav>
                )

        }
        else {
            return (
                <nav>
                    <ul>
                        <li><Link to="/login" className="btn header-btn">Đăng nhập</Link></li>
                    </ul>
                </nav>
            )
        }

    }

    return (
        <div className='header-area'>
            <div className='header-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-12'>
                            <div className='flex items-center'>
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
                                <div className='w-2/4 ml-10'>
                                    <Display />
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
                                        <li><NavLink to="/categories">Category</NavLink></li>
                                        <li><NavLink to="/ad">About</NavLink></li>
                                        <li><NavLink to="/blog">Blog</NavLink></li>
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