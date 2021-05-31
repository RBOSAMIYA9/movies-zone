import React from 'react'
import HeroSlider from './HeroSlider';
import PopulerSlider from './PopulerSlider';
import NowPlaying from './NowPlaying';
import Trending from './Trending';
function Home() {
    return (
        <>
            <HeroSlider />
            <Trending />
            <PopulerSlider />
            <NowPlaying />
        </>
    )
}

export default Home
