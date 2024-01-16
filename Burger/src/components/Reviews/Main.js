import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Reviewsbred from '../Breadcrumb/Reviewsbred'
import CoustmerReview from '../MenReviews/CoustmerReview'
import Footer from '../Footer/Main'
import Aos from 'aos'

function Main() {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <div className="page_wrapper">
                <Header />
                <Reviewsbred />
                <CoustmerReview />
                <Footer />
            </div>

        </>
    )
}

export default Main