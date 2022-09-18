import React from 'react';
import photoGrid from './photo-grid.png'

const Hero = () => {
    return(
        <div className='hero'>
            <img src={photoGrid} alt='grid' className='hero--image'></img>
            <h1 className='hero--heading'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
        </div>
    )
}

export default Hero