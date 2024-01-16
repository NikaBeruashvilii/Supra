import React from 'react'
import Slider from 'react-slick';

const TestList = {
    loop: true,
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
    ]
}

function Menulist() {
    return (
        <>
            <div className="menu_list_section">
                <Slider className="Slider-List" id="menu_list_flow" {...TestList} slidesToShow={10} autoplay={true} speed={1000} arrows={false} autoplaySpeed={0} easing='linear'>
                    <div className="item" style={{ width: "auto" }}>
                        <div className="text_block">
                            <span>Cheesy Burger </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item" style={{ width: "auto" }}>
                        <div className="text_block">
                            <span>Jumbo Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item" style={{ width: "auto" }}>
                        <div className="text_block">
                            <span>Spicy Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item" style={{ width: "auto" }}>
                        <div className="text_block">
                            <span> Chiken Burger </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item" style={{ width: "auto" }}>
                        <div className="text_block">
                            <span> Special Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item" style={{ width: "auto" }}>
                        <div className="text_block">
                            <span>Cheesy Burger </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item" style={{ width: "auto" }}>
                        <div className="text_block">
                            <span>Jumbo Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item" style={{ width: "auto" }}>
                        <div className="text_block">
                            <span>Spicy Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item" style={{ width: "auto" }}>
                        <div className="text_block">
                            <span> Chiken Burger </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item" style={{ width: "auto" }}>
                        <div className="text_block">
                            <span> Special Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item" style={{ width: "auto" }}>
                        <div className="text_block">
                            <span> Special Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item" style={{ width: "auto" }}>
                        <div className="text_block">
                            <span>Cheesy Burger </span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                    <div className="item" style={{ width: "auto" }}>
                        <div className="text_block">
                            <span>Jumbo Burger</span>
                            <span className="mark_star">*</span>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Menulist