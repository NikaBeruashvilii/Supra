import React from 'react'
import icon from '../../assets/images/title_icon.png'
import overlay from '../../assets/images/overlay_bg.png'

function Menulist3bred() {
    return (
        <>
            <section className="bredcrumb_section menu_list">
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="icon">
                            <img src={icon} alt="img" />
                        </span>
                        <span className="sub_text">Our menu</span>
                        <h2>Cheesy Burger in paris</h2>
                    </div>
                </div>
                <div className="ovelay_bg">
                    <img className="" src={overlay} alt="img" />
                </div>
            </section>

        </>
    )
}

export default Menulist3bred