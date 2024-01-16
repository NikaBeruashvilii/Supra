import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Menuimg1 from '../../assets/images/dish.png'
import Sl1 from '../../assets/images/sl1.png'
import Sl2 from '../../assets/images/sl2.png'
import Sl3 from '../../assets/images/sl3.png'
import Sl4 from '../../assets/images/sl4.png'
import Sl5 from '../../assets/images/sl5.png'
import Dish06 from '../../assets/images/dish_06.png'
import Dish01 from '../../assets/images/dish_01.png'
import Dish02 from '../../assets/images/dish_02.png'
import Dish03 from '../../assets/images/dish_03.png'
import Dish04 from '../../assets/images/dish_04.png'
import Dish05 from '../../assets/images/dish_05.png'
import Dst1 from '../../assets/images/dst1.png'
import Dst2 from '../../assets/images/dst2.png'
import Dst3 from '../../assets/images/dst3.png'
import Dst4 from '../../assets/images/dst4.png'
import Dst5 from '../../assets/images/dst5.png'
import Dst6 from '../../assets/images/dst6.png'
import Sd1 from '../../assets/images/sd1.png'
import Sd2 from '../../assets/images/sd2.png'
import Sd3 from '../../assets/images/sd3.png'
import Sd4 from '../../assets/images/sd4.png'
import Sd6 from '../../assets/images/sd6.png'

