import * as React from 'react';
import CarouselLogic from "./CarouselLogic";
import "./Carousel.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import CarouselItem from "./CarouselItem";
import HomesUsData from "../data/HomesUsData";


const Carousel = () => {

  const {itemRef, nextButton, prevButton, nextHandler, prevHandler} = CarouselLogic();

  return (
    <div className="carousel-container" ref={itemRef}>
      <div className="carousel-inner">
        <div className="track ">
          {HomesUsData.map((slide, index) => {
                return (
                    <CarouselItem src={slide.image} key={index} alt="slide" className="event image" />
                )
            })}
        </div>
      </div>
      <div className="nav">
        <button className={`prev${prevButton ? " show" : " hide"}`} onClick={prevHandler}>
          <FaAngleLeft />
        </button>
        <button className={`next${nextButton ? " show" : " hide"}`} onClick={nextHandler}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
