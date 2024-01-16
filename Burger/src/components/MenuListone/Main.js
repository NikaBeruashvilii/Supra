import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Menulist1bred from '../Breadcrumb/Menulist1bred'
import Dishlist from '../MenMenulistone/Dishlist'
import Saladlist from '../MenMenulistone/Saladlist'
import Yummylist from '../MenMenulistone/Yummylist'
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
                <Menulist1bred />
                <Dishlist />
                <Saladlist />
                <Yummylist />
                <Footer />
            </div>
        </>
    )
}

export default Main