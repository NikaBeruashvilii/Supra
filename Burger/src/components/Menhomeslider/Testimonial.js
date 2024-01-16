import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import Test1 from '../../assets/images/testmonial_01.png'
import Test2 from '../../assets/images/testmonial_02.png'
import Test3 from '../../assets/images/testmonial_03.png'

const Test = {
    loop: true,
    items: 1,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    autoplayTimeout: 5000
}

function Testimonial() {
    return (
        <>
            <section className="row_inner_am testimonial_section bg_white_textcher">
                <div className="container-fluid">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Tasty words</span>
                        <h2>customer reviews</h2>
                    </div>
                    <div className="testimonial_wraper" data-aos="fade-in" data-aos-duration={1500} >
                        <Slider className="" id="testimonial_slider" arrows={false} autoplay={true} autoplaySpeed={2000}>
                            <div className="item">
                                <div className="testimonial_inner">
                                    <div className="img">
                                        <img src={Test1} alt="img" />
                                    </div>
                                    <div className="text">
                                        <span className="quote">“</span>
                                        <div className="star">
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                        </div>
                                        <h2>
                                            It's a great experience. The ambiance is realy very welcoming
                                            and charming. Amazing food, wines and services.
                                        </h2>
                                        <h3>
                                            Marry Christina,{" "}
                                            <span className="designation">via trip advisor</span>
                                        </h3>
                                        <span className="quote text-right d-block">”</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial_inner">
                                    <div className="img">
                                        <img src={Test2} alt="img" />
                                    </div>
                                    <div className="text">
                                        <span className="quote">“</span>
                                        <div className="star">
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                        </div>
                                        <h2>
                                            Amazing food, wines and services very welcoming and charming.
                                            Amazing food, wines and services It's a great experience.
                                        </h2>
                                        <h3>
                                            Marry Christina,{" "}
                                            <span className="designation">via trip advisor</span>
                                        </h3>
                                        <span className="quote text-right d-block">”</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="testimonial_inner">
                                    <div className="img">
                                        <img src={Test3} alt="img" />
                                    </div>
                                    <div className="text">
                                        <span className="quote">“</span>
                                        <div className="star">
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                            <span>
                                                <i className="icofont-star" />
                                            </span>
                                        </div>
                                        <h2>
                                            Amazing ambience, great food, very courteous staff. Overall very
                                            good experience. Best place to have real steak food.
                                        </h2>
                                        <h3>
                                            Willium Joe{" "}
                                            <span className="designation">via trip advisor</span>
                                        </h3>
                                        <span className="quote text-right d-block">”</span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className="text-center" data-aos="fade-in" data-aos-duration={1500}>
                        <Link to="/reviews" className="btn btn_primary yellow_btn">
                            more testimonials
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial