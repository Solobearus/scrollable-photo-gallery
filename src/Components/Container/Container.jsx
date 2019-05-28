import React from 'react'
import style from './Container.module.css'
import Gallery from '../Gallery/Gallery.jsx'

const Container = (props) => {
    return (
        <div className={ style.Container }>
            <Gallery></Gallery>
        </div>
    )
}

export default Container
