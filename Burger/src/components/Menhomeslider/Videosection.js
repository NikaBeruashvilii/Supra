import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Banner1 from '../../assets/images/banner_undershape.png'
import Banner2 from '../../assets/images/burger_souce.png'
import Text from '../../assets/images/video_text.png'
import Playimg from '../../assets/images/play.png'

function Videosection() {

    const [show, setshow] = useState(false)

    return (
        <>
            <div className="home_video_section row_inner_am">
                <div className="side_shape">
                    <img className="right_shape" src={Banner1} alt="img" />
                    <img className="left_shape" src={Banner2} alt="img" />
                </div>
                <div className="container-fluid">
                    <div className="video_wraper" data-aos="fade-in" data-aos-duration={1500}>
                        <div className="play_vtn d-flex justify-content-center align-items-center">
                            <div className="round_anim">
                                <img src={Text} alt="img" />
                            </div>
                            <div className="action_btn" onClick={() => setshow(true)} >
                                <Link to="#" className="popup-youtube play-button"
                                    data-url="https://www.youtube.com/embed/NC9KlaxtfLg?autoplay=1&mute=1"
                                    data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU" >
                                    <img src={Playimg} alt="img" />
                                </Link>
                            </div>
                        </div>
                        <ul className="bottom_text" data-aos="fade-down" data-aos-duration={1500}>
                            <li>
                                <span className="icon">
                                    <i className="icofont-location-pin" />
                                </span>
                                <div className="text">
                                    <h3>Locate Us</h3>
                                    <p>Delicious City, London 9578, UK</p>
                                </div>
                            </li>
                            <li>
                                <span className="icon">
                                    <i className="icofont-wall-clock" />
                                </span>
                                <div className="text">
                                    <h3>Open Hours</h3>
                                    <p>Mon To Fri 9:00 AM - 9:00 PM</p>
                                </div>
                            </li>
                            <li>
                                <span className="icon">
                                    <i className="icofont-calendar" />
                                </span>
                                <div className="text">
                                    <h3>Reservation</h3>
                                    <p>
                                        <Link to="mail:reservation@gmail.com">reservation@gmail.com</Link>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {show &&
                <div className="modal fade youtube-video show" id="myModal" tabIndex={-1} style={{ display: "block", paddingRight: 17 }} aria-modal="true" role="dialog" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" onClick={() => setshow(false)}>
                            <button id="close-video" type="button" className="button btn btn-default text-right" data-dismiss="modal" onClick={() => setshow(true)}>
                                <i className="icofont-close-line-circled" />
                            </button>
                            <div className="modal-body">
                                <div id="video-container" className="video-container">
                                    <iframe id="youtubevideo" width={640}
                                        height={360} allowFullScreen=""
                                        src="https://www.youtube.com/embed/NC9KlaxtfLg?autoplay=1&mute=1" />
                                </div>
                            </div>
                            <div className="modal-footer"></div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Videosection