import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FsLightbox from 'fslightbox-react';
import Gallery1 from '../../assets/images/abtgallery_01.png'
import Gallery2 from '../../assets/images/abtgallery_02.png'
import Gallery3 from '../../assets/images/abtgallery_03.png'
import Gallery4 from '../../assets/images/abtgallery_04.png'
import Gallery5 from '../../assets/images/abtgallery_05.png'
import Gallery6 from '../../assets/images/abtgallery_06.png'
import Gallery7 from '../../assets/images/abtgallery_07.png'
import Gallery8 from '../../assets/images/abtgallery_08.png'
import Gallery9 from '../../assets/images/abtgallery_09.png'
import Gallery10 from '../../assets/images/abtgallery_10.png'
import Gallery11 from '../../assets/images/abtgallery_11.png'
import Gallery12 from '../../assets/images/abtgallery_12.png'

function Gallerysection() {

    const [images, setImages] = useState([
        Gallery1,
        Gallery2,
        Gallery3,
        Gallery4,
        Gallery5,
        Gallery6,
        Gallery7,
        Gallery8,
        Gallery9,
        Gallery10,
        Gallery11,
        Gallery12,
    ])

    const [img, setImg] = useState()
    const [img1, setImg1] = useState()
    const [img2, setImg2] = useState()
    const [img3, setImg3] = useState()
    const [img4, setImg4] = useState()
    const [img5, setImg5] = useState()
    const [img6, setImg6] = useState()
    const [img7, setImg7] = useState()
    const [img8, setImg8] = useState()
    const [img9, setImg9] = useState()
    const [img10, setImg10] = useState()
    const [img11, setImg11] = useState()


    const [toggler, setToggler] = useState(false);

    const [activeImage, setActiveImage] = useState(1)

    return (
        <>
            <section className="row_am gallery_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                                <img className="img-fluid" src={Gallery1} alt="img" />
                                <Link to="#" onClick={() => setImg(true)} className="lightbox-image" data-fancybox="gallery">
                                    <i className="icofont-ui-zoom-in" />
                                </Link>
                                <Link to="#" onClick={() => { setToggler(!toggler); setActiveImage(1) }}>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                                <img className="img-fluid" src={Gallery2} alt="img" />
                                <Link to="#" onClick={() => setImg1(true)} className="lightbox-image" data-fancybox="gallery">
                                    <i className="icofont-ui-zoom-in" />
                                </Link>
                                <Link to="#" onClick={() => { setToggler(!toggler); setActiveImage(2) }}>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                                <img className="img-fluid" src={Gallery3} alt="img" />
                                <Link to="#" onClick={() => setImg2(true)} className="lightbox-image" data-fancybox="gallery">
                                    <i className="icofont-ui-zoom-in" />
                                </Link>
                                <Link to="#" onClick={() => { setToggler(!toggler); setActiveImage(3) }}>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                                <img className="img-fluid" src={Gallery4} alt="img" />
                                <Link to="#" onClick={() => setImg3(true)} className="lightbox-image" data-fancybox="gallery">
                                    <i className="icofont-ui-zoom-in" />
                                </Link>
                                <Link to="#" onClick={() => { setToggler(!toggler); setActiveImage(4) }}>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                                <img className="img-fluid" src={Gallery5} alt="img" />
                                <Link to="#" onClick={() => setImg4(true)} className="lightbox-image" data-fancybox="gallery">
                                    <i className="icofont-ui-zoom-in" />
                                </Link>
                                <Link to="#" onClick={() => { setToggler(!toggler); setActiveImage(5) }}>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                                <img className="img-fluid" src={Gallery6} alt="img" />
                                <Link to="#" onClick={() => setImg5(true)} className="lightbox-image" data-fancybox="gallery">
                                    <i className="icofont-ui-zoom-in" />
                                </Link>
                                <Link to="#" onClick={() => { setToggler(!toggler); setActiveImage(6) }}>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                                <img className="img-fluid" src={Gallery7} alt="img" />
                                <Link to="#" onClick={() => setImg6(true)} className="lightbox-image" data-fancybox="gallery">
                                    <i className="icofont-ui-zoom-in" />
                                </Link>
                                <Link to="#" onClick={() => { setToggler(!toggler); setActiveImage(7) }}>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                                <img className="img-fluid" src={Gallery8} alt="img" />
                                <Link to="#" onClick={() => setImg7(true)} className="lightbox-image" data-fancybox="gallery">
                                    <i className="icofont-ui-zoom-in" />
                                </Link>
                                <Link to="#" onClick={() => { setToggler(!toggler); setActiveImage(8) }}>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                                <img className="img-fluid" src={Gallery9} alt="img" />
                                <Link to="#" onClick={() => setImg8(true)} className="lightbox-image" data-fancybox="gallery">
                                    <i className="icofont-ui-zoom-in" />
                                </Link>
                                <Link to="#" onClick={() => { setToggler(!toggler); setActiveImage(9) }}>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                                <img className="img-fluid" src={Gallery10} alt="img" />
                                <Link to="#" onClick={() => setImg9(true)} className="lightbox-image" data-fancybox="gallery">
                                    <i className="icofont-ui-zoom-in" />
                                </Link>
                                <Link to="#" onClick={() => { setToggler(!toggler); setActiveImage(10) }}>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                                <img className="img-fluid" src={Gallery11} alt="img" />
                                <Link to="#" onClick={() => setImg10(true)} className="lightbox-image" data-fancybox="gallery">
                                    <i className="icofont-ui-zoom-in" />
                                </Link>
                                <Link to="#" onClick={() => { setToggler(!toggler); setActiveImage(11) }}>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="img" data-aos="fade-up" data-aos-duration={1500}>
                                <img className="img-fluid" src={Gallery12} alt="img" />
                                <Link to="#" onClick={() => setImg11(true)} className="lightbox-image" data-fancybox="gallery">
                                    <i className="icofont-ui-zoom-in" />
                                </Link>
                                <Link to="#" onClick={() => { setToggler(!toggler); setActiveImage(12) }}>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FsLightbox toggler={toggler} sources={images} slide={activeImage} />
        </>
    )
}

export default Gallerysection