
const CarouselItem = ({src, index}) => {
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
