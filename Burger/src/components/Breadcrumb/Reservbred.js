import React from 'react'
import Overlayimg from '../../assets/images/overlay_bg.png'

function Reservbred() {
    return (
        <>
            <section className="bredcrumb_section reservation_banner">
                <div className="container">
                    <div className="section_title text-center"
                        data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Reservation</span>
                        <h2>Flavoury Burger House</h2>
                        <p className="lead" data-aos="fade-up" data-aos-duration={1500}>
                            Burger house, food street, London - 58790
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

export default Reservbred