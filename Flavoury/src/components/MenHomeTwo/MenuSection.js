import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Dishimg from '../../assets/images/dish.png'
import Dish07 from '../../assets/images/dish_07.png'
import Dish08 from '../../assets/images/dish_08.png'
import Dish09 from '../../assets/images/dish_09.png'
import Dish04 from '../../assets/images/dish_04.png'
import Dish05 from '../../assets/images/dish_05.png'
import Dish06 from '../../assets/images/dish_06.png'
import Dish01 from '../../assets/images/dish_01.png'
import Dish02 from '../../assets/images/dish_02.png'
import Dish03 from '../../assets/images/dish_03.png'
import Desert1 from '../../assets/images/desert1.png'
import Desert2 from '../../assets/images/desert2.png'
import Desert3 from '../../assets/images/desert3.png'
import Desert4 from '../../assets/images/desert4.png'
import weddingbuffet from '../../assets/images/wedding buffet.jpeg'

function MenuSection() {

    const [tabMenu, tabActive] = useState({ a: true });


    return (
        <>
            <section className="our_menu_section row_inner_am light_texchur">
                <div className="side_shape">
                    <img className="right_side" src={Dishimg} alt="img" />
                </div>
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Our Service Types</span>
                        {/* <h2>The best dishes</h2> */}
                    </div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist" data-aos="fade-up" data-aos-duration={1500} >
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.a && "active"}`}
                                onClick={() => tabActive({ a: true })} id="starters-tab" data-toggle="tab" to="#starters" role="tab" aria-controls="starters" aria-selected="true" >
                                Weddings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.b && "active"}`}
                                onClick={() => tabActive({ b: true })} id="steaks-tab" data-toggle="tab" to="#steaks" role="tab" aria-controls="steaks" aria-selected="false" >
                                Corporate Events
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.c && "active"}`}
                                onClick={() => tabActive({ c: true })} id="special-tab" data-toggle="tab" to="#special" role="tab" aria-controls="special" aria-selected="false" >
                                Social Events
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.d && "active"}`}
                                onClick={() => tabActive({ d: true })} id="deserts-tab" data-toggle="tab" to="#deserts" role="tab" aria-controls="deserts" aria-selected="false" >
                               Other Events
                            </Link>
                        </li>

                      
                    </ul>
                    <div className="tab-content" id="myTabContent" data-aos="fade-up" data-aos-duration={1500} >

                        <div className={`tab-pane fade ${tabMenu.a && "show active"}`} id="starters" role="tabpanel" aria-labelledby="starters-tab" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Wedding Buffet</h3>
                                                    <p>
                                                        Our Wedding Buffet includes everything. Appetizers and complete dinner buffet with two salads and three entrées. This menu is enhanced with a China dinner plate and stainless steel silverware. We provide coffee and even cut and serve your wedding cake.
                                                    </p>
                                                    <span className="price">$18.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3> Wedding Feast</h3>
                                                    <p>
                                                        Our Wedding Buffet includes everything. Appetizers and complete dinner buffet with two salads and three entrées. This menu is enhanced with a China dinner plate and stainless steel silverware. We provide coffee and even cut and serve your wedding cake.
                                                    </p>
                                                    <span className="price">$22.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3> Chef’s Carving Buffet  </h3>
                                                    <p>
