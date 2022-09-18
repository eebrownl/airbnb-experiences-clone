import React from 'react';
import star from './star.png';

const Card = (props) => {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = 'SOLD OUT';
    } else if (props.location ==='Online') {
        badgeText = 'ONLINE'
    }

    return(
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={`/images/${props.coverImg}`} alt='experience' className='card--image'></img>
            <div className='card--rating'>
                <img src={star} alt='star' className='card--star'></img>
                <span> {props.stats.rating}</span>
                <span className='gray'> ({props.stats.reviewCount})</span>
                <span className='gray'> {props.location}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'><strong>From ${props.price}</strong> / person</p>
        </div>
    )
}

export default Card