function Ourmenu() {

    const [tabMenu, tabActive] = useState({ a: true });

    return (
        <>
            <section className="our_menu_section row_inner_am">
                <div className="side_shape">
                    <img className="right_side" src={Menuimg1} alt="img" />
                </div>
                <div className="container">
                    <div className="section_title text-center">
                        <span className="sub_text">Our Menu</span>
                        <h2>Best Burger Menu</h2>
                    </div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist" data-aos="fade-up" data-aos-duration={1500} >
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.a && "active"}`} onClick={() => tabActive({ a: true })}
                                id="starters-tab" data-toggle="tab" to="#starters" role="tab" aria-controls="starters" aria-selected="true" >
                                Salads
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.b && "active"}`} onClick={() => tabActive({ b: true })}
                                id="steaks-tab" data-toggle="tab" to="#steaks" role="tab" aria-controls="steaks" aria-selected="false" >
                                Burger
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.c && "active"}`} onClick={() => tabActive({ c: true })}
                                id="special-tab" data-toggle="tab" to="#special" role="tab" aria-controls="special" aria-selected="false" >
                                Sides
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.d && "active"}`} onClick={() => tabActive({ d: true })}
                                id="deserts-tab" data-toggle="tab" to="#deserts" role="tab" aria-controls="deserts" aria-selected="false" >
                                desserts
                            </Link>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent" data-aos="fade-up" data-aos-duration={1500} >
                        <div className={`tab-pane fade ${tabMenu.a && "show active"}`} id="starters" role="tabpanel" aria-labelledby="starters-tab" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Sl1} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Cheesey Chicken</h3>
                                                    <p>
                                                        Chicken, Eggs, poached, fried, with bacon, chorizo,
                                                        roasted roma tomatoes, mushrooms &amp; spinach.
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$16.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Sl2} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Maxi Burger</h3>
                                                    <p>
                                                        Galjoen fish Australian lungfish sea, Shad angler arapaima
                                                        pencilsmelt. Eggs, poached, with bacon.{" "}
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$42.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Sl3} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Double Burger</h3>
                                                    <p>
                                                        Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                                                        Beef, Eggs, poached, with bacon,{" "}
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$18.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Sl4} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>raw marbled meat steak</h3>
                                                    <p>
                                                        Shad angler arapaima pencilsmelt. Eggs, poached, fried,
                                                        with bacon. chorizo, roasted roma tomatoes.
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$22.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Sl5} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Beef steak grill pan</h3>
                                                    <p>
                                                        Galjoen fish Australian lungfish sea, Shad angler arapaima
                                                        pencilsmelt. Eggs, poached, with bacon.
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$16.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish06} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>raw marbled meat steak</h3>
                                                    <p>
                                                        Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                                                        Beef, Eggs, poached, with bacon,{" "}
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$12.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link to="/menulistone" className="btn btn_primary">
                                        view full menu
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.b && "show active"}`} id="steaks" role="tabpanel" aria-labelledby="steaks-tab" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish01} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Cheesey Chicken</h3>
                                                    <p>
                                                        Chicken, Eggs, poached, fried, with bacon, chorizo,
                                                        roasted roma tomatoes, mushrooms &amp; spinach.
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$16.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish02} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Maxi Burger</h3>
                                                    <p>
                                                        Galjoen fish Australian lungfish sea, Shad angler arapaima
                                                        pencilsmelt. Eggs, poached, with bacon.{" "}
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$42.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish03} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Double Burger</h3>
                                                    <p>
                                                        Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                                                        Beef, Eggs, poached, with bacon,{" "}
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$18.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish04} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>raw marbled meat steak</h3>
                                                    <p>
                                                        Shad angler arapaima pencilsmelt. Eggs, poached, fried,
                                                        with bacon. chorizo, roasted roma tomatoes.
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$22.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish05} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Beef steak grill pan</h3>
                                                    <p>
                                                        Galjoen fish Australian lungfish sea, Shad angler arapaima
                                                        pencilsmelt. Eggs, poached, with bacon.
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$16.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dish06} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>raw marbled meat steak</h3>
                                                    <p>
                                                        Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                                                        Beef, Eggs, poached, with bacon,{" "}
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$12.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link to="/menulisttwo" className="btn btn_primary">
                                        view full menu
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.c && "show active"}`} id="special" role="tabpanel" aria-labelledby="special-tab" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dst1} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Cheesey Chicken</h3>
                                                    <p>
                                                        Chicken, Eggs, poached, fried, with bacon, chorizo,
                                                        roasted roma tomatoes, mushrooms &amp; spinach.
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$16.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Sd1} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Maxi Burger</h3>
                                                    <p>
                                                        Galjoen fish Australian lungfish sea, Shad angler arapaima
                                                        pencilsmelt. Eggs, poached, with bacon.{" "}
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$42.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Sd2} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Double Burger</h3>
                                                    <p>
                                                        Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                                                        Beef, Eggs, poached, with bacon,{" "}
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$18.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Sd3} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>raw marbled meat steak</h3>
                                                    <p>
                                                        Shad angler arapaima pencilsmelt. Eggs, poached, fried,
                                                        with bacon. chorizo, roasted roma tomatoes.
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$22.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Sd4} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Beef steak grill pan</h3>
                                                    <p>
                                                        Galjoen fish Australian lungfish sea, Shad angler arapaima
                                                        pencilsmelt. Eggs, poached, with bacon.
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$16.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Sd6} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>raw marbled meat steak</h3>
                                                    <p>
                                                        Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                                                        Beef, Eggs, poached, with bacon,{" "}
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$12.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link to="/menulistthree" className="btn btn_primary">
                                        view full menu
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.d && "show active"}`} id="deserts" role="tabpanel" aria-labelledby="deserts-tab" >
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dst1} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Cheesey Chicken</h3>
                                                    <p>
                                                        Chicken, Eggs, poached, fried, with bacon, chorizo,
                                                        roasted roma tomatoes, mushrooms &amp; spinach.
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$16.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <span className="new">NEW</span>
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dst2} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Maxi Burger</h3>
                                                    <p>
                                                        Galjoen fish Australian lungfish sea, Shad angler arapaima
                                                        pencilsmelt. Eggs, poached, with bacon.{" "}
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$42.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dst3} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Double Burger</h3>
                                                    <p>
                                                        Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                                                        Beef, Eggs, poached, with bacon,{" "}
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$18.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dst4} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>raw marbled meat steak</h3>
                                                    <p>
                                                        Shad angler arapaima pencilsmelt. Eggs, poached, fried,
                                                        with bacon. chorizo, roasted roma tomatoes.
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$22.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dst5} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>Beef steak grill pan</h3>
                                                    <p>
                                                        Galjoen fish Australian lungfish sea, Shad angler arapaima
                                                        pencilsmelt. Eggs, poached, with bacon.
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$16.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12">
                                        <div className="dish_box">
                                            <div className="dish_info">
                                                <div className="dish_img">
                                                    <img src={Dst6} alt="img" />
                                                </div>
                                                <div className="dish_text">
                                                    <h3>raw marbled meat steak</h3>
                                                    <p>
                                                        Bacon, chorizo, roasted roma tomatoes Beef, Eggs, poached
                                                        Beef, Eggs, poached, with bacon,{" "}
                                                    </p>
                                                    <div className="price_cart">
                                                        <span className="price">$12.00</span>
                                                        <Link to="#">
                                                            {" "}
                                                            <span className="cart_btn">
                                                                {" "}
                                                                <i className="icofont-shopping-cart" />{" "}
                                                            </span>{" "}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <Link to="/menulistthree" className="btn btn_primary">
                                        view full menu
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

export default Ourmenu