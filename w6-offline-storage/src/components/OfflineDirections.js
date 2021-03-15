import axios from "axios";
import React from "react";

const OfflineDirections = () => {
    const localDirections = localStorage.getItem('directions');
    try {
        console.log("JSON String Demo")
        
        console.log(typeof localDirections)
        console.log(localDirections)

        console.log("JSON Object Demo")
        const jsonObject = JSON.parse(localDirections)
        console.log(typeof jsonObject)
        console.log(jsonObject[0])
    } catch(e){
        console.log(e)
    }
    return (
        <div>{localDirections}</div>
    );
}

export default OfflineDirections