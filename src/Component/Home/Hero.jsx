import React from 'react';
import heroVideo from '../../assets/home/hero.mp4'



const Hero = () => {
    return (
        <section className="relative w-full md:h-screen h-[500px] overflow-hidden">

            {/* Background Video */}
            {/* Replace 'your-video-file.mp4' with the actual path to your video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <img src={heroImg} alt="" className='w-full h-auto ' /> */}

            {/* Dark Overlay to make text readable and add a cinematic feel */}
            <div className="absolute top-0 left-0 w-full h-full  z-10"></div>

        </section>
    );
};

export default Hero;