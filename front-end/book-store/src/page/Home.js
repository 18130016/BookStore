
import '../css/home.css';
import Slider from "react-slick";
import Sliders from '../component/Slider';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SellingService from "../service/SellingService"
import BookService from '../service/BookService';



export default function Home() {


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const [listSelling, setListSelling] = useState([]);

    const sellingService = new SellingService();

    function getApi() {
        return sellingService.getAll();
    }

    useEffect(() => {
        getApi().then((data) => setListSelling(data))
    }, [])


    return (
        <div className='home-area'>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='slider-area'>
                            <Slider {...settings}>
                                <div className='slider-banner slider-background-1'>
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-7">
                                                <div className="hero-caption text-center">
                                                    <span className="" >Science Fiction</span>
                                                    <h1 className="" >The Historys<br /> of Phipino</h1>
                                                    <Link to="/products" className="btn hero-btn" >Browse Store</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='slider-banner slider-background-2'>
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-7">
                                                <div className="hero-caption text-center">
                                                    <span className="" >Science Fiction</span>
                                                    <h1 className="" >The History<br /> of Phipino</h1>
                                                    <Link to="/products" className="btn hero-btn" >Browse Store</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='slider-banner slider-background-3'>
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-6 col-sm-7">
                                                <div className="hero-caption text-center">
                                                    <span className="" >Science Fiction</span>
                                                    <h1 className="" >The History<br /> of Phipino</h1>
                                                    <Link to="/products" className="btn hero-btn" >Browse Store</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className='best-selling'>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-tittle text-center mb-55">
                                <h2>Best Selling Books Ever</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-xl-12'>
                            <Sliders data={listSelling}></Sliders>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}




