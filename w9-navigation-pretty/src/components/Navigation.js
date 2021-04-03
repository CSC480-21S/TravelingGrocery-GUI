import axios from "axios";
import React, {useState, useEffect} from "react";
import img_blank from '../images/blank.png';
import img_out_of_stock from '../images/out_of_stock.jpg';

const SERVER_URL = 'http://pi.cs.oswego.edu:9081/store/nav'

const Navigation = () => {
    // I have to set a default placeholder state until the get request finishes?
    // TODO:  This is a weird fix, Find a better way?
    const [directions, setDirections] = useState([
        {
            "shoppingListID": 1,
			"itemName": "Request or response likely had an error, check consolelog",
			"aisle": 0,
			"rack": 0,
			"shelf": "placeholder",
			"side": "placeholder",
			"department": "placeholder",
			"itemQuantity": 1,
			"itemStockBool": true
        }
    ])
    const [index, setIndex] = useState(0)
    const [finished, setFinished] = useState(false)

    function saveToLocalStorage(state) {
        try {
            const serializedState = JSON.stringify(state)
            localStorage.setItem('directions', serializedState)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        const sendPostRequest = async () => {
            try {
                const res = await axios.post(SERVER_URL, { 
                    "lists": 
                    [ 
                        { 
                            "shoppingListID": 5, 
                            "itemNameArray": ["turkey jerky", "grape juice", "ranch", "spices", "pita bread"], 
                            "itemQuantityArray": [3, 3, 6, 6, 6]
                        }
                    ] 
                });
                setDirections(res.data)
                saveToLocalStorage(res.data)
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        };
        sendPostRequest();
    }, [])

    const increment = () => {
        if (index !== directions.length -1) {
            setIndex(index+1)
        }
        else {
            setFinished(true)
            //console.log("You attempted to increment out of bounds")
        }
    }

    const decrement = () => {
        if (index !== 0) {
            setFinished(false)
            setIndex(index-1)
        }
        else {
            //console.log("You attempted to decrement out of bounds")
        }
    }

    return (
        <div className = 'global'>
            <div className = 'containerTop'>
                Navigation
            </div>

            <div className ='containerDirections'>
                {/* Conditonal statement bool ? ifTrue : ifFalse */}
                {
                    directions[index].itemStockBool ? 
                    <img className= 'itemImage' src={img_blank} alt="itemImage" /> 
                    : <img className= 'itemImage' src={img_out_of_stock} alt="itemImage" />
                }
                
                <p className='hugLeft'> {directions[index].itemName} </p>
                <p className='hugLeft'> {directions[index].department} Department </p>
                <p className='hugLeft'> Aisle {directions[index].aisle} </p>
                <p className='hugLeft'> Rack {directions[index].rack} | {directions[index].side} side | {directions[index].shelf} shelf </p>
            </div>

            <div className ='containerStatus'>
                {
                    directions[index].itemStockBool ? '' :
                    <button className = 'outOfStockButton'>Move item</button>
                }
                <br></br>
                {index+1}/{directions.length} {finished ? 'Finished!' : ''}
            </div>

            <div className = 'containerBackNext'>
                <button className = 'backButton' onClick={() => decrement()}>Back</button>
                <button className = 'nextButton' onClick={() => increment()}>Next</button>
            </div>
        </div>
        
    );
}

export default Navigation