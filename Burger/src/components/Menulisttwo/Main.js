import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Menulist2bred from '../Breadcrumb/Menulist2bred'
import Offermenu from '../Menmenulisttwo/Offermenu'
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
                <Menulist2bred />
                <Offermenu />
                <Footer />
            </div>
        </>
    )
}

export default Main