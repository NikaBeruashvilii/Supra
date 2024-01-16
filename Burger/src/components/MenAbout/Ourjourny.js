import React from 'react'
import Fry from '../../assets/images/french_fry.png'
import Icon1 from '../../assets/images/outj_icon1.png'
import Icon2 from '../../assets/images/outj_icon2.png'
import Icon3 from '../../assets/images/outj_icon3.png'

function Ourjourny() {
    return (
        <>
            <section className="row_am our_journey bg_yellow_textcher">
                <div className="side_shape position-absolute" data-aos="fade-in" data-aos-duration={1500} >
                    <img src={Fry} alt="img" />
                </div>
                <div className="container">
                    <div className="row_am">
                        <div className="section_title" data-aos="fade-up" data-aos-duration={1500} >
                            <span className="sub_text">Why we best</span>
                            <h2>
                                Serving Best burger <br /> since 1945
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="joueney_box" data-aos="fade-up" data-aos-duration={1500} >
                                    <div className="icon">
                                        <img src={Icon1} alt="img" />
                                    </div>
                                    <h3>Prime location</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typeset ting
                                        industry lorem Ipsum has been the industrys standard my text ever
                                        sincestandard.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="joueney_box" data-aos="fade-up" data-aos-duration={1500} >
                                    <div className="icon">
                                        <img src={Icon2} alt="img" />
                                    </div>
                                    <h3>Free home delivery</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typeset ting
                                        industry lorem Ipsum has been the industrys standard my text ever
                                        sincestandard.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="joueney_box" data-aos="fade-up" data-aos-duration={1500} >
                                    <div className="icon">
                                        <img src={Icon3} alt="img" />
                                    </div>
                                    <h3>premium services</h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typeset ting
                                        industry lorem Ipsum has been the industrys standard my text ever
                                        sincestandard.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ourjourny