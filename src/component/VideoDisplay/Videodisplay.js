import React from 'react'
import "./Videodisplay.css"

export default function Videodisplay(props) {
    const{
        videoSrc
    } = props;
    return (
        <div className='container'>
            <div className='videocontainer'>
                <video className='trailer' src={videoSrc} autoPlay muted playsInLine>
                </video>
            </div>  
        </div>
    )
}