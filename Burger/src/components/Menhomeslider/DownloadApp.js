import React from 'react'
import { Link } from 'react-router-dom'
import App from '../../assets/images/app.png'
import Gblack from '../../assets/images/gplay_black.png'
import Gwhite from '../../assets/images/gplay_white.png'
import Ablack from '../../assets/images/appstore_black.png'
import Awhite from '../../assets/images/appstore_white.png'

function DownloadApp() {
    return (
        <>
            <section className="row_inner_am app_section bg_yellow_textcher">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="section_title"
                                data-aos="fade-up" data-aos-duration={1500} >
                                <span className="sub_text">Download Our App</span>
                                <h2>free delivery in 30 MINUTES </h2>
                            </div>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry lorem Ipsum has been the industrys standard dummy text.
                            </p>
                            <ul className="app_btn">
                                <li>
                                    <Link to="#">
                                        <img className="blue_img" src={Gblack} alt="image" />
                                        <img className="white_img" src={Gwhite} alt="image" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        <img className="blue_img" src={Ablack} alt="image" />
                                        <img className="white_img" src={Awhite} alt="image" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="blog_card" data-aos="fade-up" data-aos-duration={1500}>
                                <img src={App} alt="img" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DownloadApp