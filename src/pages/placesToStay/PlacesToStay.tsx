import * as React from 'react';
import "../../App.css";
import "./PlacesToStay.css";
import Navbar from "../../components/nav/NavBar";
import "../../components/nav/NavBar.css";
//import { SliderData } from "../sliders/SliderData";
//import ImageSlider from "../sliders/ImageSlider";
import Carousel from "../../components/carousel/Carousel";
import Weather from "../../components/weather/Weather";

const PlacesToStay = () => {
  return (
    <>
      <Navbar navColor="text--black" navBorder="nav--border" />
      <div className="wrapper">
        <Carousel />
        {/*<ImageSlider slides={SliderData} />*/}
        <Weather />
      </div>
    </>
  );
}

export default PlacesToStay;
