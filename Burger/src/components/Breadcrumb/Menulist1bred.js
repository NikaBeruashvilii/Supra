import React from 'react'
import Overlayimg from '../../assets/images/overlay_bg.png'

function Menulist1bred() {
    return (
        <>
            <section className="bredcrumb_section menu_list">
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Our Menu</span>
                        <h2>Yummy &amp; Wow Burger</h2>
                        <p className="lead" data-aos="fade-up" data-aos-duration={1500}>
                            Lorem Ipsum is simply dummy text of the printing.
                        </p>
                    </div>
                </div>
                <div className="ovelay_bg">
                    <img className="" src={Overlayimg} alt="img" />
                </div>
            </section>
        </>
    )
}

export default Menulist1bred