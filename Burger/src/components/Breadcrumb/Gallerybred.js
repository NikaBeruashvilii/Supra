import React from 'react'
import Bgimg from '../../assets/images/overlay_bg.png'

function Gallerybred() {
    return (
        <>
            <section className="bredcrumb_section gallery_banner">
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Our Glimpsis</span>
                        <h2>restaurant gallery</h2>
                        <p className="lead" data-aos="fade-up" data-aos-duration={1500}>
                            Lorem Ipsum is simply dummy text of the printing.
                        </p>
                    </div>
                </div>
                <div className="ovelay_bg">
                    <img className="" src={Bgimg} alt="img" />
                </div>
            </section>
        </>
    )
}

export default Gallerybred