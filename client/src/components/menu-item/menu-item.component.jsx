import React from 'react'
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, id }) => {
    return (
        <div key={id} className={`menu-item ${size}`}>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>Посмотреть</span>
            </div>
        </div>
    )
}

export default MenuItem
