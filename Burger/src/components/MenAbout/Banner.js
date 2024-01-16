import React from 'react'
import Ban1 from '../../assets/images/abtbanshape.png'
import Icon1 from '../../assets/images/title_icon.png'
import Ban01 from '../../assets/images/abtban_01.png'
import Ban02 from '../../assets/images/abtban_02.png'
import Ban03 from '../../assets/images/abtban_03.png'
import Ban04 from '../../assets/images/abtban_04.png'
import Ban05 from '../../assets/images/abtban_05.png'
import Bg from '../../assets/images/overlay_bg.png'

function Banner() {
    return (
        <>
            <section className="abt_banner">
                <div className="right_shape position-absolute">
                    <img src={Ban1} alt="img" />
                </div>
                <div className="section_title text-center">
                    <span className="icon" data-aos="fade-down" data-aos-duration={1500}>
                        <img src={Icon1} alt="img" />
                    </span>
                    <span className="sub_text mb-1" data-aos="fade-down" data-aos-duration={1500} >
                        Our Story{" "}
                    </span>
                    <h2 data-aos="zoom-in" data-aos-duration={1500}>
                        Killer Burgers Available Daily, It’s a piece of heaven in between buns
                    </h2>
                    <p className="lead" data-aos="fade-up" data-aos-duration={1500}>
                        Lorem Ipsum is simply dummy text of the printing and typeset ting industry
                        lorem Ipsum has been the industrys standard my text ever since the when an
                        unknown printer took a galley of type and scrambled it to make.
                    </p>
                </div>
                <div className="abt_img">
                    <div className="img" data-aos="fade-right" data-aos-duration={1500} data-aos-delay={200} >
                        <img src={Ban01} alt="img" />
                    </div>
                    <div className="img" data-aos="fade-right" data-aos-duration={1500} data-aos-delay={100} >
                        <img src={Ban02} alt="img" />
                    </div>
                    <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                        <img src={Ban03} alt="img" />
                    </div>
                    <div className="img" data-aos="fade-left" data-aos-duration={1500} data-aos-delay={100} >
                        <img src={Ban04} alt="img" />
                    </div>
                    <div className="img" data-aos="fade-left" data-aos-duration={1500} data-aos-delay={200} >
                        <img src={Ban05} alt="img" />
                    </div>
                </div>
                <div className="ovelay_bg">
                    <img className="" src={Bg} alt="img" />
                </div>
            </section>

        </>
    )
}

export default Banner