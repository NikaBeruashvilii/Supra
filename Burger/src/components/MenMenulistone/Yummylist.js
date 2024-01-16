import React from 'react'
import { Link } from 'react-router-dom'
import Menu3 from '../../assets/images/menulist_03.png'
import Ds1 from '../../assets/images/ds1.png'
import Ds2 from '../../assets/images/ds2.png'
import Ds3 from '../../assets/images/ds3.png'
import Ds4 from '../../assets/images/ds4.png'

function Yummylist() {
    return (
        <>
            <section className="row_am dishList_block">
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Yummy &amp; Wow</span>
                        <h2>APPETIZERS &amp; SIDES</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-6" data-aos="fade-up" data-aos-duration={1500} >
                            <div className="dish_img dish_left">
                                <img className="img-fluid" src={Menu3} alt="img" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6" data-aos="fade-up" data-aos-duration={1500} >
                            <div className="dish_list">
                                <ul>
                                    <li>
                                        <div className="img">
                                            <img src={Ds1} alt="img" />
                                        </div>
                                        <div className="info">
                                            <div className="mainCource">
                                                <div className="dishName">
                                                    <h4>Beef steak grill pan</h4>
                                                    <span className="new">NEW</span>
                                                </div>
                                                <div className="doted" />
                                                <span className="price">$16.00</span>
                                            </div>
                                            <div className="description">
                                                <p>
                                                    Beef, Eggs, poached, fried, with bacon, chorizo, roasted
                                                    roma tomatoes.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img">
                                            <img src={Ds2} alt="img" />
                                        </div>
                                        <div className="info">
                                            <div className="mainCource">
                                                <div className="dishName">
                                                    <h4>raw marbled meat steak</h4>
                                                </div>
                                                <div className="doted" />
                                                <span className="price">$25.00</span>
                                            </div>
                                            <div className="description">
                                                <p>
                                                    Siced beef in a large bowl. Whisk together lemon juice, soy
                                                    sauce.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img">
                                            <img src={Ds3} alt="img" />
                                        </div>
                                        <div className="info">
                                            <div className="mainCource">
                                                <div className="dishName">
                                                    <h4>Medium beef steak grill pan</h4>
                                                </div>
                                                <div className="doted" />
                                                <span className="price">$22.00</span>
                                            </div>
                                            <div className="description">
                                                <p>
                                                    Galjoen fish Australian lungfish sea, Shad angler arapaima
                                                    pencilsmelt.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img">
                                            <img src={Ds4} alt="img" />
                                        </div>
                                        <div className="info">
                                            <div className="mainCource">
                                                <div className="dishName">
                                                    <h4>Beef steak grill pan</h4>
                                                </div>
                                                <div className="doted" />
                                                <span className="price">$18.00</span>
                                            </div>
                                            <div className="description">
                                                <p>
                                                    Beef, Eggs, poached, fried, with bacon, chorizo, roasted
                                                    roma tomatoes. , mushrooms &amp; spinach
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <Link to="/reserv1" className="btn btn_primary">
                                    Order Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Yummylist