import React from 'react';
import Review1 from '../../assets/images/review_01.png'
import Review3 from '../../assets/images/review_03.png'
import Review4 from '../../assets/images/review_04.png'
import Review5 from '../../assets/images/review_05.png'
import Review6 from '../../assets/images/review_06.png'
import Review7 from '../../assets/images/review_07.png'
import Review8 from '../../assets/images/review_08.png'
import Review9 from '../../assets/images/review_09.png'

const reviews = [
    {
        imgSrc: Review1,
        author: 'Marry Christina',
        stars: 5,
        text: 'It’s a great experience. The ambiance is really very welcoming and charming. Amazing food, wines, and services.',
    },
    {
        imgSrc: Review3,
        author: 'Willium Joe',
        stars: 5,
        text: 'Amazing ambience, great food, very courteous staff. Overall very good experience. Best place to have real steak food.',
    },
    {
        imgSrc: Review4,
        author: 'Marry Christina',
        stars: 5,
        text: 'The ambiance is really very welcoming and charming. Amazing food, wines, and services. Went to kuro for Sunday lunch. Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry standard dummy text ever since the when an unknown printer took.',
    },
    {
        imgSrc: Review5,
        author: 'Willium Joe',
        stars: 5,
        text: 'It’s a great experience. The ambiance is really very welcoming and charming. Amazing food, wines, and services.',
    },
    {
        imgSrc: Review6,
        author: 'Marry Christina',
        stars: 5,
        text: 'It’s a great experience. The ambiance is really very welcoming and charming. Amazing food, wines, and services.',
    },
    {
        imgSrc: Review7,
        author: 'Willium Joe',
        stars: 5,
        text: 'Amazing ambience, great food, very courteous staff. Overall very good experience. Best place to have real steak food.',
    },
    {
        imgSrc: Review8,
        author: 'Marry Christina',
        stars: 5,
        text: 'It’s a great experience. The ambiance is really very welcoming and charming. Amazing food, wines, and services.',
    },
    {
        imgSrc: Review9,
        author: 'Willium Joe',
        stars: 5,
        text: 'Amazing ambience, great food, very courteous staff. Overall very good experience. Best place to have real steak food.',
    },
];

function CoustmerReview() {
    return (
        <section className="row_am coustomer_review_section">
            <div className="container">
                <div className="coustomer_inner">
                    {reviews.map((review, index) => (
                        <div className="review_box with_text" data-aos="fade-up" data-aos-duration={1500} key={index}>
                            <span className="quotes left_quote">
                                <i className="icofont-quote-left" />
                            </span>
                            <div className="user_img">
                                <img src={review.imgSrc} alt="img" />
                            </div>
                            <div className="review">
                                <div className="star">
                                    {Array(5).fill().map((_, starIndex) => (
                                        <span key={starIndex}>
                                            <i className="icofont-star" />
                                        </span>
                                    ))}
                                </div>
                                <p>{review.text}</p>
                                <h3 className="name">- {review.author}</h3>
                            </div>
                            <span className="quotes right_quote">
                                <i className="icofont-quote-right" />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CoustmerReview;
