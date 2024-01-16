import React, {useState, useEffect} from 'react'
import Side from '../../assets/images/side_burger.png'
import smilly from '../../assets/images/smilly.png'
import Chef from '../../assets/images/chef_icon.png'
import Dish from '../../assets/images/dish_fav.png'
import rate from '../../assets/images/rate.png'

function Countersection() {

    const initialCounts = {
        customers: 0,
        chefs: 0,
        dishes: 0,
    };
    const finalCounts = {
        customers: 8900,
        chefs: 25,
        dishes: 125,
    };

    const [counts, setCounts] = useState(initialCounts);

    useEffect(() => {
        const updateCounter = () => {
            const interval = 1;
            const timers = Object.keys(finalCounts).map((key) => {
                const startCount = counts[key];
                const endCount = finalCounts[key];
                const step = Math.ceil((endCount - startCount) / (1000 / interval));

                return setInterval(() => {
                    setCounts((prevCounts) => ({
                        ...prevCounts,
                        [key]: Math.min(prevCounts[key] + step, endCount),
                    }));
                }, interval);
            });
            return () => {
                timers.forEach((timer) => clearInterval(timer));
            };
        };
        updateCounter();
    }, []);

    return (
        <>
            <div className="count_section row_inner_am bg_yellow_textcher">
                <div className="side_shape">
                    <img className="right_shape" src={Side} alt="img" />
                </div>
                <div className="container">
                    <ul className="count_block" id="counter">
                        <li data-aos="fade-up" data-aos-duration={1000}>
                            <div className="icon">
                                <img src={smilly} alt="img" />
                            </div>
                            <p className="count_text">
                                <span className="counter-value" data-count={8900}>
                                    {counts.customers}
                                </span>
                                <span>+</span>
                            </p>
                            <p>happy customers</p>
                        </li>
                        <li data-aos="fade-up" data-aos-duration={1500}>
                            <div className="icon">
                                <img src={Chef} alt="img" />
                            </div>
                            <p className="count_text">
                                <span className="counter-value" data-count={25}>
                                {counts.chefs}
                                </span>
                                <span>+</span>
                            </p>
                            <p>Passonate Chefs</p>
                        </li>
                        <li data-aos="fade-up" data-aos-duration={2000}>
                            <div className="icon">
                                <img src={Dish} alt="img" />
                            </div>
                            <p className="count_text">
                                <span className="counter-value" data-count={125}>
                                {counts.dishes}
                                </span>
                                <span>+</span>
                            </p>
                            <p>Favourite Dishes</p>
                        </li>
                        <li data-aos="fade-up" data-aos-duration={2500}>
                            <div className="icon">
                                <img src={rate} alt="img" />
                            </div>
                            <p className="count_text">
                                <span>4.9</span>
                            </p>
                            <p>Customer Rating</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Countersection