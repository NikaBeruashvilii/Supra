import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Contactbred from '../Breadcrumb/Contactbred'
import Contactblock from '../Mencontact/Contactblock'
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
                <Contactbred />
                <Contactblock />
                <Footer />
            </div>
        </>
    )
}

export default Main