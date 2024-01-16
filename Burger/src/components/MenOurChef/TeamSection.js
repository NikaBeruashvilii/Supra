import React from 'react'
import Slider from 'react-slick'
import Chef1 from '../../assets/images/chef_01.png'
import Chef2 from '../../assets/images/chef_02.png'
import Chef3 from '../../assets/images/chef_03.png'

const Team={
responsive: [
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 1000,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }
]
}

function TeamSection() {
    return (
        <>
            <section className="row_inner_am our_team_section" id="team_section">
                <div className="container">
                    <div className="team_slider_wraper" data-aos="fade-in" data-aos-duration={1500} >
                        <Slider className="" id="team_slider" {...Team} slidesToShow={3} autoplay={true} arrows={false} autoplaySpeed={5000}>
                            <div className="item">
                                <div className="team_card">
                                    <div className="img">
                                        <img src={Chef1} alt="img" />
                                    </div>
                                    <div className="info">
                                        <h3>Jammie Waters</h3>
                                        <span className="position">Master Chef</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="team_card">
                                    <div className="img">
                                        <img src={Chef2} alt="img" />
                                    </div>
                                    <div className="info">
                                        <h3>Amelia Ava</h3>
                                        <span className="position">Master Chef</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="team_card">
                                    <div className="img">
                                        <img src={Chef3} alt="img" />
                                    </div>
                                    <div className="info">
                                        <h3>John Due</h3>
                                        <span className="position">Master Chef</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="team_card">
                                    <div className="img">
                                        <img src={Chef1} alt="img" />
                                    </div>
                                    <div className="info">
                                        <h3>Jammie Waters</h3>
                                        <span className="position">Master Chef</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="team_card">
                                    <div className="img">
                                        <img src={Chef2} alt="img" />
                                    </div>
                                    <div className="info">
                                        <h3>Amelia Ava</h3>
                                        <span className="position">Master Chef</span>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeamSection