import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import VideoCard from '../components/video/VideoCard'
import { portfolioText } from '../data/portfolio'

const Wolf = () => {
    const [loading, setLoading] = useState(true); 
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const portPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "울프"
            description="wolf">
            
            <section id='portPage' className={portPageClass}>
                <h2>♥️울프 유튜브 입니다 :D♥️</h2>
                <div className="video__inner">
                    <VideoCard videos={portfolioText} />
                </div>
            </section>
        </Main>
    )
}

export default Wolf