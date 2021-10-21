import Button from '../button/Button';
import '../../App.css'
import './HeroSection.css';

const HeroSection = () => {

    return (
        <div className="hero-container">
            <video src="videos/aerial-shoreline.mp4" autoPlay loop muted />
            <div className="hero-btn">
                <div className="hero-btn--questions">Need a place to stay?</div>
                <Button className="btn" path="../PlacesToStay" buttonStyle="btn--primary" buttonSize="btn--large">Let us help you</Button>
            </div>
        </div>
    )
}

export default HeroSection;