import React, {useState, useEffect} from "react";

const OfflineOldNavigation = () => {
    const localDirections = JSON.parse(localStorage.getItem('directions'));

    const [index, setIndex] = useState(0)
    const [finished, setFinished] = useState(false)
   
    const increment = () => {
        if (index !== localDirections.length -1) {
            setIndex(index+1)
        }
        else {
            setFinished(true)
            console.log("You attempted to increment out of bounds")
        }
    }

    const decrement = () => {
        if (index !== 0) {
            setIndex(index-1)
        }
        else {
            console.log("You attempted to decrement out of bounds")
        }
    }

    return (
        <>
            <h1>An element of the directions list:</h1>
            <pre>{JSON.stringify(localDirections[index],null,5)}</pre>
            <pre>Index={index}</pre>
            <pre>ShoppingListSize={localDirections.length}</pre>

            <button onClick={() => decrement()}>Back</button>
            <button onClick={() => increment()}>Next</button>
            <pre>{finished ? 'Finished!' : 'Still shopping!'}</pre>
        </>
    );
}

export default OfflineOldNavigation