import React from 'react'
import { Link } from 'react-router-dom'
import Banner1 from '../../assets/images/banner_1.png'
import Banner2 from '../../assets/images/banner_2.png'
import Banner3 from '../../assets/images/banner_3.png'

function Rowbanner() {
    return (
        <>
            <section className="row_inner_am banner_card_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="blog_card" data-aos="fade-up" data-aos-duration={1500}>
                                <Link to="/menulistone" className="img">
                                    <img src={Banner1} alt="img" className="img-fluid" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blog_card" data-aos="fade-up" data-aos-duration={1500}>
                                <Link to="/menulistone" className="img">
                                    <img src={Banner2} alt="img" className="img-fluid" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blog_card" data-aos="fade-up" data-aos-duration={1500}>
                                <Link to="/menulistone" className="img">
                                    <img src={Banner3} alt="img" className="img-fluid" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Rowbanner