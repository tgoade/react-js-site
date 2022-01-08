import * as React from 'react';
import { Link } from "react-router-dom";
import "./Card.css";

export interface CardProps {
    path: string;
    children?: React.ReactNode;
    src?: string;
    text?: string;
    className?: string;
}

const Card = ({path, children, text, className=""} : CardProps) => {

    const classes = `cards__link ${className}`;
    const linkLabel = `${text} link`;

    return(
        <>
            <Link to={path} className={classes} aria-label={linkLabel}>
                  <figure>
                      {children}
                  </figure>
              </Link>
        </>
    )
}

export default Card