import React from 'react'
import { Route, Routes,  } from 'react-router-dom';
import HomeSliderhero from '../components/HomeSliderhero/Main'
import MenuListone from '../components/MenuListone/Main'
import Menulisttwo from '../components/Menulisttwo/Main'
import Menulistthree from '../components/Menulistthree/Main'
import Aboutus from '../components/Aboutus/Main'
import OurChef from '../components/OurChef/Main'
import BlogList from '../components/BlogList/Main'
import BlogDetails from '../components/BlogDetails/Main'
import Reserv1 from '../components/Reserv1/Main'
import Reviews from '../components/Reviews/Main'
import Gallery from '../components/Gallery/Main'
import ContactUs from '../components/ContactUs/Main'

function Index() {
    
  return (
    <>
        <Routes>
        <Route path="/" element={<HomeSliderhero />} />
        <Route path="/menulistone" element={<MenuListone />} />
        <Route path="/menulisttwo" element={<Menulisttwo />} />
        <Route path="/menulistthree" element={<Menulistthree />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/ourchef" element={<OurChef />} />
        <Route path="/bloglist" element={<BlogList />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
        <Route path="/reserv1" element={<Reserv1 />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
    </>
  )
}

export default Index