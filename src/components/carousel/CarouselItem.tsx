import * as React from 'react';

export interface CarouselItemProp {
    src: string;
    index?: string;
    alt: string;
    className?: string
}

const CarouselItem = ({src, index} : CarouselItemProp) => {
    return (
        <div className="card-container">
            <div className="card">
              <div className="img">
                 <img src={src} alt="Carousel slide" key={index} />
              </div>
            </div>
        </div>
    )
}

export default CarouselItem
