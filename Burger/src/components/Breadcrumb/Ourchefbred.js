import React from 'react'
import bg from '../../assets/images/overlay_bg.png'

function Ourchefbred() {
    return (
        <>
            <section className="bredcrumb_section chef_banner">
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Our Team</span>
                        <h2>Meet our expert chefs</h2>
                        <p className="lead" data-aos="fade-up" data-aos-duration={1500}>
                            Lorem Ipsum is simply dummy text of the printing.
                        </p>
                    </div>
                </div>
                <div className="ovelay_bg">
                    <img className="" src={bg} alt="img" />
                </div>
            </section>

        </>
    )
}

export default Ourchefbred