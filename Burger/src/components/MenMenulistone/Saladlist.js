import React from 'react'
import { Link } from 'react-router-dom'
import S1img from '../../assets/images/s1.png'
import S2img from '../../assets/images/s2.png'
import S3img from '../../assets/images/s3.png'
import S4img from '../../assets/images/s4.png'
import Menulist from '../../assets/images/menulist_02.png'

function Saladlist() {
    return (
        <>
            <section className="row_am dishList_block salad">
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Healthy &amp; Tasty</span>
                        <h2>PASTA &amp; SALADS</h2>
                    </div>
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-md-12 col-lg-6" data-aos="fade-up" data-aos-duration={1500} >
                            <div className="dish_list">
                                <ul>
                                    <li>
                                        <div className="img">
                                            <img src={S1img} alt="img" />
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
                                            <img src={S2img} alt="img" />
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
                                            <img src={S3img} alt="img" />
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
                                            <img src={S4img} alt="img" />
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
                        <div className="col-md-12 col-lg-6" data-aos="fade-up" data-aos-duration={1500} >
                            <div className="dish_img dish_right">
                                <img className="img-fluid" src={Menulist} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Saladlist