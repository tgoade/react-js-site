import MediumCardItem from './MediumCardItem';

const MediumCards = () => {
    return (
        <div className="panel">
            <div className="wrapper">
                <h2>Travel Type</h2>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <MediumCardItem src="images/solo.png" text="Solo" path="/solo" />
                            <MediumCardItem src="images/couple.png" text="Couple" path="/couple" />
                            <MediumCardItem src="images/family.png" text="Family" path="/family" />
                            <MediumCardItem src="images/friends.png" text="Friends" path="/friends" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MediumCards;