If you’re looking to add a unique twist to your next event, our Chef’s Carving Buffet could be the perfect solution. We include China dinner plates and stainless steel silverware with menu add-on’s available to make your menu even more special than before.
                                                    </p>
                                                    <span className="price">$16.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Italian Wedding Feast</h3>
                                                    <p>
                                                   Our Wedding Buffet includes everything. Appetizers and complete dinner buffet with two salads and three entrées. This menu is enhanced with a China dinner plate and stainless steel silverware. We provide coffee and even cut and serve your wedding cake.

                                                    </p>
                                                    <span className="price">$25.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Italian Wedding Feast</h3>
                                                    <p>
                                                        Galjoen fish Australian lungfish sea, Shad angler arapaima
                                                        pencilsmelt. Eggs, poached, with bacon.
                                                    </p>
                                                    <span className="price">$16.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Italian Wedding Feast</h3>
                                                    <p>
                                                        Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                                                        Beef, Eggs, poached, with bacon,{" "}
                                                    </p>
                                                    <span className="price">$22.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link to="#" className="btn btn_primary">
                                        view full menu
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.b && "show active"}`} id="steaks" role="tabpanel" aria-labelledby="steaks-tab" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Gourmet Antipasto Platter*
</h3>
                                                    <p>
                                                        Beef, Eggs, poached, fried, with bacon, chorizo, roasted
                                                        roma tomatoes mushrooms &amp; spinach.
                                                    </p>
                                                    <span className="price">$16.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Mini Caprese Bites
</h3>
                                                    <p>
                                                        Galjoen fish Australian lungfish sea, Shad angler arapaima
                                                        pencilsmelt. Eggs, poached, with bacon.{" "}
                                                    </p>
                                                    <span className="price">$22.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Pepperoni Caprese Bites
</h3>
                                                    <p>
                                                        Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                                                        Beef, Eggs, poached, with bacon,{" "}
                                                    </p>
                                                    <span className="price">$18.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Vegetable Station with Dips
</h3>
                                                    <p>
                                                        Shad angler arapaima pencilsmelt. Eggs, poached, fried,
                                                        with bacon. chorizo, roasted roma tomatoes.
                                                    </p>
                                                    <span className="price">$25.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Beef Wellingtons*
</h3>
                                                    <p>
                                                        Galjoen fish Australian lungfish sea, Shad angler arapaima
                                                        pencilsmelt. Eggs, poached, with bacon.
                                                    </p>
                                                    <span className="price">$16.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Cheese Tortellini Kabobs
</h3>
                                                    <p>
                                                        Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                                                        Beef, Eggs, poached, with bacon,{" "}
                                                    </p>
                                                    <span className="price">$22.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link to="#" className="btn btn_primary">
                                        view full menu
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.c && "show active"}`} id="special" role="tabpanel" aria-labelledby="special-tab" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>CHICKEN CARBONARA SATAY
</h3>
                                                    <p>
                                                        Pancetta Wrapped, Black Pepper Cream


                                                    </p>
                                                    <span className="price">$18.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3> WILD SALMON CAKES
</h3>
                                                    <p>
                                                        Lemon Dill Aioli


                                                    </p>
                                                    <span className="price">$22.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>CLASSIC SALAD
</h3>
                                                    <p>
                                                        Mixed Greens, Carrot, Tomato, Cucumber, White Balsamic Dressing


                                                    </p>
                                                    <span className="price">$16.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>SWEET YEAST ROLLS
</h3>
                                                    <p>
                                                        Salted Honey Butter


                                                    </p>
                                                    <span className="price">$25.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>SMOKED BISON TRI TIP
</h3>
                                                    <p>
                                                        Chimichurri, Pickled Shallot


                                                    </p>
                                                    <span className="price">$16.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>PAN SEARED SALMON
</h3>
                                                    <p>
                                                        Charred Lemon Glaze


                                                    </p>
                                                    <span className="price">$22.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link to="#" className="btn btn_primary">
                                        view full menu
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.d && "show active"}`} id="deserts" role="tabpanel" aria-labelledby="deserts-tab" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Beef steak grill pan</h3>
                                                    <p>
                                                        Beef, Eggs, poached, fried, with bacon, chorizo, roasted
                                                        roma tomatoes mushrooms &amp; spinach.
                                                    </p>
                                                    <span className="price">$16.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>raw marbled meat steak</h3>
                                                    <p>
                                                        Galjoen fish Australian lungfish sea, Shad angler arapaima
                                                        pencilsmelt. Eggs, poached, with bacon.{" "}
                                                    </p>
                                                    <span className="price">$22.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Beef steak grill pan</h3>
                                                    <p>
                                                        Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                                                        Beef, Eggs, poached, with bacon,{" "}
                                                    </p>
                                                    <span className="price">$18.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>raw marbled meat steak</h3>
                                                    <p>
                                                        Shad angler arapaima pencilsmelt. Eggs, poached, fried,
                                                        with bacon. chorizo, roasted roma tomatoes.
                                                    </p>
                                                    <span className="price">$25.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Beef steak grill pan</h3>
                                                    <p>
                                                        Galjoen fish Australian lungfish sea, Shad angler arapaima
                                                        pencilsmelt. Eggs, poached, with bacon.
                                                    </p>
                                                    <span className="price">$16.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={weddingbuffet} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>raw marbled meat steak</h3>
                                                    <p>
                                                        Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                                                        Beef, Eggs, poached, with bacon,{" "}
                                                    </p>
                                                    <span className="price">$22.00</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link to="#" className="btn btn_primary">
                                       Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuSection