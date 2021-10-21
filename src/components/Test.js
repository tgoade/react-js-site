import { useEffect, useState } from "react";

// https://api.github.com/users/tgoade

const GetAPI = () => {
    const[data, setData] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(setData)
    }, [])

    if(data){
        const {results: {gender}} = data;
        console.log("I'm in");
        return(
            <div>
                <h1>{gender}</h1>
            </div>
        )
    }
    return (
        <div>
            <h1>Not seeing data</h1>
        </div>
    )
}

export default GetAPI