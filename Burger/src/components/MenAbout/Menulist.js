import React from 'react'
import Slider from 'react-slick'

const Menu = {
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 11,
            autoplaySpeed: 2000,
            easing: "linear"
    
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
}

function Menulist() {
    return (
        <>
            <div className="menu_list_section rotet_down">
                <Slider className="Slick-Menu" id="menu_list_flow" {...Menu} arrows={false} slidesToShow={10} autoplay={true} infinite={true} speed={1000} easing='linear' autoplaySpeed={0} style={{ "width": 5697 }}>
                    <div className="item">
                        <div className="text_block">
                            <span>Door Delivery</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Fine Dining</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Outdoor Catering</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Banquets Hall </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Fine Dining</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Door Delivery</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Fine Dining</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Outdoor Catering</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Banquets Hall </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Fine Dining</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Fine Dining</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Outdoor Catering</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                </Slider>
            </div>

        </>
    )
}

export default Menulist