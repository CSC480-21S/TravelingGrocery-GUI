import React, {  useState } from "react";
import {useLocation} from "react-router-dom";

const ShowAnalytics = () => {

    const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;
    const location = useLocation();
    return (

        <div>
            <h1> All {console.log(location.state.orders.value)} Analytics</h1>
        </div>
    )
}

export default ShowAnalytics;