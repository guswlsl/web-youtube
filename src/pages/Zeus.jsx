import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { developerText } from '../data/developer'
import { Link } from 'react-router-dom'

const Oner = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const developoerPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "오너"
            description="oner">
            
            <section id='developerPage' className={developoerPageClass}>
                <h2>♥️T1 유튜브 입니다 :D♥️</h2>
                <div className='developer__inner'>
                    {developerText.map((developer, key) => (
                        <div className='developer' key={key}>
                            <div className="developer__img play__icon">
                                <Link to={`/channel/${developer.channelId}`}>
                                    <img src={developer.img} alt={developer.name} />
                                </Link>
                            </div>
                            <div className="developer__info">
                                <Link to={`/channel/${developer.channelId}`}>
                                    {developer.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Oner