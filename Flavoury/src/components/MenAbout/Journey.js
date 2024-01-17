import React from 'react'
import Dish01 from '../../assets/images/dish.png'
import Icon01 from '../../assets/images/outj_icon1.png'
import Icon02 from '../../assets/images/outj_icon2.png'
import Icon03 from '../../assets/images/outj_icon3.png'

function Journey() {
  return (
    <>
      <section className="row_am our_journey bg_white_textcher">
        <div className="side_shape position-absolute" data-aos="fade-in" data-aos-duration={1500} >
          {/* <img src={Dish01} alt="img" /> */}
        </div>
        <div className="container">
          <div className="row_am">
            <div className="section_title" data-aos="fade-up" data-aos-duration={1500} >
              <span className="sub_text">Why we best</span>
              <h2>
                our Journey started from 2024 <br />
              </h2>
            </div>
            <div className="row">
              {/* <div className="col-md-4">
                <div className="joueney_box" data-aos="fade-up" data-aos-duration={1500} >
                  <div className="icon">
                    <img src={Icon01} alt="img" />
                  </div>
                  <h3>Prime location</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typeset ting
                    industry lorem Ipsum has been the industrys standard my text ever
                    sincestandard.
                  </p>
                </div>
              </div> */}
              <div className="col-md-4">
                <div className="joueney_box" data-aos="fade-up" data-aos-duration={1500} >
                  <div className="icon">
                    <img src={Icon02} alt="img" />
                  </div>
                  <h3>Fastest delivery</h3>
                  <p>
                    Delivery speed refers to how fast you transport and drop off goods or provide services to users at their home or place of work. It’s a big part of the overall consumer experience and depends on structures, people, processes, and technology as part of your logistics and supply chain networks.


                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="joueney_box" data-aos="fade-up" data-aos-duration={1500} >
                  <div className="icon">
                    <img src={Icon03} alt="img" />
                  </div>
                  <h3>premium services</h3>
                  <p>
                    With our Premium Delivery Service, we bring your brand experience into your customers' homes. We treat your premium home and living products with special care and expertise - from delivery to assembly and positioning at the point of use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Journey