import React, {useState, useEffect} from "react";

const Navigation = () => {
    const [items, setItems] = useState([])
    const [index, setIndex] = useState(0)
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        console.log(requestOptions.body);
        fetch('http://localhost:5555/directions', requestOptions)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [])

    const increment = () => {
        if (index !== items.length -1) {
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
            <pre>{JSON.stringify(items[index],null,5)}</pre>
            <pre>Index={index}</pre>
            <pre>ShoppingListSize={items.length}</pre>

            <button onClick={() => decrement()}>Back</button>
            <button onClick={() => increment()}>Next</button>
            <pre>{finished ? 'Finished!' : 'Still shopping!'}</pre>
        </>
    );
}

export default Navigation