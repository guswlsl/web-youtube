import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/video/VideoCard'
import { websiteText } from '../data/website'

const Gumayusi = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const websitePageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "구마유시"
            description="Gumayusi">
                
            <section id='websitePage' className={websitePageClass}>
                <h2>♥️구마유시 유튜브 입니다 :D♥️</h2>
                <div className="video__inner">
                    <VideoCard videos={websiteText} />
                </div>
            </section>
        </Main>
    )
}

export default Gumayusi