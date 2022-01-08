import * as React from 'react';
import Card, { CardProps } from "./Card";
import './MediumCardItem.css';

const MediumCardItem = ({path, src, text} : CardProps) => {
    return (
        <>
          <li className="cards__item">
              <Card path={path} >
                <img src={src} className="cards__item__img" alt="Travel Type" />
              </Card>
              <div className="cards__item__info">
                  <h5 className="cards__item__text">{text}</h5>
              </div>
          </li>  
        </>
    )
}

export default MediumCardItem
