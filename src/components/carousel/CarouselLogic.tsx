//import * as React from 'react';
import { useState, useRef, useEffect } from "react";

const CarouselLogic = () => {

    const track = document.querySelector<HTMLElement>(".track");               // Grabs the track element

    const itemRef = useRef<HTMLDivElement>(null);                                 // Using useRef to point to the carousel-container in the DOM
    const [carouselWidth, setCarouselWidth] = useState(0);             // useRef is very similar to useState in that it can stores a previous values in it and it persists between renders, but it does not cause you to re-render like useState does (which can cause an infinity loop)
    const [nextButton, setNextButton] = useState(true);
    const [prevButton, setPrevButton] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {                                         // useRef returns an object current { current: 0 }, so itemRef is just an object with a current property
        if (itemRef && itemRef.current) {                                              
            setCarouselWidth(itemRef.current.clientWidth);      // clientWidth is the inner width of an element in pixels. In this case, the carousel-container div. It includes padding but excludes borders, margins, and vertical scrollbars (if present).
        }
    }, []);                                                   // only run this on initial render
    
    const nextHandler = () => {
        let currCount = count;      // setting count to a variable because count does not immediately update when we setCount, useState is asynchronous

        ++currCount;
        
        track.style.transform = `translateX(-${currCount * carouselWidth}px)`;     // -(1 * 1150)           // Moves horizontally the track container the width of the carousel container 

        if(track.offsetWidth - (currCount * carouselWidth) < carouselWidth){              // If the track width minus the amount of translate is less than the carousel width, then set the button to hide
        setNextButton(false);
        };
        setPrevButton(true);
        setCount(currCount);      // now we can setCount, bypassing the async delay
    };      

    const prevHandler = () => {
        let currCount = count;

        --currCount;

        track.style.transform = `translateX(-${currCount * carouselWidth}px`;                        //  Moves horizontally the track container back to 0
        
        if(currCount === 0){
        setPrevButton(false);
        }
        setNextButton(true);
        setCount(currCount);
    };

    return{itemRef, nextButton, prevButton, nextHandler, prevHandler}
}

export default CarouselLogic