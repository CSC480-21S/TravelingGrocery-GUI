import React, {useState, useEffect} from "react";
import './Navigation.css'
import Blank_Image from './Blank_Image.png';

const Navigation = () => {
    const [items, setItems] = useState([])
    const [index, setIndex] = useState(0)
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:8000/directions`)
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
            <div className = 'containerNavTitle'>
            <button className = 'exitButton'>Exit</button>
            <h1 className = 'navTitle'>Navigation</h1>
            
            </div>

            <div className = 'containerItemDisplay'>
            <img className= 'itemImage' src={Blank_Image} />
                <p>Item name. 
                <br></br>Location.
                <br></br> In stock?
                <br></br>Quantity.</p>
            </div>
            <div className ='containerDirections'>
                <p>Aisle [number], rack [number], shelf [height], [left/right]</p>
            </div>
            <pre>{JSON.stringify(items[index],null,5)}</pre>
            <pre>Index={index}</pre>
            <pre>ShoppingListSize={items.length}</pre>

            <pre>{finished ? 'Finished!' : 'Still shopping!'}</pre>
            <div className = 'containerButtons'>
            <button className = 'backButton' onClick={() => decrement()}>Back</button>
            <button className = 'nextButton' onClick={() => increment()}>Next</button>
            </div>
        </>
    );
}

export default Navigation