import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Banner from '../MenAbout/Banner'
import Chef from '../MenAbout/Chef'
import VideoSection from '../MenAbout/VideoSection'
import Ourjourny from '../MenAbout/Ourjourny'
import Textlist from '../MenAbout/Textlist'
import Menulist from '../MenAbout/Menulist'
import Blog from '../Menhomeslider/Blog'
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
                <Banner />
                <Chef />
                <VideoSection />
                <Ourjourny />
                <Textlist />
                <Menulist />
                <Blog />
                <Footer />
            </div>

        </>
    )
}

export default Main