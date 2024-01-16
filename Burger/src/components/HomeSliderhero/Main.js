import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Banner from '../Menhomeslider/Banner'
import Ourmenu from '../Menhomeslider/Ourmenu'
import Menulist from '../Menhomeslider/Menulist'
import Discount from '../Menhomeslider/Discount'
import Rowbanner from '../Menhomeslider/Rowbanner'
import Whowe from '../Menhomeslider/Whowe'
import Videosection from '../Menhomeslider/Videosection'
import Countersection from '../Menhomeslider/Countersection'
import Testimonial from '../Menhomeslider/Testimonial'
import OurTeam from '../Menhomeslider/OurTeam'
import DownloadApp from '../Menhomeslider/DownloadApp'
import OnlineReservation from '../Menhomeslider/OnlineReservation'
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
            <div className="index_wraper">
                <Header />
                <Banner />
                <Ourmenu />
                <Menulist />
                <Discount />
                <Rowbanner />
                <Whowe />
                <Videosection />
                <Countersection />
                <Testimonial />
                <OurTeam />
                <DownloadApp />
                <OnlineReservation />
                <Blog />
                <Footer />
            </div>
        </>
    )
}

export default Main