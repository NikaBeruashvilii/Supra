import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Ourchefbred from '../Breadcrumb/Ourchefbred';
import Chef from '../MenAbout/Chef';
import TeamSection from '../MenOurChef/TeamSection';
import Footer from '../Footer/Main'
import Aos from 'aos';

function Main() {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <div className="page_wrapper">
                <Header />
                <Ourchefbred />
                <Chef />
                <TeamSection />
                <Footer />
            </div>

        </>
    )
}

export default Main