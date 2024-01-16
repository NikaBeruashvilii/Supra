import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Menulist3bred from '../Breadcrumb/Menulist3bred';
import Ourmenu from '../Menhomeslider/Ourmenu';
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
                <Menulist3bred />
                <Ourmenu />
                <Footer />
            </div>
        </>
    )
}

export default Main