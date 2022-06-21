import React from "react";
import { useParams } from "react-router-dom";
import "../css/productdetail.css"

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


export default function ProductDetail() {

    let { id } = useParams();

    console.log(id)

    return (

        <div className="services-area2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="single-services d-flex align-items-center mb-0">
                                    <div className="features-img">
                                        <img src="https://preview.colorlib.com/theme/abcbook/assets/img/gallery/xbest-books1.jpg.pagespeed.ic.a3LkFxg89O.webp" alt="" />
                                    </div>
                                    <div className="features-caption">
                                        <h3>The Rage of Dragons</h3>
                                        <p>By Evan Winter</p>
                                        <div className="price">
                                            <span>$50.00</span>
                                        </div>
                                        <div className="review">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                            </div>
                                            <p>(120 Review)</p>
                                        </div>
                                        <a href="/" className="white-btn mr-10">Add to Cart</a>
                                        <a href="/" className="border-btn share-btn"><i className="fas fa-share-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="our-client section-padding best-selling">

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <div className="nav-button">
                                <Nav variant="pills" >
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Description</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Comment</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                       
                            
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        baokaka
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        baokakaa
                                    </Tab.Pane>
                                </Tab.Content>
                        
             
                    </Tab.Container>


                </section>
            </div>
        </div>
    )

}

