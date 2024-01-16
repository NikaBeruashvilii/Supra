import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Reservbred from '../Breadcrumb/Reservbred'
import Onlinebooking from '../MenReserv/Onlinebooking'
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
                <Reservbred />
                <Onlinebooking />
                <Footer />
            </div>
        </>
    )
}

export default Main