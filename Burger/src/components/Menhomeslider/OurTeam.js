import React from 'react'
import Slider from 'react-slick';
import Team1 from '../../assets/images/knife_fire.png'
import Team2 from '../../assets/images/chef_01.png'
import Team3 from '../../assets/images/chef_02.png'
import Team4 from '../../assets/images/chef_03.png'
import Team5 from '../../assets/images/chef_01.png'
import Team6 from '../../assets/images/chef_02.png'

const Team = {
    loop: true,
    margin: 30,
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

function OurTeam() {
    return (
        <>
            <section className="row_inner_am our_team_section">
                <div className="side_shape">
                    <img src={Team1} alt="img" />
                </div>
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Our team</span>
                        <h2>meet our chef</h2>
                    </div>
                    <div className="team_slider_wraper" data-aos="fade-in" data-aos-duration={1500} >
                        <Slider className="" id="team_slider" {...Team} slidesToShow={3} arrows={false}>
                            <div className="item">
                                <div className="team_card">
                                    <div className="img">
                                        <img src={Team2} alt="img" />
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
                                        <img src={Team3} alt="img" />
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
                                        <img src={Team4} alt="img" />
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
                                        <img src={Team5} alt="img" />
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
                                        <img src={Team6} alt="img" />
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

export default OurTeam