import React, { useEffect } from 'react'
import Header from '../Header/Main'
import BlogDetailsbred from '../Breadcrumb/BlogDetailsbred'
import Detailsblock from '../Menblogdetails/Detailsblock'
import Comment from '../Menblogdetails/Comment'
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
                <BlogDetailsbred />
                <Detailsblock />
                <Comment />
                <Footer />
            </div>

        </>
    )
}

export default Main