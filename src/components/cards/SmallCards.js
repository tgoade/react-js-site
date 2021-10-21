import SmallCardItem from './SmallCardItem';
import './SmallCards.css';

const SmallCards = () => {

    return (
        <div className="panel">
            <div className="wrapper">
                <h2>Destination Type</h2>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <SmallCardItem src="images/beaches.jpg" text="Beaches" path="/beaches"/>
                            <SmallCardItem src="images/mountains.jpg" text="Mountains" path="/mountains"/>
                            <SmallCardItem src="images/snowy.jpg" text="Snowy" path="/snowy"/>
                            <SmallCardItem src="images/culture.jpg" text="Cultured Filled" path="/culture"/>
                        </ul>
                        <ul className="cards__items">
                            <SmallCardItem src="images/parks.jpg" text="Parks &amp; Forests" path="/parks"/>
                            <SmallCardItem src="images/themeparks.jpg" text="Theme Parks" path="/theme-parks"/>
                            <SmallCardItem src="images/canyons.jpg" text="Canyons &amp; Deserts" path="/canyons"/>
                            <SmallCardItem src="images/events.jpg" text="Sports &amp; Events" path="/events"/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallCards;