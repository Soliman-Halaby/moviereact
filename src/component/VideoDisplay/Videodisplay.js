import React from 'react'
import "./Videodisplay.css"

export default function Videodisplay(props) {
    const{
        imgSrc
    } = props;
    const{
        svgSrc
    } = props;
    return (
        <div className='container'>
            <div className='videocontainer'> 
                <div className="imgContainer">
                    <img className='trailer' src={imgSrc}/>
                    <img className="svgButton" src={svgSrc}/>
                </div>
                <div className="description">
                        <h1 className="filmTitle">Joker</h1>
                        <h2 className="genre">Thriller</h2>
                        <div className="infos">
                            <p className="year">2019</p>
                            <p className="length">122 minutes</p>
                        </div>
                        <p className="descriptionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                    </div>
            </div>  
        </div>
    )
}