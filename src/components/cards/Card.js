import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({path, children, text, className=""}) => {

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