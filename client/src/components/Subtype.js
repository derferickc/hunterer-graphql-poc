import React from 'react';

export default function Subtype(props) {
    if(props.subtypes.length > 0) { 
        return <React.Fragment>
            <h5>Sub Types</h5>
            <ul>
                {props.subtypes.map((subtype) => {
                    return <li key={subtype}>{subtype}</li>
                })}
            </ul>
        </React.Fragment>
    } else {
        return <h5>No Sub Types</h5>
    }
}