import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/video/VideoSlider'

import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'
import { developerText } from '../data/developer'
import { todayText } from '../data/today'

const Home = () => {
    return (
        <Main 
            title="T1 유튜브" 
            description="팬심으로 만든 페이지 입니다."
        >
            <Today videos={todayText} id='today' />
            <Developer videos={developerText} title='♥️T1 유튜브 입니다 :D♥️' id='developer' />
            <VideoSlider videos={webdText} title='♥️페이커 유튜브 입니다 :D♥️' id='web' />
            <VideoSlider videos={websiteText} title='♥️구마유시 유튜브 입니다 :D♥️' id='website' />
            <VideoSlider videos={gsapText} title='♥️케리아 유튜브 입니다 :D♥️' id='gsap' />
            <VideoSlider videos={portfolioText} title='♥️울프 유튜브 입니다 :D♥️' id='portfolio' />
        </Main>
    )
}

export default Home