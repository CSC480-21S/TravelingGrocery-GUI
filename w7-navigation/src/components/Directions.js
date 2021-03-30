import axios from "axios";
import React from "react";

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('directions', serializedState)
    } catch(e) {
        console.log(e)
    }
}

export default class Directions extends React.Component {
    state = {
        directions: []
    }

    componentDidMount() {
        axios.get('http://localhost:8000/directions').then(res => {
            console.log(res);
            this.setState({ directions: res.data});
            saveToLocalStorage(res.data)
        });
    }

    render() {
        return (
            <ul>
                {this.state.directions.map(direction => <li key = {direction.direction_id}>{direction.name}, {direction.description}, {direction.quantity}, {direction.direction}</li>)}
            </ul>
        )
    }
}