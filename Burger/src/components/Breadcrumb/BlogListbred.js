import React from 'react'
import Bg from '../../assets/images/overlay_bg.png'

function BlogListbred() {
    return (
        <>
            <section className="bredcrumb_section blog_list_page">
                <div className="container">
                    <div className="section_title text-center" data-aos="fade-up" data-aos-duration={1500} >
                        <span className="sub_text">Latest Blog Post</span>
                        <h2>Blog List</h2>
                        <p className="lead" data-aos="fade-up" data-aos-duration={1500}>
                            Lorem Ipsum is simply dummy text of the printing.
                        </p>
                    </div>
                </div>
                <div className="ovelay_bg">
                    <img className="" src={Bg} alt="img" />
                </div>
            </section>
        </>
    )
}

export default BlogListbred