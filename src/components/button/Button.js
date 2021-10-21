import './Button.css';
import { Link } from 'react-router-dom';


const Button = ({ children, onClick, path, buttonStyle, buttonSize }) => {

    const STYLES = ['btn--primary', 'btn--outline', 'btn--blue'];

    const SIZES = ['btn--medium', 'btn--large'];

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES(0)     // The includes() method determines whether an array includes a certain value, returning true or false. So if the Button component call includes a buttonStyle declaration, then use that buttonStyle class

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to={path} className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} >         {/* The curly braces in JSX means process the inner value in JavaScript instead of a string like with quotes. ex. variables */}
                {children}                                                                                          {/* ${} is a JS ES6 feature. Here, it's used to concatenate a string with the value of a js expression. `string ${expression}` = 'string ' + expression */}
            </button>
        </Link>
    )
};

export default Button;