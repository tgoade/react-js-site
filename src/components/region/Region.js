import Countries from "./Countries";
import Currency from "./Currency";
import "./Region.css";

const Region = () => {
    
    return(
      <div className="footer--select-wrapper">
          <Currency />
          <Countries />
      </div>
    )
}

export default Region