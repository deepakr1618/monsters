import React from 'react';
import './card.style.css'

export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt={props.user.name} src={"https://robohash.org/"+props.user.name+"?set=2&size=180x180"} width="180px"/>
            <h2>{props.user.name}</h2>
            <div>
                <h5>Email : </h5>
                <p>{props.user.email}</p>
                <h5>Address : </h5>
                <p>{
                    props.user.address.street+","+
                    props.user.address.suite+","+
                    props.user.address.city+","+
                    props.user.address.zipcode    
                }</p>
            </div>
        </div>
    );
}

