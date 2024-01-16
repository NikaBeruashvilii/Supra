import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Offermenu() {

    const [tabMenu, tabActive] = useState({ a: true });

    return (
        <>
            <section className="row_am offer_menu_section">
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration="1500">
                        <span className="sub_text">Cheese, Yummy Yummmy...</span>
                        <h2>Burger Menu</h2>
                    </div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist" data-aos="fade-up" data-aos-duration="1500">
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.a && "active"}`} onClick={() => tabActive({ a: true })}
                            id="lunch-tab" data-toggle="tab" to="#lunch" role="tab" aria-controls="lunch" aria-selected="true">Lunch</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.b && "active"}`} onClick={() => tabActive({ b: true })}
                             id="dinner-tab" data-toggle="tab" to="#profile" role="tab" aria-controls="profile" aria-selected="false">Dinner</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.c && "active"}`} onClick={() => tabActive({ c: true })} 
                            id="breakfast-tab" data-toggle="tab" to="#breakfast" role="tab" aria-controls="breakfast" aria-selected="false">Breakfast</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${tabMenu.d && "active"}`} onClick={() => tabActive({ d: true })} 
                            id="winelist-tab" data-toggle="tab" to="#winelist" role="tab" aria-controls="winelist" aria-selected="false">Winelist</Link>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent" data-aos="fade-up" data-aos-duration="1500">
                        <div className={`tab-pane fade ${tabMenu.a && "show active"}`} id="lunch" role="tabpanel" aria-labelledby="lunch-tab">
                            <div className="menulist_wraper">
                                <div className="menulist left_side">
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">Starter</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Beef Eggs poached fried</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p> chorizo, roasted roma tomatoes with Beef Eggs poached fried.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Prickly Pear Tonic</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Soy sauce, sugar, salt, and pepper in
                                                        a small bowl Siced beef in a large bowl. Whisk together lemon juice,.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Crispy Skin Chicken</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima Medium beef steak grill pan</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">wine list</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Kagoshima Wagyu</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Lobster Tortellini</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Siced beef in a large bowl. Whisk together lemon juice, soy sauce, sugar, salt, and pepper in
                                                        a small bowl.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Tokusen Wagyu</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menulist right_side">
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">Main Dishes</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Grill pan Medium beef steak grill pan</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>together lemon juice, soy sauce, sugar, together lemon juice, soy sauce, sugar, </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Meat steak raw marbled </h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Together lemon juice, soy sauce, sugar, salt, and pepperin a small bowl.
                                                        pour over beef and toss to coat Siced beef in a large bowl. Whisk together lemon juice.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Medium beef steak grill pan</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Beef steak grill pan</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$18.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes, mushrooms & spinach.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">Dessert</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Kagoshima Wagyu</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Banana Nut Pancakes</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Siced beef in a large bowl. Whisk together lemon juice, soy sauce, sugar, salt, and pepper in
                                                        a small bowl.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Tokusen Wagyu</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pdf_btn text-center mt-5">
                                <Link to="#" className="btn btn_primary">download menu pdf</Link>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.b && "show active"}`} id="profile" role="tabpanel" aria-labelledby="dinner-tab">
                            <div className="menulist_wraper">
                                <div className="menulist left_side">
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">Starter</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Beef steak grill pan</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>raw marbled meat steak</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Siced beef in a large bowl. Whisk together lemon juice, soy sauce, sugar, salt, and pepper in
                                                        a small bowl.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Medium beef steak grill pan</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">wine list</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Kagoshima Wagyu</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Lobster Tortellini</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Siced beef in a large bowl. Whisk together lemon juice, soy sauce, sugar, salt, and pepper in
                                                        a small bowl.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Tokusen Wagyu</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menulist right_side">
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">Main Dishes</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Beef steak grill pan</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>raw marbled meat steak</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Siced beef in a large bowl. Whisk together lemon juice, soy sauce, sugar, salt, and pepper
                                                        together lemon juice, soy sauce, sugar, salt, and pepperin a small bowl.
                                                        pour over beef and toss to coat</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Medium beef steak grill pan</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Beef steak grill pan</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$18.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes, mushrooms & spinach.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">Dessert</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Kagoshima Wagyu</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Banana Nut Pancakes</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Siced beef in a large bowl. Whisk together lemon juice, soy sauce, sugar, salt, and pepper in
                                                        a small bowl.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Tokusen Wagyu</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pdf_btn text-center mt-5">
                                <Link to="#" className="btn btn_primary">download menu pdf</Link>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.c && "show active"}`} id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">
                            <div className="menulist_wraper">
                                <div className="menulist left_side">
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">Starter</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Poached fried Beef Eggs </h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p> Tomatoes with Beef Eggs poached fried chorizo, roasted roma.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Pear Tonic Prickly</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>salt, and pepper in a small bowl Siced beef in a large bowl. Whisk together lemon juice, Soy sauce, sugar,.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Crispy Skin Chicken</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima Medium beef steak grill pan</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">wine list</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Kagoshima Wagyu</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Lobster Tortellini</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Siced beef in a large bowl. Whisk together lemon juice, soy sauce, sugar, salt, and pepper in
                                                        a small bowl.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Tokusen Wagyu</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menulist right_side">
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">Main Dishes</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Medium beef steak grill pan Grill pan </h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>together lemon juice, soy sauce, sugar, together lemon juice, soy sauce, sugar,  </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4> steak rawMeat  marbled </h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Together lemon juice, soy sauce, sugar, salt, and pepperin a small bowl.
                                                        pour over beef and toss to coat Siced beef in a large bowl. Whisk together lemon juice.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Medium beef steak grill pan</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Beef steak grill pan</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$18.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes, mushrooms & spinach.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">Dessert</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Kagoshima Wagyu</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Banana Nut Pancakes</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Siced beef in a large bowl. Whisk together lemon juice, soy sauce, sugar, salt, and pepper in
                                                        a small bowl.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Tokusen Wagyu</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pdf_btn text-center mt-5">
                                <Link to="#" className="btn btn_primary">download menu pdf</Link>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tabMenu.d && "show active"}`} id="winelist" role="tabpanel" aria-labelledby="winelist-tab">
                            <div className="menulist_wraper">
                                <div className="menulist left_side">
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">Starter</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Beef steak grill pan</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>raw marbled meat steak</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Siced beef in a large bowl. Whisk together lemon juice, soy sauce, sugar, salt, and pepper in
                                                        a small bowl.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Medium beef steak grill pan</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">wine list</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Kagoshima Wagyu</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Lobster Tortellini</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Siced beef in a large bowl. Whisk together lemon juice, soy sauce, sugar, salt, and pepper in
                                                        a small bowl.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Tokusen Wagyu</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menulist right_side">
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">Main Dishes</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Beef steak grill pan</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>raw marbled meat steak</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Siced beef in a large bowl. Whisk together lemon juice, soy sauce, sugar, salt, and pepper
                                                        together lemon juice, soy sauce, sugar, salt, and pepperin a small bowl.
                                                        pour over beef and toss to coat</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Medium beef steak grill pan</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Beef steak grill pan</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$18.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes, mushrooms & spinach.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menulist_box">
                                        <h3 className="menusub_text">Dessert</h3>
                                        <ul>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Kagoshima Wagyu</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$16.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Beef, Eggs, poached, fried, with bacon, chorizo, roasted roma tomatoes.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Banana Nut Pancakes</h4>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$25.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Siced beef in a large bowl. Whisk together lemon juice, soy sauce, sugar, salt, and pepper in
                                                        a small bowl.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="mainCource">
                                                    <div className="dishName">
                                                        <h4>Tokusen Wagyu</h4>
                                                        <span className="new">NEW</span>
                                                    </div>
                                                    <div className="doted"></div>
                                                    <span className="price">$22.00</span>
                                                </div>
                                                <div className="description">
                                                    <p>Galjoen fish Australian lungfish sea, Shad angler arapaima</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pdf_btn text-center mt-5">
                                <Link to="#" className="btn btn_primary">download menu pdf</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Offermenu