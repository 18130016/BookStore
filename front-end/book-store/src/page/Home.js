
import '../css/home.css';
import Slider from "react-slick";
import Sliders from '../component/Slider';
import { Link } from 'react-router-dom';



export default function Home() {


    const datafake = [
        {
            id: 6,
            book:
            {
                id: 6,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }



        },

        {
            id: 5,
            book:
            {
                id: 5,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }

        },

        {
            id: 4,
            book:
            {
                id: 4,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }

        },

        {
            id: 3,
            book:
            {
                id: 3,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }

        },

        {
            id: 1,
            book:
            {
                id: 3,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }

        },

        {
            id: 2,
            book:
            {
                id: 3,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }

        },

        {
            id: 6,
            book:
            {
                id: 3,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }

        },

        {
            id: 7,
            book:
            {
                id: 3,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }

        },




    ];

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
                                <Sliders data={datafake}></Sliders>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}




