import React, {useEffect, useState} from "react";
import {assign_employee} from '../../actions/actions'
import {useDispatch, useSelector} from "react-redux";

const AllEmployees = ({email, bool, employees, setEmployees}) => {

    const[color, setColor] = useState('#f4f4f4')
    const check = useSelector((state) => state.currentEmployee)

    //const styles = makeStyles()
    const dispatch = useDispatch()


    const leftelement = {
        display: "inline-block",
        float: "left",
        width: "50px",
        textAlign: "left",

    };

    const rightelement = {
        display: "inline-block",
        float: "left",
        textAlign: "left",

    };

    const changeColor2 = () => {
        dispatch(assign_employee(email))
        setColor('#DADADA')

        employees.map((employee) => {
            //console.log(employee)
            if(employee.email === email)
            {
                console.log("clicked")
                employee.selected = true
            }
            else
                employee.selected = false
        })
        console.log(JSON.stringify(employees))
        setEmployees(employees)

    }
    useEffect(() => {
       if(check !== email)
       {
           setColor('#f4f4f4')
       }
    }, [check]);


    const container = {
        background: color,
        margin: "5px",
        padding: "10px 20px",
        height: "100px",
        borderRadius: '15px',
        cursor: 'pointer',
        outline: 'none',
        display: 'flex'

    };
    return (
        <div style={container} onClick={changeColor2}>
            <div style={leftelement}>
                <p style={{ fontSize: "50%", fontWeight: "bold" }}>Name:</p>
                <p style={{ fontSize: "50%", fontWeight: "bold" }}>Status:</p>
            </div>

            <div style={rightelement}>
                <p style={{ fontSize: "50%" }}>{email}</p>
                <p style={{ fontSize: "50%" }}>{bool}</p>
            </div>
        </div>
    );
}

export default AllEmployees;
