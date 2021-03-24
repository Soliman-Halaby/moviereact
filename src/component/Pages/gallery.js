import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Videotitle from "../videoTitle/Videotitle";
import imageFilm from "../../assets/images/lucifer.jpeg";

// alice carousel doc here : https://github.com/maxmarinich/react-alice-carousel
const handleDragStart = (e) => e.preventDefault();
const responsive = {
    0: { items: 1 },
    500: { items: 2 },
    700: { items: 3 },
    900: { items: 4 }, // number of items per resolution 
    1100: { items: 5 }, 
    1300: { items: 6 }, 
    1500: { items: 7 }, 
    1800: { items: 8 }, 
    2000: { items: 9 }, 
    2200: { items: 10 }, 
};

const  myApilength = 10

const items = [];
for (var i = 0; i < myApilength; i++) {
  items.push(
  <Videotitle
    onDragStart={handleDragStart} 
    src= {imageFilm}
    alt= "Film Informations"
    filmTitle= "DeadPool"
    filmStyle= "Action"
    filmGrade= "7.4"
    onTen= "/10"
    />
  )}

  //Videotitle component is stored in the carousel
const Carousel = () => ( // any modification of the alice carousel goes here
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        disableButtonsControls ={true}
        disableDotsControls = {true}
    /> 
);

export default Carousel;

