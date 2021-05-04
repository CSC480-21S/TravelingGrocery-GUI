import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {get_employees, getAnalytics} from '../../api/api'
import EmployeeInfo from "../employee/EmployeeInfo";
import Analytic from "./Analytic";

const ShowAnalytics = () => {

    const token = window.gapi.auth2.getAuthInstance().currentUser.get().tokenId;
    const location = useLocation();

    const [analytics, setAnalytics] = useState([]);

    const getAllAnalytics = async () => {
        try {
            const res = await getAnalytics(token, location.state.orders.value);
            console.log("Analytics: " + JSON.stringify(res.data.users));
            setAnalytics(res.data.users);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getAllAnalytics().then((r) => console.log(analytics));
    }, []);

    return (

        <div>
            <h3 style={{textAlign: "center"}}> All {location.state.orders.value} Analytics</h3>

            {analytics.map((analytic) => (
                <Analytic
                    key={analytic.id}
                    name={analytic.email}
                    totalTime={analytic.timeShopped}
                    totalItems={analytic.itemsShopped}
                    stat={analytic.shoppedItemsPerHour}
                />
            ))}
        </div>
    )
}

export default ShowAnalytics;