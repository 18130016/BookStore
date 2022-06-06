
import './home.css'

import Slider from "react-slick";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import { Carousel } from 'primereact/carousel';
import SellingService from '../service/SellingService';



const datafake = [
    {
        id:1,
        book:
            {
                id: 1,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }
        
        

    },

    {
        id:1,
        book:
            {
                id: 1,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }
        
        

    },

    {
        id:1,
        book:
            {
                id: 1,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }
        
        

    },

    {
        id:1,
        book:
            {
                id: 1,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }
        
        

    },

    {
        id:1,
        book:
            {
                id: 1,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }
        
        

    },

    {
        id:1,
        book:
            {
                id: 1,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }
        
        

    },

    {
        id:1,
        book:
            {
                id: 1,
                name: "baokaka",
                image: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest_selling4.jpg.pagespeed.ic.CkpIchNcgs.webp",
                author: "adadasd",
                type: "",
                price: 12

            }
        
        

    },

    
    

];

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

    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const [sellingBook, listSelling] = useState([]);
    const sellingService = new SellingService();

    async function getApi() {
      const data = await sellingService.getAll();
        return listSelling(data);
    }



    useEffect(() => {
        getApi();
        // listSelling(datafake);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps



    const productTemplate = (book) => {
        return (
            <div className='properties'>
                <div className="properties-card">
                    <div className="properties-img">
                        <Link to="/"><img src={book.book.image} alt="book" /></Link>
                    </div>
                    <div className="properties-caption">
                        <h3><Link to="/">{book.book.name}</Link></h3>
                        <p>{book.book.author}</p>
                        <div className="properties-footer d-flex justify-content-between align-items-center">
                            <div className="review">
                                <div className="rating">
                                    <Rating value={5} readOnly stars={5} cancel={false} />
                                </div>
                                <p>(<span>50</span> Review)</p>
                            </div>
                            <div className="price">
                                <span>{book.book.price}$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

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
                                                    <h1 className="" >The History<br /> of Phipino</h1>
                                                    <a href="/" className="btn hero-btn" >Browse Store</a>
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
                                                    <a href="/" className="btn hero-btn" >Browse Store</a>
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
                                                    <a href="/" className="btn hero-btn" >Browse Store</a>
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
                            <Carousel value={sellingBook} numVisible={5} numScroll={1} className="custom-carousel"  responsiveOptions={responsiveOptions} circular={true}
                                 itemTemplate={productTemplate} />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}




