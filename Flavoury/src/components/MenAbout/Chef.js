import React from "react";
import { Link } from "react-router-dom";
import chefimg from '../../assets/images/abt_sideKnife.png'
import chefimg01 from '../../assets/images/master_chef.png'
import Img01 from '../../assets/images/chef_cap.png'
import Img02 from '../../assets/images/chef_text.png'
import partners from '../../assets/images/partners.jpeg'

function Chef() {
  return (
    <>
      <section className="chef_section row_am bg_white_textcher">
        <div className="side_shape position-absolute">
          {/* <img src={chefimg} alt="img" /> */}
        </div>
        <div className="container">
          <div className="row my-2 my-sm-4">
            <div className="col-md-6" data-aos="fade-up" data-aos-duration={1500} >
              <div className="chef_img">
                <img className="radius_img img-fluid" src={partners} alt="img" />
              </div>
              <h3 className="chef_name">
                <span>Our Partner</span> Jammie Waters
              </h3>
            </div>
            <div className="col-md-6">
              <div className="abt_chef" data-aos="fade-up" data-aos-duration={1500} >
                <div className="banner_badge">
                  {/* <img className="img-fluid" src={Img01} alt="img" /> */}
                  <div className="round_anim">
                    {/* <img src={Img02} alt="img" /> */}
                  </div>
                </div>
                <div className="section_title">
                  <span className="sub_text"> Our Partner</span>
                  {/* <h2 className="mb-3">
                    a master chef with 25 <br /> years of experience
                  </h2> */}
                  <p>
                    We carefully choose only the highest quality and most recently sourced partners who expertly make and present your cuisine. They employ both new and classic recipes, and employ the most skilled staff to guarantee that your event will be a memorable and exceptional experience for your visitors.
                  </p>
                </div>
                <Link to="/ourchef" className="btn btn_text">
                  meet our team <i className="icofont-long-arrow-right" />
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
