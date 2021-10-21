import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({path, children, className=""}) => {

    const classes = `cards__link ${className}`;

    return(
        <>
            <Link to={path} className={classes}>
                  <figure>
                      {children}
                  </figure>
              </Link>
        </>
    )
}

export default Card