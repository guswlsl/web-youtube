import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'

import { webdText } from '../data/webd'

const Faker = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const webdPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "페이커"
            description="Faker">
                
            <section id='webdPage' className={webdPageClass}>
                <h2>♥️페이커 유튜브 입니다 :D♥️</h2>
                <div className="video__inner">
                    <VideoCard videos={webdText} />
                </div>
            </section>
        </Main>
    )
}

export default Faker