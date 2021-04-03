import React from "react";

const EmployeeInfo = ({task, name,num,bool}) => {

const leftelement = {
    display: 'inline-block',
    float: 'left',
    width: '130px',
    textAlign: 'left'
    }

const rightelement = {

        display: 'inline-block',
        float: 'left',
    textAlign: 'left'
    }

return (
        <div style={task}>
            <div style={leftelement}>
                <p style={{fontSize: '70%', fontWeight: 'bold'}}>Name:</p>
                <p style={{fontSize: '70%', fontWeight: 'bold'}}>Status:</p>
                <p style={{fontSize: '70%', fontWeight: 'bold'}}>Number of Orders:</p>
            </div>

            <div style={rightelement}>
                <p style={{fontSize: '70%'}}>{name}</p>
                <p style={{fontSize: '70%'}}>{bool}</p>
                <p style={{fontSize: '70%'}}>{num}</p>
            </div>

        </div>

    )
}

export default EmployeeInfo;