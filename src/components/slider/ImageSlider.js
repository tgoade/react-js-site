import { useState } from "react";
import { SliderData } from "../data/SliderData";
import "./ImageSlider.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length; // .length returns the number of elements in an array

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // If current reaches max length, then set it back to 0, otherwise, set it to current + 1.
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // If current is the start array value, then go to the last array value, otherwise, go to the value before the current position.
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    // The Array.isArray() method determines whether the passed object is an Array, returns true if an object is an array, otherwise false,
    return null;
  }

  return (
      <div className="slider">
        <FaAngleLeft className="arrow left-arrow" onClick={prevSlide} />
        <FaAngleRight className="arrow right-arrow" onClick={nextSlide} />

        {SliderData.map((slide, index) => {
          return (
            <div className={index === current ? "slide active" : "slide"} key={index}>
              {" "}
              {/* If the position of array is at current, then use these classes 'slide active', otherwise, use just 'slide'. */}
              {index === current && (
                <div className="slide--wrap">
                  <img src={slide.image} alt="slide" className="image" />
                </div>
              )}{" "}
              {/* Display the current image */}
            </div>
          );
        })}
      </div>
  );
};

export default ImageSlider;
