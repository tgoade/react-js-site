import Navbar from "../../components/nav/NavBar";
import { useLocation } from "react-router-dom";

const Whoops404 = () => {
    let location = useLocation();
    return (
        <>
            <Navbar navColor="text--black" navBorder="nav--border" />
            <h1 className="title-404">Oops, resource not found at {location.pathname}</h1>
        </>
    )
  }

export default Whoops404;