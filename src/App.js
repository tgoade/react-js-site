import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
// import { useEffect, useState } from "react";
// import Weather from "./components/weather/Weather";





// https://api.github.com/users/tgoade, https://randomuser.me/api/

// const GetAPI = () => {
//     const [data, setData] = useState(null)
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null)

//     useEffect(()=>{
//         setLoading(true);
//         fetch("https://randomuser.me/api/")
//             .then(response => response.json())
//             .then(setData)
//             .then(setLoading(false))
//             .catch(setError)
//         }, [])

//     if(loading) return <p>Loading...</p>
//     if(error) return <pre>JSON.stringify(error, null, 2)</pre>
//     if(data){
//         const{ results: [{ name: { first, last }}]} = data;
//         const{ results: [{ location: {street: {number, name}, city, state, country} }]} = data
        
//             return (
//                 <p>
//                     {first} {last}, {number} {name}, {city} {state}, {country} 
//                 </p>
//             )
        
//     }

//     return(
//         <div>No data was found.</div>
//     )
// }

// export default GetAPI


// const GetAPI = () => {
//   const[data, setData] = useState(null);
//   //const[loading, setLoading] = useState(false);
//   const[error, setError] = useState(null);

//   //setLoading(true);

//   useEffect(() => {
//       fetch("https://api.openweathermap.org/data/2.5/weather?q=ashburn&appid=962c4aea32503dc445208068e554adfc&units=imperial")
//           .then(response => response.json())
//           .then(response => setData(response))
//           //.then(setLoading(false))
//           .catch(setError)
//   }, [])

// //if(loading) return <p>Loading...</p>

// //   if(error) return <pre>JSON.stringify(error, null, 2)</pre>
  
  
//     //const {weather: [{main, description}]} = data;

//     if(data){
//         return(
//             <div>
//                 <h1>{data.weather[0].main}</h1>
//                 <h2>{data.weather[0].description}</h2>
//             </div>
//         )
//     }

//     return(
//         <div>{JSON.stringify(error, null, 2)}</div>
//     )
// }
  


// export default GetAPI

import Home from "./pages/home/Home";
import PlacesToStay from "./pages/placesToStay/PlacesToStay";
import Mountains from "./pages/mountains/Mountains";
import Beaches from "./pages/beaches/Beaches";
import Snowy from "./pages/snowy/Snowy";
import Footer from "./components/footer/Footer";
import Whoops404 from "./pages/whoops404/Whoops404";
import Test from "./components/Test";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* This tells React that anytime "/" is referenced, go to the Home component, which is the Home page. */}
          <Route path="/placestostay" exact component={PlacesToStay} />
          <Route path="/beaches" exact component={Beaches} />
          <Route path="/mountains" exact component={Mountains} />
          <Route path="/snowy" exact component={Snowy} />
          <Route path="/test" component={Test} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={Whoops404} />
        </Switch> 
        <Footer />
      </Router>
    </>
  );
}

export default App;