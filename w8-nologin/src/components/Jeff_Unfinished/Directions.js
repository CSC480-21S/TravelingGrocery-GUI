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
        axios.get('http://localhost:5555/directions').then(res => {
            console.log(res);
            this.setState({ directions: res.data});
            saveToLocalStorage(res.data)
        });
    }

    render() {
        return (
            <pre>{JSON.stringify(this.state.directions,null,5)}</pre>
        )
    }
}