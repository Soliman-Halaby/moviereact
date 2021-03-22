import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Videotitle from "../videoTitle/Videotitle";

// alice carousel doc here : https://github.com/maxmarinich/react-alice-carousel
const handleDragStart = (e) => e.preventDefault();
const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 }, // number of items per resolution 
};
const items = [
  <Videotitle onDragStart={handleDragStart} />,
  <Videotitle onDragStart={handleDragStart} />,
  <Videotitle onDragStart={handleDragStart} />,
  <Videotitle onDragStart={handleDragStart} />,
  <Videotitle onDragStart={handleDragStart} />,
  <Videotitle onDragStart={handleDragStart} />,
  <Videotitle onDragStart={handleDragStart} />,
  <Videotitle onDragStart={handleDragStart} />,
  <Videotitle onDragStart={handleDragStart} />
  //Videotitle component is stored in the carousel
];
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

