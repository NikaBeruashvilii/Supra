import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Gallerybred from '../Breadcrumb/Gallerybred'
import Gallerysection from '../Mengallery/Gallerysection'
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
                <Gallerybred />
                <Gallerysection />
                <Footer />
            </div>
        </>
    )
}

export default Main