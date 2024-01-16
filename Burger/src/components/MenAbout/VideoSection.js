import React from 'react'
import Chef from '../../assets/images/who_chef.png'
// import Video from '../../assets/video/video.mp4'

function VideoSection() {
    return (
        <>
            <div className="video_section">
                <div className="chef_img">
                    <img src={Chef} id="chef_img_id" alt="img" />
                </div>
                {/* <video id="videoBlock" className="img-fluid" src={Video} autoPlay muted loop /> */}
                            <video id="videoBlock" className="img-fluid"  autoPlay muted loop />

            </div>
        </>
    )
}

export default VideoSection