import React from 'react'
import { Link } from 'react-router-dom'
import Menu1 from '../../assets/images/menulist_01.png'
import Menu2 from '../../assets/images/menulistSub_01.png'
import Menu3 from '../../assets/images/menulistSub_02.png'
import Menu4 from '../../assets/images/menulistSub_03.png'
import Menu5 from '../../assets/images/menulistSub_04.png'

function Dishlist() {
    return (
        <>
            <section className="row_am dishList_block">
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Cheese, Jumbo &amp; More...</span>
                        <h2>Burger Menu</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-6" data-aos="fade-up" data-aos-duration={1500} >
                            <div className="dish_img dish_left text-center">
                                <img className="img-fluid" src={Menu1} alt="img" />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6" data-aos="fade-up" data-aos-duration={1500} >
                            <div className="dish_list">
                                <ul>
                                    <li>
                                        <div className="img">
                                            <img src={Menu2} alt="img" />
                                        </div>
                                        <div className="info">
                                            <div className="mainCource">
                                                <div className="dishName">
                                                    <h4>Cheesy Chicken Burger</h4>
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
                                            <img src={Menu3} alt="img" />
                                        </div>
                                        <div className="info">
                                            <div className="mainCource">
                                                <div className="dishName">
                                                    <h4>Maxi Burger</h4>
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
                                            <img src={Menu4} alt="img" />
                                        </div>
                                        <div className="info">
                                            <div className="mainCource">
                                                <div className="dishName">
                                                    <h4>Double Burger</h4>
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
                                            <img src={Menu5} alt="img" />
                                        </div>
                                        <div className="info">
                                            <div className="mainCource">
                                                <div className="dishName">
                                                    <h4>Triple Layer Burger</h4>
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
                                    <li>
                                        <div className="img">
                                            <img src={Menu2} alt="img" />
                                        </div>
                                        <div className="info">
                                            <div className="mainCource">
                                                <div className="dishName">
                                                    <h4>Jumbo Burger</h4>
                                                </div>
                                                <div className="doted" />
                                                <span className="price">$10.00</span>
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
                                            <img src={Menu2} alt="img" />
                                        </div>
                                        <div className="info">
                                            <div className="mainCource">
                                                <div className="dishName">
                                                    <h4>Jumbo Burger</h4>
                                                </div>
                                                <div className="doted" />
                                                <span className="price">$10.00</span>
                                            </div>
                                            <div className="description">
                                                <p>
                                                    Beef, Eggs, poached, fried, with bacon, chorizo, roasted
                                                    roma tomatoes.
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

export default Dishlist