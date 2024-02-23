import React, {Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const Zeus = lazy(() => import('./pages/Zeus'));
const Oner = lazy(() => import('./pages/Oner'));
const Faker = lazy(() => import('./pages/Faker'));
const Gumayusi = lazy(() => import('./pages/Gumayusi'));
const Keria = lazy(() => import('./pages/Keria'));
const Wolf = lazy(() => import('./pages/Wolf'));
const Youtube = lazy(() => import('./pages/Youtube'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Main />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/Zeus" element={<Zeus />} />
                    <Route path="/Oner" element={<Oner />} />
                    <Route path="/Faker" element={<Faker />} />
                    <Route path="/Gumayusi" element={<Gumayusi />} />
                    <Route path="/Keria" element={<Keria />} />
                    <Route path="/Wolf" element={<Wolf />} />
                    <Route path="/youtube" element={<Youtube />} />
                    <Route path='/channel/:channelId' element={<Channel />} />
                    <Route path='/video/:videoId' element={<Video />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path="*" element={<Not />} />
                </Routes>
            </Suspense>
        </BrowserRouter>

        
    );
}

export default App;