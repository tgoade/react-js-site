import './LocationBar.css';

const LocationBar = () => {
    return (
        <div className="location-bar places">
            <div className="location-field">
                <div className="location-bar--padding">
                    <div className="location-bar--labels">Location</div>
                    <input placeholder="Where are you going?" />
                </div>
            </div>
            <div className="field-separator"></div>
            <div className="dates-field">
                <div className="location-bar--padding">
                    <div className="location-bar--labels">Check In</div>
                    <input placeholder="Add Dates" />
                </div>
            </div>
            <div className="field-separator"></div>
            <div className="dates-field">
                <div className="location-bar--padding">
                    <div className="location-bar--labels">Check Out</div>
                    <input placeholder="Add Dates" />
                </div>
            </div>
            <div className="field-separator"></div>
            <div className="guests-fields">
                <div className="location-bar--padding">
                    <div className="location-bar--labels">Guests</div>
                    <input placeholder="Add Guests" />
                </div>
                
            </div>
            <button className="circ-search"><i className="fas fa-search"></i></button>
        </div>
    )
}

export default LocationBar