import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../../assets/images/side_burger.png';
import Chefimg from '../../assets/images/master_chef.png';
import Chefcap from '../../assets/images/chef_cap.png';
import Text from '../../assets/images/chef_text_black.png';

const chefData = {
    chefName: 'Jammie Waters',
    chefTitle: 'Master Chef',
    chefExperience: '25 years of experience',
    chefDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
};

function Chef() {
    return (
        <>
            <section className="chef_section chef_page row_am">
                <div className="right_shape chef_shape position-absolute">
                    <img src={Img} alt="img" />
                </div>
                <div className="container">
                    <div className="row my-2 my-sm-4">
                        <div className="col-md-6" data-aos="fade-up" data-aos-duration={1500}>
                            <div className="chef_img">
                                <img className="radius_img img-fluid" src={Chefimg} alt="img" />
                            </div>
                            <h3 className="chef_name">
                                <span>{chefData.chefTitle}</span> {chefData.chefName}
                            </h3>
                        </div>
                        <div className="col-md-6">
                            <div className="abt_chef" data-aos="fade-up" data-aos-duration={1500}>
                                <div className="banner_badge">
                                    <img className="img-fluid" src={Chefcap} alt="img" />
                                    <div className="round_anim">
                                        <img src={Text} alt="img" />
                                    </div>
                                </div>
                                <div className="section_title">
                                    <span className="sub_text">Our chef</span>
                                    <h2 className="mb-3">{`A ${chefData.chefTitle.toLowerCase()} with ${chefData.chefExperience}`}</h2>
                                    <p>{chefData.chefDescription}</p>
                                </div>
                                <Link to="#team_section" className="btn btn_text">
                                    meet our team <i className="icofont-long-arrow-down" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Chef;
