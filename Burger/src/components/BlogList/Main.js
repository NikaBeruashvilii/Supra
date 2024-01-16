import React, { useEffect } from 'react'
import Header from '../Header/Main'
import BlogListbred from '../Breadcrumb/BlogListbred'
import Blogsection from '../MenBloglist/Blogsection'
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
                <BlogListbred />
                <Blogsection />
                <Footer />
            </div>

        </>
    )
}

export default Main