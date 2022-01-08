import * as React from 'react';
import Card, { CardProps } from './Card';
import './SmallCards.css';

const SmallCardItem = ({path, src, text} : CardProps) => {
    return (
        <>
          <li className="small_cards__item">
                <Card path={path} text={text} className="small_card">
                    <img src={src} className="small_cards__item__img" alt="Travel Type" />
                </Card>
                <div className="small_cards__item__info">
                    <h5 className="small_cards__item__text">{text}</h5>
                </div>
            </li>  
        </>
    )
}

export default SmallCardItem
