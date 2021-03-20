import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Videotitle from "../videoTitle/Videotitle";

// alice carousel doc here : https://github.com/maxmarinich/react-alice-carousel
const handleDragStart = (e) => e.preventDefault();
const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
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
const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
    />
);

export default Carousel;

