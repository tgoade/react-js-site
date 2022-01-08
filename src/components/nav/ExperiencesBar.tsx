import * as React from 'react';
import './ExperiencesBar.css';

const ExperiencesBar = () => {
    return (
        <div className="location-bar experiences">
            <div className="location-field">
                <div className="location-bar--padding">
                    <div className="location-bar--labels">Location</div>
                    <input placeholder="Where are you going?" />
                </div>
            </div>
            <div className="field-separator"></div>
            <div className="dates-field">
                <div className="location-bar--padding">
                    <div className="location-bar--labels">Guests</div>
                    <input placeholder="Add Guests" />
                </div>
            </div>
            <button className="circ-search"><i className="fas fa-search"></i></button>
        </div>
    )
}

export default ExperiencesBar