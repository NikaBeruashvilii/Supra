import React from 'react'
import Slider from 'react-slick'

const Text = {
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

function Textlist() {
    return (
        <>
            <div className="textFlow_list white_cover">
                <Slider className="Slick-Menu" id="text_list_flow" {...Text} arrows={false} rtl={true} slidesToShow={10} autoplay={true} speed={1000} easing='linear' autoplaySpeed={0} style={{ "width": 5697 }}>
                    <div className="item">
                        <div className="text_block">
                            <span>Cheese Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Yummy Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Chicken Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Jumbo Burger </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Special Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Cheese Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Yummy Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Chicken Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Jumbo Burger </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Special Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span>Chicken Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="text_block">
                            <span> Jumbo Burger </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Textlist