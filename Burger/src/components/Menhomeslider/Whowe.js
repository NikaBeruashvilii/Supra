import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import Icon1 from '../../assets/images/title_icon.png'
import Icon2 from '../../assets/images/who_icon.png'
import Icon3 from '../../assets/images/who_icon2.png'
import Gallery1 from '../../assets/images/gallery_01.png'
import Gallery2 from '../../assets/images/gallery_02.png'
import Gallery3 from '../../assets/images/gallery_03.png'
import Gallery4 from '../../assets/images/gallery_04.png'
import Gallery5 from '../../assets/images/gallery_05.png'
import Gallery6 from '../../assets/images/gallery_06.png'
import Gallery7 from '../../assets/images/gallery_07.png'
import Gallery8 from '../../assets/images/gallery_08.png'

const WhoweSlider = {
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 10,
            autoplaySpeed: 2000,
            easing: "linear"
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 5,
            autoplaySpeed: 2000,
            easing: "linear"
          },
        },
      ],
}

function Whowe() {
    return (
        <>
            <div className="row_inner_am who_we_section who_version_two ">
                <div className="container">
                    <div className="section_title text-center"
                        data-aos="fade-up" data-aos-duration={1500} >
                        <div className="icon">
                            <img src={Icon1} alt="img" />
                        </div>
                        <span className="sub_text">Who we are</span>
                        <h2>
                            Quality Ingredients. Quality Burgers, <br />{" "}
                            <span className="heading_img">
                                <img src={Icon2} alt="img" />
                            </span>
                            Serving the greatest burgers on the planet, Burgers that won’t break
                            your{" "}
                            <span className="heading_img">
                                <img src={Icon3} alt="img" />
                            </span>{" "}
                            heart
                        </h2>
                    </div>
                </div>
                <div className="gallery_slider">
                    <Slider className="Slider-Who" id="gallery_flow_right" data-aos="fade-in" data-aos-duration={1500} {...WhoweSlider} slidesToShow={11.5} arrows={false} autoplay={true} speed={1000} easing='linear' autoplaySpeed={0} >
                        <div className="item">
                            <div className="img">
                                <img src={Gallery1} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery2} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery3} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery4} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery1} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery2} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery3} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery4} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery1} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery2} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery3} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery4} alt="img" />
                            </div>
                        </div>
                    </Slider>
                    <Slider className="Slider-Who" id="gallery_flow_left" data-aos="fade-in" data-aos-duration={1500} {...WhoweSlider} rtl={true} slidesToShow={11.5} arrows={false} autoplay={true} speed={1000} easing='linear' autoplaySpeed={0} >
                        <div className="item">
                            <div className="img">
                                <img src={Gallery5} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery6} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery7} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery8} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery5} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery6} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery7} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery8} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery5} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery6} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery7} alt="img" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="img">
                                <img src={Gallery8} alt="img" />
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="text-center" data-aos="fade-in" data-aos-duration={1500}>
                    <Link to="/aboutus" className="btn btn_primary">
                        read our story
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Whowe