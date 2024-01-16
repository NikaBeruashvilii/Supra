import React from 'react'
import { Link } from 'react-router-dom'
import BG1 from '../../assets/images/banner_slide01.png'
import BG2 from '../../assets/images/banner_slide02.png'
import BG3 from '../../assets/images/banner_slide03.png'
import Banner1 from '../../assets/images/overlay_bg.png'
import Slider from 'react-slick';

const BannerSlider = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: true,
};

function Banner() {
    return (
        <>
            <section className="banner_section second_banner">
                <div className="banner_slider">
                    <Slider className="" id="banner_slider" {...BannerSlider} arrows={false} slidesToShow={1} autoplay={true} autoplaySpeed={5000}>
                        <div className="item">
                            <div className="slider_block" style={{ backgroundImage: `url(${BG1})` }} >
                                <div className="ban_text ">
                                    <div className="inner_text">
                                        <h1>cheese Burger</h1>
                                        <p className="lead">
                                            Serving the greatest burgers on the planet, Burgers that won’t
                                            break your heart.
                                        </p>
                                        <Link to="/menulistone" className="btn btn_primary yellow_btn">
                                            order now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider_block" style={{ backgroundImage: `url(${BG2})` }}>
                                <div className="ban_text ">
                                    <div className="inner_text">
                                        <h1>Jumbo Burger</h1>
                                        <p className="lead">
                                            A restaurant with Timeless &amp; Traditional taste.{" "}
                                        </p>
                                        <Link to="/menulisttwo" className="btn btn_primary yellow_btn">
                                            order now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="slider_block" style={{ backgroundImage: `url(${BG3})` }} >
                                <div className="ban_text">
                                    <div className="inner_text">
                                        <h1>Special Burger</h1>
                                        <p className="lead">
                                            Authentic Tastes &amp; Authentic Atmosphere, Change your life
                                            with our steaks.{" "}
                                        </p>
                                        <Link to="/menulistone" className="btn btn_primary yellow_btn">
                                            order now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="ovelay_bg">
                    <img className="right_shape" src={Banner1} alt="img" />
                </div>
            </section>
        </>
    )
}

export default Banner