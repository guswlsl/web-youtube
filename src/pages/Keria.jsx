import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/video/VideoCard'
import { gsapText } from '../data/gsap'

const Keria = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const gsapPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "케리아"
            description="keria">
           
            <section id='gsapPage' className={gsapPageClass}>
                <h2>♥️케리아 유튜브 입니다 :D♥️</h2>
                <div className="video__inner">
                    <VideoCard videos={gsapText} />
                </div>
            </section>
        </Main>
    )
}

export default Keria