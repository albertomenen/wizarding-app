import {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

function Houses () {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        axios
        .get("https://wizard-world-api.herokuapp.com/houses")
        .then((response) => {
            console.log("response.data", response.data)
            setHouses(response.data)
        })
    }, [])

    return (
        <div>
            <h3>List of Houses</h3>
            {houses.map((house) => ( 
            
            <div key = {house._id} className= "house">
            <h1>House : {house.name}</h1>
            <p>Founder: {house.founder}</p>
            <Link > see More</Link>

    


            </div>
            ))}

        </div>

    )
}

export default Houses